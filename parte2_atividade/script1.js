function Ninja(nome) {
  this.nome = nome;
  this.atirarShuriken = function() {
    console.log(this.nome + " atirou um shuriken!");
  };
}

var ninja1 = new Ninja("Hattori");
ninja1.atirarShuriken(); 

var ninja2 = new Ninja("Kasumi");
ninja2.atirarShuriken(); 