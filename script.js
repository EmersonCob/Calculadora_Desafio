// Apresentar informações no display.
function bttn(btn) {
    let info = document.getElementById("display").innerHTML;
    // Valída a quantidade de caracteres.
    if(info.length<=18){
      document.getElementById("display").innerHTML += btn;
    }
  }
  
  // Limpar tudo.
  function limpar() {
    document.getElementById("display").innerHTML = "";
  }
  
  // Limpa últimos dados inserídos.
  function zerar(){
    let display = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = display.substring(0, display.length -1);
  }
  
  // Retorna valor calculado.
  function calc(){
    let resultado = document.getElementById('display').innerHTML;
    // Valída se foi inserído alguma informação.
    if(resultado){
      document.getElementById('display').innerHTML = eval(resultado);
    }else{
      document.getElementById('display').innerHTML = "Error";
    }
  }