multiplicationTable = function(size) {
  let m =[]
  for(let i=1; i <= size; i++){
    let line =[]
    for (let j=1; j <= size; j++){
      line.push(i*j)
    }
    m.push(line)
  }
  return m;
}
