import express from "express";
import { UserSignUp,UserLogin } from "../Controller/UserController.js";
import { getProducts,getProductById } from "../Controller/ProductController.js";
import { addPaymentGateway,paytmResponse } from "../Controller/payment-controller.js";
const router=express.Router();

router.post('/signup',UserSignUp);
router.post('/login',UserLogin);


router.get('/products',getProducts);
router.get('/product/:id',getProductById)

router.post('/payment',addPaymentGateway);

router.post('/callback',paytmResponse)
export default router;