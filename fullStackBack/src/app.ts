import express, {Application} from 'express';
import  cors from 'cors';
const app: Application = express();

import authRoutes from './routes/auth'
import postRoutes from './routes/post'

app.set('port', 4000)
app.use(cors())
//middleware
app.use(express.json())

//routes
app.use("/api/auth", authRoutes)
app.use("/", postRoutes)


export default app;