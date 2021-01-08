// Documentation from expressjs.com provides us with code for a basic server.
const express = require('express')
const app = express()

// Localhost port changed to 4000 so that we can run two different webservers at the same time.
const port = 4000

// This will allow us to intercept the body of the http message that is being passed up in a port request.
const bodyParser = require("body-parser");

// cross origin resource sharing package installed on the integrated terminal for security 
const cors = require('cors');

// This will allow us to use all the libraries that contain mongoose documentation in our app.
const mongoose = require('mongoose');
const path = require('path');

// The app.use cors is put here so that it is used every time. this package will allow my app 
// to request restricted resources from another domain name, in this case the other domain name 
// is mongodb where my database is stored.
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });

    // Here i set up a configuration to tell the server where the build folder and its contents can be found.
    app.use(express.static(path.join(__dirname, '../build')));
    app.use('/static', express.static(path.join(__dirname, 'build//static')));

    // The body parser is used to parse the body of a http request
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())

    // This line of code connects our app to the mongoose database by accessins our account and the databse password.
    const myConnectionString = 'mongodb+srv://admin:admin@cluster0.yjqov.mongodb.net/orders?retryWrites=true&w=majority';
    mongoose.connect(myConnectionString, {useNewUrlParser: true});
    
    // Here the order schema is connected to the database
    const Schema = mongoose.Schema;

    // Here we define our schema about the type of data we want to store in our database.
    var ordersSchema = new Schema({
        name:String,
        flavor:String,
        size:String,
        toppings:String,
        picture:String
    });

    // Here we use the newly created schema to create a model for our database.
    var OrdersModel = mongoose.model("orders", ordersSchema);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Here a new route point is added, the url is also extended to include the orders link that sends back the json data.
app.get('/api/orders', (req, res)=>{

    // const myorders = [
        
    //     {
    //     "Name": "Sarah Ryan",
    //     "Flavor": "Chocolate",
    //     "Size": "Large",
    //     "Toppings": "Sprinkles",
    //     "Picture": "https://joyfoodsunshine.com/wp-content/uploads/2020/06/homemade-chocolate-ice-cream-recipe-7.jpg",
    // },
    // {
    //     "Name": "Aisling Ryan",
    //     "Flavor": "Strawberry",
    //     "Size": "Medium",
    //     "Toppings": "Chocolate Flakes",
    //     "Picture": "https://bakingamoment.com/wp-content/uploads/2018/06/IMG_8185-homemade-strawberry-ice-cream-square.jpg",
    // },
    // {
    //     "Name": "Angela Heffernan",
    //     "Flavor": "Vanilla",
    //     "Size": "Large",
    //     "Toppings": "No Toppings",
    //     "Picture": "https://joyfoodsunshine.com/wp-content/uploads/2020/07/homemade-vanilla-ice-cream-recipe-6.jpg",
    // },
    // {
    //     "Name": "Darragh Long",
    //     "Flavor": "Mint",
    //     "Size": "Medium",
    //     "Toppings": "Choco Chunks",
    //     "Picture": "https://www.chewoutloud.com/wp-content/uploads/2020/04/Mint-Chip-Ice-Cream-Vertical.jpg",
    // },
    // {
    //     "Name": "Ciara O Grady",
    //     "Flavor": "Caramel",
    //     "Size": "Medium",
    //     "Toppings": "No Toppings",
    //     "Picture": "https://www.handletheheat.com/wp-content/uploads/2011/04/Light-Salted-Caramel-Ice-Cream.jpg",
    // }];

    // Here we use the find method which will be used to find all the documents in the database.
    OrdersModel.find((err, data)=>{
        res.json(data);
    })

    // res.status(200).json({
    //     message: "Everything is ok",
    //     orders:myorders});
})

// This get request is going to listen for data coming in.
app.get('/api/orders/:id', (req,res)=>{
    console.log(req.params.id);

    // The find by id tag allows you to look at individual orders using their id in the url.
    OrdersModel.findById(req.params.id, (err, data)=>{
        res.json(data);
    })
})

// This get request is going to listen for data coming in.
app.put('/api/orders/:id', (req, res)=>{
    console.log("Update order: "+req.params.id);
    console.log(req.body);

    // Here an order will be found by its id and it will be updated
    OrdersModel.findByIdAndUpdate(req.params.id,req.body, {new:true},
        (err,data)=>{
            res.send(data);
        })
})

// Here the chosen order will be deleted when the console pulls the orders id out of the url and it will be 
// removed from the database.
app.delete('/api/orders/:id',(req,res)=>{
    console.log("Cancel Order: "+req.params.id);

    OrdersModel.findByIdAndDelete(req.params.id,(err, data)=>{
        res.send(data);
    })
})

//  A seperate post method is used here to listen for http methods.
app.post('/api/orders', (req, res)=> {
    console.log('Order Received!')
    console.log(req.body.name);
    console.log(req.body.flavor);
    console.log(req.body.size);
    console.log(req.body.toppings);
    console.log(req.body.picture);

    // Here we receive data from our application using the post method.
    OrdersModel.create({
        name:req.body.name,
        flavor:req.body.flavor,
        size:req.body.size,
        toppings:req.body.toppings,
        picture:req.body.picture
    })
    // this message displays in the database if the order is successfully passed through.
    res.send('Order Received');

})

// Here a get method is used so that the index.html file in the build folder can find a path to be sent up to the app
app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname+'../build/index.html'));
})

// Here the app.listen is used so that the console can listen for a port on the localhost that is open to diplay the app on
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})