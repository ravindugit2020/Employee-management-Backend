"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthSchema = void 0;
const mongoes = require("mongoose");
exports.AuthSchema = new mongoes.Schema({
    username: String,
    password: String,
});
//# sourceMappingURL=auth.schema.js.map