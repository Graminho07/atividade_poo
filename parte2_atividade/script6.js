let caminhao = {
    marca: 'Volvo',
    modelo: 'FH 540',
    ano: 2021,
    cor: 'branco',
    comprimento: '15 metros',
    cargaMaxima: '45 toneladas',
    motor: {
      tipo: 'diesel',
      potencia: '540cv',
      cilindradas: '13 litros',
      torque: '2700 Nm'
    }
};
  
let { marca, modelo, ano, cor, comprimento, cargaMaxima, motor } = caminhao;

console.log(motor.tipo);