const express = require(express);
const mongoose = require(mongoose);

const PORT = process.env.PORT || 8080;

api.listen(PORT, () => {
    console.log('listening on port ${PORT}');
})