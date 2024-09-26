const axios = require("axios");

module.exports = async () => {
    const result = await axios.get("https://cataas.com/cat");

    return result.data.file;
};