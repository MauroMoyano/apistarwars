const Films = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
    const film = await Films.byId();
    response(res, 200, film);
}