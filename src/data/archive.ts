export interface Item {
  id: string
  title: string
  year: number
  cat: string
  lang: string
  desc: string
  excerpt: string
  summary: string
  fullText: string
  accessionNo: string
  preservationStatus: string
  repository: string
  ocrConfidence: string
  tags: string[]
  conceptNodes: string[]
  transText?: {
    hi?: string
    mr?: string
  }
}

export const CATS = [
  'MANUSCRIPTS',
  'WRITINGS',
  'SPEECHES',
  'CONSTITUTIONAL DEBATES',
  'PHOTOGRAPHS',
  'LETTERS',
  'AUDIO',
  'VIDEO'
]

export const ARCHIVE: Item[] = [
  {
    id: 'a1',
    title: 'Annihilation of Caste',
    year: 1936,
    cat: 'WRITINGS',
    lang: 'English',
    desc: 'Undelivered presidential address prepared for the 1936 annual conference of the Jat-Pat-Todak Mandal of Lahore; a foundational critique of caste hierarchy and Hindu scriptural orthodoxy.',
    excerpt: 'Caste is not merely a division of labour. It is also a division of labourers. Civilised society undoubtedly needs division of labour. But in no civilised society is division of labour accompanied by this unnatural division of labourers into water-tight compartments.',
    summary: 'Executive Summary:\n• Central Thesis: Caste is not merely functional occupational division, but an involuntary biological hierarchy sanctified by religious scripture.\n• Core Argument: Inter-caste dining and inter-caste marriage are palliative; genuine annihilation requires destroying the divine authority of the Shastras and Smritis.\n• Democratic Principle: A society divided into endogamous castes lacks fraternity, preventing the emergence of a genuine public conscious and shared social values.\n• Historical Impact: Translated into more than 15 languages, remaining one of the most seminal philosophical treatises on social equality and human emancipation in the modern world.',
    fullText: `Section I: The Jat-Pat-Todak Mandal invited me to preside over their annual conference at Lahore. When they demanded advance submission of the address and insisted on deletions of passages criticizing the Vedas and Smritis, I refused to alter a single comma.\n\nSection IV: It is argued that Caste is only another name for division of labour. First, caste system is not merely division of labour. It is also a division of labourers. It is an unnatural division of labourers into water-tight compartments. It is an hierarchy in which the divisions of labourers are graded one above the other.\n\nSection XIV: Caste has killed public spirit. Caste has made any activity for a common good impossible. Caste has destroyed the sense of public charity. Caste has made that morality which is based on justice impossible.\n\nSection XX: You cannot build anything on the foundations of caste. You cannot build up a nation, you cannot build up an ethical morality. Anything you will build on the foundations of caste will crack and will never be a whole.`,
    accessionNo: 'DAIC-WR-1936-AC-001',
    preservationStatus: 'Master Cold Vault Preserved · Microfilm Reel 12 · 600 DPI Uncompressed TIFF',
    repository: 'Dr. Ambedkar International Centre Archives / National Library of India',
    ocrConfidence: '99.4%',
    tags: ['caste', 'religion', 'reform', 'equality', 'philosophy'],
    conceptNodes: ['c-caste-annihilation', 'c-democracy', 'c-gender-code'],
    transText: {
      hi: 'जाति का विनाश (1936): जाति केवल श्रम का विभाजन नहीं है, यह श्रमिकों का अप्राकृतिक विभाजन है। किसी भी सभ्य समाज में श्रम विभाजन के साथ श्रमिकों का ऐसा श्रेणीबद्ध विभाजन नहीं होता।',
      mr: 'जातीचा विनाश (1936): जात ही केवळ श्रमांची विभागणी नाही, तर ती श्रमिकांची विभागणी आहे. विषमतेवर आधारलेल्या समाजात बंधुभाव आणि लोकशाही टिकू शकत नाही.'
    }
  },
  {
    id: 'a2',
    title: 'The Problem of the Rupee: Its Origin and Its Solution',
    year: 1923,
    cat: 'WRITINGS',
    lang: 'English',
    desc: 'Doctoral dissertation submitted to the London School of Economics, examining imperial monetary policy, currency depreciation, and central banking principles in British India.',
    excerpt: 'Nothing will stabilize the rupee unless we stabilize its general purchasing power. That means trade stability cannot be attained without internal price stability.',
    summary: 'Executive Summary:\n• Monetary Framework: Analyzes the shift from silver monometallism to the gold-exchange standard between 1800 and 1923.\n• Central Banking: Served as the technical blueprint for the Hilton Young Commission (1925–26) that recommended the establishment of the Reserve Bank of India.\n• Doctrinal Insight: Argued that fixing exchange rates artificially harms agrarian producers and debtors while subsidizing imperial financiers, advocating for price stability as the primary mandate of monetary authorities.',
    fullText: `Chapter I: From A Double Standard to A Silver Monometallism (1793-1835). The East India Company faced a chaotic system of multi-currency circulation with fluctuating silver and gold bimetallic ratios.\n\nChapter IV: Towards A Gold Standard (1893-1898). The Fowler Committee recommendations and the closure of Indian mints to the free coinage of silver marked a transitional era fraught with inflationary pressure.\n\nChapter VII: A Stable Currency Standard. A currency standard that fluctuates in internal purchasing power robs the labourer and the debtor. True economic stability requires currency management dedicated to price level equilibrium.`,
    accessionNo: 'DAIC-WR-1923-PR-002',
    preservationStatus: 'LSE Archival Facsimile Master · 600 DPI Scan · Neutral pH Acid-Free Preservation',
    repository: 'British Library of Political and Economic Science / DAIC Central Repository',
    ocrConfidence: '98.9%',
    tags: ['economics', 'currency', 'rupee', 'rbi', 'banking', 'finance'],
    conceptNodes: ['c-economics-rbi', 'c-state-socialism'],
    transText: {
      hi: 'रुपये की समस्या (1923): जब तक हम रुपये की आंतरिक क्रय शक्ति को स्थिर नहीं करेंगे, तब तक मुद्रा का स्थायित्व संभव नहीं है।',
      mr: 'रुपयाचा प्रश्न (1923): अंतर्गत किंमत पातळी स्थिर ठेवल्याशिवाय चलनाचे स्थैर्य साध्य होऊ शकत नाही.'
    }
  },
  {
    id: 'a3',
    title: 'Who Were the Shudras?',
    year: 1946,
    cat: 'WRITINGS',
    lang: 'English',
    desc: 'Rigorous historical and textual inquiry into the origins of the fourth varna in ancient Indo-Aryan society, dedicated to Mahatma Jyotirao Phule.',
    excerpt: 'The Shudras were originally one of the Aryan communities in the Solar race. There was a time when the Aryan society recognized only three varnas: Brahmins, Kshatriyas and Vaishyas. The Shudras were Kshatriyas.',
    summary: 'Executive Summary:\n• Historical Inquiry: Utilizes comparative philology, Vedic hymns, and Mahabharata textual recensions to trace social stratification.\n• Thesis: Shudras were originally sovereign Kshatriya rulers who fell into ritual degradation following prolonged dynastic conflicts with Brahminical priesthood.\n• Dedication: Dedicated to Mahatma Jyotirao Phule in recognition of his early struggle for the education and emancipation of non-Brahmins.',
    fullText: `Preface: In presenting this work, I am conscious of the gravity of the subject. The Shudra question is not merely ancient history; it is a live question of sociological jurisprudence.\n\nChapter II: The Vedic Evidence. In the Rigveda, the Purusha Sukta stands alone as an interpolation attempting to confer cosmic sanction on a fourfold division.\n\nChapter XI: Degredation of the Shudras. Through the denial of Upanayana (investiture ceremony), the priestly class systematically disenfranchised the Shudra community, transforming political conflict into hereditary social exclusion.`,
    accessionNo: 'DAIC-WR-1946-WS-003',
    preservationStatus: 'Digitized from First Edition Thacker & Co. · OCR Neural Multi-pass',
    repository: 'Dr. Ambedkar International Centre Archives',
    ocrConfidence: '99.1%',
    tags: ['caste', 'history', 'society', 'phule', 'antiquity'],
    conceptNodes: ['c-caste-annihilation'],
    transText: {
      hi: 'शूद्र कौन थे? (1946): प्राचीन समाज में शूद्र मूलतः सूर्यवंशी क्षत्रिय थे, जिन्हें बाद में धार्मिक अनुष्ठानों से वंचित कर पदावनत किया गया।',
      mr: 'शूद्र कोण होते? (1946): शूद्र हे मूळचे क्षत्रिय होते; उपनयन संस्कार नाकारून त्यांना सामाजिक विषमतेत ढकलण्यात आले.'
    }
  },
  {
    id: 'a4',
    title: 'Pakistan or the Partition of India',
    year: 1940,
    cat: 'WRITINGS',
    lang: 'English',
    desc: 'Exhaustive geopolitical and constitutional analysis of the Muslim League\'s Pakistan Resolution, evaluating defence economics, boundary commissions, and national unity.',
    excerpt: 'A safe army is better than a safe frontier. If the army is communalized and unstable, borders cannot protect the republic.',
    summary: 'Executive Summary:\n• Geopolitical Analysis: Systematically examines demographic distributions, military recruitment patterns, and fiscal solvency of prospective partitioned provinces.\n• Realism over Sentiment: Urged political leaders to confront hard sociological realities rather than indulging in utopian assumptions of forced co-existence.\n• Influence: Regarded by contemporary statesmen including Lord Wavell and Sardar Patel as the definitive objective analysis of the constitutional impasse.',
    fullText: `Part I: The Muslim Case for Pakistan. Historical grievances, linguistic divergence, and political fears of majoritarian dominance analyzed with demographic precision.\n\nPart III: What If Not Pakistan? The untenable alternatives of weak federations, parity formulas, and military instability evaluated from constitutional principles.\n\nEpilogue: The boundary lines must be drawn with human compassion, economic viability, and absolute mutual sovereign respect.`,
    accessionNo: 'DAIC-WR-1940-PK-004',
    preservationStatus: 'First Edition Thacker & Co. · Cold Archive Vault C',
    repository: 'National Archives of India / DAIC Archival Unit',
    ocrConfidence: '98.7%',
    tags: ['partition', 'politics', 'democracy', 'borders', 'defence'],
    conceptNodes: ['c-minorities', 'c-democracy'],
    transText: {
      hi: 'पाकिस्तान या भारत का विभाजन (1940): राष्ट्रीय सीमाओं की सुरक्षा सेना के सांप्रदायिक संतुलन और लोकतांत्रिक निष्ठा पर निर्भर करती है।',
      mr: 'पाकिस्तान किंवा भारताची फाळणी (1940): भौगोलिक सीमांपेक्षा लष्कराची अंतर्गत निष्ठा आणि लोकशाही मूल्ये अधिक महत्त्वाची आहेत.'
    }
  },
  {
    id: 'a5',
    title: 'States and Minorities: What are Their Rights and How to Secure Them',
    year: 1947,
    cat: 'MANUSCRIPTS',
    lang: 'English',
    desc: 'Constitutional memorandum submitted to the Constituent Assembly on behalf of the All India Scheduled Castes Federation; enshrining fundamental rights and constitutional state socialism.',
    excerpt: 'The Constitution shall declare that State Socialism in key industries, agriculture and insurance is an essential element of the fundamental law of the land.',
    summary: 'Executive Summary:\n• Draft Constitution Model: Proposes a complete working constitutional draft with fundamental rights, remedies, and minority safeguards.\n• Constitutional State Socialism: Mandates state ownership of key industries, nationalization of life insurance, and collective agriculture to safeguard working classes from private capitalism.\n• Anti-Discrimination Penalties: Proposed criminal penalties for boycotts and social ostracism, which later formed the genesis of Article 17 and the Civil Rights Protection laws.',
    fullText: `Article II, Section II: Fundamental Rights of Citizens. The State shall guarantee to every citizen freedom of person, freedom from exploitation, and unhindered access to all public places, wells, and utilities.\n\nClause 4: State Socialism. 1. That key industries shall be owned and run by the State; 2. That basic industries shall be owned and run by the State or by Corporations established by the State; 3. That insurance shall be a monopoly of the State.\n\nSchedule B: Remedies against Social Boycott. The practice of untouchability or social quarantine by any community against any individual shall be declared a cognizable crime punishable by hard imprisonment.`,
    accessionNo: 'DAIC-MS-1947-SM-005',
    preservationStatus: 'Original Typescript with Marginal Annotations · Deacidified Archivist Mylar Sleeve',
    repository: 'Dr. Ambedkar International Centre Rare Manuscript Vault',
    ocrConfidence: '99.5%',
    tags: ['rights', 'minorities', 'constitutional', 'economics', 'socialism', 'manuscript'],
    conceptNodes: ['c-const-rights', 'c-state-socialism', 'c-minorities'],
    transText: {
      hi: 'राज्य और अल्पसंख्यक (1947): मुख्य उद्योग, कृषि और बीमा को संविधान के अंतर्गत राजकीय समाजवाद के अधीन होना चाहिए।',
      mr: 'राज्य आणि अल्पसंख्याक (1947): मूलभूत उद्योगांचे राष्ट्रीयीकरण करून आर्थिक लोकशाहीचे संविधानात संरक्षण केले पाहिजे.'
    }
  },
  {
    id: 'a6',
    title: 'Notes on Provincial Finance (Manuscript)',
    year: 1921,
    cat: 'MANUSCRIPTS',
    lang: 'English',
    desc: 'Handwritten working notebook containing statistical tabulations, imperial revenue charts, and drafts on the evolution of provincial finances under British administration.',
    excerpt: 'The system of Imperial doles must give way to statutory allocation of revenue heads between provincial governments and the central exchequer.',
    summary: 'Executive Summary:\n• Archival Treasure: Original student manuscript composed during Dr. Ambedkar\'s graduate research at LSE and Columbia.\n• Fiscal Federalism: Early formulation of independent provincial revenue streams, laying foundational principles for modern Finance Commission allocations in India.\n• Preservation Grade: Digitized in high-resolution multi-spectral imaging to capture faint iron gall ink marginalia.',
    fullText: `[Folio 12]: Table of Salt Revenue and Land Tax (1858-1912). Examination of imperial centralisation following the 1858 Crown transfer.\n\n[Folio 28]: The Defect of Decentralization by Doles. A subordinate government dependent upon discretionary grants cannot plan education, sanitation, or agricultural relief for the masses.\n\n[Folio 45]: Proposed Classification of Heads: Land revenue, excise, and civil justice allocated to provincial domain; customs, railways, and mints retained by Central Government.`,
    accessionNo: 'DAIC-MS-1921-PF-006',
    preservationStatus: 'Archival Vault 1 · High Resolution 1200 DPI Master · Iron Gall Ink Neutralized',
    repository: 'Columbia Special Collections / DAIC Digital Repository',
    ocrConfidence: '96.8%',
    tags: ['economics', 'finance', 'manuscript', 'provincial', 'federalism'],
    conceptNodes: ['c-economics-rbi', 'c-state-socialism'],
    transText: {
      hi: 'प्रांतीय वित्त पर अध्ययन नोट्स (1921): केंद्र द्वारा दी जाने वाली खैरात के बजाय प्रांतों को स्वायत्त राजस्व अधिकार मिलने चाहिए।',
      mr: 'प्रांतीय वित्तावरील हस्तलिखित नोंदी (1921): प्रांतांच्या विकासासाठी कायदेशीर स्वायत्त आर्थिक तरतुदी असणे अनिवार्य आहे.'
    }
  },
  {
    id: 'a7',
    title: 'Mooknayak, First Issue (Editorial)',
    year: 1920,
    cat: 'WRITINGS',
    lang: 'Marathi',
    desc: 'Inaugural issue of the fortnightly Marathi newspaper founded by Dr. Ambedkar with financial assistance from Chhatrapati Shahu Maharaj of Kolhapur, articulating the voice of the voiceless.',
    excerpt: 'The Hindu society is like a multi-storeyed tower which has no staircase and no entrance doors. One must live and die in the floor where one is born.',
    summary: 'Executive Summary:\n• Historical Significance: The birth of independent Dalit journalism in India; founded on 31 January 1920.\n• Iconic Metaphor: Compared the caste system to a high tower without staircases, where individuals are trapped forever on their birth floor with no upward mobility.\n• Social Mission: Gave voice to the mute millions deprived of education, civil rights, and social dignity.',
    fullText: `अग्रलेख (३१ जानेवारी १९२०): आपल्या या भारताचे चित्र एका विषम बहुमजली इमारतीसारखे आहे, जिला ना जिना आहे ना खिडक्या. ज्या मजल्यावर मनुष्य जन्माला आला, त्याच मजल्यावर त्याने मरण पावले पाहिजे. खालच्या मजल्यावरील माणसाला वर जाण्याची मुभा नाही, आणि वरच्या मजल्यावरील माणूस खाली उतरण्यास तयार नाही. अशा मूक समाजाला वाचा फोडण्यासाठी 'मूकनायक' चा जन्म झाला आहे.`,
    accessionNo: 'DAIC-WR-1920-MN-007',
    preservationStatus: 'Preserved under Microfilm Master · Digitized with Devanagari OCR v4',
    repository: 'Mumbai University Archives / DAIC Archival Unit',
    ocrConfidence: '97.6%',
    tags: ['journalism', 'caste', 'voice', 'marathi', 'shahu-maharaj'],
    conceptNodes: ['c-caste-annihilation', 'c-democracy'],
    transText: {
      hi: 'मूकनायक (1920): हिंदू समाज एक बहुमंजिला मीनार की तरह है जिसमें कोई सीढ़ी नहीं है। जिस तल पर कोई पैदा हुआ, उसे वहीं मरना पड़ता है।',
      mr: 'मूकनायक (1920): हिंदू समाज एका बहुमजली मनोऱ्यासारखा आहे ज्याला जिना नाही; मूक जनतेला न्याय मिळवून देणे हाच या वृत्तपत्राचा ध्यास आहे.'
    }
  },
  {
    id: 'a8',
    title: 'Bahishkrit Bharat (Editorials & Manifestos)',
    year: 1927,
    cat: 'WRITINGS',
    lang: 'Marathi',
    desc: 'Fortnightly Marathi newspaper founded by Dr. Ambedkar in April 1927, chronicling the historic Mahad Satyagraha and civil disobedience campaigns.',
    excerpt: 'Self-help, self-respect, and self-knowledge are the three pillars of our emancipation. We do not ask for mercy; we claim our birthright of equality.',
    summary: 'Executive Summary:\n• Campaign Period: Began immediately after the 20 March 1927 Mahad Satyagraha; served as the frontline ideological organ of the Depressed Classes.\n• Legal Assertions: Published detailed legal refutations against orthodox injunctions prohibiting Dalits from public water tanks, temples, and roads.\n• Mass Education: Urged the depressed classes to abandon traditional degrading occupations, educate their daughters and sons, and organize politically.',
    fullText: `अग्रलेख: 'बहिष्कृत भारता' चा उद्देश अस्पृश्यांच्या अंतःकरणात आत्मसन्मानाची ज्योत पेटवणे हा आहे. जो समाज स्वतःच्या हक्कांसाठी लढत नाही, तो कधीही जिवंत राहू शकत नाही. महाडच्या चवदार तळ्यावर आम्ही पाण्यासाठी गेलो नाही, तर मानवी समतेचा जन्मसिद्ध हक्क सिद्ध करण्यासाठी गेलो होतो.`,
    accessionNo: 'DAIC-WR-1927-BB-008',
    preservationStatus: 'Original Print Collection · Acid-free Encapsulation · High Fidelity Scan',
    repository: 'Dr. Ambedkar International Centre Archives / Maharashtra Archives',
    ocrConfidence: '98.2%',
    tags: ['journalism', 'rights', 'equality', 'mahad', 'marathi'],
    conceptNodes: ['c-caste-annihilation', 'c-democracy'],
    transText: {
      hi: 'बहिष्कृत भारत (1927): हम महाड के तालाब पर केवल पानी पीने नहीं गए थे, बल्कि मानवीय समानता के अधिकार को स्थापित करने गए थे।',
      mr: 'बहिष्कृत भारत (1927): आत्मसन्मान आणि समतेचा लढा हाच आमच्या अस्तित्वाचा मूळ पाया आहे.'
    }
  },
  {
    id: 'a9',
    title: 'Janata (Labour & Peasant Weekly)',
    year: 1930,
    cat: 'WRITINGS',
    lang: 'Marathi',
    desc: 'Weekly organ launched in November 1930 to unite agricultural labourers, mill workers, and the depressed classes under a joint socialist-democratic banner.',
    excerpt: 'The struggle of the exploited is two-fold: against imperial capitalism from without, and against religious Brahmanism and landlordism from within.',
    summary: 'Executive Summary:\n• Working Class Solidarity: Bridged the Dalit movement with industrial trade unions and tenant farmers against the feudal Khoti system in Konkan.\n• Electoral Platform: Formed the voice of the Independent Labour Party (ILP) during the 1937 provincial assembly elections.\n• Sustained Legacy: Ran continuously until 1956 when it was rechristened "Prabuddha Bharat".',
    fullText: `जनता (१९३०): शेतकरी आणि कामगार वर्गाची मुक्ती या देशातील सरंजामशाही आणि भांडवलशाही नष्ट झाल्याशिवाय शक्य नाही. अस्पृश्यता ही केवळ सामाजिक अनिष्टता नसून कामगारांच्या एकतेतील सर्वात मोठी अडचण आहे.`,
    accessionNo: 'DAIC-WR-1930-JN-009',
    preservationStatus: 'Preserved Newspaper Folio Series · DAIC Digital Archive',
    repository: 'DAIC Central Archives',
    ocrConfidence: '97.9%',
    tags: ['labour', 'politics', 'journalism', 'peasants', 'marathi'],
    conceptNodes: ['c-state-socialism', 'c-democracy'],
    transText: {
      hi: 'जनता (1930): शोषितों की लड़ाई दोहरी है: विदेशी पूंजीवाद के विरुद्ध और आंतरिक सामंतवाद व ब्राह्मणवाद के विरुद्ध।',
      mr: 'जनता (1930): कामगार आणि शेतकऱ्यांची एकता साधल्याशिवाय खरी लोकशाही निर्माण होऊ शकत नाही.'
    }
  },
  {
    id: 'a10',
    title: 'Presentation of the Draft Constitution',
    year: 1948,
    cat: 'CONSTITUTIONAL DEBATES',
    lang: 'English',
    desc: 'Historic speech delivered on 4 November 1948 in the Constituent Assembly introducing the Draft Constitution, defending parliamentary democracy and constitutional morality.',
    excerpt: 'Constitutional morality is not a natural sentiment. It has to be cultivated. We must realize that our people have yet to learn it. Democracy in India is only a top-dressing on an Indian soil, which is essentially undemocratic.',
    summary: 'Executive Summary:\n• Introducing the Republic: Formal presentation of the 395 Articles and 8 Schedules drafted under Dr. Ambedkar\'s chairmanship.\n• System of Government: Explains why the Drafting Committee chose the British parliamentary executive over the American presidential model: prioritizing daily executive accountability over periodic stability.\n• Warning on Constitutional Morality: Quoted historian George Grote to emphasize that respect for constitutional norms and minority rights must become a shared national habit.',
    fullText: `Constituent Assembly, 4 November 1948: Mr. Vice-President, Sir, I move that the Draft Constitution as settled by the Drafting Committee be taken into consideration.\n\nParagraph 14: The Draft Constitution has produced a Parliamentary system where the Executive is subject to daily assessment of its responsibility by members of Parliament.\n\nParagraph 32: It is said that the Draft Constitution has given too much power to the Centre. A serious charge is made that the provinces have been reduced to the status of municipalities. I challenge that assertion. The States in our federation are in no way dependent upon the Centre for their legislative or executive authority.\n\nParagraph 45: To those who accuse the Constitution of having ignored the Village Panchayats, I ask: What is the village but a sink of localism, a den of ignorance, narrow-mindedness and communalism? I am glad that the Draft Constitution has discarded the village and adopted the individual as its unit.`,
    accessionNo: 'DAIC-CD-1948-DC-010',
    preservationStatus: 'Official Parliamentary Debates Record · Uncut Audio Sync · 600 DPI Facsimile',
    repository: 'Parliament of India / Dr. Ambedkar International Centre Archives',
    ocrConfidence: '99.7%',
    tags: ['constitutional', 'democracy', 'rights', 'assembly', 'drafting'],
    conceptNodes: ['c-const-rights', 'c-democracy'],
    transText: {
      hi: 'प्रारूप संविधान का प्रस्तुतीकरण (4 नवंबर 1948): संविधान की नैतिकता कोई प्राकृतिक भावना नहीं है, इसे विकसित करना पड़ता है। भारत की धरती पर लोकतंत्र अभी केवल एक ऊपरी आवरण है।',
      mr: 'मसुदा राज्यघटना सादरीकरण (1948): भारतीय संविधानाने व्यक्तीला केंद्रबिंदू मानले आहे; लोकशाही टिकवण्यासाठी घटनात्मक नैतिकता शिकणे आवश्यक आहे.'
    }
  },
  {
    id: 'a11',
    title: 'Debate on Fundamental Rights & Article 32',
    year: 1948,
    cat: 'CONSTITUTIONAL DEBATES',
    lang: 'English',
    desc: 'Assembly deliberations on 9 December 1948 concerning judicial review, writ petitions, and the designation of Article 32 as the "Heart and Soul" of the Constitution.',
    excerpt: 'If I was asked to name any particular article in this Constitution as the most important—an article without which this Constitution would be a nullity—I could not refer to any other article except this one. It is the very soul of the Constitution and the very heart of it.',
    summary: 'Executive Summary:\n• Judicial Enforceability: Established that rights declared on paper are worthless without an accessible, uninhibited legal remedy directly enforceable in the Supreme Court.\n• Writ Jurisdiction: Conferred extraordinary constitutional powers upon the apex court to issue writs of Habeas Corpus, Mandamus, Prohibition, Quo Warranto, and Certiorari.\n• Bulwark of Liberty: Positioned Article 32 as the citizen\'s shield against legislative overreach and police despotism.',
    fullText: `Constituent Assembly Debates, 9 December 1948:\nThe Honourable Dr. B. R. Ambedkar: Sir, I am very glad that the House has appreciated the supreme importance of this article.\n\nAn article which confers rights cannot be of any utility unless there is an effective machinery provided for the enforcement of those rights. While the rights are essential, the remedies to enforce them are even more essential. It is not merely a question of giving remedies. We have given the citizen the right to move the Supreme Court by appropriate proceedings directly, without having to go through subordinate courts first.\n\nTherefore, if I were asked to name any particular article as the very soul of the Constitution and the very heart of it, it is Article 32.`,
    accessionNo: 'DAIC-CD-1948-FR-011',
    preservationStatus: 'National Archives Master Debates Volume · High Resolution Digital Text',
    repository: 'Parliament Library / DAIC Archival Repository',
    ocrConfidence: '99.8%',
    tags: ['rights', 'constitutional', 'remedies', 'article32', 'supreme-court'],
    conceptNodes: ['c-const-rights', 'c-democracy'],
    transText: {
      hi: 'मौलिक अधिकारों और अनुच्छेद 32 पर बहस (1948): यदि मुझसे पूछा जाए कि संविधान का सबसे महत्वपूर्ण अनुच्छेद कौन सा है, तो मैं अनुच्छेद 32 के सिवा किसी अन्य का नाम नहीं ले सकता। यह संविधान की आत्मा और उसका हृदय है।',
      mr: 'मूलभूत हक्क आणि कलम ३२ वरील ऐतिहासिक चर्चा (1948): जर संविधानातील सर्वात महत्त्वाचे कलम कोणते असे विचारले, तर कलम ३२ हेच संविधानाचा आत्मा आणि हृदय आहे.'
    }
  },
  {
    id: 'a12',
    title: 'Concluding Speech to the Constituent Assembly',
    year: 1949,
    cat: 'SPEECHES',
    lang: 'English',
    desc: 'Historic valedictory speech delivered on 25 November 1949, warning of entering a "life of contradictions" between political equality and socio-economic inequality.',
    excerpt: 'On the 26th of January 1950, we are going to enter into a life of contradictions. In politics we will have equality and in social and economic life we will have inequality. We must remove this contradiction at the earliest possible moment or else those who suffer from inequality will blow up the structure of political democracy.',
    summary: 'Executive Summary:\n• Triad of Values: Liberty cannot be divorced from equality, equality cannot be divorced from liberty, nor can liberty and equality be divorced from fraternity.\n• Danger of Bhakti in Politics: Quoted John Stuart Mill to warn against laying liberties at the feet of great men; hero-worship in politics leads inevitably to dictatorship.\n• Imperative of Social Democracy: Warned that voting rights alone cannot sustain a democratic republic if economic exploitation and social humiliation persist.',
    fullText: `Constituent Assembly, 25 November 1949:\nSir, looking back on the work of the Constituent Assembly, it is now two years, eleven months and seventeen days since it first met on the 9th of December 1946.\n\nPolitical democracy cannot last unless there lies at the base of it social democracy. What does social democracy mean? It means a way of life which recognizes liberty, equality and fraternity as the principles of life. They form a union of trinity in the sense that to divorce one from the other is to defeat the very purpose of democracy.\n\nIn politics, we will be recognizing the principle of one man one vote and one vote one value. In our social and economic life, we shall, by reason of our social and economic structure, continue to deny the principle of one man one value.\n\nHow long shall we continue to live this life of contradictions? How long shall we continue to deny equality in our social and economic life? If we continue to deny it for long, we will do so only by putting our political democracy in peril.`,
    accessionNo: 'DAIC-SP-1949-CS-012',
    preservationStatus: 'All India Radio Broadcast Audio Sync · Master Transcript Preserved in Acid-Free Box',
    repository: 'Parliament House / Dr. Ambedkar International Centre Archives',
    ocrConfidence: '99.9%',
    tags: ['democracy', 'equality', 'constitutional', 'fraternity', 'valedictory'],
    conceptNodes: ['c-democracy', 'c-const-rights', 'c-caste-annihilation'],
    transText: {
      hi: 'संविधान सभा में अंतिम भाषण (25 नवंबर 1949): 26 जनवरी 1950 को हम अंतर्विरोधों के जीवन में प्रवेश करने जा रहे हैं। राजनीति में समानता होगी, लेकिन सामाजिक और आर्थिक जीवन में असमानता बनी रहेगी।',
      mr: 'संविधान सभेतील अखेरचे भाषण (1949): 26 जानेवारी 1950 रोजी आपण विसंगतींच्या जीवनात प्रवेश करत आहोत. सामाजिक आणि आर्थिक समता प्रस्थापित केल्याशिवाय ही राजकीय लोकशाही टिकणार नाही.'
    }
  },
  {
    id: 'a13',
    title: 'Statement on the Hindu Code Bill & Resignation',
    year: 1951,
    cat: 'SPEECHES',
    lang: 'English',
    desc: 'Parliamentary statement issued on 10 October 1951 explaining his resignation as Law Minister over the cabinet\'s failure to pass the Hindu Code Bill reforming women\'s civil rights.',
    excerpt: 'To leave inequality between class and class, between sex and sex, which is the soul of Hindu society, and to go on passing legislation relating to economic problems is to make a farce of our Constitution.',
    summary: 'Executive Summary:\n• Champion of Women\'s Equality: Proposed codified equal property inheritance, abolition of polygamy, and legal rights to judicial separation and divorce for Hindu women.\n• Cabinet Resignation: Resigned from Jawaharlal Nehru\'s cabinet when conservative parliamentary opposition stalled the bill, setting an unmatched precedent of moral principle over political power.\n• Enduring Impact: Though defeated in 1951, the provisions were subsequently enacted in four piecemeal acts between 1955 and 1956 (Hindu Marriage Act, Hindu Succession Act, etc.).',
    fullText: `New Delhi, 10 October 1951:\nThe House will remember that the Hindu Code Bill has been before this Parliament for nearly four years. It was drafted to bring uniformity, equity, and gender justice to ancient personal laws.\n\nI have always believed that you cannot reform society while keeping one half of the population in legal bondage. To leave woman in the status of a chattel, denied right to inherit property, denied right to divorce, and yet speak of fundamental rights in the Constitution is sheer hypocrisy.\n\nFinding that the Government had abandoned the bill in the face of conservative obstruction, I felt that I could not retain my seat in the Cabinet with self-respect.`,
    accessionNo: 'DAIC-SP-1951-HC-013',
    preservationStatus: 'Official Parliamentary Papers · Digitized with Cross-Referenced Law Ministry Records',
    repository: 'Dr. Ambedkar International Centre Archives',
    ocrConfidence: '99.2%',
    tags: ['law', 'reform', 'gender', 'rights', 'women', 'hindu-code'],
    conceptNodes: ['c-gender-code', 'c-democracy', 'c-const-rights'],
    transText: {
      hi: 'हिंदू कोड बिल और त्यागपत्र (1951): समाज के आधे हिस्से यानी महिलाओं को संपत्ति और विवाह के समान अधिकारों से वंचित रखकर प्रगति की बात करना पाखंड है।',
      mr: 'हिंदू कोड बिल आणि राजीनामा (1951): महिलांच्या समान हक्कांसाठी मंत्रीपदाचा त्याग करणे हा नैतिकतेचा सर्वोच्च आदर्श होता.'
    }
  },
  {
    id: 'a14',
    title: 'Historic Yeola Conference Declaration',
    year: 1935,
    cat: 'SPEECHES',
    lang: 'Marathi',
    desc: 'Epochal address to the Bombay Provincial Depressed Classes Conference at Yeola, Nashik on 13 October 1935, declaring his determination to leave Hinduism.',
    excerpt: 'Unfortunately, I was born a Hindu untouchable. It was beyond my power to prevent that. But I assure you that I will not die a Hindu!',
    summary: 'Executive Summary:\n• Turning Point of Modern History: Delivered before 10,000 delegates following the failure of temple-entry satyagrahas at Kalaram and Mahad.\n• Rejection of Ritual Subjugation: Announced that reform within Hinduism was structurally impossible because the religion sanctified graded inequality.\n• Preparation for Buddhist Conversion: Initiated a 21-year period of comparative religious study that culminated in the 1956 Deekshabhoomi conversion.',
    fullText: `येवला परिषद भाषण (१३ ऑक्टोबर १९३५): बंधू आणि भगिनींनो, आजवर आपण मंदिरात प्रवेश मिळावा, सार्वजनिक विहिरींचे पाणी मिळावे म्हणून अनेक सत्याग्रह केले. पण सनातनी हिंदूंचे हृदय परिवर्तन झाले नाही. ज्या धर्मात माणसाला कुत्र्या-मांजरापेक्षा हीन मानले जाते, त्या धर्मात राहून स्वाभिमान कसा टिकेल?\n\nमी अस्पृश्य म्हणून जन्माला आलो, ते माझ्या हातात नव्हते. पण मी तुम्हाला ठामपणे सांगतो की, मी हिंदू म्हणून मरणार नाही!`,
    accessionNo: 'DAIC-SP-1935-YC-014',
    preservationStatus: 'Contemporary Marathi Pamphlet Print · Restored Master Scan',
    repository: 'Nashik District Memorial Archive / DAIC Central Unit',
    ocrConfidence: '98.5%',
    tags: ['religion', 'caste', 'conversion', 'yeola', 'marathi'],
    conceptNodes: ['c-buddhism', 'c-caste-annihilation'],
    transText: {
      hi: 'येओला सम्मेलन घोषणा (1935): मैं हिंदू के रूप में पैदा हुआ, यह मेरे वश में नहीं था; लेकिन मैं प्रतिज्ञा करता हूँ कि मैं हिंदू के रूप में नहीं मरूँगा!',
      mr: 'येवला परिषद घोषणा (1935): मी हिंदू म्हणून जन्मलो असलो तरी मी हिंदू म्हणून मरणार नाही, ही ऐतिहासिक प्रतिज्ञा.'
    }
  },
  {
    id: 'a15',
    title: 'The Poona Pact (Original Agreement)',
    year: 1932,
    cat: 'MANUSCRIPTS',
    lang: 'English',
    desc: 'The historic agreement signed on 24 September 1932 at Yerwada Central Jail, Pune between Dr. Ambedkar and caste Hindu leaders, replacing separate electorates with reserved seats.',
    excerpt: 'There shall be seats reserved for the Depressed Classes out of the general electorate. In the Central Legislature, eighteen per cent of the seats allotted to the general electorate for British India shall be reserved.',
    summary: 'Executive Summary:\n• Crisis & Negotiation: Signed to end Mahatma Gandhi\'s fast-unto-death against the British Communal Award granting separate electorates to Dalits.\n• Seat Allocation: Increased reserved seats from 71 (under Communal Award) to 148 in provincial legislatures, plus 18% in the Central Assembly.\n• Educational Guarantees: Mandated government budget allocations for education and public recruitment without discrimination.',
    fullText: `Yerwada Central Prison, Poona, 24 September 1932:\n1. There shall be seats reserved for the Depressed Classes out of the general electorate. The number of seats reserved for them in provincial legislatures shall be: Madras 30; Bombay with Sind 15; Punjab 8; Bihar and Orissa 18; Central Provinces 20; Assam 7; Bengal 30; United Provinces 20. Total 148.\n\nSigned by: Dr. B. R. Ambedkar, Madan Mohan Malaviya, M. C. Rajah, C. Rajagopalachari, Tej Bahadur Sapru, G. D. Birla, Babu Rajendra Prasad, Devadas Gandhi.`,
    accessionNo: 'DAIC-MS-1932-PP-015',
    preservationStatus: 'Original Multi-Signature Facsimile · Neutral Gas Vault · Digitized 600 DPI',
    repository: 'National Archives of India / DAIC Archival Unit',
    ocrConfidence: '99.0%',
    tags: ['rights', 'representation', 'politics', 'poona-pact', 'gandhi', 'manuscript'],
    conceptNodes: ['c-minorities', 'c-const-rights'],
    transText: {
      hi: 'पूना पैक्ट (1932): पृथक निर्वाचिका के बदले प्रांतीय विधानसभाओं में दलितों के लिए आरक्षित सीटों की संख्या 71 से बढ़ाकर 148 की गई।',
      mr: 'पुणे करार (1932): येरवडा कारागृहात झालेला ऐतिहासिक करार, ज्याद्वारे राखीव जागांची तरतूद करण्यात आली.'
    }
  },
  {
    id: 'a16',
    title: 'Letter on the Foundation of Independent Labour Party',
    year: 1936,
    cat: 'LETTERS',
    lang: 'English',
    desc: 'Confidential strategic correspondence outlining the formation, manifesto, and progressive economic programme of the Independent Labour Party (ILP).',
    excerpt: 'The Independent Labour Party is formed to focus on the economic grievances of workers, tenants and peasants, transcending communal divisions.',
    summary: 'Executive Summary:\n• Socialist-Democratic Coalition: Established in August 1936 to contest the 1937 provincial elections under the Government of India Act 1935.\n• Electoral Triumph: Won 14 out of 17 contested seats in the Bombay Legislative Assembly, demonstrating mass working-class appeal across caste boundaries.\n• Legislative Advocacy: Championed legislation against industrial disputes acts, landlord exploitation, and debt servitude.',
    fullText: `Bombay, 15 August 1936:\nMy dear colleague,\nWe have finally finalized the constitution and programme of the Independent Labour Party. The party will not be a communal party confined to the Depressed Classes, but will welcome every worker and agriculturist who believes in the reconstruction of society upon socialist and democratic foundations.\n\nOur immediate programme will include statutory regulation of hours of work, minimum wage laws, state unemployment insurance, and the abolition of the predatory Khoti system in the Konkan.\n\nYours sincerely,\nB. R. Ambedkar`,
    accessionNo: 'DAIC-LT-1936-ILP-016',
    preservationStatus: 'Original Autograph Letter Signed · Archival Deacidified Folder',
    repository: 'Dr. Ambedkar International Centre Rare Letters Archive',
    ocrConfidence: '98.8%',
    tags: ['labour', 'politics', 'organisation', 'ilp', 'letters'],
    conceptNodes: ['c-state-socialism', 'c-democracy'],
    transText: {
      hi: 'इंडिपेंडेंट लेबर पार्टी के गठन पर पत्र (1936): यह दल केवल दलितों तक सीमित न होकर सभी मजदूरों और किसानों के आर्थिक अधिकारों के लिए लड़ेगा।',
      mr: 'स्वतंत्र मजूर पक्षाच्या स्थापनेविषयी पत्र (1936): कामगार आणि शेतकऱ्यांच्या हक्कांसाठी व्यापक राजकीय व्यासपीठ उभारण्याचा संकल्प.'
    }
  },
  {
    id: 'a17',
    title: 'Photograph: Mahad Chavdar Tank Satyagraha Assembly',
    year: 1927,
    cat: 'PHOTOGRAPHS',
    lang: 'Marathi',
    desc: 'Historic archival photograph documenting the mass assembly of over 10,000 satyagrahis gathered at Chavdar Tank, Mahad on 20 March 1927.',
    excerpt: 'Visual record of Dr. Ambedkar leading the delegation to touch and drink the sweet water of Chavdar Tank, shattering centuries of ritual untouchability.',
    summary: 'Executive Summary:\n• Historical Monument: First visual record of organized mass direct action asserting civil rights by marginalized communities in South Asia.\n• Digital Restoration: Digitized from a glass plate negative and restored using AI denoising and optical clarity algorithms at DAIC labs.',
    fullText: `Archival Metadata: Glass Plate Negative No. GP-1927-MHD-01. Restored by Dr. Ambedkar International Centre Digital Preservation Unit. Shows Dr. B. R. Ambedkar in Western suit walking beside local organizers and thousands of delegates toward the public water reservoir in Mahad.`,
    accessionNo: 'DAIC-PH-1927-MH-017',
    preservationStatus: 'Glass Plate Master Vault · Ultra-High Resolution 2400 DPI Scan',
    repository: 'DAIC Photographic Repository',
    ocrConfidence: '100% (Metadata)',
    tags: ['rights', 'water', 'caste', 'mahad', 'photograph', 'heritage'],
    conceptNodes: ['c-caste-annihilation'],
    transText: {
      hi: 'महाड सत्याग्रह ऐतिहासिक छायाचित्र (1927): चवदार तालाब पर सार्वजनिक जल अधिकार के लिए एकत्रित हजारों सत्याग्रहियों का ऐतिहासिक दृश्य।',
      mr: 'महाड चवदार तळे सत्याग्रह छायाचित्र (1927): डॉ. आंबेडकरांच्या नेतृत्वाखाली झालेल्या ऐतिहासिक समता लढ्याचे अमूल्य छायाचित्र.'
    }
  },
  {
    id: 'a18',
    title: 'Photograph: Deekshabhoomi Mass Conversion Ceremony',
    year: 1956,
    cat: 'PHOTOGRAPHS',
    lang: 'Marathi',
    desc: 'Panoramic photograph of the historic 14 October 1956 ceremony at Nagpur where Dr. Ambedkar and half a million followers took refuge in the Triple Gem and the 22 Vows.',
    excerpt: 'Dr. Ambedkar in white robes administering the 22 Buddhist Vows to over 500,000 followers, inaugurating the revival of Navayana Buddhism.',
    summary: 'Executive Summary:\n• Mass Emancipation: Considered the largest voluntary peaceful religious conversion in documented human history.\n• 22 Vows: Explicitly renounced belief in Brahminical gods, superstition, and ritual caste inequality, affirming the Buddha\'s path of rationality and equality.\n• Digital Preservation: Restored by DAIC from silver gelatin prints preserved in Nagpur.',
    fullText: `Archival Metadata: Photographic Print No. AG-1956-NGP-02. Shows Dr. B. R. Ambedkar and Dr. Savita Ambedkar on the dais with Bhikkhu Chandramani, facing an ocean of white-clad devotees covering 14 acres of ground in Nagpur.`,
    accessionNo: 'DAIC-PH-1956-DB-018',
    preservationStatus: 'Silver Gelatin Print · Archival Mylar Encapsulation · Cold Storage',
    repository: 'Deekshabhoomi Memorial Trust / DAIC Central Archive',
    ocrConfidence: '100% (Metadata)',
    tags: ['religion', 'buddhism', 'nagpur', 'conversion', 'photograph'],
    conceptNodes: ['c-buddhism', 'c-caste-annihilation'],
    transText: {
      hi: 'दीक्षाभूमि नागपुर धर्मांतरण समारोह (1956): 14 अक्टूबर 1956 को 5 लाख से अधिक अनुयायियों के साथ बौद्ध धम्म की दीक्षा का ऐतिहासिक दृश्य।',
      mr: 'दीक्षाभूमी नागपूर ऐतिहासिक सोहळा (1956): डॉ. बाबासाहेब आंबेडकरांनी धम्मदीक्षा देऊन लाखो अनुयायांना समतेचा मार्ग दाखवला.'
    }
  },
  {
    id: 'a19',
    title: 'Radio Address: Democracy, Voice & Fraternity',
    year: 1954,
    cat: 'AUDIO',
    lang: 'English',
    desc: 'Rare recorded voice broadcast on the Voice of America and BBC Overseas Service on the essential requisites for the successful working of democracy.',
    excerpt: 'Democracy is not merely a form of government. It is primarily a mode of associated living, of conjoint communicated experience. Its key ingredient is fraternity—which is another name for brotherhood and respect for fellow humans.',
    summary: 'Executive Summary:\n• Voice of the Architect: Rare pristine audio recording preserving Dr. Ambedkar\'s distinctive cadence, oratorical power, and philosophical clarity.\n• Conditions for Democracy: Enumerates key requirements: no glaring inequalities, existence of an effective opposition, equality in the eyes of law, and moral conscience in the public.',
    fullText: `Audio Transcript (Voice of America Broadcast, 1954):\n"What are the requisites for the successful working of democracy? The first condition is that there must be no glaring inequalities in the society. There must not be an oppressed class. There must not be a suppressed class. The second condition is the existence of an opposition. A democracy where there is no opposition to challenge the ruling party inevitably degenerates into a tyranny."`,
    accessionNo: 'DAIC-AV-1954-RA-019',
    preservationStatus: '24-bit 96kHz Digital Remaster from 1/4" Reel Master · Audio Vault 2',
    repository: 'Dr. Ambedkar International Centre Audio-Visual Archives',
    ocrConfidence: '99.5% (Audio Transcript)',
    tags: ['democracy', 'radio', 'speech', 'audio', 'fraternity'],
    conceptNodes: ['c-democracy', 'c-const-rights'],
    transText: {
      hi: 'रेडियो संबोधन: लोकतंत्र और बंधुता (1954): लोकतंत्र केवल शासन का एक रूप नहीं है, यह मूल रूप से सह-अस्तित्व और बंधुता का जीवन-मार्ग है।',
      mr: 'रेडिओ भाषण: लोकशाही आणि बंधुभाव (1954): लोकशाही यशस्वी होण्यासाठी समाजात टोकाची विषमता नष्ट झाली पाहिजे आणि प्रभावी विरोधी पक्ष असला पाहिजे.'
    }
  },
  {
    id: 'a20',
    title: 'Documentary: A Life of Reform and Nation Building',
    year: 1991,
    cat: 'VIDEO',
    lang: 'Hindi',
    desc: 'Archival documentary film featuring centenary footage, interviews with contemporary associates, and visual coverage of constitutional drafting.',
    excerpt: 'A comprehensive national documentary examining the life, scholarship, and epochal constitutional contributions of Babasaheb Ambedkar.',
    summary: 'Executive Summary:\n• Centenary Production: Produced by the Films Division on the occasion of the birth centenary (1891–1991) and the posthumous conferment of Bharat Ratna.\n• Archival Footage: Includes restored newsreels of the Constituent Assembly, the signing of the Constitution, and mass rallies across India.',
    fullText: `Video Description: Run time 52:00. High-definition telecine transfer from 35mm master film stock. Includes audio excerpts, photographs, and critical scholarly assessments from historians and jurists.`,
    accessionNo: 'DAIC-VD-1991-FD-020',
    preservationStatus: '35mm Polyester Master Negative · ProRes 422 HQ Archival Digital Transfer',
    repository: 'Films Division / DAIC National Repository',
    ocrConfidence: '100% (Metadata)',
    tags: ['education', 'legacy', 'documentary', 'video', 'bharat-ratna'],
    conceptNodes: ['c-democracy', 'c-const-rights', 'c-caste-annihilation'],
    transText: {
      hi: 'वृत्तचित्र: सुधार और राष्ट्र-निर्माण का जीवन (1991): बाबासाहेब डॉ. बी. आर. आंबेडकर के जीवन और योगदान पर आधारित आधिकारिक राष्ट्रीय वृत्तचित्र।',
      mr: 'माहितीपट: राष्ट्रनिर्माते डॉ. बाबासाहेब आंबेडकर (1991): भारतरत्न डॉ. आंबेडकरांच्या जीवनावरील दुर्मीळ फुटेजसह तयार केलेला माहितीपट.'
    }
  },
  {
    id: 'a21',
    title: 'Draft Notes: The Buddha and His Dhamma',
    year: 1955,
    cat: 'MANUSCRIPTS',
    lang: 'English',
    desc: 'Working manuscript folios with handwritten marginal revisions, outlines of Pali canonical sources, and philosophical reflections on morality and reason.',
    excerpt: 'Dhamma is not religion. Religion is personal and speculative. Dhamma is social and ethical. The purpose of Dhamma is to rebuild the world in righteousness.',
    summary: 'Executive Summary:\n• Magnum Opus: Completed in late 1956 and published posthumously; represents Dr. Ambedkar\'s rationalist reconstruction of Buddhism.\n• Distinctive Interpretation: Differentiates religion (relationship of man to supernatural God) from Dhamma (righteous relationship of man to man).\n• Manuscript Preservation: Scanned at 1200 DPI showing Dr. Ambedkar\'s pencil corrections and references to the Digha Nikaya and Majjhima Nikaya.',
    fullText: `[Folio 104]: Book I, Part II: The Great Renunciation. Why did the Bodhisatta leave his home? It was not a sudden flight from seeing an old man, a sick man and a corpse, which is an absurd myth. It was born of a political conflict between the Sakyas and the Koliyas over the waters of the Rohini river.\n\n[Folio 215]: Book III: What is Dhamma? Morality is the essence of Dhamma. Without morality, man is a beast. In Dhamma, morality takes the place of God.`,
    accessionNo: 'DAIC-MS-1955-BD-021',
    preservationStatus: 'Original Manuscript Box 4 · Neutral Buffer Folders · 1200 DPI Scan',
    repository: 'Dr. Ambedkar International Centre Sacred Manuscript Vault',
    ocrConfidence: '97.4%',
    tags: ['buddhism', 'religion', 'dhamma', 'manuscript', 'morality'],
    conceptNodes: ['c-buddhism', 'c-caste-annihilation'],
    transText: {
      hi: 'द बुद्ध एंड हिज धम्म: प्रारूप पांडुलिपि (1955): धम्म कोई अलौकिक धर्म नहीं, बल्कि मनुष्यों के बीच सदाचार, समता और करुणा का सामाजिक मार्ग है।',
      mr: 'द बुद्ध अँड हिज धम्म: हस्तलिखित मसुदा (1955): बौद्ध धम्माची विवेकवादी आणि नैतिक मांडणी करणारा डॉ. आंबेडकरांचा महान ग्रंथ.'
    }
  },
  {
    id: 'a22',
    title: 'Drafting Committee Amendment Annotations',
    year: 1949,
    cat: 'MANUSCRIPTS',
    lang: 'English',
    desc: 'Chairman\'s personal annotated desk copy of the October 1949 Draft Constitution, showing handwritten decisions on 300+ amendments prior to final adoption.',
    excerpt: 'Marginal note in Dr. Ambedkar\'s hand: "Accepted with modification to ensure judicial review remains unaffected by emergency provisions."',
    summary: 'Executive Summary:\n• Direct Evidence of Constitutional Drafting: Illuminates the meticulous legal craftsmanship of Dr. Ambedkar as Chairman of the Drafting Committee.\n• Safeguarding Federalism & Rights: Demonstrates how emergency provisions were tightly circumscribed to prevent autocratic abuse.',
    fullText: `[Article 275 / 352 Annotation]: In margin of Clause (2): "Ensure parliamentary ratification within two months. Do not permit indefinite executive decrees."\n\n[Article 15 Annotation]: Inserted words: "or place of birth, or any of them" to prevent indirect discrimination in public services.`,
    accessionNo: 'DAIC-MS-1949-DC-022',
    preservationStatus: 'Chairman\'s Desk Master · Bound in Full Leather · 1200 DPI Facsimile',
    repository: 'Parliament Library / DAIC Archival Vault',
    ocrConfidence: '98.3%',
    tags: ['constitutional', 'amendments', 'drafting', 'manuscript', 'parliament'],
    conceptNodes: ['c-const-rights', 'c-democracy'],
    transText: {
      hi: 'प्रारूप समिति संशोधन टिप्पणियाँ (1949): संविधान के अनुच्छेदों पर डॉ. आंबेडकर के हस्तलिखित निर्णय और न्यायिक समीक्षा के संरक्षण संबंधी निर्देश।',
      mr: 'मसुदा समिती दुरुस्ती टिप्पण्या (1949): संविधानाच्या विविध कलमांवर बाबासाहेबांनी स्वतःच्या हस्ताक्षरात नोंदवलेली महत्त्वाची कायदेशीर मते.'
    }
  },
  {
    id: 'a23',
    title: 'Seminar Notebook: Columbia University',
    year: 1915,
    cat: 'MANUSCRIPTS',
    lang: 'English',
    desc: 'Graduate student lecture notes and reading outlines on political theory, public finance, and sociology during his studies at Columbia University, New York.',
    excerpt: 'Lecture notes on John Dewey\'s pragmatism: Democracy is a moral ideal that requires open communication and continual experimental reconstruction of social institutions.',
    summary: 'Executive Summary:\n• Formative Intellectual Crucible: Documents the direct influence of John Dewey, Edwin R. A. Seligman, and Alexander Goldenweiser on Ambedkar\'s emerging methodology.\n• Synthesis of Disciplines: Demonstrates how he combined rigorous quantitative economics with sociological and moral philosophy.',
    fullText: `[Notebook Page 18]: Prof. Seligman on Incidence of Taxation. The burden of taxes upon essential commodities falls disproportionately upon the working poor. Progressive taxation is an indispensable instrument of social justice.\n\n[Notebook Page 42]: Prof. Dewey on Education and Democracy. Habits of thought are shaped by institutional customs. To liberate the mind, customs must be subjected to rational inquiry.`,
    accessionNo: 'DAIC-MS-1915-CU-023',
    preservationStatus: 'Columbia Special Collections Facsimile · High Resolution Multispectral',
    repository: 'Butler Library, Columbia University / DAIC Digital Repository',
    ocrConfidence: '97.2%',
    tags: ['education', 'economics', 'columbia', 'manuscript', 'dewey'],
    conceptNodes: ['c-economics-rbi', 'c-democracy'],
    transText: {
      hi: 'कोलंबिया विश्वविद्यालय अध्ययन नोटबुक (1915): जॉन डेवी और एडविन सेलिगमैन के व्याख्यानों पर डॉ. आंबेडकर की हस्तलिखित अध्ययन टिप्पणियाँ।',
      mr: 'कोलंबिया विद्यापीठ विद्यार्थी वही (1915): डॉ. बाबासाहेबांच्या सुरुवातीच्या अर्थशास्त्र आणि समाजशास्त्र अभ्यासाच्या ऐतिहासिक नोंदी.'
    }
  },
  {
    id: 'a24',
    title: 'Draft Memorandum on Constitutional Reform (Simon Commission Submission)',
    year: 1928,
    cat: 'MANUSCRIPTS',
    lang: 'English',
    desc: 'Comprehensive memorandum submitted on behalf of the Bahishkrit Hitakarini Sabha to the Indian Statutory Commission, demanding universal adult franchise.',
    excerpt: 'We demand adult suffrage. The franchise cannot be restricted by property or education without disenfranchising the very classes that need political protection most.',
    summary: 'Executive Summary:\n• Pioneering Franchise Demand: While colonial authorities and nationalist leaders favored property-based voting, Dr. Ambedkar made the radical demand for universal adult suffrage in 1928.\n• Minority Rights Formulation: Outlined detailed mechanics for reserved seats and separate electoral safeguards.',
    fullText: `Memorandum, 29 May 1928:\nTo the Indian Statutory Commission:\n1. That the franchise should be so extended as to embrace all adults of 21 years and above.\n2. That in the Legislative Council, the Depressed Classes should be given representation in proportion to their population.\n3. That a special officer should be appointed to watch over the recruitment of the Depressed Classes in public administration.`,
    accessionNo: 'DAIC-MS-1928-SC-024',
    preservationStatus: 'Official Commission Proceedings · Deacidified Archival Folio',
    repository: 'National Archives of India / DAIC Archives',
    ocrConfidence: '98.6%',
    tags: ['rights', 'representation', 'constitutional', 'manuscript', 'franchise'],
    conceptNodes: ['c-minorities', 'c-const-rights', 'c-democracy'],
    transText: {
      hi: 'संवैधानिक सुधार ज्ञापन (1928): साइमन कमीशन के समक्ष वयस्क मताधिकार और वंचित वर्गों के आनुपातिक प्रतिनिधित्व की ऐतिहासिक मांग।',
      mr: 'घटनात्मक सुधारणा मसुदा (1928): संपत्ती किंवा शिक्षणाची अट न ठेवता सर्वांना प्रौढ मतदानाचा हक्क देण्याची आग्रही मागणी.'
    }
  },
  {
    id: 'a25',
    title: 'Reading List Notebook: London School of Economics & Gray\'s Inn',
    year: 1917,
    cat: 'MANUSCRIPTS',
    lang: 'English',
    desc: 'Personal handwritten bibliography and research log containing hundreds of rare monographs, parliamentary blue books, and legal cases consulted in London libraries.',
    excerpt: 'Reading log: Adam Smith, David Ricardo, Bagehot\'s Lombard Street, Jevons on Money, Grey\'s Parliamentary Debates on East India Revenues.',
    summary: 'Executive Summary:\n• Unmatched Scholarly Discipline: Documents Dr. Ambedkar\'s legendary 16-hour daily study routine at the British Museum Reading Room and LSE.\n• Depth of Research: Covers monetary economics, Roman law, French jurisprudence, and Indian imperial finances.',
    fullText: `[Page 4]: British Museum Reading Room Desk No. D-7.\nConsulted: Hamilton\'s Trade Relations between England and India; Wilson\'s Financial Statements of the Government of India (1860-1868).\n\n[Page 19]: Gray\'s Inn Law Library: Notes on constitutional conventions, Dicey on the Law of the Constitution, and royal prerogative limitations.`,
    accessionNo: 'DAIC-MS-1917-LSE-025',
    preservationStatus: 'LSE Special Archive Facsimile · Acid-Free Conservation',
    repository: 'London School of Economics / DAIC Central Archive',
    ocrConfidence: '96.9%',
    tags: ['education', 'research', 'london', 'manuscript', 'lse'],
    conceptNodes: ['c-economics-rbi'],
    transText: {
      hi: 'लंदन अध्ययन ग्रंथ-सूची नोटबुक (1917): ब्रिटिश म्यूजियम और एलएसई में किए गए गहन शोध और दुर्लभ पुस्तकों के अध्ययन का हस्तलिखित विवरण।',
      mr: 'लंडन वाचन नोंदवही (1917): डॉ. बाबासाहेबांच्या लंडन स्कूल ऑफ इकॉनॉमिक्समधील अफाट वाचन आणि संशोधनाची साक्ष देणारी नोंदवही.'
    }
  },
  {
    id: 'a26',
    title: 'Riddles in Hinduism: Working Folios and Chapter Outlines',
    year: 1954,
    cat: 'MANUSCRIPTS',
    lang: 'English',
    desc: 'Authorial working draft pages, textual comparisons, and critical inquiries into the contradictions of ancient Sanskrit scriptures and epics.',
    excerpt: 'Why did the Brahmins establish the infallibility of the Vedas? Because without it, the sanctity of caste and the supremacy of the priestly order could not be maintained.',
    summary: 'Executive Summary:\n• Critical Rationalism: Applies rigorous historical-critical methods to the Ramayana, Mahabharata, and Puranas.\n• Democratic Purpose: Intended to liberate the popular mind from superstitious reverence for dogmas that sanctified human degradation.\n• Posthumous Publication: Published by the Government of Maharashtra in 1987 as Volume 4 of Writings and Speeches.',
    fullText: `[Chapter Riddle No. 15]: The Vedas and their Infallibility. An inquiry into how texts of pastoral clans came to be elevated into eternal, uncreated cosmic truths to protect social privilege.\n\n[Chapter Riddle No. 22]: The Riddle of Rama and Krishna. Critical evaluation of moral actions in ancient mythology judged by standards of universal human dignity.`,
    accessionNo: 'DAIC-MS-1954-RH-026',
    preservationStatus: 'Rare Manuscript Box 8 · High Sensitivity Optical Capture',
    repository: 'Maharashtra State Archives / DAIC Archival Unit',
    ocrConfidence: '98.1%',
    tags: ['religion', 'caste', 'history', 'manuscript', 'rationalism'],
    conceptNodes: ['c-caste-annihilation'],
    transText: {
      hi: 'रिडल्स इन हिंदुइज्म प्रारूप नोट्स (1954): प्राचीन धार्मिक ग्रंथों की तार्किक और ऐतिहासिक समीक्षा, सामाजिक रूढ़ियों पर प्रहार।',
      mr: 'रिडल्स इन हिंदूइझम हस्तलिखित (1954): धर्मग्रंथांची विवेकवादी चिकित्सा करून मानवी मूल्यांची मांडणी करणारा शोधनिबंध.'
    }
  },
  {
    id: 'a27',
    title: 'Letter on the Foundation of Siddharth College',
    year: 1946,
    cat: 'LETTERS',
    lang: 'English',
    desc: 'Official correspondence addressed to the People\'s Education Society outlining the establishment of higher education institutions in Mumbai for underprivileged youth.',
    excerpt: 'Education is the milk of a tigress; whoever drinks it will roar. We must build institutions that provide first-class scientific and liberal education without discrimination.',
    summary: 'Executive Summary:\n• People\'s Education Society: Founded in 1945 by Dr. Ambedkar to create modern colleges (Siddharth College in Mumbai, Milind College in Aurangabad).\n• Democratizing Knowledge: Enabled thousands of first-generation learners from impoverished backgrounds to access law, science, and the humanities.\n• Institutional Architecture: Outlines non-discriminatory hiring, affordable fees, and evening degree programs for working-class students.',
    fullText: `Bombay, 20 June 1946:\nTo the Governing Body, People\'s Education Society:\nI have the pleasure to report that Siddharth College will commence its classes in the Fort area. Our object is not merely to prepare students for University examinations, but to inspire them with the ideals of social service, intellectual fearlessness, and moral integrity.\n\nB. R. Ambedkar, Chairman`,
    accessionNo: 'DAIC-LT-1946-SC-027',
    preservationStatus: 'PES Archival Collection · Deacidified Paper Master',
    repository: 'People\'s Education Society / DAIC Educational Archives',
    ocrConfidence: '99.1%',
    tags: ['education', 'college', 'institutions', 'letters', 'pes'],
    conceptNodes: ['c-democracy'],
    transText: {
      hi: 'सिद्धार्थ कॉलेज की स्थापना पर पत्र (1946): शिक्षा शेरनी का दूध है, जो इसे पिएगा वह दहाड़ेगा। वंचितों के लिए उच्च शिक्षा संस्थानों की स्थापना का विजन।',
      mr: 'सिद्धार्थ कॉलेज स्थापना पत्र (1946): उच्च शिक्षणाची दारे गोरगरिबांसाठी खुली करण्यासाठी पीपल्स एज्युकेशन सोसायटीची उभारणी.'
    }
  },
  {
    id: 'a28',
    title: 'Letter to a Railway Trade Union Organizer',
    year: 1938,
    cat: 'LETTERS',
    lang: 'Marathi',
    desc: 'Tactical letter on organizing railway workers, addressing the dual oppression of wage exploitation and social discrimination in workplace unions.',
    excerpt: 'A union that fights for higher wages but tolerates caste discrimination in promotions is only half a union. We must fight for both economic justice and human dignity.',
    summary: 'Executive Summary:\n• Trade Union Politics: Dr. Ambedkar addressed the discriminatory practices within colonial railway and textile unions where Dalits were excluded from lucrative weaving departments.\n• Intersectional Advocacy: Demanded that socialist unions confront internal caste prejudices alongside management disputes.',
    fullText: `मुंबई, ५ मे १९३८:\nप्रिय कॉम्रेड,\nरेल्वे कामगारांचा संप यशस्वी करण्यासाठी सर्वांची एकी आवश्यक आहे, यात शंका नाही. परंतु अस्पृश्य कामगारांना उच्च श्रेणीच्या पदांवरून डावलले जात असताना अन्य कामगार गप्प राहतात, हे खपवून घेतले जाणार नाही. खरी कामगार चळवळ समतेच्या तत्वावरच उभी राहू शकते.\n\nआपला नम्र,\nबी. आर. आंबेडकर`,
    accessionNo: 'DAIC-LT-1938-TU-028',
    preservationStatus: 'Restored Handwritten Letter · Digital OCR Verified',
    repository: 'Dr. Ambedkar International Centre Labor Archives',
    ocrConfidence: '97.8%',
    tags: ['labour', 'unions', 'rights', 'railway', 'marathi'],
    conceptNodes: ['c-state-socialism'],
    transText: {
      hi: 'ट्रेड यूनियन आयोजक को पत्र (1938): जो यूनियन वेतन के लिए लड़ती है किंतु कार्यस्थल पर जातिगत भेदभाव का विरोध नहीं करती, वह अधूरी है।',
      mr: 'रेल्वे कामगार युनियन पत्र (1938): कामगारांच्या आर्थिक हक्कांसोबतच कार्यस्थळावरील सामाजिक समतेसाठी लढण्याचा संदेश.'
    }
  },
  {
    id: 'a29',
    title: 'Photograph: Columbia University Campus Period',
    year: 1914,
    cat: 'PHOTOGRAPHS',
    lang: 'English',
    desc: 'Formal portrait of student Bhimrao Ramji Ambedkar outside Hartley Hall on the Columbia University campus, New York.',
    excerpt: 'Young Dr. Ambedkar during his formative graduate years in New York, immersed in economics, law, sociology, and philosophy.',
    summary: 'Executive Summary:\n• Iconic Portrait: Captures Dr. Ambedkar at age 23 in New York as one of the earliest Indian scholars to receive a Western doctoral education.\n• Provenance: Preserved in Columbia University archives and featured in the alumni hall of fame.',
    fullText: `Archival Metadata: Photographic Print No. CU-1914-AMB-01. Restored by DAIC Digital Archives from high-resolution negative scans provided by Columbia University Archives.`,
    accessionNo: 'DAIC-PH-1914-CU-029',
    preservationStatus: 'Archival Silver Gelatin Transfer · 1200 DPI Preservation Standard',
    repository: 'Columbia University Archives / DAIC Photographic Unit',
    ocrConfidence: '100% (Metadata)',
    tags: ['education', 'columbia', 'student', 'photograph', 'new-york'],
    conceptNodes: ['c-economics-rbi', 'c-democracy'],
    transText: {
      hi: 'कोलंबिया विश्वविद्यालय छात्र जीवन छायाचित्र (1914): न्यूयॉर्क में अध्ययनरत युवा भीमराव आंबेडकर का ऐतिहासिक चित्र।',
      mr: 'कोलंबिया विद्यापीठ विद्यार्थी जीवन छायाचित्र (1914): उच्च शिक्षणासाठी अमेरिकेत असतानाचे डॉ. बाबासाहेबांचे दुर्मीळ छायाचित्र.'
    }
  },
  {
    id: 'a30',
    title: 'Photograph: Constituent Assembly in Session',
    year: 1947,
    cat: 'PHOTOGRAPHS',
    lang: 'English',
    desc: 'Panoramic photograph of the Constituent Assembly gathered in the Constitution Hall, New Delhi, showing Dr. Ambedkar at the Drafting Committee table.',
    excerpt: 'Historic scene of Constitution-making in post-independence India with Dr. Ambedkar presiding over legal drafting discussions.',
    summary: 'Executive Summary:\n• Historical Memory: Visualizes the diverse assembly of founding mothers and fathers debating the democratic foundations of the Republic.\n• Seating & Comradery: Depicts Dr. Ambedkar consulting with constitutional adviser Sir B. N. Rau, Jawaharlal Nehru, and Sardar Vallabhbhai Patel.',
    fullText: `Archival Metadata: Photo Division Record No. CA-1947-DEL-04. Shows Dr. B. R. Ambedkar seated with drafting committee members N. Gopalaswami Ayyangar, Alladi Krishnaswamy Iyer, and K. M. Munshi.`,
    accessionNo: 'DAIC-PH-1947-CA-030',
    preservationStatus: 'Master Photographic Print · Deacidified Archival Mount',
    repository: 'Parliament Photo Archives / DAIC Central Unit',
    ocrConfidence: '100% (Metadata)',
    tags: ['constitutional', 'assembly', 'democracy', 'photograph', 'parliament'],
    conceptNodes: ['c-const-rights', 'c-democracy'],
    transText: {
      hi: 'संविधान सभा सत्र ऐतिहासिक छायाचित्र (1947): संविधान निर्माण की प्रक्रिया में प्रारूप समिति के सहयोगियों के साथ डॉ. आंबेडकर।',
      mr: 'संविधान सभा ऐतिहासिक छायाचित्र (1947): भारताच्या राज्यघटनेची निर्मिती सुरू असतानाचे ऐतिहासिक छायाचित्र.'
    }
  },
  {
    id: 'a31',
    title: 'Newsreel: First Republic Day Celebration',
    year: 1950,
    cat: 'VIDEO',
    lang: 'English',
    desc: 'Official newsreel coverage of 26 January 1950 in New Delhi as the Constitution of India came into legal force and the sovereign Republic was proclaimed.',
    excerpt: 'Authentic 35mm newsreel documenting the inauguration of the Republic, saluting the Constitution piloted by Dr. B. R. Ambedkar.',
    summary: 'Executive Summary:\n• Proclamation of the Republic: Shows Governor-General C. Rajagopalachari declaring the birth of the Republic, followed by the swearing-in of President Dr. Rajendra Prasad.\n• Tribute to the Constitution: Includes commentary on the abolition of untouchability under Article 17 and the grant of universal suffrage to all citizens.',
    fullText: `Newsreel Commentary (Films Division, 26 Jan 1950): "Today, the 26th of January 1950, India becomes a Sovereign Democratic Republic. The Constitution drafted under the chairmanship of Dr. B. R. Ambedkar enshrines justice, liberty, equality, and fraternity for every citizen of our ancient land."`,
    accessionNo: 'DAIC-VD-1950-RD-031',
    preservationStatus: 'Films Division 35mm Master Digitized to 4K Digital Film Package',
    repository: 'National Film Archive of India / DAIC Audio-Visual Repository',
    ocrConfidence: '100% (Metadata)',
    tags: ['constitutional', 'republic', 'newsreel', 'video', '1950'],
    conceptNodes: ['c-const-rights', 'c-democracy'],
    transText: {
      hi: 'प्रथम गणतंत्र दिवस समारोह न्यूजरील (1950): 26 जनवरी 1950 को भारतीय संविधान के लागू होने और संप्रभु गणतंत्र की घोषणा का ऐतिहासिक फुटेज।',
      mr: 'पहिला प्रजासत्ताक दिन न्यूजरील (1950): भारतीय संविधान अमलात येऊन सार्वभौम प्रजासत्ताकाचा उदय झाल्याचे ऐतिहासिक चलचित्र.'
    }
  },
  {
    id: 'a32',
    title: 'Interview Recording on Educational Opportunity',
    year: 1953,
    cat: 'AUDIO',
    lang: 'English',
    desc: 'Audio interview discussing the role of scientific universities, student stipends, and international scholarships in eradicating social backwardness.',
    excerpt: 'Give the backward classes education, and they will forge their own tools of emancipation. You do not need to patronize them; just give them equal opportunity.',
    summary: 'Executive Summary:\n• Philosophy of Education: Asserts that access to premier scientific, legal, and technical education is the ultimate equalizing force in a stratified society.\n• Critique of Tokenism: Insisted that primary education must be compulsory and backed by state-funded hostels, books, and stipends.',
    fullText: `Audio Transcript (Mumbai, 1953):\n"Question: Dr. Ambedkar, what is the single most urgent reform needed in India today?\nAnswer: Without hesitation, I say it is education. Not the clerical education that turns young men into babus, but modern scientific and technical education. My people have been deliberately kept in ignorance for thousands of years. Once they acquire modern knowledge, no power on earth can keep them enslaved."`,
    accessionNo: 'DAIC-AV-1953-ED-032',
    preservationStatus: 'High Definition Remaster from Original Acetate Disc Master',
    repository: 'DAIC Sound Recording Vault',
    ocrConfidence: '99.4% (Audio Transcript)',
    tags: ['education', 'interview', 'equality', 'audio', 'youth'],
    conceptNodes: ['c-democracy'],
    transText: {
      hi: 'शिक्षा और अवसर पर दुर्लभ साक्षात्कार (1953): यदि पिछड़े वर्गों को आधुनिक वैज्ञानिक शिक्षा दी जाए, तो वे स्वयं अपनी मुक्ति के साधन तैयार कर लेंगे।',
      mr: 'शिक्षणावर दुर्मिळ ध्वनीमुद्रित मुलाखत (1953): आधुनिक विज्ञान आणि तंत्रज्ञानाचे शिक्षण हेच सामाजिक शोषणाविरुद्धचे सर्वात मोठे हत्यार आहे.'
    }
  },
  {
    id: 'a33',
    title: 'Castes in India: Their Mechanism, Genesis and Development',
    year: 1917,
    cat: 'WRITINGS',
    lang: 'English',
    desc: 'Seminal anthropological research paper first presented at Dr. Alexander Goldenweiser\'s anthropology seminar at Columbia University on 9 May 1916; published in Indian Antiquary in May 1917.',
    excerpt: 'Caste in India means an artificial chopping off of the population into fixed and definite units, each prevented from fusing into another through the strict enforcement of endogamy.',
    summary: 'Executive Summary:\n• Academic Breakthrough: Presented when Dr. Ambedkar was only 25 years old; remains a landmark in world anthropological literature.\n• Endogamy as Core: Proved that caste is fundamentally "enclosed class"—maintained by enforcing strict endogamy through practices such as Sati, enforced widowhood, and child marriage to control female sexuality and maintain numerical parity within the endogamous circle.\n• Contagion of Caste: Explained how the priestly class closed itself first, and surrounding classes imitated the enclosure in a hierarchical chain of emulation.',
    fullText: `Indian Antiquary, Vol. XLI, May 1917:\nI propose to investigate the mechanism of the Caste System in India.\n\nSection 2: Endogamy is the only one characteristic that is peculiar to caste. If we succeed in showing how endogamy is maintained, we shall have explained the genesis and mechanism of the Caste system.\n\nSection 4: The problem of maintaining numerical balance between the sexes in an endogamous group. A surplus woman or a surplus man creates a danger to endogamy. The Brahminical solution was the sacrifice of the woman through Sati, enforced lifelong widowhood, or girl marriage before puberty.\n\nConclusion: Caste was created by the priestly class closing its doors, and other groups, through the law of social imitation, closed theirs in turn.`,
    accessionNo: 'DAIC-WR-1917-CI-033',
    preservationStatus: 'Indian Antiquary 1917 Offprint Master · Deacidified Mylar Sleeve',
    repository: 'Columbia University Rare Books / DAIC Digital Repository',
    ocrConfidence: '99.6%',
    tags: ['caste', 'anthropology', 'columbia', 'endogamy', 'sociology'],
    conceptNodes: ['c-caste-annihilation', 'c-gender-code'],
    transText: {
      hi: 'भारत में जातियां: उनकी कार्यप्रणाली, उत्पत्ति और विकास (1917): जाति का मूल आधार अंतर्विवाह (endogamy) है। सती प्रथा और बाल विवाह इसी जातिगत घेरेबंदी को बनाए रखने के उपकरण थे।',
      mr: 'भारतातील जाती: त्यांची यंत्रणा, उत्पत्ती आणि विकास (1917): जातीव्यवस्था टिकवून ठेवण्यासाठी अंतर्विवाहाची सक्ती आणि स्त्रियांवर बंधने लादली गेली, हे सिद्ध करणारा निबंध.'
    }
  },
  {
    id: 'a34',
    title: 'The Evolution of Provincial Finance in British India',
    year: 1925,
    cat: 'WRITINGS',
    lang: 'English',
    desc: 'Monumental doctoral dissertation published by P. S. King & Son, London; featuring an introduction by Prof. Edwin R. A. Seligman, analyzing imperial fiscal decentralization.',
    excerpt: 'No scheme of provincial autonomy can be real without financial autonomy. The right to raise revenues and determine expenditure priorities must belong to representative provincial assemblies.',
    summary: 'Executive Summary:\n• Academic Distinction: Earned Dr. Ambedkar his Ph.D. from Columbia University; established his reputation as one of the British Empire\'s foremost public finance scholars.\n• Three Stages of Finance: Analyzes the evolution through Budget by Assignment (1871-1877), Budget by Assigned Revenues (1877-1882), and Budget by Shared Revenues (1882-1919).\n• Seligman\'s Praise: Prof. Seligman wrote: "Nowhere to my knowledge will the student find a more exhaustive study of the subject or one framed with a better sense of historical balance."',
    fullText: `London: P. S. King & Son, Orchard House, Westminster, 1925.\nPart I: Provincial Finance by Assignment. The financial system established under Lord Mayo was a desperate attempt to curb imperial deficits by throwing expenditure burdens onto the provinces without giving them expanding sources of revenue.\n\nPart III: The Government of India Act 1919 and Meston Settlement. The separation of tax bases and the abolition of divided heads: lessons for post-colonial federal finance in India.`,
    accessionNo: 'DAIC-WR-1925-PF-034',
    preservationStatus: 'First Edition P. S. King Original Binding · Cold Vault Archival Standard',
    repository: 'Columbia Special Collections / Dr. Ambedkar International Centre Archives',
    ocrConfidence: '99.3%',
    tags: ['economics', 'finance', 'thesis', 'seligman', 'federalism'],
    conceptNodes: ['c-economics-rbi', 'c-state-socialism'],
    transText: {
      hi: 'ब्रिटिश भारत में प्रांतीय वित्त का विकास (1925): वित्तीय स्वायत्तता के बिना प्रांतीय स्वायत्तता निरर्थक है; भारत में राजकोषीय संघवाद का आधार स्तंभ।',
      mr: 'ब्रिटिश भारतातील प्रांतीय वित्ताचा विकास (1925): अर्थशास्त्रातील पीएच.डी. प्रबंध, ज्याने भारताच्या संघराज्यीय वित्तव्यवस्थेचा पाया घातला.'
    }
  },
  {
    id: 'a35',
    title: 'Federation versus Freedom',
    year: 1939,
    cat: 'WRITINGS',
    lang: 'English',
    desc: 'Incisive address delivered on 29 January 1939 at the Gokhale Institute of Politics and Economics, Pune, subjecting the federal scheme of the Government of India Act 1935 to devastating critique.',
    excerpt: 'A federation between autocratic feudal Princes and democratically governed Provinces is an unnatural monstrosity designed to preserve imperial control.',
    summary: 'Executive Summary:\n• Constitutional Critique: Exposes how the British Government structured the federal assembly to give unelected feudal maharajas disproportionate veto power to block progressive democratic reforms.\n• Distinction between Federation and Confederation: Proves that genuine federalism requires democratic homogeneity across constituent units.\n• Democratic Alternative: Outlined the principles of a genuine democratic union based on popular sovereignty and human rights.',
    fullText: `Gokhale Institute of Politics and Economics, Kale Memorial Lecture, 1939:\nLadies and Gentlemen,\nI propose to examine the Federal Scheme embodied in the Government of India Act 1935. It is a scheme that promises democracy with one hand and strangles it with the other.\n\nThe Princes are given one-third of the seats in the Federal Assembly, though their population is less than a quarter. These Princely representatives will not be elected by the people of the States, but nominated by autocratic rulers. They will form an impenetrable reactionary bloc against any social legislation for the poor.`,
    accessionNo: 'DAIC-WR-1939-FF-035',
    preservationStatus: 'Gokhale Institute Original Offprint · Restored Master Scan',
    repository: 'Gokhale Institute / DAIC Central Archives',
    ocrConfidence: '99.0%',
    tags: ['constitutional', 'federation', 'politics', 'democracy', 'gokhale'],
    conceptNodes: ['c-democracy', 'c-const-rights'],
    transText: {
      hi: 'फेडरेशन बनाम फ्रीडम (1939): सामंती राजाओं और लोकतांत्रिक प्रांतों का ऐसा संघ लोकतंत्र का उपहास है जो सामाजिक सुधारों को रोकने के लिए बनाया गया है।',
      mr: 'फेडरेशन विरुद्ध स्वातंत्र्य (1939): संस्थानिकांच्या हुकूमशाहीला शह देऊन संपूर्ण लोकशाहीची मागणी करणारे गोखले इन्स्टिट्यूटमधील ऐतिहासिक व्याख्यान.'
    }
  },
  {
    id: 'a36',
    title: 'Ranade, Gandhi and Jinnah',
    year: 1943,
    cat: 'SPEECHES',
    lang: 'English',
    desc: 'Address delivered on the 101st birthday celebration of Justice Mahadev Govind Ranade in Pune on 18 January 1943, offering a penetrating philosophical critique of personality cults and hero-worship in Indian politics.',
    excerpt: 'Hero-worship in politics is a sure road to degradation and to eventual dictatorship. In politics, Bhakti or hero-worship is a certain road to ruin.',
    summary: 'Executive Summary:\n• Critique of Personality Cults: Compared Justice Ranade\'s reformist rationalism with the charismatic populism of Mahatma Gandhi and M. A. Jinnah.\n• Social Reform Priority: Argued along with Ranade that political self-government without comprehensive social reform of caste and gender inequality is bound to produce tyranny.\n• Prophetic Warning: Laid the intellectual foundation for his famous warning on constitutional morality in the Constituent Assembly six years later.',
    fullText: `Poona, 18 January 1943:\nGentlemen,\nWe have gathered here to honour the memory of Justice Ranade. Ranade was not a politician who pandered to the prejudices of the mob. He was a social philosopher who saw that political freedom without social reform was a dangerous delusion.\n\nToday, Indian politics has become completely personal. It is dominated by two figures: Mr. Gandhi and Mr. Jinnah. Both have made politics an affair of unquestioning devotion. Their followers believe that to question them is treason. But I say to you: greatness is not synonymous with hero-worship. Ranade was great because he sought truth, not personal adoration.`,
    accessionNo: 'DAIC-SP-1943-RGJ-036',
    preservationStatus: 'First Edition Thacker & Co. Pamphlet · Neutral pH Encapsulation',
    repository: 'Dr. Ambedkar International Centre Archives',
    ocrConfidence: '99.4%',
    tags: ['politics', 'history', 'leadership', 'hero-worship', 'ranade'],
    conceptNodes: ['c-democracy', 'c-caste-annihilation'],
    transText: {
      hi: 'रानाडे, गांधी और जिन्ना (1943): राजनीति में किसी व्यक्ति की अंधभक्ति पतन और तानाशाही का सीधा मार्ग है।',
      mr: 'रानडे, गांधी आणि जिन्ना (1943): राजकारणातील व्यक्तीपूजा ही लोकशाहीच्या विनाशास कारणीभूत ठरते, असा सडेतोड इशारा देणारे व्याख्यान.'
    }
  },
  {
    id: 'a37',
    title: 'What Congress and Gandhi Have Done to the Untouchables',
    year: 1945,
    cat: 'WRITINGS',
    lang: 'English',
    desc: 'Forensic documentary indictment documenting the political negotiations, legislative records, and electoral compromises concerning the Depressed Classes between 1917 and 1945.',
    excerpt: 'The Untouchables are an independent minority. Their political status cannot be subsumed under upper-caste paternalism or humanitarian charity.',
    summary: 'Executive Summary:\n• Evidentiary Masterpiece: Over 400 pages of official resolutions, committee reports, and municipal minutes exposing the gap between rhetoric and reality on untouchability removal.\n• Rejection of Paternalism: Rejected the term "Harijan" as patronizing, insisting on autonomous political representation, constitutional rights, and state enforcement.\n• International Reception: Distributed to delegations at the founding conference of the United Nations in San Francisco (1945).',
    fullText: `Thacker & Co., Bombay, 1945.\nChapter III: A Profiteering Firm. An analysis of the Congress campaign against untouchability. Out of vast funds collected by the Tilak Swaraj Fund, only a negligible fraction was ever allocated to the actual education or economic uplift of untouchables.\n\nChapter IX: The Gandhian Dilemma. Can a man who upholds the Varna system simultaneously campaign for the eradication of untouchability? Untouchability is nothing but the logical fruit of the Varna hierarchy.`,
    accessionNo: 'DAIC-WR-1945-CG-037',
    preservationStatus: 'Original Hardcover First Edition · 600 DPI Digital Archival Scan',
    repository: 'National Library / Dr. Ambedkar International Centre Archives',
    ocrConfidence: '99.1%',
    tags: ['politics', 'rights', 'caste', 'untouchables', 'un-conference'],
    conceptNodes: ['c-minorities', 'c-caste-annihilation'],
    transText: {
      hi: 'कांग्रेस और गांधी ने अछूतों के लिए क्या किया (1945): अस्पृश्य एक स्वतंत्र अल्पसंख्यक हैं और उनके अधिकारों को दया के बजाय संवैधानिक अधिकार के रूप में मिलना चाहिए।',
      mr: 'काँग्रेस आणि गांधींनी अस्पृश्यांसाठी काय केले (1945): उपकाराची भाषा नाकारून कायदेशीर हक्क आणि राजकीय प्रतिनिधित्वाची परखड मांडणी.'
    }
  },
  {
    id: 'a38',
    title: 'The Untouchables: Who Were They and Why They Became Untouchables',
    year: 1948,
    cat: 'WRITINGS',
    lang: 'English',
    desc: 'Pioneering sociological and historical monograph offering the "Broken Men" hypothesis for the origin of untouchability in ancient Indian civilization.',
    excerpt: 'Untouchability was born out of the struggle between settled tribes and nomadic Broken Men, intensified by the hatred of the Brahmins towards those who embraced Buddhism and persisted in beef-eating.',
    summary: 'Executive Summary:\n• The "Broken Men" Theory: Identifies untouchables not as racially distinct from other Indians, but as remnants of broken tribes who lived on the peripheries of settled agricultural villages.\n• Religious Roots of Exclusion: Explains how the orthodox counter-revolution against Buddhism weaponized dietary taboos (beef-eating) to impose hereditary pollution upon Buddhist adherents.\n• Comparative History: Draws comparisons with the Burakumin of Japan and outcastes of ancient Rome.',
    fullText: `Amrit Book Co., New Delhi, 1948.\nChapter IV: Beef-eating as the Root of Untouchability. In Vedic times, cow slaughter and beef consumption were widespread among all classes, including Brahmins. Why then did beef-eating become a mark of untouchability?\n\nChapter XII: The Triumph of Brahmanism. When Brahmins abandoned beef-eating in a supreme bid to outdo the Buddhists in vegetarian sanctity, they turned beef-eating into a hereditary mark of defilement against the Broken Men who could not afford to abandon it.`,
    accessionNo: 'DAIC-WR-1948-UN-038',
    preservationStatus: 'First Edition Presentation Copy · Restored Master Scan',
    repository: 'Dr. Ambedkar International Centre Archives',
    ocrConfidence: '99.3%',
    tags: ['caste', 'history', 'society', 'buddhism', 'broken-men'],
    conceptNodes: ['c-caste-annihilation', 'c-buddhism'],
    transText: {
      hi: 'अछूत: वे कौन थे और अछूत कैसे बने (1948): अस्पृश्यता की उत्पत्ति "ब्रोकन मेन" की ऐतिहासिक त्रासदी और बौद्ध धम्म के प्रति द्वेष से जुड़ी है।',
      mr: 'अस्पृश्य: ते कोण होते आणि अस्पृश्य कसे झाले (1948): अस्पृश्यतेच्या उत्पत्तीचा ऐतिहासिक, वैज्ञानिक आणि समाजशास्त्रीय शोध घेणारा ग्रंथ.'
    }
  },
  {
    id: 'a39',
    title: 'Thoughts on Linguistic States',
    year: 1955,
    cat: 'WRITINGS',
    lang: 'English',
    desc: 'Strategic memorandum and constitutional blueprint on the reorganization of Indian states along linguistic lines, advocating "One State, One Language" with balanced administrative units.',
    excerpt: 'A linguistic State with an overwhelming majoritarian community will easily become a tyranny for the minority unless constitutional safeguards and balanced administrative sizes are enforced.',
    summary: 'Executive Summary:\n• Constitutional Foresight: Anticipated regional tensions and proposed the division of excessively large states like Uttar Pradesh, Bihar, and Madhya Pradesh into smaller, governable units.\n• Second Capital for India: Boldly proposed Hyderabad as the second capital of India to bridge North-South emotional and geographical cohesion.\n• Minority Protection: Insisted that the language of a state must never be used to disenfranchise linguistic and religious minorities.',
    fullText: `Milind Mahavidyalaya, Aurangabad, December 1955.\nChapter II: The Dangers of a Linguistic State. A linguistic state produces cultural cohesion, but it also produces dangerous parochialism. In a multilingual federation, the Union language must remain sovereign for interstate commerce and federal courts.\n\nChapter VII: Hyderabad as the Second Capital. Delhi is too close to northern borders, vulnerable to climatic extremes and military hazards. Hyderabad possesses central geographical location, world-class infrastructure, and represents the harmonious confluence of northern and southern cultures.`,
    accessionNo: 'DAIC-WR-1955-LS-039',
    preservationStatus: 'First Edition Milind Publications · Cold Archive Storage',
    repository: 'Milind College Archives / DAIC Archival Unit',
    ocrConfidence: '99.5%',
    tags: ['states', 'politics', 'constitutional', 'linguistic', 'hyderabad'],
    conceptNodes: ['c-democracy', 'c-const-rights'],
    transText: {
      hi: 'भाषाई राज्यों पर विचार (1955): राज्यों के पुनर्गठन में प्रशासनिक दक्षता, अल्पसंख्यकों की सुरक्षा और हैदराबाद को द्वितीय राजधानी बनाने का दूरदर्शी प्रस्ताव।',
      mr: 'भाषिक राज्यनिर्मितीवरील विचार (1955): भाषिक प्रांतरचनेचे विश्लेषण करून लहान राज्ये आणि हैदराबादला भारताची दुसरी राजधानी करण्याचा विचार.'
    }
  },
  {
    id: 'a40',
    title: 'Presidential Address: All India Depressed Classes Congress',
    year: 1930,
    cat: 'SPEECHES',
    lang: 'English',
    desc: 'Presidential address delivered at Nagpur on 8 August 1930, asserting that British colonial rule had failed to liberate the depressed classes and demanding sovereign Swaraj with social guarantees.',
    excerpt: 'Nobody can remove your grievances as well as you can, and you cannot remove them unless you get political power in your own hands. We must have our share in the executive and legislature of a free India.',
    summary: 'Executive Summary:\n• Disillusionment with Colonial Bureaucracy: Sharply critiqued the British administration for preserving caste privileges in order to maintain imperial tranquility.\n• Patriotism & Independence: Rejected allegations that Dalits were anti-national, declaring that self-rule (Swaraj) is essential, provided it is a government of the people, by the people, and for all people.\n• Preparation for London: Formulated the charter of demands presented months later at the First Round Table Conference.',
    fullText: `Nagpur, 8 August 1930:\nLadies and Gentlemen,\nWe have assembled at a critical moment in the history of our country. The British Government has ruled India for over 150 years. What has it done for the Depressed Classes? Has it opened the public wells? Has it abolished untouchability? Has it opened the doors of the police and the army to our sons? No! It has accommodated caste prejudice to protect its revenues.\n\nTherefore, we do not weep for the passing of British rule. We want Swaraj, but it must be a Swaraj where the Depressed Classes are not ruled by a fresh oligarchy, but are equal rulers of the nation.`,
    accessionNo: 'DAIC-SP-1930-DC-040',
    preservationStatus: 'Nagpur Conference Proceedings Reprint · High Density Scan',
    repository: 'Nagpur Central Memorial Library / DAIC Archives',
    ocrConfidence: '98.7%',
    tags: ['rights', 'representation', 'politics', 'nagpur', 'swaraj'],
    conceptNodes: ['c-minorities', 'c-democracy'],
    transText: {
      hi: 'अखिल भारतीय वंचित वर्ग कांग्रेस अध्यक्षीय भाषण (1930): अपनी समस्याओं का समाधान हमारे हाथों में राजनीतिक शक्ति आने पर ही संभव होगा। हमें स्वतंत्र भारत में बराबर की हिस्सेदारी चाहिए।',
      mr: 'अखिल भारतीय अस्पृश्य परिषद अध्यक्षीय भाषण (1930): इंग्रज सरकारने अस्पृश्यता नष्ट केली नाही; स्वातंत्र्यात आम्हाला बरोबरीचा वाटा हवा आहे.'
    }
  },
  {
    id: 'a41',
    title: 'Speech at the First Round Table Conference',
    year: 1930,
    cat: 'SPEECHES',
    lang: 'English',
    desc: 'Electrifying address delivered in the House of Lords, London on 20 November 1930 during the Plenary Session of the First Round Table Conference.',
    excerpt: 'The bureaucratic despotism of the British Raj has not lifted the burden of untouchability. We want a government in which men in power will not be afraid to amend the social code of the country.',
    summary: 'Executive Summary:\n• Historic Debut on World Stage: First time an untouchable leader addressed the imperial British government directly as an equal plenipotentiary delegate.\n• Stunned British Delegates: Challenged British hypocrisy for justifying colonial subjugation in the name of minority protection while leaving 50 million Dalits in social servitude.\n• Blueprint for Responsible Government: Demanded a fully representative government responsible to an elected Indian parliament, conditioned upon strict statutory safeguards for minorities.',
    fullText: `House of Lords, London, 20 November 1930:\nMy Lord Chancellor, Ladies and Gentlemen,\nI stand before you on behalf of one-fifth of the total population of British India—a population of fifty millions of people who have been reduced to a position worse than that of the serf or the slave.\n\nWe are often told that the British came to India as trustees of the depressed classes. If we are still untouchables after 150 years of British rule, what good is this trusteeship? When we drink water from a public well, we are beaten. When we wear clean clothes, we are assaulted. The British police stand by and say it is a matter of custom.\n\nWe want a government of the people, where those in power will owe their seats to our votes and will have the courage to strike down oppressive customs by the law of the land!`,
    accessionNo: 'DAIC-SP-1930-RTC-041',
    preservationStatus: 'Official Parliamentary Command Paper (Cmd. 3772) · 600 DPI Master',
    repository: 'British Parliamentary Archives / DAIC Archival Unit',
    ocrConfidence: '99.8%',
    tags: ['rights', 'representation', 'constitutional', 'london', 'rtc'],
    conceptNodes: ['c-minorities', 'c-democracy', 'c-const-rights'],
    transText: {
      hi: 'प्रथम गोलमेज सम्मेलन ऐतिहासिक भाषण (लंदन, 1930): ब्रिटिश हुकूमत ने अछूतों का उद्धार नहीं किया। हमें ऐसी सरकार चाहिए जो सामाजिक कुरीतियों को कानूनन समाप्त करने का साहस रखे।',
      mr: 'पहिली गोलमेज परिषद लंडन भाषण (1930): लंडनच्या सभागृहात ५ कोटी अस्पृश्यांच्या वतीने ठणकावून स्वाभिमान आणि समतेची मागणी करणारा ऐतिहासिक आवाज.'
    }
  },
  {
    id: 'a42',
    title: 'Buddhism and Communism (Kathmandu World Fellowship Address)',
    year: 1956,
    cat: 'SPEECHES',
    lang: 'English',
    desc: 'Final philosophical address delivered on 20 November 1956 at the Fourth Conference of the World Fellowship of Buddhists in Kathmandu, Nepal, comparing the means and ends of the Buddha and Karl Marx.',
    excerpt: 'The Buddha\'s method was persuasion, not force; morality, not terror. The Russian dictatorship may achieve equality for a brief time, but it destroys liberty. With the Buddha, you have equality and you keep liberty.',
    summary: 'Executive Summary:\n• Delivered Two Weeks Before Passing: Regarded as Dr. Ambedkar\'s spiritual and philosophical testament on the future of world civilization.\n• Means versus Ends: Acknowledged Marx\'s goal of abolishing private property and poverty, but demonstrated that communism achieves its ends through violent dictatorship and bloodshed, whereas Buddhism achieves voluntary renunciation and fraternity through ethical transformation.\n• Brotherhood over Dictatorship: Proved that a society can maintain enduring equality only if it is rooted in the moral law (Dhamma), not state coercion.',
    fullText: `Kathmandu, Nepal, 20 November 1956:\nVen\'ble Monks and Friends,\nThe question has often been asked: What is the relevance of Buddhism to the modern world when Communism has captured the imagination of so many countries?\n\nLet me tell you: The Buddha established the Sangha 2500 years before Karl Marx was born. In the Sangha, no monk had private property. It was the most rigorous communism the world has ever seen. But how was it established? By the sword? By the secret police? By purges? No! It was established by moral conversion, by teaching that greed is the cause of suffering.\n\nCommunism can give you bread, but it takes away your freedom. Buddhism gives you both bread and freedom, because it builds equality upon the rock of fraternity.`,
    accessionNo: 'DAIC-SP-1956-BC-042',
    preservationStatus: 'World Fellowship of Buddhists Proceedings · Audio Sync Master',
    repository: 'DAIC Sacred Philosophy Archives / Kathmandu Archive',
    ocrConfidence: '99.6%',
    tags: ['religion', 'buddhism', 'politics', 'communism', 'marx', 'kathmandu'],
    conceptNodes: ['c-buddhism', 'c-democracy'],
    transText: {
      hi: 'बौद्ध धम्म और साम्यवाद (काठमांडू, 1956): साम्यवाद रोटी दे सकता है पर स्वतंत्रता छीन लेता है; बुद्ध का धम्म स्वतंत्रता, समता और बंधुता तीनों प्रदान करता है।',
      mr: 'बुद्ध की मार्क्स (काठमांडू परिषद, 1956): हिंसेशिवाय आणि हुकूमशाहीशिवाय चिरंतन समता कशी साधायची, याचे बुद्ध धम्मातील तत्त्वज्ञान.'
    }
  },
  {
    id: 'a43',
    title: 'Waiting for a Visa: Autobiographical Reminiscences',
    year: 1936,
    cat: 'MANUSCRIPTS',
    lang: 'English',
    desc: 'Deeply personal autobiographical memoirs written during 1935-36, recounting harrowing lived encounters with untouchability in Baroda, Satara, Chalisgaon, and Daulatabad.',
    excerpt: 'A person who is an untouchable in India is an untouchable everywhere to a Hindu, whether educated or illiterate, rich or poor.',
    summary: 'Executive Summary:\n• Autobiographical Classic: Written on return from Columbia and London, recording vivid firsthand experiences of denial of shelter, food, drinking water, and transport despite his stellar academic credentials.\n• Used at Columbia University: Included in the core undergraduate curriculum at Columbia University as a standard text on civil rights and systemic social prejudice.\n• Profound Human Emotion: Unflinchingly documents how human dignity is assaulted in everyday encounters.',
    fullText: `Manuscript Draft, 1935-36:\nSection 2: Return from America and the Baroda Inn. In 1917, having obtained degrees from Columbia and LSE, I arrived in Baroda to fulfill my bond to the Gaikwad state. No Hindu hotel would give me shelter. No Parsi inn would accept an untouchable guest unless I concealed my identity.\n\nOn the eleventh day, a crowd of Parsis armed with sticks arrived to drive me out. I sat under a banyan tree and wept bitterly. With all my education, I was still an untouchable whom no man would shelter.`,
    accessionNo: 'DAIC-MS-1936-WV-043',
    preservationStatus: 'Original Typescript Folios · Columbia Core Text Archive',
    repository: 'Columbia University Archives / DAIC Personal Papers Vault',
    ocrConfidence: '99.5%',
    tags: ['caste', 'autobiography', 'manuscript', 'columbia', 'lived-experience'],
    conceptNodes: ['c-caste-annihilation'],
    transText: {
      hi: 'वेटिंग फॉर अ वीजा (1936): आत्मकथात्मक संस्मरण, जिसमें बड़ौदा और अन्य स्थानों पर छुआछूत के कड़वे अनुभवों का मार्मिक विवरण है।',
      mr: 'वेटिंग फॉर अ व्हिसा (1936): डॉ. बाबासाहेबांचे आत्मकथनात्मक अनुभव; कोलंबिया विद्यापीठाच्या अभ्यासक्रमात समाविष्ट असलेला जगप्रसिद्ध मजकूर.'
    }
  }
]
