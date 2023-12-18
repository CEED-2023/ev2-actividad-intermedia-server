function isAnException(path, exceptions) {
  return exceptions.some(exception => exception.test(path))
}

// It should be a way of stopping middleware processing, but I couldn't find it
function conditionalMiddleware(middleware, exceptions = []) {

  return (req, reply, done) => {
    if(isAnException(req.raw.url, exceptions)) return done()
    return middleware(req, reply, done)
  }
}

export default conditionalMiddleware
