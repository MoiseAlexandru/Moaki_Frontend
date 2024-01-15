

export default function encryptPass(password) {
    let bcrypt = require("bcryptjs");
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(password, salt);
    return hash;
}