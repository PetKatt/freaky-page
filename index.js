
console.log("document loaded");

let p = document.getElementsByTagName("p");
let pc = document.getElementsByClassName("photo-card");

document.getElementsByClassName("news")[0].addEventListener("mouseover", function() {

	p[0].style.transform = "translateY(0)";
	p[0].style.display = "block";
	pc[0].style.transform = "translateY(0)";
	pc[0].style.display = "flex";
});
