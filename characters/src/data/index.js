const axios = require("axios");

module.exports = {
  list: async () => {
    const { data } = await axios.get("http://database:8004/Character");
    return data
  },
  create: async ()=>{
  throw Error("creado con esito")
  },
  byId: async (id) => {
    const { data } = await axios.get(`http://database:8004/Character/${id}`);
    return data;
  }
}