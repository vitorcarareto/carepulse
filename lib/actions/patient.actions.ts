"use server";

import { ID, Query } from "node-appwrite";
import { users } from "../appwrite.config";
import { parseStringify } from "../utils";

export const createUser = async (user: CreateUserParams) => {
  try {
    const newUser = await users.create(ID.unique(), user.email, user.phone, undefined, user.name);
    console.log(`New user created: ${newUser.$id}`);
    return parseStringify({ newUser });
  } catch (error: any) {
    if (error?.code === 409) {
      console.log("User already exists");
      const existingDocuments = await users.list([Query.equal("email", [user.email])]);
      return existingDocuments.users[0];
    }
    console.log(`Error creating user: ${error}`);
  }
};
