import { Collection } from "mongodb";
import {db} from "../db/db";
import { User, UserDb } from "../interfaces/user.interface";
import * as types from "../types/user.types"

const getCollection = (): Collection => db.collection("users");

export const createUser = async (user: User): Promise<void> => {
    try {
        const document = await getCollection().insertOne({...user, createdAt: new Date()})
    } catch (err) {
        console.log(err)
    }
}

export const usernameInUsage = async (username: types.username): Promise<boolean> => {
    const document = await getCollection().findOne({username})

    if (document === null) {
        return false;
    }

     return true;
}

export const emailInUsage = async (email: types.email): Promise<boolean> => {
    const document = await getCollection().findOne({email})

    if (document === null) {
        return false;
    }

     return true;
}

export const verificateUserEmail = async (username: types.username): Promise<void> => {
    getCollection().updateOne({username}, {$set: {emailVerificated: true}});
}

export const getUser = async (username: types.username): Promise<UserDb | null> => {
    
    const document = await getCollection().findOne<UserDb>({username});

    return document;
}