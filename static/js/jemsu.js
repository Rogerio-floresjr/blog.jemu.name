// Initialize littlefoot.js
littlefoot.default({
  activateOnHover: false,
  dismissDelay: 50,
  buttonTemplate: "<button aria-controls='fncontent:<% id %>' aria-expanded='false' aria-label='Footnote <% number %>' class='littlefoot-footnote__button' id='<% reference %>' rel='footnote' title='See Footnote <% number %>' /><% number %></button>"
})

// Color theme toggler via zookee1 <3
function toggleDarkMode() {
  let bodyClassList = document.body.classList;
  let userPreferredIsLight = (window.matchMedia('(prefers-color-scheme: light)').matches)
  
  if(!bodyClassList.contains('colorscheme-dark') && 
     !bodyClassList.contains('colorscheme-light')) {
      bodyClassList.remove("colorscheme-auto");
      if(userPreferredIsLight) {
          bodyClassList.add("colorscheme-dark");            
      } else {
          bodyClassList.add("colorscheme-light");            
      }
  } else {
      if(bodyClassList.contains('colorscheme-dark')) {
          bodyClassList.add("colorscheme-light");
          bodyClassList.remove("colorscheme-dark");
      } else if(bodyClassList.contains('colorscheme-light')) {
          bodyClassList.add("colorscheme-dark");
          bodyClassList.remove("colorscheme-light");
      }
  }
}

// Scroll to top thing: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

//Get the button:
mybutton = document.getElementById("totop");

// When the user scrolls down 1000px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
