
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

        const myElement = document.getElementById("pete_click");
        const hiddenElement = document.getElementById("pete_hidden");
        //const hiddenElement = document.querySelector('.hiddenj'); //same as the selector in css (no "All" then only get the first element)
        console.log(myElement);
        //console.log(hiddenElement);
        let x = 0;
        myElement.addEventListener("click", function () {
            console.log('clicked');
            hiddenElement.remove("pete_hidden");
            //hiddenElement.classList.add("hiddenj")
            //hiddenElement.removeAttribute("id"); //delete the tag id then back to original
            //myElement.setAttribute('id','hidden');
            if (x % 2 == 0) {

                myElement.setAttribute('id', 'hidden');
                x++;
            } else {
                x++;
            }
        }, false);
    });


/* event.preventDefault(); */