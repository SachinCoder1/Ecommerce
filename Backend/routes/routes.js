import express from "express";
import { Signup, Login } from "../controller/User.js";
import { Products, ProductsById } from "../controller/Products.js";
import { addPaymentGateway, paymentResponse } from "../controller/Payment.js";


const Router = express.Router();

// user 
Router.post('/signup', Signup) 
Router.post('/login', Login)

// products
Router.get('/products', Products)
Router.get('/products/:id', ProductsById)

Router.post('/payment', addPaymentGateway)
Router.post('/callback', paymentResponse)

export default Router;  