

//efeitos do menu abrindo e fechando
function Tratar_menu(){
  $('#botaozinho1').toggleClass('botaozinho_girar'); //gira botao menu
  $('#site').toggleClass('menu_opaco'); //deixa a tela opaca quando abre menu
  $('#sidebar').animate({width: 'toggle'}, 200); //faz menu aparecer com animacao
}


$(document).ready(function () {

    //clicando no botao menu
    $("#botaozinho1").click(function(e){
      Tratar_menu();
      e.stopPropagation()}); //nao deixa menu sair quando clica nele

    //clicar fora do meun e nao recolher
    //$("#sidebar").click(function(e){e.stopPropagation()});

    //clicar fora do menu e recolher
    $("#site").click(function(){

      if ($('#sidebar').css('display') != 'none'){
        Tratar_menu();
      }});

});
