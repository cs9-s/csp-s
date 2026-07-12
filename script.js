console.log("Welcome to CSP-S");
const cursor = document.querySelector(".cursor");


document.addEventListener("mousemove", (e)=>{

cursor.style.left = e.clientX + "px";

cursor.style.top = e.clientY + "px";

});
window.onload = function(){

    const button = document.getElementById("mode-toggle");

    button.onclick = function(){

        document.body.classList.toggle("light-mode");

    };

};
document.querySelectorAll("a, button").forEach(item => {

    item.addEventListener("mouseenter", () => {

        cursor.style.width = "30px";
        cursor.style.height = "30px";

    });


    item.addEventListener("mouseleave", () => {

        cursor.style.width = "20px";
        cursor.style.height = "20px";

    });

});

