class ContaBancaria {
    constructor(numeroConta, titularConta, saldo = 0) {
      this.numeroConta = numeroConta;
      this.titularConta = titularConta;
      this.saldo = saldo;
    }
  
    depositar(valor) {
      this.saldo += valor;
      console.log(`Depósito no valor de R$${valor} realizado com sucesso!`);
      this.mostrarDadosConta();
    }
  
    sacar(valor) {
      if (valor + 5 > this.saldo) {
        console.log(`Saldo insuficiente para realizar o saque.`);
        this.mostrarDadosConta();
        return;
      }
  
      this.saldo -= (valor + 5);
      console.log(`Saque no valor de R$${valor} realizado com sucesso!`);
      console.log(`Taxa de R$5.00 cobrada.`);
      this.mostrarDadosConta();
    }
  
    mostrarDadosConta() {
      console.log(`--- Dados da conta ---`);
      console.log(`Número da conta: ${this.numeroConta}`);
      console.log(`Titular da conta: ${this.titularConta}`);
      console.log(`Saldo: R$${this.saldo}`);
      console.log(`----------------------`);
    }
}

function cadastrarConta() {
    const numeroConta = prompt("Digite o número da conta:");
    const titularConta = prompt("Digite o nome do titular da conta:");
    const depositoInicial = parseFloat(prompt("Digite o valor do depósito inicial (opcional):"));
  
    const conta = new ContaBancaria(numeroConta, titularConta);
    if (depositoInicial) {
      conta.depositar(depositoInicial);
    }
    conta.mostrarDadosConta();
  
    return conta;
}

const conta = cadastrarConta();
conta.depositar(100);
conta.sacar(50);

// Exemplo de uso

//Digite o número da conta: 123456
//Digite o nome do titular da conta: João da Silva
//Digite o valor do depósito inicial (opcional): 500
//Depósito no valor de R$500 realizado com sucesso!
//--- Dados da conta ---
//Número da conta: 123456
//Titular da conta: João da Silva
//Saldo: R$500
//----------------------
//Depósito no valor de R$100 realizado com sucesso!
//--- Dados da conta ---
//Número da conta: 123456
//Titular da conta: João da Silva
//Saldo: R$600
//----------------------
//Saque no valor de R$50 realizado com sucesso!
//Taxa de R$5.00 cobrada.
//--- Dados da conta ---
//Número da conta: 123456
//Titular da conta: João da Silva
//Saldo: R$545
//----------------------