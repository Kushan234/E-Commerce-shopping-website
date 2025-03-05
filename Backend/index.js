const port=4001;
const express=require("express");
const app=express();
const mongoose=require("mongoose");
const jwt=require("jsonwebtoken");
const multer=require("multer");
const path=require("path");
const cors=require("cors");
const { readdirSync } = require("fs");




const stripe = require("stripe")("sk_test_51PNXfcRoLhS5werXN0c1RlRJzDsLsKpamJL0oDcOeeOifV8q8sBxirsiX4Ww1Cn57quo3w0mJyXQh3KSc6NHZcJ600JBVA0Der");

app.use(express.json());
app.use(cors());




//Database connection with mongoDb
mongoose.connect("mongodb+srv://kushanEcommerce:19991002@cluster0.zfpfj2f.mongodb.net/Ecommerce1")




//API Creation

app.get("/",(req,res)=>{
    res.send("Express App Is Runing...")
})





// image store engine

const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})  

const upload = multer({storage:storage})





//Creating upload endpoint for images

app.use('/images',express.static('upload/images'))

app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})






//schema for creating products

const Product= mongoose.model("Product",{
    id:{
        type: Number,
        required:true,
    },
    name:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    new_price:{
        type:Number,
        required:true,
    },
    old_price:{
        type:Number,
        required: true,
    },
    date:{
        type:Date,
        default:Date.now, 
    },
    avilable:{
        type:Boolean,
        default:true,
    },

})

app.post('/addproduct',async (req,res)=>{
    let products = await Product.find({});
    let id;

    if(products.length>0)
    {
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id =  last_product.id+1;
    }
    else
    {
        id=1;
    }
    const product=new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,

    });

    console.log(product);
    await product.save();
    console.log("Saved");
    res.json({
        success:true,
        name:req.body.name,
    })
})




//Creating API for deleting Product

app.post('/removeproduct',async (req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success:true,
        name:req.body.name,
    })
})


//Creating Api For Getting Old Product

app.get('/allproducts',async (req,res)=>{
    let products = await Product.find({});
    console.log("All Product Fetched");
    res.send(products);
})


//shema creating for user model

const Users = mongoose.model('Users',{
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    cartData:{
        type:Object,
        default: Array(300).fill(0),
    },

    billingDetails: {
        firstName: String,
        lastName: String,
        phone: String,
        street: String,
        zipCode: String,
        city: String,
        district: String,
    },

    date:{
        type:Date,
        default:Date.now,
    }
})

//Creating endpoint for registering the user

app.post('/signup',async(req,res)=>{

    let check = await Users.findOne({email:req.body.email});

    if(check){
        return res.status(400).json({success:false,errors:"Existing user found with same email address"})

    }
    
    
    const user = new Users({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password,
        cartData:Array(300).fill(0),
        billingDetails:req.body.billingDetails,
    })


    await user.save();

    const data= {
        user:{
            id:user.id
        }
    }

    const token = jwt.sign(data,'secret_ecom');
    res.json({success:true,token})
})


//creating endpoint for user loging

app.post ('/login',async (req,res)=>{
    let user = await Users.findOne({email:req.body.email});

    if(user){
        const passComaper = req.body.password === user.password;

        if(passComaper){
            const data={
                user:{
                    id:user.id
                }
            }

            const token = jwt.sign(data,'secret_ecom');
            res.json({success:true,token});
        }
        else{
            res.json({success:false,errors:"wrong Password"});
        }
    }
    else{
         res.json({success:false,errors:"Wrong Email id"});
    }
})


//Creating endpoint for newCollection data

app.get('/newcollections',async(req,res)=>{
    let products = await Product.find({});
    let newCollection = products.slice(1).slice(-8);

    console.log("New Collection Fetched");
    res.send(newCollection);
})


//End Point For Popular In Women Endpoint

app.get('/popularinwomen', async(req,res)=>{
    let products = await Product.find({category:"women"});
    let popular_in_women = products.slice(0,4);
    console.log("Popular In women Fetched");
    res.send(popular_in_women);
})


//Creating middleweare to fetch user

const fetchUser = async (req,res,next)=>{
    const token = req.header('auth-token');

    if(!token){
        return res.status(401).send({errors:"Please authenticate Using Valid Token"});
    }
    
        try{
            const data = jwt.verify(token,'secret_ecom');
            req.user = data.user;
            next();
            
        }catch(error){
            res.status(401).send({errors:"Please Authenticate Using Valid Token"});
        }
    

}


//Creating Endpoint For Adding Products in Cartdata

app.post('/addtocart' ,fetchUser,async(req,res)=>{
   
    console.log("Added",req.body.itemId);
   let userData = await Users.findOne({_id:req.user.id});
   userData.cartData[req.body.itemId] += 1;
   await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
   res.json("Added") 
})


//creating endpoint to Remove Cart data

app.post('/removefromcart',fetchUser,async(req,res)=>{

    console.log("Removed",req.body.itemId);
    let userData = await Users.findOne({_id:req.user.id});
    if (userData.cartData[req.body.itemId]>0) 
    userData.cartData[req.body.itemId] -= 1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    res.json("Removed") 
})


//creating endpoint for get cart data


app.post('/getcart',fetchUser,async(req,res)=>{
    console.log("Getcart");
    let userData = await Users.findOne({_id:req.user.id})
    res.json(userData.cartData);
})

app.listen(port,(error)=>{
    if(!error){
        console.log("Server Running On Port"+port)
    }
    else{
        console.log("Error :" +error)
    }
})



//stripe

app.post("/api/create-checkout-session",fetchUser, async (req, res) => {
    try {
      const products = req.body.products;
      const billingDetails = req.body.billingDetails;
      const lineItems = products.map((product) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: product.name,
            images: [product.image]
          },
          unit_amount: product.price * 100,
        },
        quantity: product.quantity
      }));
  
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: lineItems,
        mode: "payment",
        success_url: "http://localhost:3000/success", //to success page
        cancel_url: "http://localhost:3000/cancel" // to cancel page
      });


       // Save billing details to user document
      await Users.findOneAndUpdate(
        { _id: req.user.id },
        { billingDetails: billingDetails }
      );
  
      res.json({ id: session.id });
    } catch (error) {
      console.error("Error creating checkout session:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  app.listen(4000, () => {
    console.log("Server is running on port 4000");
  });


  // API to get the total number of users
app.get('/user-count', async (req, res) => {
    try {
        const userCount = await Users.countDocuments({});
        res.json({ count: userCount });
    } catch (error) {
        console.error("Error fetching user count:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


