// This is not the same randomInt as in random: here
// we are not using the seed, so it is not deterministic
function randomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function specifiedNotDelay(req) {
  return req.query.delay === 'N'
}

function delayMiddleware(min, max) {

  return (req, _reply, done) => {
    if(specifiedNotDelay(req)) return done()

    const delayTime = randomInt(min, max)
    console.log(`Delaying request for ${delayTime}ms`)
    setTimeout(() => {
      done()
    }, delayTime)
  }
}

export default delayMiddleware
