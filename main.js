
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
        console.log(clickLink);
        let clicked = false;
        clickLink.addEventListener("click", function () {
          if ( clicked == false ) {
            hiddenElement.classList.remove("pete_hidden");
            clickLink.innerHTML = 'Show less &#8593';
            hiddenElement.style.backgroundColor = "lightgray";
            clicked = true;
          } else {
            hiddenElement.classList.add("pete_hidden");
            clickLink.innerHTML = 'Read more &#8595';
            clicked = false;
          }
          console.log('clicked');
            
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


/* event.preventDefault(); */



