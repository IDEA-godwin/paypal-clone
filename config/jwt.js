
const jwt = require('jsonwebtoken');

const jwt_secret_key = 'secret-key';
const valid_period = '1h';

function createToken(username) {
    return jwt.sign({
        username: username,
        exp: 100000,
        alg: 'HS256'
    }, 
    jwt_secret_key)
}

function authenticate(req, res, next) {
    const token = resolveToken(req)

    if (!token || !validateToken(token)) {
        return res.sendStatus(403)
    } 

    next()
}

function validateToken(token) {
    try {
        var payload = jwt.verify(token, jwt_secret_key);
        return payload;
    } catch (err) {
        if (err instanceof jwt.JsonWebTokenError) {
            return false;
        }
        return false;
    }
}

function resolveToken(req) {
    var jwtHeader = req.headers['Authorization'];
    if (!jwtHeader) {
        return false
    } else if (jwtHeader.slice(0, 7) === 'Bearer ') {
        return jwtHeader.slice(7);
    }
    return false;
}

module.exports = {
    createToken,
    authenticate,
    validateToken,
    resolveToken
};