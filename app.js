import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import dotenv from 'dotenv';
import path from 'path';
import routes from './routes/index.js';
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js';
import cookieParser from 'cookie-parser';
import cryptr from 'cryptr';

dotenv.config();

const dirname = path.resolve();

const app = express();

app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(morgan('dev'));
app.use(helmet());

app.use(express.static(path.join(dirname, '/public')));

app.use(express.json());

app.use('/', routes);

app.use(errorHandler);
app.use(notFoundHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('server running'));
