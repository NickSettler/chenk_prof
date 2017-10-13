function playVideo(){
	document.getElementsByClassName("myVideo")[0].style.top = "0";
    document.body.style.overflow = "hidden";
}

function closeVideo(){
    document.getElementsByClassName("myVideo")[0].style.top = "-100vh";
    document.body.style.overflow = "auto";
}