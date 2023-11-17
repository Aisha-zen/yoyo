 function toggleDivs(divId) {
            const div1 = document.getElementById('div1');
            const div2 = document.getElementById('div2');

            if (divId === 'div1') {
                div1.classList.add('hidden');
                div2.classList.remove('hidden');
            } else {
                div1.classList.remove('hidden');
                div2.classList.add('hidden');
            }
        }
function searchPage() {

  var searchTerm = document.getElementById("searchBar").value.toLowerCase();

  
  if (searchTerm === "spicy") {
      window.location.href = "/searchR.html";
  } else {
     window.location.href = "/notfound.html";
  }
}

document.getElementById("searchBar").addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
      searchPage();
  }
});

const closeBtn =document.querySelector('.closeBtn');
const close =document.querySelector('.close')

closeBtn.addEventListener('click', function(){
close.style.display='none';
});

const open =document.getElementById('open');
const modal_container =document.getElementById('modal_container');

open.addEventListener('click', function(){
   modal_container.classList.add('show');
});