import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/test', async (req: Request, res: Response) => { // Removed the space here
    res.json({
        message: 'API is working'
    });
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
