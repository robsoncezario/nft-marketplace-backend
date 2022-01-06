import { v4 as uuid } from 'uuid';
import multer, { StorageEngine, Multer, FileFilterCallback } from 'multer';
import { Request } from 'express';

import { Dictionary } from './types';

class MulterController {
	public multer: Multer;

	static mimeTypes: Dictionary<string> = {
		'image/png': 'png',
		'image/jpeg': 'jpeg',
		'image/jpg': 'jpg',
		'image/gif': 'gif',
		'image/webp': 'webp',
	};

	constructor() {
		this.multer = multer({
			storage: this.storage(),
			fileFilter: this.fileFilter,
		});
	}

	storage(): StorageEngine {
		return multer.diskStorage({
			destination: (req: Request, file: Express.Multer.File, cb) => {
				cb(null, './storage');
			},

			filename: (request, file, callback) => {
				const ext: string = MulterController.mimeTypes[file.mimetype];
				const fileName = uuid();

				callback(null, `${fileName}.${ext}`);
			},
		});
	}

	fileFilter(
		req: Request,
		file: Express.Multer.File,
		cb: FileFilterCallback
	): void {
		const isValid = !!MulterController.mimeTypes[file.mimetype];

		if (!isValid) {
			cb(new Error('Invalid mime type!') as Error);
		} else {
			cb(null, true);
		}
	}
}

const upload: Multer = new MulterController().multer;
export default upload;
