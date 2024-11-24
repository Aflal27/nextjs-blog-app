import axios from "axios";

const url = `https://api.cloudinary.com/v1_1/djncajt2f/auto/upload`;

export const uploadFileCloud = async (file, config) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "next-blog");

  const res = await axios.post(url, formData, config); // Use axios to support onUploadProgress
  return res.data; // Access the response data
};
