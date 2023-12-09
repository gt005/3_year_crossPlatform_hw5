import { IUser, User } from '../models/user';


export const userCreate = async (username: string, password: string): Promise<IUser> => {
    const user = new User({ username, password });
    await user.save();
    return user;
}
