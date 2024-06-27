function bindEvent(e, eventName, callback) {
    if(e.addEventListener) // new browsers
        e.addEventListener(eventName, callback, false);
    else if(e.attachEvent) // IE
        e.attachEvent('on'+ eventName, callback);
};

bindEvent(document.body, 'scroll', function(e) {
    document.body.scrollLeft = 0;
});





for(let a=0; a<document.querySelectorAll(".faqclick").length ; a++){
    document.querySelectorAll(".faqclick")[a].addEventListener("click",   function () {
        if (this.innerHTML.includes("https://raw.githubusercontent.com/nishcode04/SocialCommerce/24ed119586ac530ea478c46422b55e2e93fc8524/plus.svg")) {
            this.innerHTML = '<img src="https://raw.githubusercontent.com/nishcode04/SocialCommerce/24ed119586ac530ea478c46422b55e2e93fc8524/xmark.svg">';
            document.querySelectorAll(".cont")[a].querySelector(".faqans").classList.add("ans");

        } else {
            this.innerHTML = '<img src="https://raw.githubusercontent.com/nishcode04/SocialCommerce/24ed119586ac530ea478c46422b55e2e93fc8524/plus.svg">';
            document.querySelectorAll(".cont")[a].querySelector(".faqans").classList.remove("ans");
        }
    });
    }





const dropbtn = document.querySelector('.dropbtn');
const dropdownContent = document.querySelector('.dropdown-content');

dropbtn.addEventListener('click', function() {
  dropdownContent.classList.toggle('show');
});

// Close the dropdown if the user clicks outside of it (optional)
window.addEventListener('click', function(event) {
  if (!event.target.matches('.dropbtn')) {
    if (dropdownContent.classList.contains('show')) {
      dropdownContent.classList.remove('show');
    }
  }
});


const openBtn = document.getElementById('open-popup');
const closeBtn = document.getElementById('close-popup');
const popup = document.getElementById('popup');

openBtn.addEventListener('click', () => {
  popup.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Optionally, close the popup when clicking outside the content area
window.addEventListener('click', (event) => {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
});
