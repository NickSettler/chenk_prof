function oneTable(){document.getElementsByClassName("one_f")[0].style.display = "block";}
function oneTableHide(){document.getElementsByClassName("one_f")[0].style.display = "none";}
function twoTable(){document.getElementsByClassName("two_f")[0].style.display = "block";}
function twoTableHide(){document.getElementsByClassName("two_f")[0].style.display = "none";}
function threeTable(){document.getElementsByClassName("three_f")[0].style.display = "block";}
function threeTableHide(){document.getElementsByClassName("three_f")[0].style.display = "none";}
function fourTable(){document.getElementsByClassName("four_f")[0].style.display = "block";}
function fourTableHide(){document.getElementsByClassName("four_f")[0].style.display = "none";}
function fiveTable(){document.getElementsByClassName("five_f")[0].style.display = "block";}
function fiveTableHide(){document.getElementsByClassName("five_f")[0].style.display = "none";}
function sixTable(){document.getElementsByClassName("six_f")[0].style.display = "block";}
function sixTableHide(){document.getElementsByClassName("six_f")[0].style.display = "none";}
function sevenTable(){document.getElementsByClassName("seven_f")[0].style.display = "block";}
function sevenTableHide(){document.getElementsByClassName("seven_f")[0].style.display = "none";}

// $(".ass").hover(function(){   
//       for(var i=0; i<7; i++){
//        $(".sau").css("display", "block");
//       }                 
//},function(){           
//       for(var i=0; i<7; i++){
//        $(".sau").css("display", "none");
//       }       
//});

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