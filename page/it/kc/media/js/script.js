function playVideo(){
	document.getElementsByClassName("myVideo")[0].style.top = "0";
    document.body.style.overflow = "hidden";
    document.getElementsByClassName("video")[0].setAttribute("src", "video/CS.mp4");
}

function closeVideo(){
    document.getElementsByClassName("myVideo")[0].style.top = "-100vh";
    document.body.style.overflow = "auto";
    document.getElementsByClassName("videoC")[0].removeAttribute("src");
    var videoDOM=document.getElementsByClassName("videoC")[0];
    $(".videoC").get(0).pause();
    videoDOM.currentTime=0;
}
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