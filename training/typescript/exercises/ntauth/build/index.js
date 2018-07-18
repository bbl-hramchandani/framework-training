"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = require("./App");
App_1.default.listen(8080, (err) => {
    if (err) {
        return console.log(err);
    }
    else {
        return console.log('Auth Service running on port 8080');
    }
});
