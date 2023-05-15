const express=require('express');
const app=express();

const path=require('path');

const bodyparser=require('body-parser');
app.use(bodyparser.json({extended:false}));
app.use(express.json());

const cors=require('cors');
app.use(cors());

const expenseModel=require('./models/expense')

const sequelize=require('./util/database');

const router=require('./routes/expense');
app.use(router);



//it will take the any request that is trying to finded out the(.html/.css/.js)extention file and it gives the path
//it holds, express.static means serving the file statically without making any changes in it.
//the below code going to help us to connect our js file to the html file.
app.use(express.static(path.join(__dirname,'public')));




sequelize.sync()
.then(result=>{
    app.listen(3000);
})
.catch(err=>{
    console.log(err);
})

