let names=["Настя : +796754603672","Полина :  +78352452936","Ангелина : +7962447494634","Белла : +765893084563","Елена : +794734274859","Яна : +797425790752","Алена  :+754680027473"]
let list=document.querySelector(".list")
let up=document.querySelector(".up")
let down=document.querySelector(".down")
const update=()=>{
    list.innerHTML=""
    for(let i=0; i<names.length; i++){
        list.innerHTML+=names[i]+"<br>"
    }
}
update()
up.addEventListener("click",()=>{
    names.sort((a,b)=>a.localeCompare(b))
    update()
})
down.addEventListener("click",()=>{
    names.sort((a,b)=>b.localeCompare(a))
    update()
})