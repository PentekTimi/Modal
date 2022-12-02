const close = document.querySelector('.close-btn');
const open = document.querySelector('.open-btn');
const modal = document.querySelector(".modal-overlay");

open.addEventListener("click", function(){
	modal.classList.add("open-modal");
})

close.addEventListener("click", function(){
	modal.classList.remove("open-modal");
})