function haha(){
    const todo=document.querySelector(".todo")
    console.log(todo.value)
    let arr=JSON.parse(localStorage.getItem("arr")) || []
    arr.push(todo.value)
    console.log(arr)
    localStorage.setItem("arr",JSON.stringify(arr))
    todo.value="";
}
function clc(){
    localStorage.removeItem("arr")
}