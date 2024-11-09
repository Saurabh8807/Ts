"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    // console.log("hello")
}
addTwo(2);
var ans = addTwo(3);
console.log(ans);
var items = [1, 3, 4, "iii"];
items.map(function (item) { return "item ".concat(item); });
var user = {
    name: "saurabh",
    email: "s@",
    isVarified: true
};
function createUser(_a) {
    var name = _a.name, email = _a.email, isVarified = _a.isVarified;
    return { name: name, email: email, isVarified: isVarified };
}
console.log(createUser(user));
