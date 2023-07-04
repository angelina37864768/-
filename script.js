// Ежедневник
new Vue({
    el:".v1",
    data:{
        list:["Потренироваться", "Прочесть несколько страниц книги", "Позаниматься английским"],
        in_item:"",
        show_list:true,
        na_day:"",
    },
    methods:{
        add_item:function(){
            this.list.push(this.in_item)
            this.in_item=""
        },
        delete_item:function(index){
            this.list.splice(index,1)
        },
        del_text:function(){
            this.in_item=""
        }
    }
})
//Калькулятор
// let dot=document.querySelector(".dot")
// let plus=document.querySelector(".plus")
// let minus=document.querySelector(".minus")
// let mul=document.querySelector(".mul")
// let divis=document.querySelector(".divis")
// let koren=document.querySelector(".koren")
// let okr=document.querySelector(".okr")
let ac=document.querySelector(".ac")
let divis=document.querySelector(".divis")
let n7=document.querySelector(".n7")
let n8=document.querySelector(".n8")
let n9=document.querySelector(".n9")
let mul=document.querySelector(".mul")
let n4=document.querySelector(".n4")
let n5=document.querySelector(".n5")
let n6=document.querySelector(".n6")
let minus=document.querySelector(".minus")
let n1=document.querySelector(".n1")
let n2=document.querySelector(".n2")
let n3=document.querySelector(".n3")
let plus=document.querySelector(".plus")
let zero=document.querySelector(".zero")
let zap=document.querySelector(".zap")
let rav=document.querySelector(".rav")
n1.addEventListener("click", function(){
    let num1=document.querySelector(".num1")
    num1.value=num1.value+"1"
})
n2.addEventListener("click", function(){
    let num1=document.querySelector(".num1")
    num1.value=num1.value+"2"
})
n3.addEventListener("click", function(){
    let num1=document.querySelector(".num1")
    num1.value=num1.value+"3"
})
n4.addEventListener("click", function(){
    let num1=document.querySelector(".num1")
    num1.value=num1.value+"4"
})
n5.addEventListener("click", function(){
    let num1=document.querySelector(".num1")
    num1.value=num1.value+"5"
})
n6.addEventListener("click", function(){
    let num1=document.querySelector(".num1")
    num1.value=num1.value+"6"
})
n7.addEventListener("click", function(){
    let num1=document.querySelector(".num1")
    num1.value=num1.value+'7'
})
n8.addEventListener("click", function(){
    let num1=document.querySelector(".num1")
    num1.value=num1.value+"8"
})
n9.addEventListener("click", function(){
    let num1=document.querySelector(".num1")
    num1.value=num1.value+"9"
})
zero.addEventListener("click", function(){
    let num1=document.querySelector(".num1")
    num1.value=num1.value+"0"
})
zap.addEventListener("click", function(){
    let num1=document.querySelector(".num1")
    num1.value=num1.value+"."
})
divis.addEventListener("click", function(){
    let num1=document.querySelector(".num1")
    num1.value=num1.value+"/"
})
mul.addEventListener("click", function(){
    let num1=document.querySelector(".num1")
    num1.value=num1.value+"*"
})
minus.addEventListener("click", function(){
    let num1=document.querySelector(".num1")
    num1.value=num1.value+"-"
})
plus.addEventListener("click", function(){
    let num1=document.querySelector(".num1")
    num1.value=num1.value+"+"
})
ac.addEventListener("click", function(){
    let num1=document.querySelector(".num1")
    num1.value=""
})
rav.addEventListener("click", function(){
    let num1=document.querySelector(".num1")
    let val=eval(num1.value)
    num1.value=val
})



