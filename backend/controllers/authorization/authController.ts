import { Request, Response, NextFunction } from 'express';
import { userGetByUsername } from '../../apps/authorization/selectors/user';
import bcrypt from 'bcrypt';
import { jwtGenerateForUser } from '../../apps/authorization/services/jwt_token';
import { userCreate } from '../../apps/authorization/services/user';


export const loginUserController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await userGetByUsername(req.body.username);

        if (!user || !bcrypt.compareSync(req.body.password, user.password)) {
            return res.status(401).send({'message': 'Неверное имя пользователя или пароль'});
        }

        const token = jwtGenerateForUser(user);
        res.json({ token });
    } catch (error) {
        next(error);
    }
};


export const registerUserController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username, password, passwordRepeat } = req.body;

        const existingUser = await userGetByUsername(username);
        if (existingUser) {
            return res.status(409).send({'message': 'Пользователь с таким именем уже существует'});
        }
        if (password !== passwordRepeat) {
            return res.status(400).send({'message': 'Пароли не совпадают'});
        }

        const user = await userCreate(username, password);

        const token = jwtGenerateForUser(user);

        res.status(201).json({ token });
    } catch (error) {
        next(error);
    }
};
