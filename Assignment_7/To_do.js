const item=document.getElementById('item');
const list=document.getElementById('taskList');
const add=document.getElementById('add');

add.addEventListener('click',()=>{
    const taskText=item.value.trim();
    if(taskText===""){
        alert("Please enter the list item first");
        return
    }

    const li=document.createElement('li');
    li.textContent=taskText;

    const del=document.createElement('button');
    del.textContent="Delete";

    del.addEventListener('click',()=>{
        li.remove();
    });
    li.appendChild(del);
    list.appendChild(li);
    item.value="";
});