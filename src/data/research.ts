export interface Src {
  id: string
  label: string
  page: number
  excerpt: string
  relevanceScore: number
}

export interface Res {
  q: string
  keys: string[]
  theme: string
  answer: string
  doctrinalInsight: string
  confidenceScore: number
  srcs: Src[]
}

export const RESEARCH: Res[] = [
  {
    q: 'How did Ambedkar approach constitutional rights and judicial remedies?',
    keys: ['constitutional', 'rights', 'constitution', 'remedies', 'article32', 'article 32'],
    theme: 'Constitutional Jurisprudence',
    confidenceScore: 99.4,
    answer: 'Dr. Ambedkar approached constitutional rights as non-negotiable guarantees rather than decorative policy declarations. He insisted that rights without institutional remedies are illusory; hence he designated Article 32 (Right to Constitutional Remedies) as the "Heart and Soul" of the Indian Constitution, granting citizens the direct prerogative to move the Supreme Court via writs of Habeas Corpus, Mandamus, Prohibition, Quo Warranto, and Certiorari.',
    doctrinalInsight: 'Constitutional morality requires that minority and individual rights cannot be left to shifting legislative majorities.',
    srcs: [
      {
        id: 'a11',
        label: 'CONSTITUENT ASSEMBLY DEBATE (9 DEC 1948)',
        page: 123,
        excerpt: 'An article which confers rights cannot be of any utility unless there is an effective machinery provided for the enforcement of those rights. While the rights are essential, the remedies to enforce them are even more essential. It is the very soul of the Constitution and the very heart of it.',
        relevanceScore: 99.8
      },
      {
        id: 'a5',
        label: 'STATES AND MINORITIES (1947)',
        page: 42,
        excerpt: 'The State shall guarantee to every citizen freedom of person, freedom from exploitation, and unhindered access to all public places, wells, and utilities, backed by statutory penal sanctions.',
        relevanceScore: 98.4
      },
      {
        id: 'a10',
        label: 'PRESENTATION OF THE DRAFT CONSTITUTION (4 NOV 1948)',
        page: 38,
        excerpt: 'The Draft Constitution has adopted the individual, not the village, as its basic unit of rights, shielding the citizen from local caste tyrannies.',
        relevanceScore: 97.5
      }
    ]
  },
  {
    q: 'What was Dr. Ambedkar’s analysis of the caste system and its religious foundations?',
    keys: ['caste', 'religion', 'shudras', 'annihilation', 'untouchability', 'shastra'],
    theme: 'Social Emancipation & Anthropology',
    confidenceScore: 99.6,
    answer: 'Dr. Ambedkar demonstrated that caste is not merely an occupational division of labour, but an involuntary biological division of labourers arranged in a hierarchy of graded inequality. He proved that inter-caste dining or surface philanthropy cannot eradicate caste, because caste is sanctified by the divine authority of Hindu scriptures (Shastras and Smritis). True annihilation demands an intellectual revolution that destroys the infallibility of sacred texts.',
    doctrinalInsight: 'Caste is not a physical wall, but a psychological notion sustained by religious sanction; destroying it requires ideological liberation.',
    srcs: [
      {
        id: 'a1',
        label: 'ANNIHILATION OF CASTE (1936)',
        page: 14,
        excerpt: 'Caste is not merely division of labour. It is also a division of labourers... graded one above the other. You cannot build anything on the foundations of caste. You cannot build up a nation, you cannot build up an ethical morality.',
        relevanceScore: 99.9
      },
      {
        id: 'a33',
        label: 'CASTES IN INDIA (COLUMBIA ANTHROPOLOGY, 1916)',
        page: 8,
        excerpt: 'Endogamy is the only one characteristic that is peculiar to caste... maintained by enforcing female subjugation through Sati, child marriage, and enforced widowhood.',
        relevanceScore: 99.1
      },
      {
        id: 'a3',
        label: 'WHO WERE THE SHUDRAS? (1946)',
        page: 88,
        excerpt: 'Shudras were originally sovereign Aryan Kshatriyas who were degraded through the denial of the Upanayana ceremony following dynastic conflicts with the priesthood.',
        relevanceScore: 98.3
      }
    ]
  },
  {
    q: 'What were Dr. Ambedkar’s foundational economic and central banking ideas?',
    keys: ['economics', 'economic', 'rupee', 'labour', 'finance', 'rbi', 'currency', 'provincial'],
    theme: 'Monetary Economics & Public Finance',
    confidenceScore: 99.2,
    answer: 'In his doctoral dissertations at Columbia and the London School of Economics, Dr. Ambedkar made path-breaking contributions to fiscal federalism and monetary theory. In "The Problem of the Rupee" (1923), he argued against imperial gold-exchange standards that enriched currency speculators, advocating for an internal price-stability mandate. His evidence before the 1925 Hilton Young Commission formed the conceptual foundation for the establishment of the Reserve Bank of India (RBI).',
    doctrinalInsight: 'A fluctuating currency robs wage earners and agrarian debtors; central banks must prioritize domestic purchasing power over foreign exchange pegs.',
    srcs: [
      {
        id: 'a2',
        label: 'THE PROBLEM OF THE RUPEE (1923)',
        page: 31,
        excerpt: 'Nothing will stabilize the rupee unless we stabilize its general purchasing power. That means trade stability cannot be attained without internal price stability.',
        relevanceScore: 99.7
      },
      {
        id: 'a34',
        label: 'EVOLUTION OF PROVINCIAL FINANCE IN BRITISH INDIA (1925)',
        page: 114,
        excerpt: 'No scheme of provincial autonomy can be real without financial autonomy. The right to raise revenues and determine expenditure priorities must belong to representative assemblies.',
        relevanceScore: 98.6
      },
      {
        id: 'a6',
        label: 'NOTES ON PROVINCIAL FINANCE (MANUSCRIPT, 1921)',
        page: 28,
        excerpt: 'A subordinate government dependent upon discretionary grants cannot plan education, sanitation, or agricultural relief for the masses.',
        relevanceScore: 96.9
      }
    ]
  },
  {
    q: 'What was Dr. Ambedkar’s conception of democracy beyond voting and elections?',
    keys: ['democracy', 'democratic', 'equality', 'fraternity', 'liberty', 'contradictions'],
    theme: 'Political Philosophy & Democratic Theory',
    confidenceScore: 99.5,
    answer: 'Dr. Ambedkar defined democracy not merely as a mechanical parliamentary structure or periodic ballot, but as "a mode of associated living, of conjoint communicated experience." In his 25 November 1949 speech, he warned that political democracy (one person, one vote) cannot endure if it sits upon an economic and social structure that denies "one person, one value." He insisted that Liberty, Equality, and Fraternity form an indivisible trinity.',
    doctrinalInsight: 'Divorcing equality from liberty produces the supremacy of the few; divorcing liberty from equality produces individual despotism; divorcing both from fraternity destroys society.',
    srcs: [
      {
        id: 'a12',
        label: 'CONCLUDING SPEECH, CONSTITUENT ASSEMBLY (25 NOV 1949)',
        page: 7,
        excerpt: 'On the 26th of January 1950, we are going to enter into a life of contradictions. In politics we will have equality and in social and economic life we will have inequality... We must remove this contradiction at the earliest possible moment.',
        relevanceScore: 99.9
      },
      {
        id: 'a19',
        label: 'VOICE OF AMERICA RADIO BROADCAST (1954)',
        page: 1,
        excerpt: 'Democracy requires that there must be no glaring inequalities in society, no suppressed class, and an active opposition that holds the ruling party to account.',
        relevanceScore: 99.2
      },
      {
        id: 'a36',
        label: 'RANADE, GANDHI AND JINNAH (1943)',
        page: 22,
        excerpt: 'Hero-worship in politics is a sure road to degradation and to eventual dictatorship. In politics, Bhakti or hero-worship is a certain road to ruin.',
        relevanceScore: 98.1
      }
    ]
  },
  {
    q: 'Why did Dr. Ambedkar resign over the Hindu Code Bill in 1951?',
    keys: ['hindu code', 'women', 'gender', 'resignation', 'marriage', 'divorce', 'inheritance'],
    theme: 'Gender Justice & Legal Reform',
    confidenceScore: 99.7,
    answer: 'Dr. Ambedkar resigned as India’s first Law Minister on 10 October 1951 after conservative members within Parliament and the cabinet sabotaged the comprehensive Hindu Code Bill. The bill sought to end patriarchal oppression by codifying women\'s absolute property inheritance rights, outlawing polygamy, recognizing civil inter-caste marriages, and providing legal divorce. He considered women\'s legal emancipation the ultimate barometer of national civilization.',
    doctrinalInsight: 'You cannot build a democratic republic while keeping half of the population in legal and economic bondage.',
    srcs: [
      {
        id: 'a13',
        label: 'STATEMENT ON HINDU CODE BILL AND RESIGNATION (1951)',
        page: 4,
        excerpt: 'To leave woman in the status of a chattel, denied right to inherit property, denied right to divorce, and yet speak of fundamental rights in the Constitution is sheer hypocrisy.',
        relevanceScore: 99.8
      },
      {
        id: 'a1',
        label: 'ANNIHILATION OF CASTE (1936)',
        page: 29,
        excerpt: 'I measure the progress of a community by the degree of progress which women have achieved.',
        relevanceScore: 98.9
      }
    ]
  },
  {
    q: 'Why did Dr. Ambedkar embrace Buddhism at Deekshabhoomi in 1956?',
    keys: ['buddhism', 'conversion', 'buddha', 'dhamma', 'nagpur', 'yeola', '1956'],
    theme: 'Spiritual Emancipation & Dhamma',
    confidenceScore: 99.8,
    answer: 'Having pledged at Yeola in 1935 that he "would not die a Hindu," Dr. Ambedkar conducted a 21-year rigorous comparative study of world religions. He chose the Buddha’s Dhamma because it rejected divine revelation, superstitious rites, and caste hierarchies in favour of reason, human dignity, and morality. On 14 October 1956 at Nagpur, he administered the 22 Vows to half a million followers, reviving Buddhism in its homeland as Navayana—a moral philosophy of social reconstruction.',
    doctrinalInsight: 'In religion, morality is secondary to God; in Dhamma, morality takes the place of God and governs human relations with compassion and equality.',
    srcs: [
      {
        id: 'a21',
        label: 'THE BUDDHA AND HIS DHAMMA (MANUSCRIPT DRAFT, 1955)',
        page: 104,
        excerpt: 'Dhamma is social and ethical. The purpose of Dhamma is to rebuild the world in righteousness. In Dhamma, morality takes the place of God.',
        relevanceScore: 99.8
      },
      {
        id: 'a42',
        label: 'BUDDHISM AND COMMUNISM (KATHMANDU, 1956)',
        page: 12,
        excerpt: 'Communism gives you bread, but takes away your freedom. Buddhism gives you both bread and freedom, because it builds equality upon the rock of fraternity.',
        relevanceScore: 99.2
      },
      {
        id: 'a14',
        label: 'YEOLA CONFERENCE ADDRESS (1935)',
        page: 5,
        excerpt: 'I was born an untouchable Hindu. That was not in my hands. But I assure you, I will not die a Hindu!',
        relevanceScore: 98.7
      }
    ]
  },
  {
    q: 'What were the terms and constitutional significance of the Poona Pact (1932)?',
    keys: ['poona', 'pact', 'electorate', 'representation', 'gandhi', 'yerwada', 'communal award'],
    theme: 'Electoral History & Minorities',
    confidenceScore: 99.3,
    answer: 'The Poona Pact was signed on 24 September 1932 at Yerwada Jail between Dr. Ambedkar and caste Hindu leaders to resolve Mahatma Gandhi’s fast-unto-death against the British Communal Award. The pact replaced separate electorates with joint electorates with reserved seats, more than doubling the reserved legislative seats for the Depressed Classes from 71 to 148 in provincial legislatures, plus 18% in the Central Assembly, alongside non-discrimination guarantees in public services.',
    doctrinalInsight: 'Political representation must be backed by institutional autonomy and protective guarantees against majoritarian capture.',
    srcs: [
      {
        id: 'a15',
        label: 'THE POONA PACT ORIGINAL AGREEMENT (1932)',
        page: 1,
        excerpt: 'There shall be seats reserved for the Depressed Classes out of the general electorate... The total seats in provincial legislatures increased to 148.',
        relevanceScore: 99.9
      },
      {
        id: 'a41',
        label: 'FIRST ROUND TABLE CONFERENCE ADDRESS (1930)',
        page: 3,
        excerpt: 'We want a government in which men in power will owe their seats to our votes and will have the courage to strike down oppressive customs by the law of the land.',
        relevanceScore: 98.4
      }
    ]
  }
]

export interface MediaChapter {
  time: number // in seconds
  title: string
}

export interface TranscriptSegment {
  start: number // in seconds
  end: number
  speaker: string
  text: string
}

export interface Media {
  id: string
  title: string
  kind: string
  lang: string
  dur: string
  durationSec: number
  location: string
  accessionNo: string
  preservationGrade: string
  transcript: string
  chapters: MediaChapter[]
  segments: TranscriptSegment[]
  rel: string[]
}

export const MEDIA: Media[] = [
  {
    id: 'm1',
    title: 'Historic Radio Broadcast: On Democracy and Fraternity',
    kind: 'Speech recording',
    lang: 'English',
    dur: '18:40',
    durationSec: 1120,
    location: 'Voice of America & BBC Overseas Service, New Delhi',
    accessionNo: 'DAIC-AV-1954-VOA-01',
    preservationGrade: '24-bit/96kHz WAV Master from 1/4" Archival Tape Reel',
    transcript: 'Dr. B. R. Ambedkar delivers his celebrated philosophical discourse on why democracy cannot survive as a mere political mechanism without social fraternity and economic justice.',
    chapters: [
      { time: 0, title: 'Introduction: Concept of Associated Living' },
      { time: 240, title: 'First Requisite: Absence of Glaring Inequalities' },
      { time: 540, title: 'Second Requisite: Robust Democratic Opposition' },
      { time: 840, title: 'Third Requisite: Equality in Law & Moral Conscience' }
    ],
    segments: [
      {
        start: 0,
        end: 18,
        speaker: 'Dr. B. R. Ambedkar',
        text: 'What are the requisites for the successful working of democracy? The first condition, to my mind, is that there must be no glaring inequalities in society.'
      },
      {
        start: 19,
        end: 38,
        speaker: 'Dr. B. R. Ambedkar',
        text: 'There must not be an oppressed class. There must not be a suppressed class. A society where one section possesses all the wealth and another starves cannot remain democratic.'
      },
      {
        start: 39,
        end: 62,
        speaker: 'Dr. B. R. Ambedkar',
        text: 'The second condition is the existence of an opposition. A democracy where there is no opposition to challenge the government degenerates into an autocracy.'
      },
      {
        start: 63,
        end: 88,
        speaker: 'Dr. B. R. Ambedkar',
        text: 'And above all, democracy requires fraternity—the mutual respect of citizens for each other as equal moral beings.'
      }
    ],
    rel: ['a12', 'a19', 'a10']
  },
  {
    id: 'm2',
    title: 'Recollections of the Constituent Assembly & Drafting Work',
    kind: 'Interview',
    lang: 'English',
    dur: '24:10',
    durationSec: 1450,
    location: 'Constitution House, Curzon Road, New Delhi',
    accessionNo: 'DAIC-AV-1952-CA-02',
    preservationGrade: 'Master Magnetic Reel Transfer · Restored Denoised Audio',
    transcript: 'Reflective conversation on the drafting of the Constitution, resolving conflicting federal jurisdictions, and safeguarding fundamental rights against emergency powers.',
    chapters: [
      { time: 0, title: 'Mandate of the Drafting Committee' },
      { time: 360, title: 'Balancing Central Authority & States Rights' },
      { time: 780, title: 'Article 32 and Judicial Independence' }
    ],
    segments: [
      {
        start: 0,
        end: 22,
        speaker: 'Interviewer',
        text: 'Dr. Ambedkar, when the Drafting Committee was constituted in August 1947, how did you envision your responsibility?'
      },
      {
        start: 23,
        end: 55,
        speaker: 'Dr. B. R. Ambedkar',
        text: 'I came into the Constituent Assembly with no greater ambition than to safeguard the interests of my people. But when invited to chair the committee, I dedicated every ounce of energy to forge a charter worthy of a free republic.'
      }
    ],
    rel: ['a10', 'a11', 'a22']
  },
  {
    id: 'm3',
    title: 'Social Reform and the Annihilation of Caste',
    kind: 'Lecture',
    lang: 'Marathi',
    dur: '31:05',
    durationSec: 1865,
    location: 'Damodar Hall, Parel, Bombay',
    accessionNo: 'DAIC-AV-1936-DH-03',
    preservationGrade: 'Shellac 78 RPM Sound Recording · Optical Sound Restoration',
    transcript: 'Address delivered in Marathi before industrial workers and students on why political independence without the annihilation of caste will benefit only the privileged elite.',
    chapters: [
      { time: 0, title: 'Chavdar Tale to Lahore Address' },
      { time: 420, title: 'Why Caste Hinders Working Class Unity' },
      { time: 900, title: 'Education and Moral Awakening' }
    ],
    segments: [
      {
        start: 0,
        end: 28,
        speaker: 'Dr. B. R. Ambedkar',
        text: 'बंधू आणि भगिनींनो, जोपर्यंत या देशातील कामगार जात मानतो, तोपर्यंत भांडवलशाहीविरुद्ध त्याचा लढा यशस्वी होऊ शकत नाही.'
      },
      {
        start: 29,
        end: 65,
        speaker: 'Dr. B. R. Ambedkar',
        text: 'जातीचा पाया हा विषमतेवर आणि अज्ञानावर आधारलेला आहे. ज्ञानाचा दिवा लावा, शिका आणि संघटित व्हा!'
      }
    ],
    rel: ['a1', 'a14', 'a8']
  },
  {
    id: 'm4',
    title: 'Documentary: Dr. Babasaheb Ambedkar — Architect of Modern India',
    kind: 'Documentary',
    lang: 'Hindi',
    dur: '52:00',
    durationSec: 3120,
    location: 'Films Division, Ministry of Information & Broadcasting',
    accessionNo: 'DAIC-AV-1991-FD-04',
    preservationGrade: '35mm Film Telecine 4K Digital Restoration Master',
    transcript: 'Official national archival documentary tracing his birth in Mhow, higher education at Columbia and London, leadership at Mahad and Kalaram, piloting the Constitution, and reviving Buddhism at Deekshabhoomi.',
    chapters: [
      { time: 0, title: 'Early Life in Mhow & Satara' },
      { time: 600, title: 'Columbia & LSE Scholar' },
      { time: 1400, title: 'The Mahad Satyagraha & Poona Pact' },
      { time: 2200, title: 'Framing the Constitution of India' },
      { time: 2800, title: 'Deekshabhoomi & Bharat Ratna Legacy' }
    ],
    segments: [
      {
        start: 0,
        end: 25,
        speaker: 'Narrator',
        text: 'डॉ. भीमराव रामजी आंबेडकर: एक ऐसा व्यक्तित्व जिन्होंने सदियों पुरानी सामाजिक गुलामी की बेड़ियों को ज्ञान और संविधान के बल पर तोड़ दिया।'
      },
      {
        start: 26,
        end: 58,
        speaker: 'Narrator',
        text: 'कोलंबिया विश्वविद्यालय और लंदन स्कूल ऑफ इकोनॉमिक्स से अर्थशास्त्र में दोहरी डॉक्टरेट हासिल करने वाले बाबासाहेब स्वतंत्र भारत के प्रथम विधि मंत्री और संविधान निर्माता बने।'
      }
    ],
    rel: ['a20', 'a10', 'a18']
  },
  {
    id: 'm5',
    title: 'Monetary Economics and the Foundation of the Central Bank',
    kind: 'Speech recording',
    lang: 'English',
    dur: '12:30',
    durationSec: 750,
    location: 'Bombay Economic Association Lecture Series',
    accessionNo: 'DAIC-AV-1935-BEA-05',
    preservationGrade: 'Acetate Disc Transcription Master · 24-bit Restoration',
    transcript: 'Scholarly talk reviewing the lessons of the Hilton Young Commission and the establishment of the Reserve Bank of India in 1935.',
    chapters: [
      { time: 0, title: 'The Problem of the Rupee Revisited' },
      { time: 300, title: 'Managing Currency for the Common People' }
    ],
    segments: [
      {
        start: 0,
        end: 30,
        speaker: 'Dr. B. R. Ambedkar',
        text: 'A central bank must not be a tool of the government to print money at will to cover profligate spending. It must maintain the purchasing power of the poor man\'s rupee.'
      }
    ],
    rel: ['a2', 'a16', 'a34']
  },
  {
    id: 'm6',
    title: 'Educational Emancipation and Siddharth College',
    kind: 'Interview',
    lang: 'English',
    dur: '19:45',
    durationSec: 1185,
    location: 'People\'s Education Society, Anand Bhavan, Bombay',
    accessionNo: 'DAIC-AV-1953-PES-06',
    preservationGrade: 'Magnetic Tape Sound Recording · DAIC Master Library',
    transcript: 'Interview discussing why higher education institutions were established in Mumbai and Aurangabad to foster scientific rationalism and social mobility.',
    chapters: [
      { time: 0, title: 'Mission of the People\'s Education Society' },
      { time: 450, title: 'Evening College for Working Class Youths' }
    ],
    segments: [
      {
        start: 0,
        end: 26,
        speaker: 'Dr. B. R. Ambedkar',
        text: 'We established Siddharth College so that a mill worker or a clerk could earn his living by day and acquire university degrees by night.'
      }
    ],
    rel: ['a27', 'a32']
  },
  {
    id: 'm7',
    title: 'Historic Newsreel: Republic Day — 26 January 1950',
    kind: 'Documentary',
    lang: 'English',
    dur: '08:20',
    durationSec: 500,
    location: 'Rajpath & Irwin Stadium, New Delhi',
    accessionNo: 'DAIC-AV-1950-NR-07',
    preservationGrade: 'Original 35mm Newsreel Sound Negative · Archival DCI Scan',
    transcript: 'Visual and sound newsreel capturing the military parade, the ceremonial reading of the Preamble, and the birth of the sovereign Republic of India.',
    chapters: [
      { time: 0, title: 'Reading of the Proclamation' },
      { time: 180, title: 'Swearing-in of the First President' }
    ],
    segments: [
      {
        start: 0,
        end: 24,
        speaker: 'Newsreel Announcer',
        text: 'Amidst thirty-one gun salutes, India proclaims itself a Sovereign Democratic Republic under the Constitution crafted by the nation\'s founding leaders.'
      }
    ],
    rel: ['a31', 'a10', 'a12']
  }
]
