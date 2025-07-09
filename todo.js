function haha(){
    const todo=document.querySelector(".todo")
    console.log(todo.value)
    let arr=JSON.parse(localStorage.getItem("arr")) || []
    arr.push(todo.value)
    let htm="";
    for(let i=0;i<arr.length;i++){
        htm+=arr[i]+"<br>"
    }
    document.querySelector(".para").innerHTML=htm
    console.log(arr)
    localStorage.setItem("arr",JSON.stringify(arr))
    todo.value="";
}
function clc(){
    localStorage.removeItem("arr")
    document.querySelector(".para").innerHTML=""
}