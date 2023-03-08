function verificaInstancia(objeto, instancia) {
    if (objeto instanceof instancia) {
      console.log("O objeto é uma instância de", instancia.name);
    } else {
      console.log("O objeto não é uma instância de", instancia.name);
    }
  }

let array = [1, 2, 3];
verificaInstancia(array, Array);

let data = new Date();
verificaInstancia(data, Date); 