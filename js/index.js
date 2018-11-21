const isPalindrome = (string) => {
  string = string.toLowerCase()
  const charArr = string.split('')
  const validChar = 'abcdefghijklmnopqrstuwxyz'.split()

  let letterArr = []
  charArr.forEach(char => {
    if (validChar.indexOf(char) > -1) letterArr.push(char)
  });

  if (letterArr.join('') === letterArr.reverse().join('')) return true;
  else return false
}
const isPalindromeTest = isPalindrome('socorram me subi no onibus em marrocos')
console.log(isPalindromeTest)