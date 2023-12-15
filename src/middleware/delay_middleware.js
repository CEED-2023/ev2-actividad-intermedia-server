// This is not the same randomInt as in random: here
// we are not using the seed, so it is not deterministic
function randomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function delayMiddleware(min, max) {

  return (req, _reply, done) => {
    const delayParam = req.query.delay
    if(delayParam === 'N') return done()

    console.log('Delaying response')
    const delayTime = randomInt(min, max)
    setTimeout(() => {
      done()
    }, delayTime)
  }
}

export default delayMiddleware
