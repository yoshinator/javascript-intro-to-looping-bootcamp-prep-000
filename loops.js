function forLoop(stuff){
  for (var i =0; i < 25; i++){
    if (i ===1){
    stuff.push('I am 1 strange loop.')
    }
    else{
    stuff.push(`I am ${i} strange loops.`)
    }
  }
}