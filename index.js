const burger = document.querySelector(".burger");
const newMenu = document.querySelector(".nav-menu");


const navMenuItems = document.querySelectorAll(".nav-menu li");
// 一点击按钮，按钮进入active状态，竖向菜单栏进入open状态，使竖向菜单中元素绑定动画
burger.addEventListener("click", ( ) =>{
    burger.classList.toggle("active");
    newMenu.classList.toggle("open");
    // 使元素有次序地进入，动画遵循设置的slideIn从form到to
    navMenuItems.forEach((item,index) => {
        if(item.style.animation){
            item.style.animation = "";
        }else{
            item.style.animation = `0.3s ease-in slideIn forwards ${index * 0.1 + 0.3}s`;
        }
    })

});

        function redirectToIndex() {
    window.location.href = "index.html"; 
}

function redirectToPicture() {
    window.location.href = "picture.html";  
}

function redirectToWorks() {
    window.location.href = "works.html";  
}

function redirectToRecords() {
    window.location.href = "records.html";  
}
