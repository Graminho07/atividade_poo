function Inimigo(nome) {
    this.nome = nome;
    this.vivo = true;
  }
  
  function Ninja(nome, shuriken) {
    this.nome = nome;
    this.shuriken = shuriken;
    this.atirarShuriken = function(inimigo) {
      if (this.shuriken > 0) {
        console.log(this.nome + " atirou um shuriken em " + inimigo.nome + "!");
        this.shuriken--;
        inimigo.vivo = false;
        console.log(inimigo.nome + " foi morto!");
      } else {
        console.log(this.nome + " não tem mais shurikens!");
      }
    };
  }

var inimigo1 = new Inimigo("Mestre do Mal");
  
var ninja1 = new Ninja("Hattori", 1);
ninja1.atirarShuriken(inimigo1);
console.log(inimigo1.vivo);  