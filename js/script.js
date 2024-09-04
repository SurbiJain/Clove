const swiper = new Swiper(".mainSwiper", {
  loop: true,
  speed: 700,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets"
  }
});

const swiper2 = new Swiper(".locateSwiper", {
  direction: "vertical",
  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  height: 140,
  autoHeight: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }
});

const ratingSwiper = new Swiper(".ratingSwiper", {
  direction: "vertical",
  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  height: 64,
  autoHeight: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }
});

// Locate Clinic Dropdown
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }

  if (!event.target.matches('.treatmentbtn')) {
    let dropdowns = document.getElementsByClassName("dropdown-treatment");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show-treatment')) {
        openDropdown.classList.remove('show-treatment');
      }
    }
  }

  if (!event.target.matches('.contactbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content-contact");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show-contact')) {
        openDropdown.classList.remove('show-contact');
      }
    }
  }
}
//treatment dropdown
function treatmentDropDown(){
  document.getElementById("treatmentDropdown").classList.toggle("show-treatment");
  console.log("show added")
}

// contact dropdown
function contactDropDown(){
  document.getElementById("contactDropdown").classList.toggle("show-contact");
}
