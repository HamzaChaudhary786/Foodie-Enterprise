import { Request, Response } from "express";
import Restaurant from "../models/restaurantModel";
import cloudinary from "cloudinary";
import mongoose from "mongoose";


export const createMyRestaurant = async (req: Request, res: Response): Promise<any> => {

    try {

        const existingRestaurants = await Restaurant.findOne({ user: req.userId })

        if (existingRestaurants) {
            return res.status(409).json({
                message: 'You already have a restaurant',
            });
        }

        const image = req.file as Express.Multer.File;
        const base64Image = Buffer.from(image.buffer).toString("base64");
        const dataURI = `data:${image.mimetype};base64,${base64Image}`;
        const uploadResponse = await cloudinary.v2.uploader.upload(dataURI);

        const restaurant = new Restaurant(req.body);

        restaurant.imageUrl = uploadResponse.url;

        restaurant.lastUpdated = new Date()

        restaurant.user = new mongoose.Types.ObjectId(req.userId);

        await restaurant.save();

        res.status(200).send(restaurant)

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Something went wrong',
        });

    }




}