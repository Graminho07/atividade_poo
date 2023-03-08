function Ninja(nome, shuriken) {
    this.nome = nome;
    this.shuriken = shuriken;
    this.atirarShuriken = function() {
      if (this.shuriken > 0) {
        console.log(this.nome + " atirou um shuriken!");
        this.shuriken--;
      } else {
        console.log(this.nome + " não tem mais shurikens!");
      }
    };
  }
  
var ninja1 = new Ninja("Hattori", 5);
ninja1.atirarShuriken(); 
ninja1.atirarShuriken(); 
ninja1.atirarShuriken(); 
ninja1.atirarShuriken(); 
ninja1.atirarShuriken(); 
ninja1.atirarShuriken(); 
  
var ninja2 = new Ninja("Kasumi", 1);
ninja2.atirarShuriken(); 
ninja2.atirarShuriken(); 