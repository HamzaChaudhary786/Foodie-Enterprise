import express from 'express';
import {createMyRestaurant } from '../controllers/restaurantController';
import multer from 'multer';
import { jwtCheck, jwtParse } from '../middlewears/auth';
import { validateMyRestaurantRequest } from '../middlewears/validations';


const router = express.Router();


const storage = multer.memoryStorage();
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024, //5mb
    },
});


router.post('/',
    upload.single("imageFile"),
    validateMyRestaurantRequest,
    jwtCheck,
    jwtParse,
    createMyRestaurant);



export default router;