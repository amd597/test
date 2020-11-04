
let item = document.getElementsByClassName("box1");



item.addEventListener('click', () =>{
    item.toggleClass('clicked');
    console.log("hello from the other side");
})



















$(".box1").on("click", function () {
    $(this).toggleClass("clicked");
    console.log("clicked on me")
  });
  