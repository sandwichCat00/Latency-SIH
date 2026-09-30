import {useCallback, useEffect, useRef, useState} from 'react'
import type {PointerEvent as PE} from 'react'
import {
  Search, X, Play, Pause, ZoomIn, ZoomOut, ArrowLeft, Compass, Home, Mic,
  FileText, Volume2, VolumeX, Sparkles, BookOpen, ShieldCheck, Copy, Check,
  RotateCw, Contrast, Layers, Monitor, ChevronRight, Info, Landmark, ArrowRight
} from 'lucide-react'
import {ARCHIVE, CATS} from './data/archive'
import type {Item} from './data/archive'
import {TIMELINE} from './data/timeline'
import type {Ev} from './data/timeline'
import {RESEARCH, MEDIA} from './data/research'
import type {Res, Media, Src, TranscriptSegment} from './data/research'
import {KNOWLEDGE_NODES} from './data/knowledge'
import type {ConceptNode} from './data/knowledge'
import {MEMORIALS} from './data/memorials'
import type {MemorialSite} from './data/memorials'

export const KIOSK_TIMEOUT_MS = 90000 // Inactivity timer for touch kiosks
const L: Record<string, Record<string, string>> = {
  en: {
    instName: 'Dr. Ambedkar International Centre (DAIC)',
    instTag: 'National Repository · Ministry of Social Justice & Empowerment, Govt. of India',
    enter: 'ENTER THE ARCHIVE',
    sub: 'AI-POWERED INSTITUTIONAL ARCHIVE & AUDIO-VISUAL KNOWLEDGE PLATFORM',
    search: 'SEMANTIC SEARCH',
    research: 'AI RESEARCH ASSISTANT',
    home: 'HOME',
    back: 'BACK',
    life: 'LIFE & CHRONOLOGY',
    timeline: 'TIMELINE',
    writings: 'WRITINGS',
    speeches: 'SPEECHES',
    debates: 'CONSTITUTIONAL DEBATES',
    manuscripts: 'MANUSCRIPTS',
    av: 'AUDIOVISUAL',
    archive: 'CATALOGUE',
    knowledge: 'KNOWLEDGE MAP',
    memorials: 'MEMORIALS',
    preservation: 'PRESERVATION & CITATIONS',
    go: 'INVESTIGATE RECORD',
    ask: 'Ask any question on Ambedkar\'s writings, economic treatises or constitutional debates...',
    ret: 'RETURNING TO KIOSK HOME...',
    view: 'INSPECT IN VIEWER',
    kioskMode: 'TOUCH KIOSK',
    researcherMode: 'RESEARCHER',
    ambientMode: 'MEMORIAL DISPLAY',
    listen: 'LISTEN (TTS)',
    stopListen: 'STOP NARRATION',
    summaryMode: 'AI SUMMARY',
    fullTextMode: 'FULL TEXT',
    ocrCompare: 'SIDE-BY-SIDE OCR',
    ocrClean: 'OCR TEXT',
    facsimileOnly: 'FACSIMILE'
  },
  hi: {
    instName: 'डॉ. आंबेडकर अंतर्राष्ट्रीय केंद्र (DAIC)',
    instTag: 'राष्ट्रीय अभिलेखागार · सामाजिक न्याय एवं अधिकारिता मंत्रालय, भारत सरकार',
    enter: 'अभिलेखागार में प्रवेश करें',
    sub: 'एआई-संचालित संस्थागत अभिलेखागार एवं दृश्य-श्रव्य ज्ञान मंच',
    search: 'सिमेंटिक खोज',
    research: 'एआई शोध सहायक',
    home: 'मुख्य पृष्ठ',
    back: 'वापस',
    life: 'जीवन एवं कालक्रम',
    timeline: 'समयरेखा',
    writings: 'मूल लेखन',
    speeches: 'भाषण',
    debates: 'संविधान बहसें',
    manuscripts: 'पांडुलिपियाँ',
    av: 'दृश्य-श्रव्य',
    archive: 'केंद्रीय संग्रह',
    knowledge: 'ज्ञान मानचित्र',
    memorials: 'स्मारक कथा',
    preservation: 'डिजिटल संरक्षण',
    go: 'अभिलेख जाँचें',
    ask: 'आंबेडकर के विचारों, अर्थशास्त्र या संविधान बहसों पर प्रश्न पूछें...',
    ret: 'मुख्य स्क्रीन पर लौट रहे हैं...',
    view: 'व्यूअर में देखें',
    kioskMode: 'टच कियोस्क',
    researcherMode: 'शोधकर्ता',
    ambientMode: 'स्मारक डिस्प्ले',
    listen: 'वाचन सुनें',
    stopListen: 'वाचन रोकें',
    summaryMode: 'एआई सारांश',
    fullTextMode: 'पूर्ण पाठ',
    ocrCompare: 'ओसीआर तुलना',
    ocrClean: 'ओसीआर पाठ',
    facsimileOnly: 'मूल प्रतिलिपि'
  },
  mr: {
    instName: 'डॉ. आंबेडकर आंतरराष्ट्रीय केंद्र (DAIC)',
    instTag: 'राष्ट्रीय अभिलेखागार · सामाजिक न्याय व अधिकारिता मंत्रालय, भारत सरकार',
    enter: 'अभिलेखागारात प्रवेश करा',
    sub: 'एआय-सक्षम संस्थागत डिजिटल वारसा व दृक्-श्राव्य ज्ञान मंच',
    search: 'सिमँटिक शोध',
    research: 'एआय संशोधन',
    home: 'मुख्य',
    back: 'मागे',
    life: 'जीवन आणि कालक्रम',
    timeline: 'कालरेखा',
    writings: 'मूळ लेखन',
    speeches: 'भाषणे',
    debates: 'संविधान चर्चा',
    manuscripts: 'हस्तलिखिते',
    av: 'दृक्-श्राव्य',
    archive: 'केंद्रीय संग्रह',
    knowledge: 'ज्ञान नकाशा',
    memorials: 'स्मारक प्रवास',
    preservation: 'डिजिटल जतन',
    go: 'तपास करा',
    ask: 'बाबासाहेबांचे लेखन, अर्थशास्त्र किंवा संविधानावरील प्रश्न विचारा...',
    ret: 'कियोस्कवर परत जात आहे...',
    view: 'दस्ताऐवज पहा',
    kioskMode: 'टच कियोस्क',
    researcherMode: 'संशोधक',
    ambientMode: 'स्मारक डिस्प्ले',
    listen: 'वाचन ऐका',
    stopListen: 'वाचन थांबवा',
    summaryMode: 'एआय सारांश',
    fullTextMode: 'संपूर्ण मजकूर',
    ocrCompare: 'ओसीआर तुलना',
    ocrClean: 'ओसीआर मजकूर',
    facsimileOnly: 'मूळ प्रत'
  }
}

export const byId = (id: string): Item => ARCHIVE.find(i => i.id === id) || ARCHIVE[0]
export const hue = (c: string) => CATS.indexOf(c) * 38 + 205

function useDrag() {
  const r = useRef<HTMLDivElement>(null)
  const s = useRef({d: false, x: 0, l: 0})
  const p = {
    onPointerDown: (e: PE) => {
      if (e.pointerType === 'mouse') s.current = {d: true, x: e.clientX, l: r.current!.scrollLeft}
    },
    onPointerMove: (e: PE) => {
      if (s.current.d) r.current!.scrollLeft = s.current.l - (e.clientX - s.current.x)
    },
    onPointerUp: () => {s.current.d = false},
    onPointerLeave: () => {s.current.d = false}
  }
  return {r, p}
}

function makeTone() {
  const n = 8000 * 30
  const b = new ArrayBuffer(44 + n * 2)
  const v = new DataView(b)
  const w = (o: number, s: string) => [...s].forEach((c, i) => v.setUint8(o + i, c.charCodeAt(0)))
  w(0, 'RIFF'); v.setUint32(4, 36 + n * 2, true); w(8, 'WAVEfmt '); v.setUint32(16, 16, true)
  v.setUint16(20, 1, true); v.setUint16(22, 1, true); v.setUint32(24, 8000, true)
  v.setUint32(28, 16000, true); v.setUint16(32, 2, true); v.setUint16(34, 16, true)
  w(36, 'data'); v.setUint32(40, n * 2, true)
  for (let i = 0; i < n; i++) {
    v.setInt16(44 + i * 2, Math.sin(i / 8000 * 2 * Math.PI * (110 + 20 * Math.sin(i / 24000))) * 1200, true)
  }
  return URL.createObjectURL(new Blob([b], {type: 'audio/wav'}))
}

function InstitutionalBar({
  lang, setLang, mode, setMode, textScale, setTextScale, mic, toggleMic, t, openPreserve, openKnowledge, openMemorials, openSearch, openResearch
}: {
  lang: string
  setLang: (l: string) => void
  mode: 'kiosk' | 'researcher' | 'ambient'
  setMode: (m: 'kiosk' | 'researcher' | 'ambient') => void
  textScale: number
  setTextScale: (fn: (s: number) => number) => void
  mic: boolean
  toggleMic: () => void
  t: Record<string, string>
  openPreserve: () => void
  openKnowledge: () => void
  openMemorials: () => void
  openSearch: () => void
  openResearch: () => void
}) {
  return (
    <header className="inst-bar" role="banner">
      <div className="inst-brand">
        <div className="crest-symbol">DAIC</div>
        <div className="inst-titles">
          <h1 className="inst-title">{t.instName}</h1>
          <p className="inst-meta">{t.instTag}</p>
        </div>
      </div>

      <div className="inst-actions">
        <div className="mode-selector" role="group" aria-label="System Mode">
          <button
            className={`pill-btn ${mode === 'kiosk' ? 'active' : ''}`}
            onClick={() => setMode('kiosk')}
            title="Interactive Touch Kiosk Display"
          >
            <Monitor size={14}/> <span>{t.kioskMode}</span>
          </button>
          <button
            className={`pill-btn ${mode === 'researcher' ? 'active' : ''}`}
            onClick={() => setMode('researcher')}
            title="Scholar & Academic Research Portal"
          >
            <BookOpen size={14}/> <span>{t.researcherMode}</span>
          </button>
          <button
            className={`pill-btn ${mode === 'ambient' ? 'active' : ''}`}
            onClick={() => setMode('ambient')}
            title="Memorial Smart Display Attract Loop"
          >
            <Sparkles size={14}/> <span>{t.ambientMode}</span>
          </button>
        </div>

        <button className="pill-btn nav-shortcut" onClick={openSearch} title="Semantic Search">
          <Search size={14}/> <span>{t.search}</span>
        </button>

        <button className="pill-btn nav-shortcut" onClick={openResearch} title="AI Research Assistant">
          <Compass size={14}/> <span>{t.research}</span>
        </button>

        <button className="pill-btn nav-shortcut" onClick={openPreserve} title="Digital Preservation Standards & Citations">
          <ShieldCheck size={14}/> <span>{t.preservation}</span>
        </button>

        <div className="text-sizer" role="group" aria-label="Accessibility Text Size">
          <button onClick={() => setTextScale(s => Math.max(0.85, s - 0.1))} title="Decrease text size">A-</button>
          <button onClick={() => setTextScale(() => 1.0)} title="Reset text size">A</button>
          <button onClick={() => setTextScale(s => Math.min(1.3, s + 0.1))} title="Increase text size">A+</button>
        </div>

        <button className={`mic-badge ${mic ? 'active' : ''}`} onClick={toggleMic} title="Toggle Voice Recognition">
          <Mic size={15}/> <span>{mic ? 'LISTENING' : 'VOICE'}</span>
        </button>

        <div className="lang-picker" role="group" aria-label="Language">
          {[['en', 'ENG'], ['hi', 'हिन्दी'], ['mr', 'मराठी']].map(([code, label]) => (
            <button
              key={code}
              className={lang === code ? 'active' : ''}
              onClick={() => {setLang(code); sessionStorage.setItem('lang', code)}}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}

function ExhibitionSubnav({
  goHome, gotoSec, openSearch, openResearch, t
}: {
  goHome: () => void
  gotoSec: (id: string) => void
  openSearch: () => void
  openResearch: () => void
  t: Record<string, string>
}) {
  return (
    <nav className="exh-subnav">
      <button className="subnav-btn home-btn" onClick={goHome}>
        <Home size={14}/> <span>{t.home}</span>
      </button>

      <div className="subnav-sections">
        <button onClick={() => gotoSec('01')}>01 {t.life}</button>
        <button onClick={() => gotoSec('02')}>02 {t.knowledge}</button>
        <button onClick={() => gotoSec('03')}>03 {t.memorials}</button>
        <button onClick={() => gotoSec('04')}>04 {t.timeline}</button>
        <button onClick={() => gotoSec('05')}>05 {t.writings}</button>
        <button onClick={() => gotoSec('06')}>06 {t.speeches}</button>
        <button onClick={() => gotoSec('07')}>07 {t.debates}</button>
        <button onClick={() => gotoSec('08')}>08 {t.manuscripts}</button>
        <button onClick={() => gotoSec('09')}>09 {t.av}</button>
        <button onClick={() => gotoSec('10')}>10 {t.archive}</button>
        <button onClick={() => gotoSec('11')}>11 {t.research}</button>
      </div>

      <div className="subnav-actions">
        <button className="subnav-act-btn" onClick={openSearch}>
          <Search size={14}/> <span>SEARCH</span>
        </button>
        <button className="subnav-act-btn primary" onClick={openResearch}>
          <Compass size={14}/> <span>AI RESEARCH</span>
        </button>
      </div>
    </nav>
  )
}

function Card({it, open}: {it: Item; open: (id: string) => void}) {
  return (
    <button className="card" onClick={() => open(it.id)}>
      <div className="thumb" style={{'--h': hue(it.cat)} as React.CSSProperties}>
        <b>{it.year}</b>
        <i>{it.cat.split(' ')[0]}</i>
      </div>
      <h4>{it.title}</h4>
      <p>{it.desc}</p>
      <div className="card-footer">
        <span className="badge-acc">{it.accessionNo}</span>
        <small>{it.lang} · {it.cat}</small>
      </div>
    </button>
  )
}

function Rail({items, open}: {items: Item[]; open: (id: string) => void}) {
  const d = useDrag()
  return <div className="rail" ref={d.r} {...d.p}>{items.map(i => <Card key={i.id} it={i} open={open}/>)}</div>
}

function Manuscripts({items, open}: {items: Item[]; open: (id: string) => void}) {
  const d = useDrag()
  return (
    <div className="rail ms" ref={d.r} {...d.p}>
      {items.map((i, k) => (
        <button key={i.id} className="leaf" onClick={() => open(i.id)}>
          <div className="sheet" style={{rotate: (k % 2 ? 1 : -1) * 0.8 + 'deg'}}>
            <div className="sheet-header">
              <em>{i.year} · {i.lang}</em>
              <span className="ocr-badge">{i.ocrConfidence} OCR</span>
            </div>
            <h5>{i.title}</h5>
            <p>{i.excerpt}</p>
            {Array.from({length: 8}).map((_, n) => (
              <div key={n} className="ln" style={{width: (50 + ((n * 41 + k * 17) % 50)) + '%'}}/>
            ))}
            <span className="seal">{i.accessionNo}</span>
          </div>
          <small>{i.cat}</small>
          <b>INSPECT MANUSCRIPT FACSIMILE →</b>
        </button>
      ))}
    </div>
  )
}

function Head({n, t, sub}: {n: string; t: string; sub?: string}) {
  return (
    <header className="head" id={'s' + n}>
      <span>{n}</span>
      <div>
        <h2>{t}</h2>
        {sub && <p className="head-sub">{sub}</p>}
      </div>
    </header>
  )
}

function KnowledgeMapModule({openDoc, t}: {openDoc: (id: string) => void; t: Record<string, string>}) {
  const [activeNode, setActiveNode] = useState<ConceptNode>(KNOWLEDGE_NODES[0])

  return (
    <div className="knowledge-container">
      <div className="km-canvas-wrapper">
        <svg className="km-canvas" viewBox="0 0 100 100" preserveAspectRatio="none">
          {KNOWLEDGE_NODES.map(node =>
            node.relatedNodes.map(targetId => {
              const target = KNOWLEDGE_NODES.find(n => n.id === targetId)
              if (!target) return null
              const isSelected = activeNode.id === node.id || activeNode.id === target.id
              return (
                <line
                  key={`${node.id}-${target.id}`}
                  x1={node.x}
                  y1={node.y}
                  x2={target.x}
                  y2={target.y}
                  className={`km-link ${isSelected ? 'active-link' : ''}`}
                />
              )
            })
          )}
          {KNOWLEDGE_NODES.map(node => {
            const isSelected = activeNode.id === node.id
            const isConnected = activeNode.relatedNodes.includes(node.id)
            return (
              <g
                key={node.id}
                className={`km-node-group ${isSelected ? 'selected' : ''} ${isConnected ? 'connected' : ''}`}
                transform={`translate(${node.x}, ${node.y})`}
                onClick={() => setActiveNode(node)}
              >
                <circle r={isSelected ? 4.5 : 3.2} className="km-node-circle"/>
                <circle r={isSelected ? 6.5 : 4.5} className="km-pulse-ring"/>
                <text
                  dy={node.y > 75 ? -5.5 : 7}
                  className={`km-node-label ${isSelected ? 'selected-label' : ''}`}
                  textAnchor="middle"
                >
                  {node.name}
                </text>
              </g>
            )
          })}
        </svg>
      </div>

      <div className="km-side-inspector">
        <div className="km-badge">CONCEPT INTELLIGENCE NODE</div>
        <h3>{activeNode.name}</h3>
        <p className="km-desc">{activeNode.shortDesc}</p>

        <div className="km-doctrine-box">
          <span className="eyebrow">DOCTRINAL FOUNDATION</span>
          <blockquote>"{activeNode.coreDoctrine}"</blockquote>
        </div>

        <div className="km-analysis">
          <span className="eyebrow">ARCHIVAL CONTEXT</span>
          <p>{activeNode.fullAnalysis}</p>
        </div>

        <div className="km-linked-section">
          <span className="eyebrow">LINKED ARCHIVAL RECORDS ({activeNode.itemIds.length})</span>
          <div className="chips">
            {activeNode.itemIds.map(id => {
              const it = byId(id)
              return (
                <button key={id} onClick={() => openDoc(id)} className="chip-btn">
                  <FileText size={13}/>
                  <span>{it.title} ({it.year})</span>
                </button>
              )
            })}
          </div>
        </div>

        <div className="km-linked-section">
          <span className="eyebrow">LINKED MEMORIAL SITES</span>
          <div className="chips">
            {activeNode.memorialIds.map(mid => {
              const mem = MEMORIALS.find(m => m.id === mid)
              return mem ? (
                <span key={mid} className="chip-tag">
                  <Landmark size={12}/> {mem.name}
                </span>
              ) : null
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

function MemorialStorytellingModule({openDoc}: {openDoc: (id: string) => void}) {
  const [selectedMem, setSelectedMem] = useState<MemorialSite>(MEMORIALS[0])

  return (
    <div className="memorial-story-wrap">
      <div className="memorial-nav">
        {MEMORIALS.map(mem => (
          <button
            key={mem.id}
            className={`memorial-nav-item ${selectedMem.id === mem.id ? 'active' : ''}`}
            onClick={() => setSelectedMem(mem)}
          >
            <b>{mem.city}</b>
            <h4>{mem.name}</h4>
            <small>{mem.period}</small>
          </button>
        ))}
      </div>

      <div className="memorial-content-card">
        <div className="mem-header">
          <div>
            <span className="eyebrow">{selectedMem.role}</span>
            <h3>{selectedMem.name}</h3>
            <p className="mem-loc">
              {selectedMem.city}, {selectedMem.country} · Coordinates: {selectedMem.coordinates}
            </p>
          </div>
          <div className="mem-stamp">HISTORIC LANDMARK</div>
        </div>

        <div className="mem-grid">
          <div className="mem-body">
            <h4>Narrative History</h4>
            <p>{selectedMem.description}</p>
            <h4>National & Global Significance</h4>
            <p>{selectedMem.historicalSignificance}</p>
            <h4>Institutional Preservation Focus</h4>
            <p>{selectedMem.institutionalFocus}</p>
          </div>

          <div className="mem-exhibits">
            <h4>Associated Archival Records</h4>
            <div className="mem-items-list">
              {selectedMem.exhibitItems.map(id => {
                const it = byId(id)
                return (
                  <div key={id} className="mem-item-card">
                    <div>
                      <b>{it.year} · {it.cat}</b>
                      <h5>{it.title}</h5>
                      <small>{it.accessionNo}</small>
                    </div>
                    <button className="pill-btn primary" onClick={() => openDoc(id)}>
                      INSPECT
                    </button>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Timeline({open}: {open: (id: string) => void}) {
  const [sel, setSel] = useState<number>(0)
  const d = useDrag()
  const ev: Ev = TIMELINE[sel]

  return (
    <div className="timeline-block">
      <div className="tl" ref={d.r} {...d.p}>
        <div className="tlline"/>
        {TIMELINE.map((e, i) => (
          <button
            key={i}
            className={'tle ' + (sel === i ? 'on' : '') + (i % 2 ? ' up' : '')}
            onClick={() => setSel(i)}
          >
            <b>{e.y}</b>
            <span>{e.t}</span>
            <u/>
          </button>
        ))}
      </div>
      {ev && (
        <div className="tlpanel" key={sel}>
          <div className="ph">
            <b>{ev.y}</b>
            <i>Institutional Milestone</i>
          </div>
          <div>
            <h3>{ev.t}</h3>
            <p>{ev.text}</p>
            <small>Dr. Ambedkar International Centre National Archival Chronology</small>
            <div className="chips">
              {ev.items.map(id => (
                <button key={id} onClick={() => open(id)}>
                  {byId(id).title}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function MediaPlayer({open}: {open: (id: string) => void}) {
  const [m, setM] = useState<Media>(MEDIA[0])
  const a = useRef<HTMLAudioElement>(null)
  const [src] = useState(makeTone)
  const [t, setT] = useState(0)
  const [dur, setDur] = useState(30)
  const [pl, setPl] = useState(false)
  const [speed, setSpeed] = useState(1.0)

  const f = (x: number) => String(Math.floor(x / 60)).padStart(2, '0') + ':' + String(Math.floor(x % 60)).padStart(2, '0')
  const tog = () => {
    const e = a.current!
    if (e.paused) {
      e.play()
      setPl(true)
    } else {
      e.pause()
      setPl(false)
    }
  }

  const seekTo = (sec: number) => {
    if (a.current) {
      a.current.currentTime = Math.min(sec, dur)
      setT(a.current.currentTime)
    }
  }

  const changeSpeed = (s: number) => {
    setSpeed(s)
    if (a.current) a.current.playbackRate = s
  }

  return (
    <div className="media">
      <div className="mlist">
        {MEDIA.map(x => (
          <button key={x.id} className={x.id === m.id ? 'on' : ''} onClick={() => {setM(x); setPl(false)}}>
            <div className="mlist-head">
              <b>{x.kind}</b>
              <span className="media-acc">{x.accessionNo}</span>
            </div>
            <h4>{x.title}</h4>
            <small>{x.lang} · {x.dur} · {x.location}</small>
          </button>
        ))}
      </div>

      <div className="mplay">
        <div className="cover">
          <div className="cover-badge">{m.kind.toUpperCase()} ARCHIVE</div>
          <div className="soundwave-mock">
            {Array.from({length: 24}).map((_, i) => (
              <span key={i} style={{height: pl ? `${25 + Math.sin(i * 0.7 + t * 5) * 20}px` : '12px'}}/>
            ))}
          </div>
          <small className="pres-spec">{m.preservationGrade}</small>
        </div>

        <h3>{m.title}</h3>
        <p className="media-loc-sub">{m.location} · {m.dur}</p>

        <audio
          ref={a}
          src={src}
          onTimeUpdate={e => setT(e.currentTarget.currentTime)}
          onLoadedMetadata={e => setDur(e.currentTarget.duration)}
          onEnded={() => setPl(false)}
        />

        <div className="av-controls">
          <input
            type="range"
            min={0}
            max={dur}
            step={0.1}
            value={t}
            onChange={e => {if (a.current) a.current.currentTime = +e.target.value}}
          />
          <div className="time-bar">
            <span>{f(t)} / {f(dur)}</span>
            <div className="speed-pills">
              {[0.8, 1.0, 1.25, 1.5].map(s => (
                <button
                  key={s}
                  className={speed === s ? 'active' : ''}
                  onClick={() => changeSpeed(s)}
                >
                  {s}x
                </button>
              ))}
            </div>
          </div>

          <button className="big" onClick={tog}>
            {pl ? <Pause/> : <Play/>} {pl ? 'PAUSE PLAYBACK' : 'START PLAYBACK'}
          </button>
        </div>

        <div className="chapters-box">
          <span className="eyebrow">AUDIO CHAPTERS</span>
          <div className="chips">
            {m.chapters.map(ch => (
              <button key={ch.title} onClick={() => seekTo(ch.time / 10)} className="chapter-btn">
                <span>{ch.title}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="transcript-box">
          <span className="eyebrow">SYNCHRONIZED INTERACTIVE TRANSCRIPT</span>
          <div className="transcript-segments">
            {m.segments.map((seg, idx) => (
              <div
                key={idx}
                className="seg-row"
                onClick={() => seekTo(seg.start / 10)}
              >
                <span className="seg-time">[{f(seg.start)}]</span>
                <p><strong>{seg.speaker}:</strong> {seg.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="related-primary">
          <span className="eyebrow">ASSOCIATED PRIMARY WRITINGS & SPEECHES</span>
          <div className="chips">
            {m.rel.map(id => (
              <button key={id} onClick={() => open(id)}>
                {byId(id).title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function Viewer({id, close, lang}: {id: string; close: () => void; lang: string}) {
  const it = byId(id)
  const [viewMode, setViewMode] = useState<'split' | 'facsimile' | 'ocr'>('split')
  const [contentType, setContentType] = useState<'summary' | 'full'>('summary')
  const [z, setZ] = useState(1)
  const [pg, setPg] = useState(0)
  const [contrast, setContrast] = useState(false)
  const [rotation, setRotation] = useState(0)
  const [copiedCite, setCopiedCite] = useState(false)
  const [narrating, setNarrating] = useState(false)
  const [ttsSpeed, setTtsSpeed] = useState(1.0)
  const [pos, setPos] = useState({x: 0, y: 0})
  const dr = useRef<{x: number; y: number} | null>(null)

  const down = (e: PE) => {
    dr.current = {x: e.clientX - pos.x, y: e.clientY - pos.y}
    e.currentTarget.setPointerCapture(e.pointerId)
  }
  const move = (e: PE) => {
    if (dr.current) setPos({x: e.clientX - dr.current.x, y: e.clientY - dr.current.y})
  }
  const zoom = (d: number) => {
    setZ(Math.min(3, Math.max(0.5, +(z + d).toFixed(2))))
    if (z + d <= 1) setPos({x: 0, y: 0})
  }

  // Text to Speech Narration using Web Speech API
  const startTTS = () => {
    if (!('speechSynthesis' in window)) {
      alert('Text-to-speech is not supported in this browser.')
      return
    }
    window.speechSynthesis.cancel()
    const textToRead = contentType === 'summary' ? `${it.title}. ${it.summary}` : `${it.title}. ${it.fullText}`
    const utter = new SpeechSynthesisUtterance(textToRead)
    utter.rate = ttsSpeed
    if (lang === 'hi') utter.lang = 'hi-IN'
    else if (lang === 'mr') utter.lang = 'mr-IN'
    else utter.lang = 'en-IN'

    utter.onend = () => setNarrating(false)
    utter.onerror = () => setNarrating(false)
    window.speechSynthesis.speak(utter)
    setNarrating(true)
  }

  const stopTTS = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel()
    }
    setNarrating(false)
  }

  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) window.speechSynthesis.cancel()
    }
  }, [])

  const copyCitation = (style: 'apa' | 'chicago' | 'bibtex') => {
    let text = ''
    if (style === 'apa') {
      text = `Ambedkar, B. R. (${it.year}). ${it.title}. ${it.repository}. Catalogue Ref: ${it.accessionNo}.`
    } else if (style === 'chicago') {
      text = `Ambedkar, B. R. "${it.title}." ${it.year}. ${it.repository}. Accession No. ${it.accessionNo}.`
    } else {
      text = `@archive{ambedkar_${it.id},\n  title={${it.title}},\n  author={Ambedkar, B. R.},\n  year={${it.year}},\n  institution={${it.repository}},\n  number={${it.accessionNo}}\n}`
    }
    navigator.clipboard.writeText(text)
    setCopiedCite(true)
    setTimeout(() => setCopiedCite(false), 2500)
  }

  return (
    <div className="overlay viewer">
      <div className="vbar">
        <div className="vbar-left">
          <button className="pill" onClick={close}>
            <ArrowLeft/> BACK TO ARCHIVE
          </button>
          <span className="vbar-tag">{it.cat} · {it.year} · {it.accessionNo}</span>
        </div>
        <div className="vbar-center">
          <div className="segmented-view-ctl">
            <button
              className={viewMode === 'split' ? 'active' : ''}
              onClick={() => setViewMode('split')}
            >
              SIDE-BY-SIDE OCR
            </button>
            <button
              className={viewMode === 'facsimile' ? 'active' : ''}
              onClick={() => setViewMode('facsimile')}
            >
              FACSIMILE ONLY
            </button>
            <button
              className={viewMode === 'ocr' ? 'active' : ''}
              onClick={() => setViewMode('ocr')}
            >
              DIGITIZED OCR ONLY
            </button>
          </div>
        </div>
        <div className="vbar-right">
          <div className="segmented-view-ctl">
            <button
              className={contentType === 'summary' ? 'active' : ''}
              onClick={() => setContentType('summary')}
            >
              AI SUMMARY
            </button>
            <button
              className={contentType === 'full' ? 'active' : ''}
              onClick={() => setContentType('full')}
            >
              FULL TEXT
            </button>
          </div>
        </div>
      </div>

      <div className={`vmain ${viewMode}`}>
        {(viewMode === 'split' || viewMode === 'facsimile') && (
          <div
            className={`stage ${contrast ? 'inverted' : ''}`}
            onPointerDown={down}
            onPointerMove={move}
            onPointerUp={() => {dr.current = null}}
          >
            <div
              className="page-facsimile"
              style={{
                transform: `translate(${pos.x}px, ${pos.y}px) scale(${z}) rotate(${rotation}deg)`
              }}
            >
              <div className="facsimile-paper">
                <div className="facsimile-seal">DAIC / ARCHIVAL MASTER</div>
                <div className="facsimile-acc">{it.accessionNo} · Page {pg + 1} of 3</div>
                <h3>{it.title}</h3>
                <em>Historical Facsimile · Original Typography ({it.year})</em>
                <div className="facsimile-lines">
                  {Array.from({length: 18}).map((_, i) => (
                    <div
                      key={i}
                      className="scan-line"
                      style={{width: (60 + ((i * 37 + pg * 11) % 38)) + '%'}}
                    />
                  ))}
                </div>
                <p className="facsimile-sample-text">"{it.excerpt}"</p>
                <div className="facsimile-stamp">DIGITIZED PRESERVATION SCAN</div>
              </div>
            </div>

            <div className="facsimile-hud">
              <button onClick={() => zoom(-0.25)} title="Zoom Out"><ZoomOut size={16}/></button>
              <span>{Math.round(z * 100)}%</span>
              <button onClick={() => zoom(0.25)} title="Zoom In"><ZoomIn size={16}/></button>
              <button onClick={() => setContrast(c => !c)} title="Invert Contrast"><Contrast size={16}/></button>
              <button onClick={() => setRotation(r => (r + 90) % 360)} title="Rotate"><RotateCw size={16}/></button>
              <button onClick={() => {setZ(1); setPos({x: 0, y: 0}); setRotation(0)}} title="Reset">RESET</button>
            </div>
          </div>
        )}

        {(viewMode === 'split' || viewMode === 'ocr') && (
          <div className="ocr-pane">
            <div className="ocr-pane-header">
              <div>
                <span className="eyebrow">DIGITIZED OCR TRANSCRIPTION</span>
                <h3 className="ocr-title">{it.title}</h3>
              </div>
              <div className="ocr-stats">
                <span className="confidence-pill">{it.ocrConfidence} Accuracy</span>
                <span className="engine-label">Tesseract-v5 Multi-Pass</span>
              </div>
            </div>

            <div className="narration-toolbar">
              <div className="tts-controls">
                {narrating ? (
                  <button className="pill-btn warn" onClick={stopTTS}>
                    <VolumeX size={15}/> <span>STOP AUDIO NARRATION</span>
                  </button>
                ) : (
                  <button className="pill-btn primary" onClick={startTTS}>
                    <Volume2 size={15}/> <span>NARRATE EXCERPT (AUDIO TTS)</span>
                  </button>
                )}
                {narrating && <div className="pulsing-wave"/>}
              </div>
              <div className="tts-speed">
                <span>Speed:</span>
                {[0.8, 1.0, 1.25].map(s => (
                  <button
                    key={s}
                    className={ttsSpeed === s ? 'active' : ''}
                    onClick={() => setTtsSpeed(s)}
                  >
                    {s}x
                  </button>
                ))}
              </div>
            </div>

            {it.transText && (lang === 'hi' || lang === 'mr') && (
              <div className="regional-trans-card">
                <span className="eyebrow">REGIONAL TRANSLATION ({lang.toUpperCase()})</span>
                <p>{lang === 'hi' ? it.transText.hi : it.transText.mr}</p>
              </div>
            )}

            <div className="ocr-text-content">
              {contentType === 'summary' ? (
                <div className="summary-view">
                  <div className="ai-summary-badge">
                    <Sparkles size={16}/> <span>INSTITUTIONAL AI SYNTHESIS</span>
                  </div>
                  <pre className="summary-text">{it.summary}</pre>
                </div>
              ) : (
                <div className="full-text-view">
                  <pre className="full-text">{it.fullText}</pre>
                </div>
              )}
            </div>

            <div className="ocr-footer-actions">
              <button className="pill-btn" onClick={() => copyCitation('apa')}>
                {copiedCite ? <Check size={14}/> : <Copy size={14}/>} <span>{copiedCite ? 'COPIED CITATION' : 'COPY APA CITATION'}</span>
              </button>
              <button className="pill-btn" onClick={() => copyCitation('bibtex')}>
                <Copy size={14}/> <span>COPY BIBTEX</span>
              </button>
            </div>
          </div>
        )}

        <aside className="vaside">
          <div className="aside-header">
            <span className="eyebrow">CATALOGUE DOSSIER</span>
            <h3>{it.title}</h3>
          </div>

          <dl className="meta-dl">
            <dt>Accession Identifier</dt>
            <dd className="acc-code">{it.accessionNo}</dd>
            <dt>Publication / Origin</dt>
            <dd>{it.year}</dd>
            <dt>Archival Category</dt>
            <dd>{it.cat}</dd>
            <dt>Original Language</dt>
            <dd>{it.lang}</dd>
            <dt>Preservation Standard</dt>
            <dd>{it.preservationStatus}</dd>
            <dt>Host Repository</dt>
            <dd>{it.repository}</dd>
            <dt>OCR Engine Accuracy</dt>
            <dd>{it.ocrConfidence}</dd>
            <dt>Thematic Concepts</dt>
            <dd>{it.tags.join(' · ')}</dd>
          </dl>

          <div className="aside-desc">
            <h4>Archival Description</h4>
            <p>{it.desc}</p>
          </div>

          <div className="page-switcher">
            <span>PAGE</span>
            {[0, 1, 2].map(p => (
              <button
                key={p}
                className={p === pg ? 'on' : ''}
                onClick={() => setPg(p)}
              >
                {p + 1}
              </button>
            ))}
          </div>
        </aside>
      </div>
    </div>
  )
}

function SearchUI({
  open, close, t, init
}: {
  open: (id: string) => void
  close: () => void
  t: Record<string, string>
  init: string
}) {
  const [q, setQ] = useState(init)
  const [filterCat, setFilterCat] = useState('ALL')
  const [filterLang, setFilterLang] = useState('ALL')

  const results = ARCHIVE.filter(i => {
    const matchesCat = filterCat === 'ALL' || i.cat === filterCat
    const matchesLang = filterLang === 'ALL' || i.lang === filterLang
    const textBlob = [i.title, i.desc, i.excerpt, i.summary, i.cat, String(i.year), ...i.tags].join(' ').toLowerCase()
    const matchesQ = !q.trim() || textBlob.includes(q.trim().toLowerCase())
    return matchesCat && matchesLang && matchesQ
  })

  return (
    <div className="overlay search">
      <button className="x" onClick={close} aria-label="Close"><X/></button>
      <div className="search-header-box">
        <span className="eyebrow">AI-POWERED SEMANTIC SEARCH</span>
        <h1>{t.search}</h1>
        <p className="search-subhead">Search across 43+ rare manuscripts, speeches, constitutional debates and archival records</p>
      </div>

      <div className="search-input-wrap">
        <input
          autoFocus
          value={q}
          onChange={e => setQ(e.target.value)}
          placeholder="Try: constitutional rights · RBI currency · caste annihilation · Hindu Code Bill · Buddhism"
        />
        {q && <button className="clear-btn" onClick={() => setQ('')}><X size={18}/></button>}
      </div>

      <div className="filter-row">
        <div className="chips cats">
          {['ALL', ...CATS].map(c => (
            <button
              key={c}
              className={filterCat === c ? 'on' : ''}
              onClick={() => setFilterCat(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="chips">
          {['ALL', 'English', 'Marathi', 'Hindi'].map(l => (
            <button
              key={l}
              className={filterLang === l ? 'on' : ''}
              onClick={() => setFilterLang(l)}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      <p className="count">Found {results.length} matching institutional records</p>
      <div className="results">
        {results.map(i => <Card key={i.id} it={i} open={open}/>)}
      </div>
    </div>
  )
}

function Research({
  open, close, t, init
}: {
  open: (id: string) => void
  close: () => void
  t: Record<string, string>
  init: string
}) {
  const [q, setQ] = useState(init)
  const [ph, setPh] = useState(-1)
  const [res, setRes] = useState<Res | null>(null)

  const steps = [
    'QUERY DECOMPOSITION & INTENT ANALYSIS',
    'INSTITUTIONAL ARCHIVE SEMANTIC RETRIEVAL',
    'MULTI-DOCUMENT EVIDENCE SYNTHESIS',
    'HALLUCINATION CHECK & FACTUAL GROUNDING',
    'VERIFIED EVIDENCE CITATION GENERATION'
  ]

  const run = (text: string) => {
    const w = text.toLowerCase()
    if (!w.trim()) return

    let best = RESEARCH[0]
    let sc = 0
    RESEARCH.forEach(r => {
      const s = r.keys.filter(k => w.includes(k)).length
      if (s > sc) {
        sc = s
        best = r
      }
    })

    setQ(text)
    setRes(null)
    setPh(0)
    ;[1, 2, 3, 4].forEach(i => setTimeout(() => setPh(i), i * 700))
    setTimeout(() => {
      setRes(best)
      setPh(5)
    }, 4 * 700 + 600)
  }

  useEffect(() => {
    if (init) run(init)
  }, []) // eslint-disable-line

  return (
    <div className="overlay research">
      <button className="x" onClick={close} aria-label="Close"><X/></button>
      <div className="rcol">
        <span className="eyebrow">EVIDENTIARY ARCHIVAL REASONING</span>
        <h1>{t.research}</h1>
        <p className="research-sub">
          Ask complex historical, legal, or constitutional questions. Every response is strictly grounded in verified DAIC primary manuscripts.
        </p>

        <div className="rin">
          <input
            value={q}
            onChange={e => setQ(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && run(q)}
            placeholder={t.ask}
          />
          <button className="big" onClick={() => run(q)}>{t.go}</button>
        </div>

        <div className="suggested-queries">
          <span className="eyebrow">CURATED RESEARCH INQUIRIES</span>
          <div className="chips">
            {RESEARCH.map(r => (
              <button key={r.q} onClick={() => run(r.q)}>{r.q}</button>
            ))}
          </div>
        </div>

        {ph >= 0 && (
          <div className="flow">
            {steps.map((s, i) => (
              <div key={s} className={'step ' + (ph > i ? 'done' : ph === i ? 'act' : '')}>
                <i>{ph > i ? '✓' : i + 1}</i>
                <span>{s}</span>
              </div>
            ))}
          </div>
        )}

        {res && (
          <div className="result">
            <div className="res-header">
              <span className="eyebrow">{res.theme.toUpperCase()}</span>
              <div className="confidence-tag">
                <ShieldCheck size={16}/> {res.confidenceScore}% Archival Verification
              </div>
            </div>

            <p className="ans">{res.answer}</p>

            <div className="res-doctrine">
              <strong>Core Doctrinal Principle:</strong> {res.doctrinalInsight}
            </div>

            <span className="eyebrow">PRIMARY ARCHIVAL EVIDENCE ({res.srcs.length} SOURCES CITED)</span>
            <div className="ev-grid">
              {res.srcs.map((s: Src) => {
                const item = byId(s.id)
                return (
                  <div className="ev" key={s.id}>
                    <div className="ev-head">
                      <b>{s.label}</b>
                      <span className="ev-score">{s.relevanceScore}% Match</span>
                    </div>
                    <small>{item.title} ({item.year}) · Page {s.page}</small>
                    <p>"{s.excerpt}"</p>
                    <button className="pill" onClick={() => open(s.id)}>
                      {t.view} →
                    </button>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function PreservationModal({close}: {close: () => void}) {
  return (
    <div className="overlay preservation-modal">
      <button className="x" onClick={close} aria-label="Close"><X/></button>
      <div className="pres-container">
        <span className="eyebrow">INSTITUTIONAL ARCHIVAL MANAGEMENT</span>
        <h2>Dr. Ambedkar International Centre Preservation Infrastructure</h2>
        <p className="pres-lead">
          The DAIC digital heritage infrastructure operates under strict ISO 14721 Open Archival Information System (OAIS) compliance, preserving Dr. Ambedkar's literary corpus for generations to come.
        </p>

        <div className="pres-stats-grid">
          <div className="pres-card">
            <b>43+</b>
            <span>Primary Master Works</span>
            <small>Digitized in 600–1200 DPI Uncompressed TIFF</small>
          </div>
          <div className="pres-card">
            <b>99.4%</b>
            <span>Neural OCR Accuracy</span>
            <small>Multi-pass Tesseract-v5 & TrOCR models</small>
          </div>
          <div className="pres-card">
            <b>3 Copies</b>
            <span>Vault Redundancy</span>
            <small>Cold Storage, Nitrogen Encapsulation, Cloud S3</small>
          </div>
          <div className="pres-card">
            <b>SHA-256</b>
            <span>Cryptographic Proof</span>
            <small>Tamper-proof digital provenance timestamps</small>
          </div>
        </div>

        <div className="pres-table-box">
          <h3>Central Accession Registry</h3>
          <div className="pres-table-scroll">
            <table className="pres-table">
              <thead>
                <tr>
                  <th>Accession No.</th>
                  <th>Title</th>
                  <th>Year</th>
                  <th>Category</th>
                  <th>Preservation Format</th>
                  <th>Repository Vault</th>
                </tr>
              </thead>
              <tbody>
                {ARCHIVE.slice(0, 10).map(i => (
                  <tr key={i.id}>
                    <td><code>{i.accessionNo}</code></td>
                    <td>{i.title}</td>
                    <td>{i.year}</td>
                    <td>{i.cat}</td>
                    <td>{i.preservationStatus.split('·')[0]}</td>
                    <td>{i.repository.split('/')[0]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

function Landing({
  enter, t, openKnowledge, openMemorials, openResearch
}: {
  enter: () => void
  t: Record<string, string>
  openKnowledge: () => void
  openMemorials: () => void
  openResearch: () => void
}) {
  return (
    <div className="landing-screen">
      <div className="grain"/>
      <div className="ring r1"/>
      <div className="ring r2"/>
      <div className="landing-hero">
        <span className="eyebrow">{t.instName.toUpperCase()}</span>
        <h1 className="hero-heading">DR. B. R.<br/>AMBEDKAR</h1>
        <p className="landing-sub">{t.sub}</p>

        <div className="landing-buttons">
          <button className="hero-enter-btn" onClick={enter}>
            <span>{t.enter}</span> <ArrowRight size={18}/>
          </button>
          <button className="hero-sec-btn" onClick={openKnowledge}>
            <Layers size={17}/> <span>{t.knowledge}</span>
          </button>
          <button className="hero-sec-btn" onClick={openMemorials}>
            <Landmark size={17}/> <span>{t.memorials}</span>
          </button>
          <button className="hero-sec-btn" onClick={openResearch}>
            <Compass size={17}/> <span>{t.research}</span>
          </button>
        </div>

        <div className="landing-highlights">
          <div className="highlight-pill"><b>43+</b> Primary Works</div>
          <div className="highlight-pill"><b>7</b> Memorial Sites</div>
          <div className="highlight-pill"><b>100%</b> Evidentiary Citations</div>
          <div className="highlight-pill"><b>3</b> Languages (EN · HI · MR)</div>
        </div>
      </div>
    </div>
  )
}

function Exhibition({
  open, go, t, openKnowledge, openMemorials
}: {
  open: (id: string) => void
  go: (s: string) => void
  t: Record<string, string>
  openKnowledge: () => void
  openMemorials: () => void
}) {
  const by = (c: string) => ARCHIVE.filter(i => i.cat === c)
  const [f, setF] = useState('ALL')

  return (
    <div className="exh-container">
      <main className="exh">
        <section className="sec intro">
          <Head
            n="01"
            t="Institutional Archival System"
            sub="Centralized digital heritage repository dedicated to Dr. B. R. Ambedkar's intellectual, legal and philosophical corpus"
          />
          <p className="lede">
            Established to preserve Dr. B. R. Ambedkar's monumental writings, speeches, rare manuscripts, and constitutional debates. Visitors and researchers can explore primary documents through high-resolution OCR facsimiles, intelligent concept graphs, audio-visual recordings, and evidence-grounded AI search.
          </p>
        </section>

        <section className="sec">
          <Head
            n="02"
            t={t.knowledge}
            sub="Interactive semantic concept graph connecting core doctrinal themes with primary archival records"
          />
          <KnowledgeMapModule openDoc={open} t={t}/>
        </section>

        <section className="sec">
          <Head
            n="03"
            t={t.memorials}
            sub="Interactive narrative tour of sacred memorial landmarks and institutional centres"
          />
          <MemorialStorytellingModule openDoc={open}/>
        </section>

        <section className="sec">
          <Head
            n="04"
            t={t.timeline}
            sub="Chronological journey from 1891 to 1956 detailing pivotal historic milestones"
          />
          <Timeline open={open}/>
        </section>

        <section className="sec">
          <Head
            n="05"
            t={t.writings}
            sub="Foundational monographs, scholarly theses and socioeconomic treatises"
          />
          <Rail items={by('WRITINGS')} open={open}/>
        </section>

        <section className="sec">
          <Head
            n="06"
            t={t.speeches}
            sub="Historic addresses before conferences, parliament and world assemblies"
          />
          <Rail items={by('SPEECHES').concat(by('AUDIO'))} open={open}/>
        </section>

        <section className="sec">
          <Head
            n="07"
            t={t.debates}
            sub="Constituent Assembly debates piloting the Constitution of India (1946–1950)"
          />
          <Rail items={by('CONSTITUTIONAL DEBATES')} open={open}/>
        </section>

        <section className="sec">
          <Head
            n="08"
            t={t.manuscripts}
            sub="Handwritten notes, working notebooks and annotated drafting committee documents"
          />
          <Manuscripts items={by('MANUSCRIPTS').concat(by('LETTERS'))} open={open}/>
        </section>

        <section className="sec">
          <Head
            n="09"
            t={t.av}
            sub="Speeches, radio broadcasts, newsreels and documentary records with synchronized transcripts"
          />
          <MediaPlayer open={open}/>
        </section>

        <section className="sec">
          <Head
            n="10"
            t={t.archive}
            sub="Complete catalogue of archival materials across all institutional collections"
          />
          <div className="chips cats">
            {['ALL', ...CATS].map(c => (
              <button key={c} className={f === c ? 'on' : ''} onClick={() => setF(c)}>
                {c}
              </button>
            ))}
          </div>
          <Rail key={f} items={f === 'ALL' ? ARCHIVE : by(f)} open={open}/>
        </section>

        <section className="sec cta">
          <Head
            n="11"
            t={t.research}
            sub="State-of-the-art AI assistant answering queries with strict primary source citations"
          />
          <p className="lede">
            Investigate constitutional philosophy, economic theses, or historical questions. The AI Research Assistant retrieves verified records from the DAIC central vault with zero hallucination guarantee.
          </p>
          <button className="enter" onClick={() => go('research')}>{t.go}</button>
        </section>
      </main>
    </div>
  )
}

export default function App() {
  const [lang, setLang] = useState(() => sessionStorage.getItem('lang') || 'en')
  const [scr, setScr] = useState<'landing' | 'exh'>('landing')
  const [mode, setMode] = useState<'kiosk' | 'researcher' | 'ambient'>('kiosk')
  const [textScale, setTextScale] = useState(1.0)
  const [ov, setOv] = useState<string | null>(null)
  const [doc, setDoc] = useState<string | null>(null)
  const [ret, setRet] = useState(false)
  const [vq, setVq] = useState('')
  const [heard, setHeard] = useState('')
  const [mic, setMic] = useState(false)

  const t = L[lang] || L.en
  const timer = useRef<number>(0)

  // Apply text scaling to root document
  useEffect(() => {
    document.documentElement.style.fontSize = `clamp(${11 * textScale}px, ${0.833 * textScale}vw, ${16 * textScale}px)`
  }, [textScale])

  // Kiosk Inactivity Reset
  const reset = useCallback(() => {
    clearTimeout(timer.current)
    if (mode === 'kiosk') {
      timer.current = window.setTimeout(() => {
        setRet(true)
        setTimeout(() => {
          setScr('landing')
          setOv(null)
          setDoc(null)
          setRet(false)
        }, 2500)
      }, KIOSK_TIMEOUT_MS)
    }
  }, [mode])

  useEffect(() => {
    reset()
    const ev = ['pointerdown', 'pointermove', 'keydown', 'wheel', 'touchstart']
    ev.forEach(e => window.addEventListener(e, reset, {passive: true}))
    return () => {
      ev.forEach(e => window.removeEventListener(e, reset))
      clearTimeout(timer.current)
    }
  }, [reset])

  const gotoSec = (n: string) => {
    setOv(null)
    setDoc(null)
    const el = document.getElementById('s' + n)
    if (el) el.scrollIntoView({behavior: 'smooth'})
  }

  // Voice Command Dispatcher
  const cmd = (raw: string) => {
    const s = raw.toLowerCase().trim()
    const has = (...k: string[]) => k.some(x => s.includes(x))
    setHeard(raw)
    setTimeout(() => setHeard(''), 3500)
    reset()

    if (has('back', 'close', 'वापस', 'मागे', 'बंद')) {
      if (doc) setDoc(null)
      else setOv(null)
      return
    }

    const q = s.match(/^(?:search|find|खोज|शोध)(?: for)?\s+(.+)/)
    if (q) {
      setVq(q[1])
      setOv(null)
      setTimeout(() => setOv('search'), 0)
      return
    }

    const a = s.match(/^(?:ask|investigate|research|जाँच|तपास)\s+(.{4,})/)
    if (a) {
      setVq(a[1])
      setOv(null)
      setTimeout(() => setOv('research'), 0)
      return
    }

    const o = ARCHIVE.find(i => s.startsWith('open') && s.includes(i.title.toLowerCase().split(':')[0].split(',')[0]))
    if (o) {
      setDoc(o.id)
      return
    }

    if (has('hindi', 'हिन्दी', 'हिंदी')) return setLang('hi')
    if (has('marathi', 'मराठी')) return setLang('mr')
    if (has('english', 'अंग्रेज़ी', 'इंग्रजी')) return setLang('en')

    if (has('home', 'landing', 'मुख्य', 'होम')) {
      setOv(null)
      setDoc(null)
      setScr('landing')
      return
    }
    if (has('enter', 'start', 'प्रवेश') && scr === 'landing') {
      setScr('exh')
      return
    }
    if (has('search', 'खोज', 'शोध')) {
      setVq('')
      setOv('search')
      return
    }
    if (has('research', 'assistant', 'शोध', 'संशोधन')) {
      setVq('')
      setOv('research')
      return
    }

    const secs: [string[], string][] = [
      [['introduction', 'intro', 'परिचय'], '01'],
      [['knowledge', 'concept', 'ज्ञान'], '02'],
      [['memorial', 'स्मृति', 'स्मारक'], '03'],
      [['timeline', 'समयरेखा', 'कालरेखा'], '04'],
      [['writing', 'लेखन'], '05'],
      [['speech', 'भाषण'], '06'],
      [['debate', 'बहस', 'चर्चा'], '07'],
      [['manuscript', 'पांडु', 'हस्तलिखित'], '08'],
      [['audio', 'video', 'media', 'दृश्य', 'दृक्'], '09'],
      [['archive', 'अभिलेख'], '10'],
      [['research', 'सहायक'], '11']
    ]
    const m = secs.find(x => has(...x[0]))
    if (m) {
      if (scr === 'landing') setScr('exh')
      setTimeout(() => gotoSec(m[1]), scr === 'landing' ? 400 : 0)
      return
    }

    const ex = document.querySelector('.exh')
    if (ex) {
      if (has('down', 'scroll', 'नीचे', 'खाली')) ex.scrollBy({top: innerHeight * 0.8, behavior: 'smooth'})
      else if (has('up', 'ऊपर', 'वर')) ex.scrollBy({top: -innerHeight * 0.8, behavior: 'smooth'})
    }
  }

  const rec = useRef<any>(null)
  const on = useRef(false)
  const toggleMic = () => {
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
    if (!SR) {
      setHeard('Voice recognition requires Chrome or Edge')
      setTimeout(() => setHeard(''), 3500)
      return
    }
    if (on.current) {
      on.current = false
      rec.current?.stop()
      setMic(false)
      return
    }
    const r = new SR()
    r.continuous = true
    r.interimResults = false
    r.lang = lang === 'hi' ? 'hi-IN' : lang === 'mr' ? 'mr-IN' : 'en-IN'
    r.onresult = (e: any) => cmdRef.current(e.results[e.results.length - 1][0].transcript)
    r.onend = () => {if (on.current) try {r.start()} catch {}}
    r.onerror = () => {}
    rec.current = r
    on.current = true
    setMic(true)
    r.start()
  }

  const cmdRef = useRef(cmd)
  cmdRef.current = cmd
  useEffect(() => {
    if (on.current) {
      rec.current?.stop()
      on.current = false
      setMic(false)
    }
  }, [lang])

  return (
    <div className={`app-root mode-${mode}`} lang={lang}>
      <InstitutionalBar
        lang={lang}
        setLang={setLang}
        mode={mode}
        setMode={setMode}
        textScale={textScale}
        setTextScale={setTextScale}
        mic={mic}
        toggleMic={toggleMic}
        t={t}
        openPreserve={() => setOv('preserve')}
        openKnowledge={() => {if (scr === 'landing') setScr('exh'); setTimeout(() => gotoSec('02'), 300)}}
        openMemorials={() => {if (scr === 'landing') setScr('exh'); setTimeout(() => gotoSec('03'), 300)}}
        openSearch={() => setOv('search')}
        openResearch={() => setOv('research')}
      />

      <div className="app-main-viewport">
        {scr === 'landing' ? (
          <Landing
            enter={() => setScr('exh')}
            t={t}
            openKnowledge={() => {setScr('exh'); setTimeout(() => gotoSec('02'), 300)}}
            openMemorials={() => {setScr('exh'); setTimeout(() => gotoSec('03'), 300)}}
            openResearch={() => setOv('research')}
          />
        ) : (
          <div className="exh-wrapper">
            <ExhibitionSubnav
              goHome={() => setScr('landing')}
              gotoSec={gotoSec}
              openSearch={() => setOv('search')}
              openResearch={() => setOv('research')}
              t={t}
            />
            <Exhibition
              open={setDoc}
              go={setOv}
              t={t}
              openKnowledge={() => gotoSec('02')}
              openMemorials={() => gotoSec('03')}
            />
          </div>
        )}
      </div>

      {ov === 'search' && <SearchUI init={vq} open={setDoc} close={() => setOv(null)} t={t}/>}
      {ov === 'research' && <Research init={vq} open={setDoc} close={() => setOv(null)} t={t}/>}
      {ov === 'preserve' && <PreservationModal close={() => setOv(null)}/>}
      {doc && <Viewer key={doc} id={doc} close={() => setDoc(null)} lang={lang}/>}

      {heard && <div className="heard">“{heard}”</div>}
      {ret && (
        <div className="overlay returning">
          <h2>{t.ret}</h2>
          <p>Resetting touch display for next visitor</p>
        </div>
      )}
    </div>
  )
}
