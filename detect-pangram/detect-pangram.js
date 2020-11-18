function isPangram(string){
  let checkedLetters = []
  let totalCheckedLetters = 0
  let letters = string.toLowerCase().split("")
  letters.map((letter) => {
    if (!checkedLetters.includes(letter) && /[a-z]/.test(letter)){
      checkedLetters.push(letter)
      totalCheckedLetters++
    }
  });
  return (totalCheckedLetters == 26)
}
