"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("@loopback/rest");
const sequence_1 = require("./sequence");
const calculator_service_1 = require("./services/calculator.service");
const boot_1 = require("@loopback/boot");
const repository_1 = require("@loopback/repository");
class HomeworkwebserviceApplication extends boot_1.BootMixin(repository_1.RepositoryMixin(rest_1.RestApplication)) {
    constructor(options) {
        super(options);
        this.sequence(sequence_1.MySequence);
        this.setupServices();
        this.projectRoot = __dirname;
        this.bootOptions = {
            controllers: {
                dirs: ['controllers'],
                extensions: ['.controller.js'],
                nested: true,
            },
        };
    }
    async start() {
        await super.start();
        const server = await this.getServer(rest_1.RestServer);
        const port = await server.get(rest_1.RestBindings.PORT);
        console.log(`Server is running at http://127.0.0.1:${port}`);
        console.log(`Try http://127.0.0.1:${port}/ping`);
    }
    setupServices() {
        this.service(calculator_service_1.CalculatorServiceProvider);
    }
    service(provider) {
        const key = `services.${provider.name.replace(/Provider$/, '')}`;
        this.bind(key).toProvider(provider);
    }
}
exports.HomeworkwebserviceApplication = HomeworkwebserviceApplication;
//# sourceMappingURL=application.js.map