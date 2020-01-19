const router = require("express").Router();

const User = require("../../models/User");

// Matches with "/api/accounts/signup"
router.route("/signup")
    .post(
        (req, res, next) => {


            const { body } = req;
            let {
                firstName,
                lastName,
                password
            } = body;

            let {email} = body;

        
            if (!firstName) {
              return  res.send({
                    success: false,
                    message: 'Error: First name cannot be blank'
                });
            }

            if (!lastName) {
               return res.send({
                    success: false,
                    message: 'Error: Last name cannot be blank'
                });
            }

            if (!email) {
               return res.send({
                    success: false,
                    message: 'Error: Last name cannot be blank'
                });
            }

            if (!password) {
               return res.send({
                    success: false,
                    message: 'Error: Last name cannot be blank'
                });
            }

 

            email = email.toLowerCase();
            email = email.trim();

            User.find({
                email: email
            }, (err, previousUser) => {

                if (err) {
                  return  res.send({
                        success: false,
                        message: "Error: Server error"
                    });

                } else if (previousUser.length > 0) {
                 return   res.send({
                        success: false,
                        message: "Error: Server error"
                    });

                }

                const newUser = new User();

                newUser.email = email;
                newUser.firstName = firstName;
                newUser.lastName = lastName;
                newUser.password = newUser.generateHash(password);
                newUser.save((err, use) => {

                    if (err) {
                       return res.send({
                            success: false,
                            message: "Error: Server error"
                        });
                    }

                    return res.send({
                        success: true,
                        message: "Signed up"
                    });

                });

            });

        }
    );


module.exports = router;
