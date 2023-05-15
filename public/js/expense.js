
async function addFunction(e){
    try{
    e.preventDefault();
    const amount=e.target.amount.value;
    const description=e.target.desc.value;
    const catagory=e.target.cata.value;
    obj={
        amount,
        description,
        catagory
    }
    //instead of storing this in the local storage you can make a network call in here by using crudcrud
    //localStorage.setItem(obj.description,JSON.stringify(obj));
    const post=await axios.post('http://localhost:3000/expense/add-expense',obj)
    console.log(post.data);
        showExpences(obj);
}
   catch(err){
    console.log(err);
   }
   
}
addEventListener("DOMContentLoaded",async ()=>{
    await axios.get('http://localhost:3000/expense/show-all-expenses')
        .then(response=>{
            for(var i=0;i<response.data.allUsers.length;i++){
                showExpences(response.data.allUsers[i]);
        }})
        .catch(err=>{
            console.log(err);
        }) 
})

function showExpences(obj){
    const parentNode=document.getElementById('showing');
    const createNewUser=`<li id=${obj.id}> ${obj.amount} - ${obj.description} - ${obj.catagory} 
    <button style="padding:3px;margin:5px" onclick=deleteExpense('${obj.id}') class="btn btn-danger">Delete</button>
    <button style="padding:3px;margin:5px" onclick=editExpense('${obj}') class="btn btn-success">Edit</button>
        </li>`

        parentNode.innerHTML+=createNewUser;
        
    // const deleteBtn=document.createElement('input');
    // deleteBtn.setAttribute('class','btn btn-danger');
    // deleteBtn.style.cssText="margin-left:15px; margin-right:15px; margin-top:5px; padding:2px"
    // deleteBtn.type='button';
    // deleteBtn.value='Delete';
    // deleteBtn.onclick=async ()=>{
    //     try{
    //         console.log(obj._id)
    //         const dele=await axios.delete(`http://localhost:3000/expense/delete-expense/${obj._id}`)

    //         parent.removeChild(child);
    //         console.log(dele);
    //     }
    //     //localStorage.removeItem(obj.description);
       
    //         catch(err){
    //             console.log(err);
    //            }
       
    // }  

    // const edit=document.createElement('input');
    // edit.setAttribute('class','btn btn-success');
    // edit.style.cssText="padding:2px;  margin-top:5px;"
    // edit.value='Edit';
    // edit.type='button';
    // edit.onclick=async()=>{
    //     try{
    //     //     const upd=await axios.delete(`https://crudcrud.com/api/71b27b36e10a4628a884bd446a606aec/expenceData/${obj._id}`)
    //     //    parent.removeChild(child);
    //     const put=await axios.put('http://crudcrud.com/api/71b27b36e10a4628a884bd446a606aec/expenceData',{
            
    //     })
    //        obj.amount=document.getElementById('amount').value;
    //        obj.description=document.getElementById('desc').value;
    //        obj.catagory=document.getElementById('cata').value;
    //             console.log(upd);
    //     }
    //     //localStorage.removeItem(obj.description)
      
    //     catch(err){
    //         console.log(err);
    //        }
       
        
    //     document.getElementById('desc').value=obj.description;
    //     document.getElementById('amount').value=obj.amount;
    //     document.getElementById('cata').value=obj.catagory;

        
    //     //localStorage.setItem(object.description,JSON.stringify(obj));
    // }
    // child.appendChild(deleteBtn);
    // child.appendChild(edit);
    // parent.appendChild(child);
}
async function editExpense(expense){
    const expId=expense.id;
    console.log(expense.amount)
    console.log(expense.amount)
    document.getElementById('amount').value=expense.amount;
    document.getElementById('desc').value=expense.description
    document.getElementById('cata').value=expense.catagory;
    deleteExpense(expId);
    axios.put(`http://localhost:3000/expense/delete-expense/${expId}`)
    .then(response=>{
        removeItemFromScreen(expId);
    })
    .catch((err) => {
        console.log(err);
    })
}
    



async function deleteExpense(userId){
    await axios.delete(`http://localhost:3000/expense/delete-expense/${userId}`)
    .then((response)=>{
      removeItemFromScreen(userId);

    })
    .catch((err)=>{
      console.log(err);
    })
  }
function removeItemFromScreen(UserId) {
const parentNode = document.getElementById("showing");
const elem = document.getElementById(UserId);
parentNode.removeChild(elem);
}