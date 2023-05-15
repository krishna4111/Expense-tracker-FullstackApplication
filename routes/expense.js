const expenseController=require('../controllers/expense');

const express=require('express');
const router=express.Router();

router.get('/expense/add-expense',expenseController.showPage);
router.post('/expense/add-expense',expenseController.addexpense);

router.get('/expense/show-all-expenses',expenseController.showAll);
router.delete('/expense/delete-expense/:id',expenseController.deleteExpense);


//in the below route method we are only going to get the dynamic param id
router.get('/expense/edit/:id',expenseController.getEditExpense);


module.exports=router;

