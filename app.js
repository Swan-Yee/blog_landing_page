const navDropDown = document.getElementsByClassName('nav__dropdown'),
    navDropDownMenu = document.getElementsByClassName('nav__dropdown-menu'),
    dropdownImg = document.querySelectorAll('.nav__dropdown>span');
            
// show and hide of nav list item
function nav1Fun() {
    navCheck()
    document.getElementById('nav__dropdown-1').classList.add('nav-show');
}

function nav2Fun() {
    navCheck();
    document.getElementById('nav__dropdown-2').classList.add('nav-show');
}

function nav3Fun() {
    navCheck();
    document.getElementById('nav__dropdown-3').classList.add('nav-show');
}

function navCheck() {        
  for (var i = 0; i < navDropDown.length; i++){
      if (navDropDownMenu[i].classList.contains('nav-show')) {
           navDropDownMenu[i].classList.remove("nav-show");
      }
  }
}

// show and hide of navList mobile side
const btnOnOff = document.getElementsByClassName('btn-close')[0],
    navList = document.getElementsByClassName('nav__list')[0],
    btnImgClose = document.getElementsByClassName('btn-img-close')[0];

btnOnOff.addEventListener('click', function () {
    navList.classList.toggle('d-show');
    if (navList.classList.contains('d-show')) {
        btnImgClose.src = "./images/icon-close.svg";
    }
    else {
        btnImgClose.src = "./images/icon-hamburger.svg";
    }
});

       // Add an event listener for a
        // click to the html document
document.querySelector('html').addEventListener("click", function (e) {

    // If the element that is clicked on is
    // not the button itself, then remove
    // the class that was added earlier
    if (e.target !== btnImgClose && e.target.classList[0] !== "nav-name") {
        navList.classList.remove("d-show");
        btnImgClose.src = "./images/icon-hamburger.svg";

        navCheck();
    }
});