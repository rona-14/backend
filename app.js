import express from "express";
import cors from 'cors';
import bookRoutes from './routers/bookRouter.js';
import studentRoutes from './routers/studentRouter.js';
import userRoutes from './routers/userRouter.js';

let corsOptions = {
    origin: 'http://localhost:5173'
};


const app = express();

app.use(express.json());
app.use(cors(corsOptions)); 
app.use('/book', bookRoutes);
app.use('/student', studentRoutes);
app.use('/user', userRoutes);

try {
    const port = 3000;
    app.listen(port, () => {
        console.log(`listening to port ${port}...`);
    });
} catch(e) {
    console.log(e);
}