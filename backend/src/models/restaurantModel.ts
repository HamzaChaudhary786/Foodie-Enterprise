
import mongoose from 'mongoose';

const menuItemScema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },

})

const restaurantScema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    restaurantName: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    deliveryPrice: {
        type: Number,
        required: true
    },
    estimatedDeliveryTime: {
        type: Number,
        required: true
    },
    cuisines: [
        {
            type: String,
            required: true
        }
    ],
    menuItems: [
        menuItemScema
    ],
    imageUrl: {
        type: String,
        required: true
    },
    lastUpdated: {
        type: Date,
        // default: Date.now
        required: true
    }

})

const Restaurant = mongoose.model('Restaurant', restaurantScema);

export default Restaurant;