"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function deleteAll(obj, ...keys) {
    for (const key of keys) {
        if (!(delete obj[key]))
            return false;
    }
    return true;
}
exports.deleteAll = deleteAll;
