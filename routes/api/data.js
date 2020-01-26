const router = require("express").Router();

const User = require("../../models/User");
const UserSession = require("../../models/UserSession");

// Matches with "/api/data/upload"
router.route("/user")
    .get(
        (req, res, next) => {

            const { query } = req;
            const { token } = query;

            console.log(token);
            
            UserSession.find({
                _id: token
            }, (err, user) => {

                if (err) {
                    return res.send({
                        success: false,
                        message: "Error: Server error"
                    });
                } else {
                    User.find({
                        _id: user[0].userId
                    }, (err, userData) => {

                        if (err) {
                            return res.send({
                                success: false,
                                message: "Error: Server error"
                            });

                        } else {

                            let outData = userData[0];

                            outData.password = undefined;
                            outData.__v = undefined;
                            outData.isDeleted = undefined;
                            console.log(outData);

                            return res.send({
                                success: true,
                                message: "Success",
                                body: userData
                            });
                        }
                    });

                }
            });

        })

    .post(
        (req, res, next) => {

            const { body } = req;
            const { token } = req.body;
            console.log(body);
            
            UserSession.find({
                _id: token
            }, (err, user) => {

                if (err) {
                    return res.send({
                        success: false,
                        message: "Error: Server error"
                    });
                } else {

                    User.findOneAndUpdate({
                        _id: user[0].userId,
                    }, {
                        $set: { ...body }
                    }, null, (err, sessions) => {

                        if (err) {
                            return res.send({
                                success: false,
                                message: 'Error: server error'
                            })
                        }
                        return res.send({
                            success: true,
                            message: 'Saved'
                        })

                    });
                }
            });
        });


module.exports = router;
