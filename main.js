'use strict'
//consts
const modeIcon=document.querySelector('.light-mode');
const header=document.querySelector('.head')
//const todoName=document.createElement('p')
const todoContainer=document.querySelector('.todo-container')
const input=document.querySelector('.todoInput')
const addTodo=document.querySelector('.add-todo')
const todoList=document.querySelector('.todo-list')
const itemsLeft=document.querySelector('.items-left')
const items=document.querySelector('.items')
const itemsNumber=document.querySelector('.secondary2')
const clearComplete=document.querySelector('.clear')
const categories=document.querySelector('.categories')
const dragDrop=document.querySelector('.drag')
const checkBoxs=document.querySelectorAll('.check')
const links=document.querySelectorAll('.link');
items.style.display='none'
//global variables
let todoArray=[];


//event listener
//dark mode
modeIcon.addEventListener('click',changeMode);
window.addEventListener('keypress',function(e){
    todoArray.push(input.value)
    if(e.key==='Enter'){
        createTodo(e);
    }
});
//functions 
function changeMode(){
    document.body.classList.toggle('light');
    header.classList.toggle('light')
    modeIcon.classList.toggle('light');
    input.classList.toggle('light');
    addTodo.classList.toggle('light');
    todoList.classList.toggle('light');
    itemsLeft.classList.toggle('light');
    checkBoxs.forEach(check=>check.classList.toggle('light'))
    items.style.borderBottom='1px solid hsl(236, 9%, 61%)'
    //items.style.borderTop='1px solid hsl(236, 9%, 61%)'
    categories.classList.toggle('light');
    itemsNumber.classList.toggle('light');
    //todoName.classList.toggle('light');
    clearComplete.classList.toggle('light');
    links.forEach(link=>link.classList.toggle('light'))
}
function createTodo(){
    if(!input.value){
        return
    }
    //todo item div
    const todoItem=document.createElement('div');
    todoItem.classList.add('todo-item');
    todoList.appendChild(todoItem);

    //item div
    const item=document.createElement('div');
    item.classList.add('item')
    todoItem.appendChild(item)

    //checkbox for complete
    const checkBox=document.createElement('input')
    checkBox.classList.add('check');
    checkBox.type='checkbox'
    item.appendChild(checkBox)

    //todo name
    const todoName=document.createElement('p')
    todoName.classList.add('secondaryP')
    todoName.innerText=input.value;
    item.appendChild(todoName)
     
   //div item2 //item2.classList.add('item-two')
   const item2=document.createElement('div');
   todoItem.appendChild(item2)
   const img=document.createElement('img');
    img.src='images/icon-cross.svg'
    item2.appendChild(img);

    //delete todo and add items left
    img.addEventListener('click',function(e){
        todoList.removeChild(todoItem);
    })

    //check todo as complete
    checkBox.addEventListener('click',function(){
        todoName.classList.add('completed')
        checkBox.classList.add('checkComplete')
    })
    //clear todo after entering
    input.value='';
    //remove didden from categories and drag and drop
    itemsLeft.classList.remove('hidden');
    categories.classList.remove('hidden');
    dragDrop.classList.remove('hidden');
todoList.style.borderRadius='10px 10px 0px 0'

    //categories filter
    categories.addEventListener('click',function(e){
        const clicked=e.target.dataset.id;
        switch (clicked){
            case 'all':
                 todoItem.style.display='flex';
                 break;
               case 'active':
                   if(!todoName.classList.contains('completed')){
                       todoItem.style.display='flex';
                   }
                   else todoItem.style.display='none';
                   break;
               case 'complete':
                   if(todoName.classList.contains('completed')){
                       todoItem.style.display='flex';
                   }
                   else {
                       todoItem.style.display='none'
                       const noTask=document.createElement('p')
                       noTask.classList.add('secondaryP')
                       todoList.appendChild(noTask)
                       items.classList.add('hidden');
                       
                    };
        }
    });    
}


