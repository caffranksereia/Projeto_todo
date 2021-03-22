const save = document.getElementById('save');
const edit = document.getElementById("edit");
const del = document.getElementById("del");
const myListTodo = document.getElementById("mylistTodo");

myListTodo.onkeyup = ()=>{
    let dataTodo = myListTodo.value;
    if(dataTodo.trim() != 0){
        save.classList.add("active");
    }
}
