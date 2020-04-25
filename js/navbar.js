window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "1px 10px";
    document.getElementById("logo").style.fontSize = "1px";
  } else {
    document.getElementById("navbar").style.padding = "6px 10px";
    document.getElementById("logo").style.fontSize = "15px";
  }
} 