import express, {Response, Request} from 'express'
import { isAuth } from '../utils'
export const orderRouter = express.Router()
import asyncHandler from 'express-async-handler'
import { OrderModel } from '../models/orderModel'
import { Product } from '../models/productModel'

orderRouter.post(
    '/',
    isAuth,
    asyncHandler(async (req: Request, res: Response) => {
        if (req.body.orderItems.length === 0) {
            res.status(400).json({message: 'Car is empty'})
        } else {
            const createdOrder = await OrderModel.create({
                orderItems: req.body.orderItems.map((x: Product) => ({
                    ...x,
                    product: x._id,
                })),
                shippingAddress: req.body.shippingAddress,
                paymentMethod: req.body.paymentMethod,
                itemsPrice: req.body.itemsPrice,
                shippingPrice: req.body.taxPrice,
                totalPrice: req.body.totalPrice,
                user: req.user._id,
            })
            res.status(201).json({message: 'Order Created', order: createdOrder})
        }
    }) 
)