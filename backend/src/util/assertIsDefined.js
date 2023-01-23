"use strict";
exports.__esModule = true;
exports.assertIsDefined = void 0;
function assertIsDefined(val) {
    if (!val) {
        throw Error("Expected 'val' to be defined, but received " + val);
    }
}
exports.assertIsDefined = assertIsDefined;
