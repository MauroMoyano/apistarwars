const axios = require("axios");

module.exports = {
    list: async () => {
        const { data } = await axios.get("http://database:8004/Planets");
        return data;
    }
}