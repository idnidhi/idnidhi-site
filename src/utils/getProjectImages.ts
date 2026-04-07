// Utility to get all images for a project
import fs from 'fs';
import path from 'path';

export function getProjectImages(folderPath: string): string[] {
	const publicDir = path.join(process.cwd(), 'public', 'images', 'portfolio', folderPath);

	try {
		const files = fs.readdirSync(publicDir);

		// Filter for image files and sort
		const imageFiles = files
			.filter(file => {
				const ext = path.extname(file).toLowerCase();
				return ['.jpg', '.jpeg', '.png', '.webp'].includes(ext);
			})
			.sort()
			.map(file => `/images/portfolio/${folderPath}/${file}`);

		return imageFiles;
	} catch (error) {
		console.error(`Error reading images from ${folderPath}:`, error);
		return [];
	}
}
