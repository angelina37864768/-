let worker={
    "user6395": "rjkrting63876", 
}
// console.log(worker.username)
// console.log(worker["age"])
// worker.work="Камиенщик, работает 3 дня"
// worker.city="Караганда"
// worker.hobby="Отбирать грибы"
// worker.birthday="10.07.2000"
// delete worker.age
// console.log(worker)
let res=document.querySelector(".res")
let b1=document.querySelector(".b1")
let b2=document.querySelector(".b2")
function update(){
    res.innerHTML=""
    for(let k in worker){
        res.innerHTML+=k+": "+worker[k]+"<br>"
    }
}
update()
b1.addEventListener("click", function(){
    let key=document.querySelector(".key")
    let val=document.querySelector(".val")
    if (key.value==""||val.value==""){
        alert("Поля не должны быть пустыми!")
        return
    }
    worker[key.value]=val.value
    update()
    key.value=""
    val.value=""
})
b2.addEventListener("click", function(){
    let key=document.querySelector(".key")
    let val=document.querySelector(".val")
    if (key.value==""){
        alert("Ошибка! Введите информацию!")
        return
    }
    delete worker[key.value]
    update()
    key.value=""
    val.value=""
})
