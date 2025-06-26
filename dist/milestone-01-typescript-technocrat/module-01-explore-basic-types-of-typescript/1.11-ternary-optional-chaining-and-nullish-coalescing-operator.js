"use strict";
var _a, _b;
{
    // 💠 TERNARY OPERATOR
    // 💠 OPTIONAL CHAINING
    // 💠 NULLISH COALESCING OPERATOR
    // ternary operator
    const age = 15;
    const isAdult = age > 18 ? "adult" : "not adult";
    const user = {
        name: "Abdullah",
        address: {
            city: "ctg",
            road: "awesome road",
            presentAddress: "ctg road",
        },
    };
    const address = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : "none"; // optional chaining
    // nullish coalescing operator
    // null / undefined --> decision making
    const isAuthenticated = null;
    const result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "Guest"; // it works only for null or undefined
}
