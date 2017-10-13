function playVideo(){
	document.getElementsByClassName("myVideo")[0].style.top = "0";
    document.body.style.overflow = "hidden";
//	$("body").css("overflow","hidden");
}

function closeVideo(){
    document.getElementsByClassName("myVideo")[0].style.top = "-100vh";
    document.body.style.overflow = "auto";
}
//$(document).on("keydown",function(e){
//	switch(e.keyCode){
//		case 27:
//			$(".myVideo").css("top","-100vh");
//			$("body").css("overflow","auto");
//			break;
//	}
//});
//$(".myVideo").on("click",function(){
//	$(".myVideo").css("top","-100vh");
//	$("body").css("overflow","auto");
//});