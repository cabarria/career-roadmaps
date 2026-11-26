import {
  Atom, BrainCircuit, BriefcaseBusiness, ChartCandlestick, ChartNoAxesCombined,
  CircuitBoard, ClefTreble, ClipboardPlus, CodeXml, Cog, Dna, DraftingCompass, Feather,
  Gamepad2, GraduationCap, HandHeart, HardHat, HeartPulse, Landmark, Leaf,
  Lightbulb, MessagesSquare, Palette, Pill, Scale, Sigma, Stethoscope, Telescope,
  WalletCards,
} from 'lucide-react';

const sections = [
  {
    id: 'engineering',
    label: 'Engineering & Built Environment',
    filterLabel: 'Engineering',
    icon: '⌂',
    accent: '#95c5e6',
    description: 'Design buildings, infrastructure, and the systems that make them work.',
    fields: [
      ['architecture', 'Architecture', 'Design buildings, shape cities, and follow the path to licensure.', '#95c5e6', DraftingCompass],
      ['biomedical-engineering', 'Biomedical Engineering', 'Translate engineering into medical devices, imaging, and diagnostics.', '#8adbc5', HeartPulse],
      ['civil-engineering', 'Civil Engineering', 'Plan and build structures, transportation networks, and public works.', '#e6b17f', HardHat],
      ['electrical-engineering', 'Electrical Engineering', 'Build circuits, power systems, and the hardware behind computing.', '#f2cf74', CircuitBoard],
      ['environmental-engineering', 'Environmental Engineering', 'Work on water, air quality, remediation, and environmental systems.', '#91d5a0', Leaf],
      ['mechanical-engineering', 'Mechanical Engineering', 'Design machines and products for manufacturing, energy, and robotics.', '#e9b08b', Cog],
    ],
  },
  {
    id: 'computing',
    label: 'Computing & Technology',
    filterLabel: 'Computing',
    icon: '⌘',
    accent: '#a9afff',
    description: 'Build software, work with data, and create interactive experiences.',
    fields: [
      ['computer-science', 'Computer Science', 'Explore software, algorithms, systems, and computing research.', '#81d5bf', CodeXml],
      ['data-science', 'Data Science', 'Use statistics, programming, and machine learning to make sense of data.', '#a8a5ff', ChartNoAxesCombined],
      ['game-development', 'Game Development', 'Make games through programming, art, design, and production.', '#77e5a0', Gamepad2],
    ],
  },
  {
    id: 'health',
    label: 'Health & Life Sciences',
    icon: '✚',
    accent: '#8fdfc4',
    description: 'Study living systems and explore paths in patient care and biomedical research.',
    fields: [
      ['medicine-premed', 'Medicine (Pre-Med)', 'Follow the path from pre-med preparation to residency and clinical practice.', '#edac98', Stethoscope],
      ['molecular-biology', 'Molecular Biology', 'Study genes, proteins, and cells in research and biotechnology.', '#83d7aa', Dna],
      ['neuroscience', 'Neuroscience', 'Explore the brain and nervous system across lab, clinical, and industry paths.', '#c3a7fd', BrainCircuit],
      ['nursing', 'Nursing', 'Explore clinical practice, nursing licensure, and advanced care roles.', '#8cdcd5', ClipboardPlus],
      ['pharmacy', 'Pharmacy', 'Study medication and patient care through PharmD and research paths.', '#9cdab3', Pill],
    ],
  },
  {
    id: 'science',
    label: 'Physical Sciences & Math',
    filterLabel: 'Science & Math',
    icon: '✦',
    accent: '#c0aaff',
    description: 'Investigate the physical world and develop the mathematics used to describe it.',
    fields: [
      ['astronomy-astrophysics', 'Astronomy & Astrophysics', 'Study stars, galaxies, and the universe through theory and observation.', '#a7b7fd', Telescope],
      ['mathematics', 'Mathematics', 'Explore proof, modeling, and careers that use quantitative reasoning.', '#efc18d', Sigma],
      ['physics', 'Physics', 'Study matter and energy through experiments, theory, and computation.', '#c4a4fa', Atom],
    ],
  },
  {
    id: 'business',
    label: 'Business, Law & Policy',
    icon: '▥',
    accent: '#ecc78d',
    description: 'Explore how organizations, markets, institutions, and governments make decisions.',
    fields: [
      ['business-administration', 'Business Administration', 'Explore management, operations, consulting, and entrepreneurship.', '#ecd385', BriefcaseBusiness],
      ['economics', 'Economics', 'Use models and evidence to study markets, incentives, and public policy.', '#91c8be', ChartCandlestick],
      ['finance', 'Finance', 'Analyze investments, financial markets, and business decisions.', '#94deb1', WalletCards],
      ['law', 'Law', 'Plan for law school, legal practice, and careers in advocacy and policy.', '#dfb594', Scale],
      ['political-science', 'Political Science', 'Study elections, institutions, international relations, and public policy.', '#b5c7ef', Landmark],
    ],
  },
  {
    id: 'humanities',
    label: 'Arts, Humanities & Society',
    filterLabel: 'Arts & Humanities',
    icon: '✳',
    accent: '#ecacc0',
    description: 'Make creative work, teach, and study how people and communities live.',
    fields: [
      ['art-and-design', 'Art & Design', 'Develop a creative practice and build a portfolio for studio and design work.', '#f2abc5', Palette],
      ['education', 'Education', 'Explore classroom teaching, school leadership, and learning design.', '#e6be81', GraduationCap],
      ['english', 'English', 'Turn close reading and writing into paths in publishing, teaching, and more.', '#e6ae88', Feather],
      ['music', 'Music', 'Train as a performer, composer, or teacher and explore paths from stage to studio.', '#c9a8ee', ClefTreble],
      ['philosophy', 'Philosophy', 'Study ethics, logic, and argument and see where those skills can lead.', '#edc389', Lightbulb],
      ['psychology', 'Psychology', 'Study behavior and explore clinical, research, and applied careers.', '#e5b5d6', MessagesSquare],
      ['social-work', 'Social Work', 'Support people and communities through practice, advocacy, and policy.', '#e7ada6', HandHeart],
    ],
  },
];

export const roadmapGroups = sections
  .map(({ fields, ...group }) => ({
    ...group,
    roadmaps: fields
      .map(([slug, title, description, accent, Icon]) => ({ slug, title, description, accent, Icon }))
      .sort((left, right) => left.title.localeCompare(right.title)),
  }))
  .sort((left, right) => left.label.localeCompare(right.label));

export const roadmaps = roadmapGroups.flatMap(group => group.roadmaps);

export function filterRoadmaps(query, groupId) {
  const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);

  return roadmapGroups
    .filter(group => !groupId || group.id === groupId)
    .map(group => ({
      ...group,
      roadmaps: group.roadmaps.filter(roadmap => {
        const searchable = `${roadmap.title} ${roadmap.description} ${roadmap.slug} ${group.label}`.toLowerCase();
        return terms.every(term => searchable.includes(term));
      }),
    }))
    .filter(group => group.roadmaps.length > 0);
}
