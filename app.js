import express from "express";
import bookRoutes from './routers/bookRouter.js';
import studentRoutes from './routers/studentRouter.js';

const app = express();

app.use(express.json());

app.use('/book', bookRoutes);
app.use('/student', studentRoutes);

try {
    const port = 3000;
    app.listen(port, () => {
        console.log(`listening to port ${port}...`);
    });
} catch(e) {
    console.log(e);
}
