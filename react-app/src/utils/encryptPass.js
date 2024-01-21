

export default function encryptPass(password) {
    let bcrypt = require("bcryptjs");
    const fixedSalt = "$2a$10$abcdefghabcdefghabcdefgh";
    let hash = bcrypt.hashSync(password, fixedSalt);
    return hash;
}