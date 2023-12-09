import commonRoutes from './routes/commonRoutes';
import express from 'express';
import morgan from 'morgan';
import { ErrorRequestHandler } from 'express';
import cors from 'cors';


const app = express();

app.use(cors());

app.use(express.json());

if (process.env.NODE_ENV !== 'test') {
    app.use(morgan(':date[iso] :remote-addr :method :url :status :response-time ms - :res[content-length]'));
}
app.use('/api', commonRoutes);

const authorizationErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        res.status(401).send({'message': 'invalid token'});
    } else {
        next(err);
    }
};
app.use(authorizationErrorHandler);

export default app;