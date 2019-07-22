// document.addEventListener('DOMContentLoaded', function(){});
// (function(){
// код
// }());
// (function(){
//   var elements = document.querySelectorAll(".dropdown-toggle");

//   function openDropdown(event){
//     event.target.parentNode.classList.add("open");
//   }

//   function resetDropdowns(){
//     var element = document.querySelector(".dropdown.open");
//     if(element){ element.classList.remove("open"); }
//   }

//   function documentHandler(){
//     resetDropdowns();
//     document.removeEventListener('click', documentHandler , false); //remove document click listener
//   };

//   if(elements.length>0){
//     elements.forEach(el=>{
//       el.addEventListener('click',function(e){
//         var isActive = e.target.parentNode.classList.contains("open");
//         resetDropdowns();
//         if (isActive) {
//           return;
//         }
//         e.stopPropagation();
//         e.preventDefault();
//         openDropdown(e);
//         document.addEventListener('click', documentHandler, false); //add document click listener to close dropdown on outside click
//       }, false);
//     })
//   }
// })()

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("open");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropdown-toggle')) {
    var dropdowns = document.getElementsByClassName("dropdown-menu");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('open')) {
        openDropdown.classList.remove('open');
      }
    }
  }
}