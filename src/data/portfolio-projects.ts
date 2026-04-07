// Portfolio Projects Data
// Professional project naming: Code + Evocative Name + Metadata

export interface PortfolioProject {
	code: string;
	title: string;
	category: 'residential' | 'commercial' | 'wellness' | 'office';
	year: string;
	location: string;
	area?: string;
	description: string;
	coverImage: string;
	imageCount: number;
	folderPath: string;
	featured?: boolean;
}

export const portfolioProjects: PortfolioProject[] = [
	// Residential Projects
	{
		code: 'NM-RES-01',
		title: 'Modern Minimalist Haven',
		category: 'residential',
		year: '2022',
		location: 'Mumbai',
		area: '1,850 sq ft',
		description: 'A contemporary apartment blending clean lines with warm textures, featuring innovative storage solutions and natural light optimization.',
		coverImage: '/images/portfolio/r01/IMG-20220313-WA0017.jpg',
		imageCount: 20,
		folderPath: 'r01',
		featured: true,
	},
	{
		code: 'NM-RES-02',
		title: 'Luxe Urban Residence',
		category: 'residential',
		year: '2020',
		location: 'Pune',
		area: '2,400 sq ft',
		description: 'An opulent residence showcasing sophisticated materials, custom furniture, and timeless design principles that celebrate both form and function.',
		coverImage: '/images/portfolio/r02/20200603_175005.jpg',
		imageCount: 56,
		folderPath: 'r02',
		featured: true,
	},
	{
		code: 'NM-RES-03',
		title: 'Serene Family Sanctuary',
		category: 'residential',
		year: '2021',
		location: 'Mumbai',
		area: '1,650 sq ft',
		description: 'A thoughtfully designed family home balancing style with practicality, creating warm, inviting spaces for everyday living.',
		coverImage: '/images/portfolio/r03/IMG_1425-2.jpg',
		imageCount: 18,
		folderPath: 'r03',
	},
	{
		code: 'NM-RES-04',
		title: 'Contemporary Lakeside Living',
		category: 'residential',
		year: '2024',
		location: 'Ahmedabad',
		area: '2,100 sq ft',
		description: 'A modern apartment in a premium high-rise, featuring curated finishes, smart spatial planning, and elegant detailing throughout.',
		coverImage: '/images/portfolio/r04/IMG_20260221_112340.jpg',
		imageCount: 37,
		folderPath: 'r04',
		featured: true,
	},
	{
		code: 'NM-RES-05',
		title: 'Compact Elegance',
		category: 'residential',
		year: '2023',
		location: 'Mumbai',
		area: '950 sq ft',
		description: 'Maximizing every square foot with clever design, this compact apartment proves that small spaces can deliver big style.',
		coverImage: '/images/portfolio/r05/IMG_20250207_171917_108.jpg',
		imageCount: 8,
		folderPath: 'r05',
	},

	// Commercial & Specialized Projects
	{
		code: 'NM-WEL-01',
		title: 'Lakeside Fitness Pavilion',
		category: 'wellness',
		year: '2023',
		location: 'Thane',
		area: '3,200 sq ft',
		description: 'A state-of-the-art wellness facility designed to inspire fitness journeys, with vibrant aesthetics and functional zoning.',
		coverImage: '/images/portfolio/gym/1.jpg',
		imageCount: 14,
		folderPath: 'gym',
		featured: true,
	},
	{
		code: 'NM-COM-01',
		title: 'Tranquil Meditation Lounge',
		category: 'commercial',
		year: '2022',
		location: 'Mumbai',
		area: '1,400 sq ft',
		description: 'A serene commercial space crafted for mindfulness and relaxation, featuring earthy tones, natural materials, and ambient lighting.',
		coverImage: '/images/portfolio/commercial/NPM_0131.jpg',
		imageCount: 5,
		folderPath: 'commercial',
	},
	{
		code: 'NM-OFF-01',
		title: 'Executive Office Suite',
		category: 'office',
		year: '2022',
		location: 'Navi Mumbai',
		area: '800 sq ft',
		description: 'A professional workspace combining productivity with aesthetics, designed for modern business needs and client impressions.',
		coverImage: '/images/portfolio/office/1.JPG',
		imageCount: 5,
		folderPath: 'office',
	},
];

// Helper functions
export function getFeaturedProjects(): PortfolioProject[] {
	return portfolioProjects.filter(p => p.featured);
}

export function getProjectsByCategory(category: string): PortfolioProject[] {
	if (category === 'all') return portfolioProjects;
	return portfolioProjects.filter(p => p.category === category);
}

export function getProjectByCode(code: string): PortfolioProject | undefined {
	return portfolioProjects.find(p => p.code === code);
}
