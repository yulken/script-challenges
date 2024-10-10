function rgb(r, g, b){
    return `${hexFormat(r)}${hexFormat(g)}${hexFormat(b)}`.toUpperCase()
  }
  
  function hexFormat(color){
    if (color > 255){
      color = 255
    }
    if (color < 0){
      color = 0
    }
    let result = ""
    if (color < 16) {
       result = "0"
    }
    result += color.toString(16)
    return result
  }