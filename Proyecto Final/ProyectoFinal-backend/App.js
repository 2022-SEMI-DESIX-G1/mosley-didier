const express = require("express");
const cors = require("cors");
const db = require("./database/db");
require('dotenv').config();
const controllers = require("./controllers");
const verifyToken = require("./middlewares/verifyToken");
const multer  = require('multer');
const app = express();
const mongoose = require('mongoose')
const services = require("./model/service");
const path = require('path');
const requests = require('request');
const Voucher = require("./model/voucher");

let price='';
/**----------Ininit Upload----------------------------------------*/
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './imgs')
  },
  filename: function (req, file, cb) {
    console.log(file);
    cb(null, Date.now()+"--"+file.originalname)
  }
})
let upload = multer({storage});

app.use('/images', express.static(path.join(__dirname, 'imgs')))

app.use(cors());
app.use(express.json());
//--------------peticiones POST 
app.post("/register", controllers.register);
app.post("/login", controllers.login);
app.post("/services", controllers.registerServices);
app.post("/category",controllers.registerCategory);
//--------------peticiones GET 
app.get("/services/all", controllers.getAllServices);
app.get("/category/all",controllers.getAllCategories);
//app.put("/img/:id",upload.single('inpFile'));

/*lógica de pago */



//** Creacion de app con PAYPAL */
const CLIENT = 'AVDAI3u8nVPng4MYU0HP0l4IxzhahBZvXmrm4GsM387BCZRgQqczDkmy1iDBU44KdNeeuXxNy_IEpSV7';
const SECRET = 'EHheTm3FuC2R_4ZDwWH7nEKDK96ikN-6EQd60yz-Z7KmsnsSgWEQtnd1r4o7aNz_cLheCf3c4amZihCr';
const PAYPAL_API ='https://api-m.sandbox.paypal.com';

const auth= {user:CLIENT,pass:SECRET};

//* Creacion de controladores que vamos a usar */

const createPayment = async (req, res) => {
  console.log(price);
  const value_product = Number(price)
  const body = {
      intent: 'CAPTURE',
      purchase_units: [{
          amount: {
              currency_code: 'USD', //https://developer.paypal.com/docs/api/reference/currency-codes/
              value: 80//value_product
          }
      }],
      application_context: {
          brand_name: `Sigma.com`,
          landing_page: 'NO_PREFERENCE', // Default, para mas informacion https://developer.paypal.com/docs/api/orders/v2/#definition-order_application_context
          user_action: 'PAY_NOW', // Accion para que en paypal muestre el monto del pago
          return_url: `http://localhost:9000/execute-payment`, // Url despues de realizar el pago
          cancel_url: `http://localhost:9000/cancel-payment` // Url despues de realizar el pago
      }
  }
  //https://api-m.sandbox.paypal.com/v2/checkout/orders [POST]
 
  requests.post(`${PAYPAL_API}/v2/checkout/orders`, {
      auth,
      body,
      json: true
  }, (err, response) => {
      res.json({ data: response.body })
  })
} 

//* Capturar el dinero  */
const executePayment = (req, res) => {
  const token = req.query.token; //<----------- 

  requests.post(`${PAYPAL_API}/v2/checkout/orders/${token}/capture`, {
      auth,
      body: {},
      json: true
  }, (err, response) => {
      if(err){
        console.log(err);
      }
      else{

        res.redirect('http://localhost:3000/homepage');
        const vaucherData = {
          buyer_name: 'Octavio Hernandez',
          seller_name: 'Jostin Gamboa',
          price: '80.50',
          service_name:'Jardineria',
          date_shop: Date.now(),
          id_service: '12345',
          id_buyer:'123'
        };
        try {
          console.log(req.params.name);
          Voucher.create(vaucherData, (err, docs) => {
            console.log(docs);
            if (err) {
              console.log({ Message: "Something bad :(", type: err, create: false });
            } else {
              console.log({ Message: "Created successfully :)", create: true });
            }
          });
        } catch (err) {
          console.log(err);
        }
      }
      //consoleres.json({ data: response.body })
  })
}



app.post('/create-payment',createPayment);

app.get('/execute-payment',executePayment);

//* ENDPOINT PARA CRECAR COMPRA (--INSERT DEBEN SER CON POST--)//

app.get('/create-payment/:product_price',(req, res)=> { 

    if(req.params.product_price){
      price=req.params.product_price;
      res.json({status: 'success'})
    }
    else{
      res.json({status: 'BAD :('})
    } 
 });

 app.get('/vouchers/:id_user',(req, res)=>{
  Voucher.find({id_buyer: req.params.id_user}, 
    (err, docs) => {
    if (docs != null || docs != undefined) {
      res.json({data:docs});
    } else {
      res.json({error:err});
    }
  });A
 })


app.put("/img/:id",upload.single('inpFile'),(req, res)=> {
  const id = mongoose.Types.ObjectId(req.params.id.trim());
  console.log(req.file);
  services.updateOne(
    {_id: id},
    {service_photo:req.file.filename},
    (err,docs)=>{
      res.send({
        items:docs
      });
    });
});
const PORT = 9000;

app.listen(PORT, () => {
  console.log(`SERVER FUNCIONANDO EN EL PUERTO ${PORT}`);
  db();
});

module.exports = app;
