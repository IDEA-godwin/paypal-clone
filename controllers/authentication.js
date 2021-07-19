
var { createToken } = require('../config/jwt');
var User = require('../model/user');
var response = require('../helper/response')

class Authenticate {

    static loginUser(req, res) {
        var { email } = req.body;
        User.findOne({email: email},(err, user) => {
            if(err || !user) {
                response.error(res, `user with email: $(email) not found`);
            }
            user.token = createToken(user.email);
            user.save();
            response.success(res, 'success', { token: user.token, user });
        });
    }

}

module.exports = Authenticate;