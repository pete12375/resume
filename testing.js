
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