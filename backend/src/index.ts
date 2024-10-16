import express, { Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config'
import mongoose from 'mongoose';
import { v2 as cloudinary } from 'cloudinary';
import userRoute from './routes/userRoute';
import restaurantRoute from './routes/restaurantRoute'
const app = express();

app.use(cors({
    origin: ['http://localhost:5173', 'https://mern-food-app-frontend-u8fs.onrender.com'], // Replace with your actual frontend URL
    credentials: true,
}));
app.use(express.json());





mongoose.connect(process.env.MONGODB_URL as string).then(() => {
    console.log('Connected to MongoDB');

})


app.get('/health', async (req: Request, res: Response) => {

    res.send({ message: "Health ok!" })
})


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})


app.use('/api/my/user', userRoute)
app.use('/api/my/restaurant', restaurantRoute)

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
