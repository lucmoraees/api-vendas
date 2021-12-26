import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

const uploadFolder = path.resolve(__dirname, '..', '..', 'uploads');

const uploadConfigs = {
	directory: uploadFolder,
	storage: multer.diskStorage({
		destination: uploadFolder,
		filename(req, file, callback) {
			const fileHash = crypto.randomBytes(5).toString('hex');

			const fileName = `${fileHash}-${file.originalname}`;
			
			callback(null, fileName);
		}
	})
}

export default uploadConfigs;
