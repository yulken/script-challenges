//https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript

// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3

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
