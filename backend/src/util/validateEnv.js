"use strict";
exports.__esModule = true;
var envalid_1 = require("envalid");
var validators_1 = require("envalid/dist/validators");
exports["default"] = (0, envalid_1.cleanEnv)(process.env, {
    MONGO_URL: (0, validators_1.str)(),
    PORT: (0, validators_1.port)(),
    SESSION_SECRET: (0, validators_1.str)()
});
