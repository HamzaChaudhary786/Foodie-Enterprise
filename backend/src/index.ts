import express, { Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config'
import mongoose from 'mongoose';

import userRoute from './routes/userRoute';

const app = express();

app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGODB_URL as string).then(() => {
    console.log('Connected to MongoDB');

})


app.use('/api/my/user', userRoute)

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
