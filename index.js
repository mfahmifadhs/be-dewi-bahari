import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import session from "express-session";
import db from "./config/Database.js";
import SequelizeStore from "connect-session-sequelize";
import routeUser from "./routes/routeUser.js";
import routeMenu from "./routes/routeMenu.js";
dotenv.config();

const app = express();

// const sessionStore = SequelizeStore(session.Store);

// const store = new sessionStore({
//     db: db
// });


// app.use(session({
//     secret: process.env.SESS_SECRET,
//     resave: false,
//     saveUninitialized: true,
//     store: store,
//     cookie: {
//         secure: 'auto'
//     }
// }));

app.use(cors({ credentials:true, origin:'http://localhost:3000' }));
app.use(cookieParser());
app.use(express.json());
app.use('/us', routeUser);
app.use('/menu', routeMenu);

app.listen(5000, ()=> console.log('Server running at port 5000'));