require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

// packages
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const cors = require('cors');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const cookieParser = require('cookie-parser');

// db
const connectToDB = require('./db/connect');

// routers
const authRouter = require('./routes/authRoutes');

// middleware
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.set('trust proxy', 1);
app.use(helmet());
app.use(cors());
app.use(xss());
app.use(mongoSanitize());

// req body parser
app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.use('/api/v1/auth', authRouter);
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectToDB(process.env.MONGO_URL);
        app.listen(port, () => {
            console.log(`Server is running on PORT ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
}

start();