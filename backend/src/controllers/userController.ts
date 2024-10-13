import { Request, Response } from 'express';
import User from '../models/userModel';

export const createCurrentUser = async (
  req: Request,
  res: Response
): Promise<void> => {

  try {
    const { auth0Id } = req.body;

    const existingUser = await User.findOne({ auth0Id });

    if (existingUser) {
      res.status(200).send();
      return; // Explicitly return to stop execution
    }

    const newUser = new User(req.body);
    await newUser.save();

    res.status(201).json(newUser.toObject());
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'An error occurred while creating the user.',
    });
  }
};



export const updateCurrentUser = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { name, addressLine1, country, city } = req.body;

    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    user.name = name;
    user.addressLine1 = addressLine1;
    user.country = country;
    user.city = city;

    await user.save();

    res.send(user)

    // Your update logic goes here...

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Error Occurs Updating User',
    });
  }
};