export interface ConceptNode {
  id: string
  name: string
  theme: 'constitution' | 'caste' | 'economics' | 'labour' | 'gender' | 'buddhism' | 'memorial'
  shortDesc: string
  fullAnalysis: string
  coreDoctrine: string
  relatedNodes: string[]
  itemIds: string[]
  memorialIds: string[]
  x: number // percent 0-100
  y: number // percent 0-100
}

export const KNOWLEDGE_NODES: ConceptNode[] = [
  {
    id: 'c-const-rights',
    name: 'Constitutional Rights & Remedies',
    theme: 'constitution',
    shortDesc: 'Enforceable Fundamental Rights and Article 32 as the "Heart and Soul" of the Constitution.',
    fullAnalysis: 'Dr. Ambedkar championed the inclusion of comprehensive, justiciable Fundamental Rights in Part III of the Constitution. Crucially, he insisted that rights without institutional remedies are illusory; hence Article 32 (Right to Constitutional Remedies) was designated as the core guarantor against executive and legislative encroachment.',
    coreDoctrine: 'Without Article 32, the Constitution is a nullity. It is the very soul of the Constitution and the very heart of it.',
    relatedNodes: ['c-democracy', 'c-minorities', 'c-state-socialism'],
    itemIds: ['a10', 'a11', 'a12', 'a5', 'a22'],
    memorialIds: ['m-parliament', 'm-daic'],
    x: 50,
    y: 22
  },
  {
    id: 'c-democracy',
    name: 'Social & Economic Democracy',
    theme: 'constitution',
    shortDesc: 'Democracy as a mode of associated living, not merely political balloting.',
    fullAnalysis: 'In his landmark speech of 25 November 1949, Dr. Ambedkar warned of entering a "life of contradictions": political equality (one person, one vote) alongside profound social and economic inequality (one person, one value). He urged that political democracy must be transformed into social democracy grounded in Liberty, Equality, and Fraternity.',
    coreDoctrine: 'Political democracy cannot last unless there lies at the base of it social democracy.',
    relatedNodes: ['c-const-rights', 'c-caste-annihilation', 'c-labour'],
    itemIds: ['a12', 'a19', 'a10', 'a35'],
    memorialIds: ['m-parliament', 'm-daic'],
    x: 74,
    y: 28
  },
  {
    id: 'c-caste-annihilation',
    name: 'Annihilation of Caste',
    theme: 'caste',
    shortDesc: 'Structural dismantling of caste hierarchy, endogamy, and religious sanction.',
    fullAnalysis: 'Written in 1936 for the Jat-Pat-Todak Mandal of Lahore, this text provides a rigorous philosophical critique of caste as not merely a division of labour, but a division of labourers. Dr. Ambedkar established that inter-caste dining is insufficient; caste survives on religious dogma and notions of ritual pollution, demanding intellectual revolution and destruction of scriptural infallibility.',
    coreDoctrine: 'Caste is not a physical wall. It is a notion, a state of the mind.',
    relatedNodes: ['c-democracy', 'c-buddhism', 'c-gender-code', 'c-mahad'],
    itemIds: ['a1', 'a3', 'a7', 'a8', 'a33', 'a38', 'a43'],
    memorialIds: ['m-mahad', 'm-columbia', 'm-chaityabhoomi'],
    x: 24,
    y: 34
  },
  {
    id: 'c-economics-rbi',
    name: 'Monetary Economics & Central Banking',
    theme: 'economics',
    shortDesc: 'Doctoral research on currency stability that shaped the Reserve Bank of India.',
    fullAnalysis: 'In "The Problem of the Rupee: Its Origin and Its Solution" (1923, LSE D.Sc. dissertation) and his testimony before the Royal Commission on Indian Currency and Finance (Hilton Young Commission, 1925), Dr. Ambedkar argued against the gold-exchange standard in favour of a modified gold standard with price stability as the primary objective. His framework directly influenced the legislative creation of the Reserve Bank of India.',
    coreDoctrine: 'The primary duty of central monetary policy is to maintain the internal purchasing power of the currency.',
    relatedNodes: ['c-labour', 'c-state-socialism', 'c-const-rights'],
    itemIds: ['a2', 'a6', 'a34'],
    memorialIds: ['m-lse', 'm-columbia'],
    x: 32,
    y: 65
  },
  {
    id: 'c-state-socialism',
    name: 'State Socialism & Economic Planning',
    theme: 'labour',
    shortDesc: 'Constitutional nationalisation of basic industries, land, and insurance.',
    fullAnalysis: 'In "States and Minorities" (1947), Dr. Ambedkar proposed that key industries, agricultural land, and collective farming should be established by constitutional mandate rather than left to ordinary legislative whim, protecting economic democracy from private monopolisation and authoritarian control.',
    coreDoctrine: 'State Socialism should be prescribed by the law of the Constitution so that democratic majorities cannot easily discard it.',
    relatedNodes: ['c-labour', 'c-economics-rbi', 'c-const-rights'],
    itemIds: ['a5', 'a16', 'a28', 'a9'],
    memorialIds: ['m-daic', 'm-parliament'],
    x: 52,
    y: 78
  },
  {
    id: 'c-gender-code',
    name: "Women's Rights & Hindu Code Bill",
    theme: 'gender',
    shortDesc: 'Legal equality in marriage, divorce, succession, and property rights for women.',
    fullAnalysis: 'As independent India\'s first Law Minister, Dr. Ambedkar drafted and fiercely defended the Hindu Code Bill to reform orthodox personal law. When orthodox parliamentary resistance stalled the bill, he made the principled decision to resign his cabinet post in October 1951, declaring legal parity for women as foundational to national progress.',
    coreDoctrine: 'I measure the progress of a community by the degree of progress which women have achieved.',
    relatedNodes: ['c-caste-annihilation', 'c-democracy', 'c-const-rights'],
    itemIds: ['a13', 'a12', 'a8'],
    memorialIds: ['m-parliament', 'm-daic'],
    x: 78,
    y: 60
  },
  {
    id: 'c-buddhism',
    name: 'Buddhism, Dhamma & Moral Emancipation',
    theme: 'buddhism',
    shortDesc: 'Revival of the Buddha\'s Dhamma grounded in reason, compassion, and human dignity.',
    fullAnalysis: 'After decades of religious inquiry beginning with his 1935 Yeola declaration, Dr. Ambedkar led the historic mass conversion at Nagpur on 14 October 1956. In "The Buddha and His Dhamma", he reinterpreted the Buddhist path not as pessimistic renunciation, but as a moral philosophy of social reconstruction: Prajna (wisdom), Karuna (compassion), and Samata (equality).',
    coreDoctrine: 'Religion must relate to facts of life and not to theories of God or soul. Dhamma is righteousness in human relations.',
    relatedNodes: ['c-caste-annihilation', 'c-democracy'],
    itemIds: ['a21', 'a42', 'a14', 'a18'],
    memorialIds: ['m-deekshabhoomi', 'm-chaityabhoomi'],
    x: 20,
    y: 84
  },
  {
    id: 'c-minorities',
    name: 'Safeguards for Depressed Classes & Minorities',
    theme: 'constitution',
    shortDesc: 'Institutional guarantees, electoral safeguards, and educational uplift.',
    fullAnalysis: 'From the Round Table Conferences (1930-32) through the Poona Pact to the Constituent Assembly, Dr. Ambedkar fought for political safeguards, reservation in legislatures and public services, and educational funds to overcome centuries of disenfranchisement.',
    coreDoctrine: 'Rights cannot be secured by mere legal assertions; they must be sustained by political power and executive enforcement.',
    relatedNodes: ['c-const-rights', 'c-democracy', 'c-state-socialism'],
    itemIds: ['a15', 'a41', 'a40', 'a5', 'a37'],
    memorialIds: ['m-parliament', 'm-lse', 'm-daic'],
    x: 72,
    y: 85
  }
]
