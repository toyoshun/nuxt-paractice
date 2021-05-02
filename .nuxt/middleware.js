const middleware = {}

middleware['auth-filter'] = require('../src/middleware/auth-filter.ts')
middleware['auth-filter'] = middleware['auth-filter'].default || middleware['auth-filter']

export default middleware
