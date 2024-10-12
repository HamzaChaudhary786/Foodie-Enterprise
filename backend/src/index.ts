import express, { Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config'
import mongoose from 'mongoose';

const app = express();

app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGODB_URL as string).then(() => {
    console.log('Connected to MongoDB');

})

app.get('/test', async (req: Request, res: Response) => { // Removed the space here
    res.json({
        message: 'API is working'
    });
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
