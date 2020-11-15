function firstNonRepeatingLetter(s) {
    let nonRepeatingLetters = s.split("")
      .map(letter => {
            letter = letter;
            if (s.toLowerCase().split(letter.toLowerCase()).length - 1 == 1){
                return letter;
            }})
      .filter(letter => letter !== undefined);
    if (s = '' || nonRepeatingLetters.length == 0){
      return ''
    }
    return nonRepeatingLetters[0]
}  
