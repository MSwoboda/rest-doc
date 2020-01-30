const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String,
        default: ''
    },
    lastName: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    },
    password: {
        type: String,
        default: ''
    },
    isDeleted: {
        type: Boolean,
        default: false
    },

    title:{
        type: String,
        default: ''
    },
    firstName:{
        type: String,
        default: ''
    },
    middleName:{
        type: String,
        default: ''
    },
    lastName:{
        type: String,
        default: ''
    },
    suffix:{
        type: String,
        default: ''
    },
    email:{
        type: String,
        default: ''
    },
    secondaryEmail:{
        type: String,
        default: ''
    },
    ssn:{
        type: String,
        default: ''
    },
    ein:{
        type: String,
        default: ''
    },
    phone:{
        type: String,
        default: ''
    },
    billStreet:{
        type: String,
        default: ''
    },
    billApt:{
        type: String,
        default: ''
    },
    billState:{
        type: String,
        default: ''
    },
    billCity:{
        type: String,
        default: ''
    },
    billState:{
        type: String,
        default: ''
    },
    billZip:{
        type: String,
        default: ''
    },

    shipStreet:{
        type: String,
        default: ''
    },
    shipApt:{
        type: String,
        default: ''
    },
    shipState:'',
    shipCity:{
        type: String,
        default: ''
    },
    shipState:{
        type: String,
        default: ''
    },
    shipZip:{
        type: String,
        default: ''
    },
    blood:{
        type: String,
        default: ''
    },
    insurance:{
        type: String,
        default: ''
    },
    dental:{
        type: String,
        default: ''
    },
    eye:{
        type: String,
        default: ''
    },
    allergies:{
        type: String,
        default: ''
    },
    social:{
        type: String,
        default: ''
    },
    medication:{
        type: String,
        default: ''
    },
    mHist:{
        type: String,
        default: ''
    },
    famHist:{
        type: String,
        default: ''
    },
    surgicalHist:{
        type: String,
        default: ''
    },
    travelHist:{
        type: String,
        default: ''
    },
    socialHistory:{
        type: String,
        default: ''
    },

    empName:{
        type: String,
        default: ''
    },
    empContFirst:{
        type: String,
        default: ''
    },
    empContLast:{
        type: String,
        default: ''
    },
    empConEmail:{
        type: String,
        default: ''
    },
    empEIN:{
        type: String,
        default: ''
    },
    empDUNS:{
        type: String,
        default: ''
    },
    empPhone:{
        type: String,
        default: ''
    },
    empFax:{
        type: String,
        default: ''
    },
    empBillStreet:{
        type: String,
        default: ''
    },
    empBillApt:{
        type: String,
        default: ''
    },
    empBillCity:{
        type: String,
        default: ''
    },
    empBillState:{
        type: String,
        default: ''
    },
    empBillZip:{
        type: String,
        default: ''
    },
    empShipStreet:{
        type: String,
        default: ''
    },
    empShipApt:{
        type: String,
        default: ''
    },
    empShipCity:{
        type: String,
        default: ''
    },
    empShipState:{
        type: String,
        default: ''
    },
    empShipZip:{
        type: String,
        default: ''
    },
    driver:{
        type: String,
        default: ''
    },
    driverState:{
        type: String,
        default: ''
    },
    driverExp:{
        type: String,
        default: ''
    },
    driverIssue:{
        type: String,
        default: ''
    },
    passport:{
        type: String,
        default: ''
    },
    passportState:{
        type: String,
        default: ''
    },
    passportExp:{
        type: String,
        default: ''
    },
    passportIssue:{
        type: String,
        default: ''
    },
    passportTwo:{
        type: String,
        default: ''
    },
    passportTwoState:{
        type: String,
        default: ''
    },
    passportTwoExp:{
        type: String,
        default: ''
    },
    passportTwoIssue:{
        type: String,
        default: ''
    },
    conOneTitle:{
        type: String,
        default: ''
    },
    conOneFirst:{
        type: String,
        default: ''
    },
    conOneLast:{
        type: String,
        default: ''
    },
    conOneRelation:{
        type: String,
        default: ''
    },
    conOneEmail:{
        type: String,
        default: ''
    },
    conOnePhone:{
        type: String,
        default: ''
    } ,
    conTwoTitle:{
        type: String,
        default: ''
    },
    conTwoFirst:{
        type: String,
        default: ''
    },
    conTwoLast:{
        type: String,
        default: ''
    },
    conTwoRelation:{
        type: String,
        default: ''
    },
    conTwoEmail:{
        type: String,
        default: ''
    },
    conTwoPhone:{
        type: String,
        default: ''
    },
    signature:{
        type: String,
        default: ''
    }

});

UserSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
};

UserSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password)
};

module.exports = mongoose.model("User", UserSchema);
