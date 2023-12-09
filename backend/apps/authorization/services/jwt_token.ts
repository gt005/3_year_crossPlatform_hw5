import jwt from 'jsonwebtoken';
import { IUser } from '../models/user';


export const getJwtSecretString = (): string => {
    if (!process.env.JWT_SECRET) {
        throw "JWT_SECRET env variable not set";
    }
    return process.env.JWT_SECRET;
};


export const jwtGenerateForUser = (user: IUser): string => {
    return jwt.sign(
        { userID: user._id },
        getJwtSecretString(),
        { expiresIn: '1h' }
    );
}
