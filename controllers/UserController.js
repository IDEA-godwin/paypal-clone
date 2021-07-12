
var User = require('../model/user'); 
var response = require('../helper/response');

class UserController {


   static async createUser(req, res) {
      var user = await User.create(req.body)
      response.success(res, 'success', user)
   }

   static getUsers(req, res) {
      User.find({}, (err, users) => {
         if(err) {
            response.error(res, "Mongo Error", 404)
         }
         response.success(res, "success",
            users.reduce((userMap, item) => {
               userMap[item.id] = item
               return userMap
            }, {})
         )
      });
   }

   static getUser(req, res) {
      User.findById(req.params.id, function (err, user) {
         if(err || user === null) {
            response.error(res, `user with id ${req.params.id} not found`, 404)
            return
         }
         response.success(res, "success", user)
      })
   }

   static editUser(req, res) {
      User.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, user) {
         if(err || user === null) {
            response.error(res, `user with id ${req.params.id} not found`, 404)
            return
         }
         response.success(res, "success", user)
      })
   }

   static async deleteUser(req, res) {
      await User.deleteOne({_id: req.params.id})
      response.success(res, "success")
   }
}

module.exports = UserController;