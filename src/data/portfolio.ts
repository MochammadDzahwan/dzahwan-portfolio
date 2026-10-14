export interface Project {
  id: string
  number: string
  category: string
  year: string
  title: string
  summary: string
  description: string
  problem: string
  solution: string
  stack: string[]
  highlights: string[]
  visual: 'oil' | 'guest' | 'mail' | 'academic' | 'bookorama'
  note: string
  metrics?: { label: string; value: string }[]
}

export interface Experience {
  role: string
  company: string
  badge: string
  date: string
  location: string
  isCurrent?: boolean
  award?: string
  points: string[]
  techStack: string[]
}

export interface SkillCategory {
  group: string
  description: string
  items: { name: string; level?: string; icon?: string }[]
}

export interface Education {
  date: string
  degree: string
  institution: string
  gpa: string
  duration: string
  honor: string
  highlights: string[]
}

export interface Certification {
  title: string
  issuer: string
  year: string
  type: 'certification' | 'license' | 'copyright'
}

export interface Achievement {
  title: string
  organization: string
  year: string
  detail: string
  badge?: string
}

export const skills: SkillCategory[] = [
  {
    group: 'Frontend Engineering',
    description: 'Building performant, accessible, and reactive user interfaces for complex web apps.',
    items: [
      { name: 'React.js', level: 'Advanced' },
      { name: 'TypeScript', level: 'Advanced' },
      { name: 'JavaScript (ES6+)', level: 'Advanced' },
      { name: 'Tailwind CSS', level: 'Advanced' },
      { name: 'HTML5 & CSS3', level: 'Advanced' },
      { name: 'UI/UX Design', level: 'Intermediate' },
      { name: 'Figma', level: 'Intermediate' },
      { name: 'Vite', level: 'Advanced' },
    ],
  },
  {
    group: 'Backend & Enterprise APIs',
    description: 'Designing resilient server architectures, RESTful APIs, and business process automation.',
    items: [
      { name: 'Node.js', level: 'Intermediate' },
      { name: 'PHP', level: 'Advanced' },
      { name: 'Laravel', level: 'Advanced' },
      { name: '.NET', level: 'Intermediate' },
      { name: 'RESTful APIs', level: 'Advanced' },
      { name: 'Express.js', level: 'Intermediate' },
      { name: 'RBAC Security', level: 'Advanced' },
    ],
  },
  {
    group: 'Machine Learning & AI',
    description: 'Developing predictive time-series models, NLP intent classifiers, and deep learning pipelines.',
    items: [
      { name: 'Python', level: 'Advanced' },
      { name: 'TensorFlow', level: 'Intermediate' },
      { name: 'LSTM / BiLSTM', level: 'Advanced' },
      { name: 'Natural Language Processing (NLP)', level: 'Intermediate' },
      { name: 'Scikit-Learn', level: 'Advanced' },
      { name: 'Pandas & NumPy', level: 'Advanced' },
      { name: 'Data Visualization', level: 'Advanced' },
      { name: 'Streamlit', level: 'Advanced' },
    ],
  },
  {
    group: 'Databases & Dev Ecosystem',
    description: 'Database schema design, query optimization, version control, and enterprise agile practices.',
    items: [
      { name: 'Microsoft SQL Server', level: 'Advanced' },
      { name: 'MySQL', level: 'Advanced' },
      { name: 'PostgreSQL', level: 'Intermediate' },
      { name: 'SQL Query Optimization', level: 'Advanced' },
      { name: 'Git & GitHub', level: 'Advanced' },
      { name: 'Postman', level: 'Advanced' },
      { name: 'Agile / Scrum', level: 'Advanced' },
    ],
  },
]

export const projects: Project[] = [
  {
    id: 'wti-oil-prediction',
    number: '01',
    category: 'MACHINE LEARNING',
    year: '2025',
    title: 'WTI Crude Oil Price Prediction',
    summary: 'Deep learning time-series forecasting model using LSTM networks with Streamlit deployment.',
    description: 'An advanced Long Short-Term Memory (LSTM) deep learning pipeline designed to model multi-step volatility and price fluctuations in West Texas Intermediate (WTI) crude oil markets.',
    problem: 'Crude oil pricing exhibits severe non-linear fluctuations driven by global geopolitics, economic trends, and demand shocks, making conventional linear statistical models ineffective.',
    solution: 'Engineered an end-to-end data preprocessing pipeline with rolling window sequences, hyperparameter tuning (units, dropout, learning rates), model evaluation benchmarks, and deployed an interactive Streamlit inference dashboard.',
    stack: ['Python', 'TensorFlow', 'LSTM', 'Scikit-learn', 'Streamlit', 'Pandas'],
    highlights: [
      'Bachelor Thesis at Diponegoro University (Graduated Cum Laude in 3.5 years)',
      'Official Copyright Certificate granted by Kemenkumham RI (2025)',
      'Interactive Streamlit web deployment with dynamic charting and forecasting',
    ],
    visual: 'oil',
    note: 'Bachelor Thesis · Official HKI Copyright',
    metrics: [
      { label: 'Architecture', value: 'LSTM Neural Net' },
      { label: 'Evaluation', value: 'Low RMSE/MAE' },
      { label: 'Deployment', value: 'Streamlit App' },
    ],
  },
  {
    id: 'guest-request-management',
    number: '02',
    category: 'MACHINE LEARNING',
    year: '2024',
    title: 'Guest Request Management & Classification',
    summary: 'NLP BiLSTM classification system automating guest inquiry triage and staff prioritization.',
    description: 'A machine learning NLP solution that automatically categorizes and prioritizes diverse guest requests in the hospitality sector, developed with the Bangkit Academy × BukitVista capstone team.',
    problem: 'Hospitality support desks experience high volumes of unstructured incoming messages, resulting in response bottlenecks, manual categorization delays, and delayed emergency handling.',
    solution: 'Constructed a Bidirectional LSTM NLP classifier with custom tokenization, text normalization, and intent prediction to route urgent tasks to operational staff automatically.',
    stack: ['Python', 'TensorFlow', 'NLP', 'BiLSTM', 'Keras', 'Flask API'],
    highlights: [
      'Bangkit Academy Capstone Project in partnership with BukitVista',
      'Engineered text preprocessing for multilingual and noisy real-world guest chats',
      'Enabled automated request prioritization for faster hotel response times',
    ],
    visual: 'guest',
    note: 'Bangkit Academy Capstone · Google Partnered',
    metrics: [
      { label: 'NLP Model', value: 'Bidirectional LSTM' },
      { label: 'Focus', value: 'Automated Triage' },
      { label: 'Domain', value: 'Hospitality Tech' },
    ],
  },
  {
    id: 'sips-mail-archiving',
    number: '03',
    category: 'WEB DEVELOPMENT',
    year: '2024',
    title: 'SIPS — Mail Archiving System',
    summary: 'Enterprise digital mail management & archiving web app built for Bank Syariah Indonesia.',
    description: 'A full-stack enterprise web application built during an internship at PT Bank Syariah Indonesia Tbk to modernize official incoming and outgoing correspondence tracking and digital archiving.',
    problem: 'Manual paper-based mail tracking led to document fragmentation, slow retrieval, lack of divisional visibility, and compliance overhead across banking departments.',
    solution: 'Designed and deployed a responsive Laravel web platform featuring strict Role-Based Access Control (RBAC), digitized indexing, secure PDF document previews, and automated disposition workflows.',
    stack: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'RBAC'],
    highlights: [
      'Developed during internship at PT Bank Syariah Indonesia Tbk',
      'Registered Intellectual Property Copyright Certificate (HKI 2024)',
      'Enterprise RBAC ensuring compartmentalized access across bank divisions',
    ],
    visual: 'mail',
    note: 'BSI Internship · Official HKI Copyright',
    metrics: [
      { label: 'Security', value: 'Role-Based Access (RBAC)' },
      { label: 'Impact', value: 'Banking Operations' },
      { label: 'Status', value: 'Copyright Registered' },
    ],
  },
  {
    id: 'academic-information-system',
    number: '04',
    category: 'WEB DEVELOPMENT',
    year: '2023',
    title: 'SIMPRO — Informatics Student Academic Information System',
    summary: 'Centralized academic portal for course enrollment, grading, and transcript tracking.',
    description: 'A comprehensive academic management system designed to streamline student data processing, course enrollment (KRS/KHS), academic performance monitoring, and lecturer approvals.',
    problem: 'Academic workflows required multiple touchpoints for student record verification and grading approvals without a consolidated web portal.',
    solution: 'Built with Laravel and MySQL, incorporating automated GPA calculations, role-based interfaces for students and lecturers, and comprehensive functional unit tests.',
    stack: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS', 'Alpine.js'],
    highlights: [
      'Academic Course Project at Diponegoro University',
      'Multi-role access for Students, Academic Advisors, and Administrators',
      'Optimized relational database queries for rapid student record retrieval',
    ],
    visual: 'academic',
    note: 'Informatics Academic Project',
    metrics: [
      { label: 'Database', value: 'Relational MySQL' },
      { label: 'Roles', value: 'Student / Lecturer / Admin' },
      { label: 'Testing', value: 'Functional & Unit' },
    ],
  },
  {
    id: 'bookorama-library-management',
    number: '05',
    category: 'WEB DEVELOPMENT',
    year: '2023',
    title: 'Bookorama — Library Management System',
    summary: 'A web-based library management application with comprehensive CRUD operations, book cataloging, and transaction tracking.',
    description: 'A full-stack web application designed to digitalize library administration, book inventory cataloging, member registration, and borrowing/returning circulation workflows with relational database integrity.',
    problem: 'Manual paper-based library records frequently resulted in lost loan history, misplaced inventory tracking, calculation errors for overdue books, and slow manual catalog searching for library members.',
    solution: 'Engineered a structured PHP and MySQL web application featuring full CRUD capabilities (Create, Read, Update, Delete) for book records, authors, and categories, integrated with loan status tracking, input validation, and responsive UI.',
    stack: ['PHP', 'MySQL', 'JavaScript', 'HTML5 & CSS3', 'Bootstrap', 'CRUD'],
    highlights: [
      'Complete CRUD operations for managing book inventory, authors, categories, and member transactions',
      'Normalized relational MySQL database schema ensuring ACID transaction consistency and fast query filtering',
      'Real-time borrowing status tracking with automated circulation records (Available, Borrowed, Overdue)',
    ],
    visual: 'bookorama',
    note: 'Database & Web Project',
    metrics: [
      { label: 'Architecture', value: 'Full CRUD & MVC' },
      { label: 'Database', value: 'Normalized MySQL' },
      { label: 'Module', value: 'Catalog & Circulation' },
    ],
  },
]

export const experiences: Experience[] = [
  {
    role: 'CIPTA IT Developer',
    company: 'PT CIMB Niaga Tbk',
    badge: 'BANKING TECH',
    date: 'JUL 2025 — PRESENT',
    location: 'Tangerang, Indonesia',
    isCurrent: true,
    award: 'Awarded Top 3 Best CIPTA IT Developer — Batch 5 (2026)',
    points: [
      'Develop and maintain high-reliability enterprise web applications using React.js and TypeScript for internal banking business processes.',
      'Integrate core RESTful APIs and backend microservices with rigorous input validation, error handling, and state synchronization.',
      'Active contributor to Agile sprint ceremonies, cross-functional code reviews, unit testing, and continuous deployment workflows.',
      'Collaborate closely with QA engineers, backend developers, solution architects, and business analysts to deliver resilient features.',
    ],
    techStack: ['React', 'TypeScript', 'REST APIs', 'Agile/Scrum', 'Enterprise Web', 'Git'],
  },
  {
    role: 'Full Stack Web Developer Intern',
    company: 'PT Bank Syariah Indonesia Tbk',
    badge: 'BANKING TECH',
    date: 'JAN 2024 — FEB 2024',
    location: 'Semarang, Indonesia',
    points: [
      'Architected and implemented SIPS — an internal web-based mail archiving system using Laravel and MySQL.',
      'Engineered granular Role-Based Access Control (RBAC), secure document uploads, and automated correspondence tracking.',
      'Successfully delivered production-ready software that earned an official Copyright Certificate (Surat Pencatatan Hak Cipta).',
    ],
    techStack: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'RBAC', 'Bootstrap'],
  },
  {
    role: 'Machine Learning Cohort',
    company: 'Bangkit Academy (Google, GoTo, Traveloka)',
    badge: 'INDEPENDENT STUDY',
    date: 'FEB 2024 — JUN 2024',
    location: 'Remote, Indonesia',
    points: [
      'Completed rigorous training in Machine Learning, Deep Learning, Natural Language Processing, and TensorFlow under industry mentors.',
      'Engineered a team capstone project with industrial partner BukitVista, building a BiLSTM NLP model for hospitality guest request triage.',
      'Earned professional DeepLearning.AI and Google TensorFlow credentials upon graduation.',
    ],
    techStack: ['Python', 'TensorFlow', 'Deep Learning', 'NLP', 'BiLSTM', 'Keras'],
  },
  {
    role: 'Management Database Laboratory Assistant',
    company: 'Diponegoro University',
    badge: 'ACADEMIC',
    date: 'FEB 2024 — JUN 2024',
    location: 'Semarang, Indonesia',
    points: [
      'Instructed undergraduate Computer Science students in database management, relational algebra, and schema normalization.',
      'Guided hands-on laboratory sessions in complex SQL queries, index optimization, and stored procedures using SQL Server.',
      'Evaluated student technical assignments and conducted weekly lab grading and troubleshooting.',
    ],
    techStack: ['Microsoft SQL Server', 'SQL Queries', 'Schema Design', 'Database Normalization'],
  },
]

export const education: Education[] = [
  {
    date: 'AUG 2021 — MAR 2025',
    degree: 'Bachelor of Computer Science (S.Kom)',
    institution: 'Diponegoro University (Universitas Diponegoro)',
    gpa: '3.80 / 4.00',
    duration: 'Graduated in 3.5 Years',
    honor: 'Cum Laude Honors',
    highlights: [
      'Accelerated graduation in 3.5 years with 3.80 / 4.00 GPA (Cum Laude).',
      'Thesis: Machine Learning LSTM model for Crude Oil Price Prediction (Copyright Registered).',
      'Active leadership in the Informatics Student Association (HMIF) as Competition Chairperson.',
    ],
  },
]

export const certifications: Certification[] = [
  {
    title: 'Copyright Certificate: WTI Crude Oil Price Prediction Application',
    issuer: 'Kemenkumham RI (Direktorat Jenderal Kekayaan Intelektual)',
    year: '2025',
    type: 'copyright',
  },
  {
    title: 'Copyright Certificate: SIPS Mail Archiving System',
    issuer: 'Kemenkumham RI (Direktorat Jenderal Kekayaan Intelektual)',
    year: '2024',
    type: 'copyright',
  },
  // {
  //   title: 'TOEFL ITP — Score 557',
  //   issuer: 'ETS / Language Testing',
  //   year: '2026',
  //   type: 'certification',
  // },
  {
    title: 'Machine Learning Specialization',
    issuer: 'DeepLearning.AI & Stanford Online',
    year: '2024',
    type: 'certification',
  },
  {
    title: 'DeepLearning.AI TensorFlow Developer Specialization',
    issuer: 'DeepLearning.AI / Coursera',
    year: '2024',
    type: 'certification',
  },
]

export const achievements: Achievement[] = [
  {
    title: 'Top 3 Best CIPTA IT Developer — Batch 5',
    organization: 'PT CIMB Niaga Tbk',
    year: '2026',
    detail: 'Recognized among top-performing IT developers in enterprise banking systems development.',
    badge: 'ENTERPRISE EXCELLENCE',
  },
  {
    title: 'Chairperson, Annual Informatics Competition (ANFORCOM)',
    organization: 'HMIF Diponegoro University',
    year: '2023',
    detail: 'Led the national technology and programming competition committee, coordinating sponsorships, tech logistics, and 300+ participants.',
    badge: 'LEADERSHIP',
  },
  {
    title: 'Best Member — Education & Training Division',
    organization: 'HMIF Diponegoro University',
    year: '2022',
    detail: 'Awarded for exceptional commitment in student peer-mentoring, technical workshops, and coding bootcamps.',
    badge: 'HONOR',
  },
]
