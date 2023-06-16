document.addEventListener("DOMContentLoaded", function() {
  const burgerbutton = document.getElementById('burgerbutton');
  const nav = document.getElementById('nav')
  let menu = 'closed';
  burgerbutton.addEventListener('click', function(){
      console.log("clicked");
      if (menu == 'closed'){
          menu ='opened';
          nav.classList.remove('menu-closed');
          nav.classList.add('menu-opened');
      }else{
          menu = 'closed';
          nav.classList.remove('menu-opened');
          nav.classList.add('menu-closed');   
      }
  }, false)
});

document.addEventListener("DOMContentLoaded", () => {
        const clickLink = document.getElementById("pete_click");
        const hiddenElement = document.querySelector(".pete_hidden");
        let clicked = false;
        clickLink.addEventListener("click", function () {
          if ( clicked == false ) {
            hiddenElement.classList.remove("pete_hidden");
            clickLink.innerHTML = 'Show less &#8593';
            hiddenElement.style.border = "2px dotted #003459";
            hiddenElement.style.padding = "0.5em";
            hiddenElement.style.margin = "0.5em 1em 0.5em 1em";
            hiddenElement.style.borderRadius = "12px";
            hiddenElement.style.fontSize = "3vw";
            hiddenElement.style.fontWeight = "200";
            clicked = true;
          } else {
            hiddenElement.classList.add("pete_hidden");
            clickLink.innerHTML = 'Read more &#8595';
            clicked = false;
          }
        }, false);
    });

var backToTop = document.querySelector('#back-to-top');
window.addEventListener('scroll', function() {
  if (window.pageYOffset > 10) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});
backToTop.addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({top: 0, behavior: 'smooth'});
});