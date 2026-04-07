// Utility to get all images for a project with dimensions
import fs from 'fs';
import path from 'path';
import sizeOf from 'image-size';

export interface ImageWithDimensions {
	src: string;
	width: number;
	height: number;
}

export function getProjectImages(folderPath: string): ImageWithDimensions[] {
	const publicDir = path.join(process.cwd(), 'public', 'images', 'portfolio', folderPath);

	try {
		const files = fs.readdirSync(publicDir);

		// Filter for image files, get dimensions, and sort
		const imageFiles = files
			.filter(file => {
				const ext = path.extname(file).toLowerCase();
				return ['.jpg', '.jpeg', '.png', '.webp'].includes(ext);
			})
			.sort()
			.map(file => {
				const filePath = path.join(publicDir, file);

				try {
					const buffer = fs.readFileSync(filePath);
					const dimensions = sizeOf(buffer);

					return {
						src: `/images/portfolio/${folderPath}/${file}`,
						width: dimensions.width || 800,
						height: dimensions.height || 600,
					};
				} catch (err) {
					console.error(`Error reading image ${file}:`, err);
					// Return fallback dimensions
					return {
						src: `/images/portfolio/${folderPath}/${file}`,
						width: 800,
						height: 600,
					};
				}
			});

		return imageFiles;
	} catch (error) {
		console.error(`Error reading images from ${folderPath}:`, error);
		return [];
	}
}
