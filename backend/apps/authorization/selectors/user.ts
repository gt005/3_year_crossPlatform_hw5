import { IUser, User } from '../models/user'

export const userGetByUsername = async (username: string): Promise<IUser | null> => {
    return await User.findOne({ username: username });
};
