import app from './server'
import { connectToMongo } from './db';

const PORT = process.env.PORT || 3000;

if (!process.env.JWT_SECRET) {
    throw "JWT_SECRET env variable not set";
}

app.listen(PORT, () => {
    connectToMongo();
    console.log(`Server is running on port ${PORT}`);
});
