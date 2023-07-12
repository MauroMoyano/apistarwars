const Character = require("../data");
const { response } = require("../utils")

module.exports = async (req, res) => {
    res.status(200)
    const newCharacter = await Character.create();
    response(res, 201, newCharacter)
}