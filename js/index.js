const isPalindrome = (sentenca) => {
  sentenca = sentenca.toLowerCase();
  const arrayDeLetrasOrigem = sentenca.split('');
  const letrasValidas = 'abcdefghijklmnopqrstuwxyz'.split('');

  // console.log('arrayDeLetrasOrigem:', arrayDeLetrasOrigem)
  // console.log('letrasValidas', letrasValidas)

  let arrayDeLetrasDestino = [];
  arrayDeLetrasOrigem.forEach(letra => {
    if (letrasValidas.indexOf(letra) > -1) {
      return arrayDeLetrasDestino.push(letra);
    }
  });

  // console.log('letrasDestino =', arrayDeLetrasDestino)
  // console.log('join()', arrayDeLetrasDestino.join(''));
  // console.log('reverse().join()', arrayDeLetrasDestino.reverse().join(''));

  if (arrayDeLetrasDestino.join('') === arrayDeLetrasDestino.reverse().join('')) {
    return true;
  }
  else {
    return false;
  }
}
const isPalindromeTest = isPalindrome('socorram me subi no onibus em marrocos');
console.log(isPalindromeTest);

//socorram me subi no onibus em marrocos