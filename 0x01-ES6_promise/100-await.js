import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const upload = await uploadPhoto();
    const newUser = await createUser();
    return { photo: upload, user: newUser };
  } catch (error) {
    return { photo: null, user: null };
  }
}
