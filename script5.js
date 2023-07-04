let reg=document.querySelector(".reg")
reg.addEventListener("click", function(){
    let key=document.querySelector(".key")
    let val=document.querySelector(".val")
    let brp=document.querySelector(".brp")
    if (key.value==""||val.value==""){
        alert("Заполните поля!")
    }
    else if (!brp.checked){
        alert("Регистрируясь вы обязаны принять Политику и условия сайта!")
    }
    else{
        window.location.href="index2.html"
    }
})