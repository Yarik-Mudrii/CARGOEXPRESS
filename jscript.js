// липкая навигация
var navbar = document.getElementById("navbar");
  var glue = navbar.offsetTop;
  window.onscroll = function() { navigatorGlue(); };

function navigatorGlue() {
  if (window.pageYOffset >= glue) {
    navbar.classList.add("glue");
  } else {
    navbar.classList.remove("glue");
  }
}

// button return up
window.onload = function() {
    var scrolled;
    var back=document.getElementById('top');
    back.onclick = function () {
        scrolled = window.pageYOffset;
        scrollBackUp(); 
    };
    function scrollBackUp(){
        if (scrolled>0) {
            window.scrollTo(0, scrolled);
            scrolled-=100; 
            timer = setTimeout(scrollBackUp, 30);
        }
        else {
            clearTimeout(timer);
            window.scrollTo(0,0);
        }
    }
  };
  
  $(window).scroll(function (event) {
    var top = $(window).scrollTop();
     if(top >= 150){
      document.getElementById('top').style.opacity="1"
     } else {
      document.getElementById('top').style.opacity="0";
     }
  });




  var time = 2,
  cc = 1;
$(window).scroll(function() {
  $('#counter').each(function() {
    var
      cPos = $(this).offset().top,
      topWindow = $(window).scrollTop();
    if (cPos < topWindow + 400) {
      if (cc < 2) {
       
        $('div').each(function() {
          var
            i = 1,
            num = $(this).data('num'),
            
            step = 100 * time / num,
            that = $(this),
            int = setInterval(function() {
              if (i <= num) {
                that.html(i);
              } else {
                cc = cc + 2;
                clearInterval(int);
              }
              i++;
            }, step);
        });
      }
    }
  });
});


// page services tab
function openServices(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


