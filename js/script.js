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
  if(this.window.innerWidth >768 && showSidebar){
     abrirNavBar();
   } 
})

/* Validação do Formulario*/

const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span_required');
/*const emailRegex = /^ w+(-+.')*/

function setError(index){
 
  campos[index].style.border ='2px solid #e63636';
  spans[index].style.display ='block';


}

function removeError(index){
  campos[index].style.border ='';
  spans[index].style.display ='none';
}

function nameValidation(){
  if(campos.values.length < 3){
   setError(0);
  } 
  else
  {
    removeError();
  }
}
