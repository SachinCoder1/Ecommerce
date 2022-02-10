import express from "express";
import connectionMongo from "./db/connect.js";
import defaultProducts from './products.js'
import bodyParser from 'body-parser'
import cors from 'cors'
import { v4 as uuid } from 'uuid';
import Router from "./routes/routes.js";
const app = express();

app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
const port = process.env.PORT || 8000;

app.use('/', Router)

connectionMongo()

app.listen(port, ()=>{
 console.log(`Server is listening at ${port}`)
})

defaultProducts()


export let paytmMerchantkey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
paytmParams['MID'] = process.env.PAYTM_MID,
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE,
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID,
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID,
paytmParams['ORDER_ID'] = uuid(),
paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID,
paytmParams['TXN_AMOUNT'] = '300.00',
paytmParams['CALLBACK_URL'] = `${process.env.CALLBACK_URL}`
paytmParams['EMAIL'] = `${process.env.PAYTM_EMAIL}`,
paytmParams['MOBILE_NO'] = `${process.env.PAYTM_MOBILE}`