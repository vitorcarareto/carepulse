import * as sdk from "node-appwrite";

export const {
  APPWRITE_PROJECT_ID,
  APPWRITE_API_KEY,
  APPWRITE_DATABASE_ID,
  APPWRITE_PATIENT_COLLECTION_ID,
  APPWRITE_PROVIDER_COLLECTION_ID,
  APPWRITE_APPOINTMENT_COLLECTION_ID,
  PUBLIC_BUCKET_ID,
  PUBLIC_ENDPOINT,
} = process.env;

const client = new sdk.Client();

client.setEndpoint(PUBLIC_ENDPOINT!).setProject(APPWRITE_PROJECT_ID!).setKey(APPWRITE_API_KEY!);

export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);
export const users = new sdk.Users(client);
