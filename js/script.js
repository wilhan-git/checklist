var cabecalho = document.getElementById('cabecalho');
var navgationHeader = document.getElementById('navigation_header');
var showSidebar =false;

function abrirNavBar(){
  showSidebar = !showSidebar;
  
  if(showSidebar){
    navgationHeader.style.marginLeft ='-10vw';
    navgationHeader.style.animationName='showSiidebar';
   } else {
    navgationHeader.style.marginLeft ='-100vw';
    navgationHeader.style.animationName='';
   }
}

window.addEventListener('resize', function(event){
  if(window.innerWidth > 768 && showSidebar){
    abrirNavBar();
  }
})