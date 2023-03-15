
var addexpense=document.getElementById('addexpense')
addexpense.addEventListener('click',store)
function store(e){
    e.preventDefault();

    var amount=document.getElementById('Amount').value;
    var description=document.getElementById('description').value;
    var category=document.getElementById('category').value;

    if(amount&&description){

        
        
        var expenseobj={
            'DESCRIPTION':description,
            'CATEGORY':category
        }
        var s_expenseobj=JSON.stringify(expenseobj);
        localStorage.setItem(amount,s_expenseobj);

        var expenselist=document.getElementById('expenselist');

        var li=document.createElement('li');
        var info=document.createTextNode(`Rs.${amount}-->${description}-->${category}`);
        li.appendChild(info)
        li.setAttribute('Money',amount);
        li.setAttribute('desc',description);
        li.setAttribute('who',category);
        expenselist.appendChild(li);
        li.className=amount;

        var delbut=document.createElement('button');
        delbut.className="btn btn-danger";
        var delinfo=document.createTextNode('DELETE');
        
        delbut.appendChild(delinfo);
        li.appendChild(delbut);
        delbut.addEventListener('click',del);
        function del(e){
            var locate=e.target.parentElement;
            localStorage.removeItem(locate.className)
            expenselist.removeChild(locate);    

        }
        var editbut=document.createElement('button')
        editbut.className="btn btn-dark"
        var editinfo=document.createTextNode('EDIT')
        editbut.appendChild(editinfo)
        li.appendChild(editbut)
        editbut.addEventListener('click',edited);
        function edited(e){
            var locate=e.target.parentElement;
            document.getElementById('Amount').value=locate.getAttribute('Money');
            document.getElementById('description').value=locate.getAttribute('desc');
            document.getElementById('category').value=locate.getAttribute('who');
            localStorage.removeItem(locate.className)
            expenselist.removeChild(locate);    

        }  
    }else{
        alert('Please fill expenses')
    }
    
}