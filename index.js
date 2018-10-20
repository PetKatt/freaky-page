
console.log("document loaded");

/* loading Text Nodes*/
function loadHeader() {
	let h2 = document.querySelectorAll("h2");
	let p = document.querySelectorAll("p");
	let img = document.querySelectorAll("img");
	let figcap = document.querySelectorAll("figcaption");

	h2.forEach(function(node) {
		node.innerHTML = "Godd news!";
	});
	p.forEach(function(node) {
		node.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
	});
	img.forEach(function(node) {
		node.src = "img/photo.jpg";
		node.alt = "photo";
	});
	figcap.forEach(function(node) {
		node.innerHTML = "Piotr Wiercinski, Interactive Frontend Developer";
	});

	document.querySelector(".loader-container").style.display = "none";
}

/* create MarkUp HTML*/
function createMarkup(i) {	
	let article = document.createElement("article");
	let h2 = document.createElement("h2");
	let p = document.createElement("p");
	let fig = document.createElement("figure");
	let img = document.createElement("img");
	let figcap = document.createElement("figcaption");

	article.classList.add(`${i}`);
	article.classList.add("news");
	article.appendChild(h2);
	article.appendChild(p);
	article.appendChild(fig);
	fig.classList.add("photo-card");
	fig.appendChild(img);
	img.classList.add("photo");
	fig.appendChild(figcap);

	document.querySelector(".news-container").appendChild(article);
} 

for(i=0; i<4; i++) {
	createMarkup(i);
}
setTimeout(loadHeader, 4500);

/* Mouse Over and Out actions */

let art = document.querySelectorAll(".news");
console.log(art);

art.forEach(function(node, index) {
	node.addEventListener("mouseover", function() {
		let p = node.querySelector("p");
		let pc = node.querySelector(".photo-card");
		p.style.transform = "translateY(0)";
		p.style.display = "block";
		pc.style.transform = "translateY(0)";
		pc.style.display = "flex";
	});
});

art.forEach(function(node, index) {
	node.addEventListener("mouseout", function() {
		let p = node.querySelector("p");
		let pc = node.querySelector(".photo-card");
		p.style.transform = "translateY(-500px)";
		p.style.display = "none";
		pc.style.transform = "translateY(-500px)";
		pc.style.display = "none";
	});
});

