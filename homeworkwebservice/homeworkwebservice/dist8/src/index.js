"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const application_1 = require("./application");
exports.HomeworkwebserviceApplication = application_1.HomeworkwebserviceApplication;
async function main(options) {
    const app = new application_1.HomeworkwebserviceApplication(options);
    await app.boot();
    await app.start();
    return app;
}
exports.main = main;
//# sourceMappingURL=index.js.map