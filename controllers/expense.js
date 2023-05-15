const exepenseModel=require('../models/expense');

const path=require('path')

exports.addexpense=async (req,res,next)=>{
try{
    if(!req.body.amount){
        throw new Error('amount is mandatory');
    }
    console.log(req.body);
 const data=await exepenseModel.create({
    //in here the rt hand side values(req.body.descrition) are come from fontend js file('public/js/expense.js');
        amount:req.body.amount,
        descreption:req.body.description,
        catagery:req.body.catagory
 })
 res.status(201).json({newExpense:data});

}
catch(err){
    res.status(500).json({
        error:err
    })
    console.log(err);
}
}

exports.showPage=(req,res,next)=>{
   res.sendFile(path.join(__dirname,'../','views','expense.html'))
}
    

exports.showAll=async (req,res,next)=>{
    try{
        const showall=await exepenseModel.findAll();
        res.status(200).json({allUsers:showall});
    }catch(err){
        res.status(500).json({
            error:err
        })
    }
}

exports.deleteExpense=async (req,res,next)=>{
    try{
        const expenseId=req.params.id;
        console.log(expenseId)
        await exepenseModel.destroy({where: {id : expenseId} })
        res.sendStatus(200);

    }catch(err){
        res.status(500).json({
            error:err
        })
    }
}

exports.getEditExpense=async (req,res,next)=>{
    try{
        const amount=req.body.amount;
        const descreption=re.body.description;
        const catagery=req.body.catagory;
        const expId=req.params.id;
        exepenseModel.findByPk(expId)
        .then(exp=>{
             exp.amount=amount,
             exp.descreption=descreption,
             exp.catagery=catagery
             return exp.save();
        })
        
    }catch(err){
        console.log(err);
    }
}
