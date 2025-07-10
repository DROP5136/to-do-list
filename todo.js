function haha(){
    const todo=document.querySelector(".todo")
    const datee=document.querySelector(".dte")
    
    let arr=JSON.parse(localStorage.getItem("arr")) || []
    let drr=JSON.parse(localStorage.getItem("drr")) || []
    arr.push(todo.value)
    drr.push(datee.value)
    
    
    localStorage.setItem("arr",JSON.stringify(arr))
    localStorage.setItem("drr",JSON.stringify(drr))
    display()
    todo.value=""
    datee.value=""
    
}
function clc(){
    localStorage.removeItem("arr")
    localStorage.removeItem("drr")
    document.querySelector(".para").innerHTML=""
}
function del(i){
    let arr=JSON.parse(localStorage.getItem("arr")) || []
    let drr=JSON.parse(localStorage.getItem("drr")) || []
    arr.splice(i, 1);
    drr.splice(i, 1);
    localStorage.setItem("arr",JSON.stringify(arr))
    localStorage.setItem("drr",JSON.stringify(drr))
    display()
}
function display(){
    let arr = JSON.parse(localStorage.getItem("arr")) || [];
    let drr = JSON.parse(localStorage.getItem("drr")) || [];

    let htm="";
    for(let i=0;i<arr.length;i++){
        htm+=arr[i]+" "+drr[i]+" "+"<button onclick='del("+i+")'>Delete</button>"+"<br>"
    }
    document.querySelector(".para").innerHTML=htm
    
}
window.onload = display