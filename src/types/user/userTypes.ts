export type TAuthorUser = {
  _id: string;
  name: string;
  profession: string;
  userId: string;
  role: "author";
  shortAboutYou: string;
  bio?: string;
  profilePictureUrl?: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
  createdAt: string;
  updatedAt?: string;
};
