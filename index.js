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
    for( var i = 0; i < line.length; i++ ) {
      return "The line is currently: " + line.indexOf(i + 1) + ". " + line[i] + ","
    }
  }
}
