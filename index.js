function takeANumber( line, name ) {
  line.push(name)
  var num = line.length
  return `Welcome, ${name}. You are number ${num} in line.`
}

function nowServing( line ) {
  if( line.length === 0 ) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${line.shift(0)}.`
  }
}
