function load() {
	console.log("on load");
	document.getElementById("deletephoto").style.display = "none";
}
function myFunction(imgs) {
	var expandImg = document.getElementById("expandedImg");
	var imgText = document.getElementById("imgtext");
	if (imgs.id == "photo1") {
		expandImg.src = "image/photo1.jpg";
	} else if (imgs.id == "photo2") {
		expandImg.src = "image/photo2.jpg";
	} else if (imgs.id == "photo3") {
		expandImg.src = "image/photo3.jpg";
	} else if (imgs.id == "photo4") {
		expandImg.src = "image/photo4.jpg";
	} else if (imgs.id == "photo5") {
		expandImg.src = "image/photo5.jpg";
	} else if (imgs.id == "photo6") {
		expandImg.src = "image/photo6.jpg";
	} else {
		expandImg.src = "none";
	}
	console.log(imgs.id);
	imgText.innerHTML = imgs.alt;
	expandImg.parentElement.style.display = "block";
	document.getElementById("deletephoto").style.display = "block";
}

new WOW().init();