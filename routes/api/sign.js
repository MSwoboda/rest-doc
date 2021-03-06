
const router = require("express").Router();

const User = require("../../models/User");
const UserSession = require("../../models/UserSession");

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

            let { email } = body;

            if (!firstName) {
                return res.send({
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
                    message: 'Error: Email cannot be blank'
                });
            }

            if (!password) {
                return res.send({
                    success: false,
                    message: 'Error: Password name cannot be blank'
                });
            }

            email = email.toLowerCase();
            email = email.trim();

            User.find({
                email: email
            }, (err, previousUser) => {

                if (err) {
                    return res.send({
                        success: false,
                        message: "Error: Server error"
                    });

                } else if (previousUser.length > 0) {
                    return res.send({
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

router.route("/signin")
    .post(
        (req, res, next) => {

            const { body } = req;
            let {
                password
            } = body;

            let { email } = body;

            if (!email) {
                return res.send({
                    success: false,
                    message: 'Error: Email cannot be blank'
                });
            }

            if (!password) {
                return res.send({
                    success: false,
                    message: 'Error: Password name cannot be blank'
                });
            }


            email = email.toLowerCase();
            email = email.trim();

            User.find({
                email: email
            }, (err, users) => {
                if (err) {
                    return res.send({
                        success: false,
                        message: 'Error: server error'
                    });
                }

                if (users.length != 1) {
                    return res.send({
                        success: false,
                        message: 'Error: invalid'
                    });
                }

                const user = users[0];

                if (!user.validPassword(password)) {
                    return res.send({
                        success: false,
                        message: 'Error: password invalid'
                    });
                }

                const userSession = new UserSession();
                userSession.userId = user._id;

                userSession.save((err, doc) => {
                    if (err) {
                        return res.send({
                            success: false,
                            message: 'Error: server error'
                        });
                    }

                    return res.send({
                        success: true,
                        message: 'Valid sign in',
                        token: doc._id
                    })
                });

            });


        });


router.route("/verify")
    .get(
        (req, res, next) => {

            const { query } = req;
            const { token } = query;

            UserSession.find({
                _id: token,
                isDeleted: false
            }, (err, sessions) => {

                if (err) {
                    return res.send({
                        success: false,
                        message: 'Error: server error'
                    })
                } else {
                    return res.send({
                        success: true,
                        message: 'Good'
                    })
                }
            })


        });

router.route("/logout")
    .get(
        (req, res, next) => {

            const { query } = req;
            const { token } = query;

            UserSession.findOneAndUpdate({
                _id: token,
                isDeleted: false
            }, {
                $set: {
                    isDeleted: true
                }
            }
                , null, (err, sessions) => {

                    if (err) {
                        return res.send({
                            success: false,
                            message: 'Error: server error'
                        })
                    }
                    return res.send({
                        success: true,
                        message: 'LoggedOut'
                    })

                })


        });

module.exports = router;
