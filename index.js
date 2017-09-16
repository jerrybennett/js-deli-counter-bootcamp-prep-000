function takeANumber( katzDeliLine, name ) {
  katzDeliLine.push(name)
  var num = katzDeliLine.length
  return `Welcome, ${name}. You are number ${num} in line.`
}

function nowServing( katzDeliLine ) {
  if( katzDeliLine.length === 0 ) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeliLine.shift(0)}.`
  }
}

function currentLine(line) {
  if( line.length === 0 ) {
    return "The line is currently empty."
  } else {
    var saysWho = `The line is currently: ${i + 1}. ${line[i]}`
    for ( var i = 0; i < line.length; i++ ) {
      saysWho += `, ${i}. ${line[i]}`
    }
    return saysWho
  }
}
