const router = require("express").Router();
// var pdfFillForm = require('pdf-fill-form');

const User = require("../../models/User");
const UserSession = require("../../models/UserSession");


// Matches with "/api/doc/signup"

router.route("/generate")
    .get(
        (req, res, next) => {

            const { query } = req;
            const { token } = query;





            // UserSession.findOneAndUpdate({
            //     _id: token,
            //     isDeleted: false
            // }, {
            //     $set: {
            //         isDeleted: true
            //     }
            // }
            //     , null, (err, sessions) => {

            //         if (err) {
            //             return res.send({
            //                 success: false,
            //                 message: 'Error: server error'
            //             })
            //         }
            //         return res.send({
            //             success: true,
            //             message: 'LoggedOut'
            //         })

            //     })


        });


router.route("/data")
    .post(
        (req, res, next) => {

            const { query } = req;
            const { token } = query;

            console.log(req);
            
            return res.send({
                            success: true,
                            message: 'received'
                        })

            // UserSession.findOneAndUpdate({
            //     _id: token,
            //     isDeleted: false
            // }, {
            //     $set: {
            //         isDeleted: true
            //     }
            // }
            //     , null, (err, sessions) => {

            //         if (err) {
            //             return res.send({
            //                 success: false,
            //                 message: 'Error: server error'
            //             })
            //         }
            //         return res.send({
            //             success: true,
            //             message: 'LoggedOut'
            //         })
            //     });
        });


module.exports = router;
