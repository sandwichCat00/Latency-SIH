export interface MemorialSite {
  id: string
  name: string
  city: string
  country: string
  period: string
  role: string
  description: string
  historicalSignificance: string
  institutionalFocus: string
  exhibitItems: string[] // Item IDs
  coordinates: string
  tags: string[]
}

export const MEMORIALS: MemorialSite[] = [
  {
    id: 'm-daic',
    name: 'Dr. Ambedkar International Centre (DAIC)',
    city: 'New Delhi',
    country: 'India',
    period: 'Established 2017 · 15 Janpath',
    role: 'Apex National Centre of Socio-Economic Research & Archival Preservation',
    description: 'Conceived as an intellectual powerhouse and digital memorial, DAIC serves as a centre of excellence for research in socio-economic transformation, constitutional democracy, and digital preservation of Dr. Ambedkar\'s heritage under the Ministry of Social Justice and Empowerment.',
    historicalSignificance: 'Located in the heart of the national capital, DAIC houses modern research chairs, high-capacity digital archives, 700-seat auditoriums, and interactive exhibition galleries dedicated to preserving the constitutional legacy for researchers and the public.',
    institutionalFocus: 'Centralized repository server, digitization of rare manuscripts, international policy research, and interactive touch-kiosk systems.',
    exhibitItems: ['a10', 'a12', 'a5', 'a20', 'a22'],
    coordinates: '28.6190° N, 77.2185° E',
    tags: ['institution', 'research', 'archive', 'delhi', 'kiosk']
  },
  {
    id: 'm-mahad',
    name: 'Chavdar Tale Water Satyagraha Memorial',
    city: 'Mahad, Maharashtra',
    country: 'India',
    period: '20 March 1927',
    role: 'Historic Civil Rights & Water Reclamation Satyagraha',
    description: 'On 20 March 1927, Dr. Ambedkar led thousands of Dalits to Chavdar Tale (Sweet Water Tank) in Mahad to drink water from the public reservoir, which had been barred to untouchables by orthodox custom.',
    historicalSignificance: 'Regarded as the Magna Carta of Dalit liberation, this satyagraha transformed the anti-caste movement from humble petitions into an assertive struggle for civic rights, human dignity, and equality. 20 March is commemorated annually as Social Empowerment Day.',
    institutionalFocus: 'Audio-visual records of grassroots assemblies, manuscript leaflets, and photo archives of early 20th-century mass mobilization.',
    exhibitItems: ['a17', 'a8', 'a1', 'a7'],
    coordinates: '18.0833° N, 73.4167° E',
    tags: ['satyagraha', 'water-rights', 'civil-rights', 'maharashtra']
  },
  {
    id: 'm-columbia',
    name: 'Columbia University & Dewey School',
    city: 'New York City',
    country: 'USA',
    period: '1913 – 1916',
    role: 'Intellectual Crucible & Graduate Scholarship',
    description: 'As a Baroda State scholar, Bhimrao Ambedkar arrived at Columbia University in July 1913. Living in Hartley Hall, he completed master\'s and doctoral coursework under pragmatist philosopher John Dewey, economist Edwin Seligman, and anthropologist Alexander Goldenweiser.',
    historicalSignificance: 'Here he authored "Castes in India: Their Mechanism, Genesis and Development" (1916). Dewey\'s conception of democracy as "associated living" profoundly influenced Ambedkar\'s lifetime formulation of social democracy.',
    institutionalFocus: 'Student notebooks, university course registrations, seminar papers, and early sociological essays.',
    exhibitItems: ['a23', 'a29', 'a33', 'a6'],
    coordinates: '40.8075° N, 73.9626° W',
    tags: ['education', 'new-york', 'philosophy', 'anthropology']
  },
  {
    id: 'm-lse',
    name: 'London School of Economics & Gray\'s Inn',
    city: 'London',
    country: 'United Kingdom',
    period: '1916 – 1923',
    role: 'Doctoral Monetary Economics & Jurisprudence',
    description: 'Studying under Edwin Cannan at the London School of Economics, Dr. Ambedkar completed his D.Sc. dissertation on "The Problem of the Rupee: Its Origin and Its Solution". Concurrently, he was called to the Bar at Gray\'s Inn.',
    historicalSignificance: 'His rigorous analysis of currency devaluation, imperial fiscal policies, and gold standards provided the technical foundation that later led to the establishment of India\'s central banking framework and the Reserve Bank of India.',
    institutionalFocus: 'D.Sc. examination manuscripts, reading notes, Gray\'s Inn legal journals, and monetary thesis prints.',
    exhibitItems: ['a2', 'a25', 'a34', 'a41'],
    coordinates: '51.5144° N, 0.1165° W',
    tags: ['economics', 'london', 'currency', 'jurisprudence']
  },
  {
    id: 'm-parliament',
    name: 'Central Hall of Parliament & Constitution Hall',
    city: 'New Delhi',
    country: 'India',
    period: '1946 – 1950',
    role: 'Architect of the Constitution of India',
    description: 'As Chairman of the Drafting Committee from 29 August 1947, Dr. Ambedkar steered the debates of the Constituent Assembly through 7,635 amendments, forging the fundamental law of the Republic of India.',
    historicalSignificance: 'He successfully incorporated universal adult franchise, abolished untouchability (Article 17), codified fundamental rights, and established constitutional safeguards for socially and educationally backward classes and religious minorities.',
    institutionalFocus: 'Debate transcripts, draft amendments with handwritten marginalia, facsimile signatures, and audio recordings.',
    exhibitItems: ['a10', 'a11', 'a12', 'a22', 'a30', 'a31'],
    coordinates: '28.6172° N, 77.2081° E',
    tags: ['constitution', 'parliament', 'drafting', 'delhi']
  },
  {
    id: 'm-deekshabhoomi',
    name: 'Deekshabhoomi Mass Conversion Stupa',
    city: 'Nagpur, Maharashtra',
    country: 'India',
    period: '14 October 1956',
    role: 'Revival of Buddhism & Emancipation from Caste',
    description: 'On Ashoka Vijaya Dashami (14 October 1956), Dr. Ambedkar, alongside Mrs. Savita Ambedkar, embraced Buddhism at Nagpur administered by the senior monk Mahasthavir Chandramani. He then administered the historic 22 Vows to over 500,000 followers.',
    historicalSignificance: 'Marked the modern revival of the Buddha\'s Dhamma in India as a moral religion based on human dignity, compassion, and equality, leading to the posthumous publication of his masterwork, "The Buddha and His Dhamma" (1957).',
    institutionalFocus: 'Conversion register records, 22 Vows leaflets, 1956 audio speeches, and original Marathi newspaper reportage.',
    exhibitItems: ['a18', 'a21', 'a42', 'a14'],
    coordinates: '21.1278° N, 79.0664° E',
    tags: ['buddhism', 'nagpur', 'conversion', 'dhamma']
  },
  {
    id: 'm-chaityabhoomi',
    name: 'Chaityabhoomi National Memorial',
    city: 'Dadar, Mumbai',
    country: 'India',
    period: '6 December 1956 – Present',
    role: 'Sacred Resting Place & Annual Pilgrimage of Millions',
    description: 'Located at Dadar Chowpatty overlooking the Arabian Sea, Chaityabhoomi is the memorial resting place where Dr. Ambedkar was cremated with Buddhist rites on 7 December 1956.',
    historicalSignificance: 'Every year on 6 December (Mahaparinirvan Diwas), over a million citizens, scholars, and dignitaries gather from across the world to pay homage, study books, and reaffirm democratic solidarity.',
    institutionalFocus: 'Memorial photographs, funeral processions newsreels, commemorative stamps, and visitor oral histories.',
    exhibitItems: ['a20', 'a1', 'a8', 'a16'],
    coordinates: '19.0270° N, 72.8364° E',
    tags: ['memorial', 'mumbai', 'homage', 'pilgrimage']
  }
]
