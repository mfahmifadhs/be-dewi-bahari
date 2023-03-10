import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import session from "express-session";
import FileUpload from "express-fileupload";
import db from "./config/Database.js";
import SequelizeStore from "connect-session-sequelize";
import routeUser from "./routes/routeUser.js";
import routeMenu from "./routes/routeMenu.js";
import routeAuth from "./routes/routeAuth.js";
import routeAccess from "./routes/routeAccess.js";
import routeDestination from "./routes/routeDestination.js";
import routeArticle from "./routes/routeArticle.js";
import routePartner from "./routes/routePartner.js";
import routeGallery from "./routes/routeGallery.js";
import routeGalleryDetail from "./routes/routeGalleryDetail.js";
dotenv.config();

const app = express();

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
   db: db
});

// app.use(session({
//    secret: process.env.SESS_SECRET,
//    resave: false,
//    saveUninitialized: true,
//    store: store,
//    cookie: {
//       secure: 'auto'
//    }
// }));

app.use(cors({ credentials:true, origin:'http://localhost:3000' }));
// app.use(cookieParser());
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
app.use(routeAccess);
app.use(routeArticle);
app.use(routeDestination);
app.use(routeGallery);
app.use(routeGalleryDetail);
app.use(routePartner);
app.use(routeUser);
app.use(routeAuth);
app.use('/menu', routeMenu);

app.listen(5000, ()=> console.log('Server running at port 5000'));