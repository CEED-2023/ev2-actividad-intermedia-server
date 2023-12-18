const ERROR_PROBABILITY = 0.05
const ERRORS = [
  403, 406, 418, 412, 451,
  500, 506, 507, 510,
]

function isTimeOFRandomError(){
  const random = Math.random()
  return random > 1-ERROR_PROBABILITY
}


function randomErrorCode() {
  return ERRORS[Math.floor(Math.random() * ERRORS.length)];
}

function forceError(reply){
  console.log('forcing error')
  reply.code(randomErrorCode()).send('Shit happens')
}

function errorMiddleware (request, reply, done){

  const error = request.query.errors
  if(error === 'N') return done()
  if(error === 'Y' || isTimeOFRandomError()) {
    forceError(reply)
    return
  }

  done()
}


export default errorMiddleware
