import express from "express";
import { addFood,listFood,removeFood } from "../controllers/foodControllers.js";
import multer from "multer";

const foodRouter = express.Router();

// Image storage Engine

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Specify upload directory
    },
    filename:(req,file,cb)=>{
        const uniqueName = `${Date.now()}-${file.originalname}`;
        cb(null, uniqueName);

    }
});

const upload = multer({storage:storage});

foodRouter.post("/add",upload.single("image"), addFood)
foodRouter.get("/list",listFood);
foodRouter.post("/remove",removeFood);




export default foodRouter;