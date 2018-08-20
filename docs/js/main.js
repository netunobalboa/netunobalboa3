

function menu_lado(){

//alert("apertou");
//   document.getElementById("sidebar").style.display = "block";

//   if (document.getElementById("sidebar").style.display == 'none') {
//     document.getElementById("sidebar").style.display = "block";
//   }
//   else {
//     document.getElementById("sidebar").style.display = "none";
//     }



}

function limpa_divs_menu(){

  document.getElementById("pagina1").style.display = "none"
  document.getElementById("pagina2").style.display = "none"
  document.getElementById("pagina3").style.display = "none"
  document.getElementById("pagina4").style.display = "none"

}



function menu_rapido(menu){

limpa_divs_menu();

  switch (menu) {
      case 1:
          document.getElementById("pagina1").style.display = "block"
          break;
      case 2:
          document.getElementById("pagina2").style.display = "block"

          break;
      case 3:
          document.getElementById("pagina3").style.display = "block"
          break;
      case 4:
          document.getElementById("pagina4").style.display = "block"
          break;
    }



}



function TelaInicial(){
LimparCampos();

resultado = document.getElementById("resultado").value;


}
function LimparCampos(){

  document.getElementById("txt_id").value = "";
  document.getElementById("txt_nome").value = "";
  document.getElementById("txt_idade").value = "";
  document.getElementById("txt_cargo").value = "";
  document.getElementById("txt_logradouro").value = "";
  document.getElementById("txt_bairro").value = "";
  document.getElementById("txt_cidade").value = "";
  document.getElementById("txt_uf").value = "";
  document.getElementById("editar_foto").src = "images/tela/add_foto.jpg";




  document.getElementById("botoes_ok_cancelar").style.display = "none"
  document.getElementById("botoes_incluir_alterar_excluir").style.display = "none"
  document.getElementById("campos_meio").style.display = "none"
  document.getElementById("foto_cima").style.display = "none"

  document.getElementById("label_titulo").innerHTML ="Cadastro de Usuário";

  document.getElementById("div_esquerda").style.display = "block";


  //diminuir campos quando volta para tela inical
  document.getElementById("txt_nome").size="80";
  document.getElementById("txt_idade").size = "80";
  document.getElementById("txt_logradouro").size = "80";
  document.getElementById("txt_bairro").size = "80";
  document.getElementById("txt_cidade").size = "80";

  }

  function PreSelecionarPessoa(id,nome,idade,cargo,logradouro,bairro,cidade,uf){

    LimparCampos();
    //document.painel.action = "selecionar_usuario"

    document.getElementById("label_titulo").innerHTML =nome;

    //alimenta campos
    document.getElementById("txt_id").value = id;
    document.getElementById("txt_nome").value = nome;
    document.getElementById("txt_idade").value = idade;
    document.getElementById("txt_cargo").value = cargo;
    document.getElementById("txt_logradouro").value = logradouro;
    document.getElementById("txt_bairro").value = bairro;
    document.getElementById("txt_cidade").value = cidade;
    document.getElementById("txt_uf").value = uf;
    document.getElementById("editar_foto").src = "images/cadastro/foto_usuario_"+id+".jpg"

    document.getElementById("foto_cima").style.display = "block"
    document.getElementById("campos_meio").style.display = "block"

    }


function SelecionarPessoa(id,nome,idade,cargo,logradouro,bairro,cidade,uf){

  LimparCampos();
  PreSelecionarPessoa(id,nome,idade,cargo,logradouro,bairro,cidade,uf);

  document.getElementById("label_titulo").innerHTML ="Editar Usuário";

  //botões que devem ser mostrados
  document.getElementById("div_esquerda").style.display = "none";
  document.getElementById("botoes_ok_cancelar").style.display = "none"
  document.getElementById("botoes_incluir_alterar_excluir").style.display = "block"

//aumentar campos quando seleciona pra editar
document.getElementById("txt_nome").size="120";
document.getElementById("txt_idade").size = "120";
document.getElementById("txt_logradouro").size = "120";
document.getElementById("txt_bairro").size = "120";
document.getElementById("txt_cidade").size = "120";

  }


//mapa gps
function Abrir_GPS(){



//logradouro ="Av Guido Caloi 1000"
//bairro="Jardim Sao Luiz"
//cidade="Sao Paulo"
logradouro = document.getElementById("txt_logradouro").value
bairro =document.getElementById("txt_bairro").value
cidade = document.getElementById("txt_cidade").value
uf=document.getElementById("txt_uf").value

window.open("https://www.google.com.br/maps/place/"+logradouro+","+bairro+","+cidade+","+uf, 'newName', 'width=1000, height=900');

}

function IncluirPessoa(){

  LimparCampos();

  //aumentar campos quando seleciona pra editar
  document.getElementById("txt_nome").size="120";
  document.getElementById("txt_idade").size = "120";
  document.getElementById("txt_logradouro").size = "120";
  document.getElementById("txt_bairro").size = "120";
  document.getElementById("txt_cidade").size = "120";


  document.getElementById("label_titulo").innerHTML ="Incluir Novo Usuário";

  //botões que devem ser mostrados
  document.getElementById("div_esquerda").style.display = "none";
  document.getElementById("botoes_ok_cancelar").style.display = "block"
  document.getElementById("botoes_incluir_alterar_excluir").style.display = "none"
  document.getElementById("campos_meio").style.display = "block"
  document.getElementById("foto_cima").style.display = "block"
     }



function IncluirPessoaCancelar(){
  LimparCampos();


  }

function IncluirPessoaOK(){

  document.painel.action = "incluir_usuario/"
  document.painel.submit();
   }

function AlterarPessoa(){

   if (confirm('Certeza de Alterar?') == true) {
    id = document.getElementById("txt_id").value;
    document.painel.action = "alterar_usuario/"+id
    document.painel.submit();
    }
}

function ExcluirPessoa(){
  if (confirm('Certeza de Excluir?') == true) {
    id = document.getElementById("txt_id").value
    document.painel.action = "excluir_usuario/"+id
    document.painel.submit();
  }
}
