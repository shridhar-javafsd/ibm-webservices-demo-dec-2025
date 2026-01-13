// ts-enums-and-more.ts
var Roles;
(function (Roles) {
    Roles["ADMIN"] = "ADMIN";
    Roles["DRIVER"] = "DRIVER";
    Roles["RIDER"] = "RIDER";
})(Roles || (Roles = {}));
var myRole = Roles.ADMIN;
console.log(myRole);
