import multer from "multer";
import uploadConfigs from "../configs/upload";

const Upload = multer(uploadConfigs);

export default Upload;
