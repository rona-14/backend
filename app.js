import express from "express";
import cors from 'cors';

import bookRoutes from './routers/bookRouter.js';
import studentRoutes from './routers/studentRouter.js';

let corsOptions = {
    orgin: 'http://localhost:5173'
};


const app = express();

app.use(express.json());

app.use('/book', bookRoutes);
app.use('/student', studentRoutes);
app.use(cors(corsOptions));

try {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`listening to port ${port}...`);
    })
} catch(e) {
    console.log(e);
}