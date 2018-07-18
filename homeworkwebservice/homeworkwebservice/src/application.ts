import {ApplicationConfig, Constructor, Provider} from '@loopback/core';
import {RestApplication, RestServer, RestBindings} from '@loopback/rest';
import {MySequence} from './sequence';
import {CalculatorServiceProvider} from './services/calculator.service';

import {BootMixin, Booter, Binding} from '@loopback/boot';
import {Class, Repository, RepositoryMixin, juggler} from '@loopback/repository';

export class HomeworkwebserviceApplication extends BootMixin(RepositoryMixin(RestApplication)) {

  constructor(options?: ApplicationConfig) {

    super(options);

    this.sequence(MySequence);

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

    const server = await this.getServer(RestServer);
    const port = await server.get(RestBindings.PORT);
    console.log(`Server is running at http://127.0.0.1:${port}`);
    console.log(`Try http://127.0.0.1:${port}/ping`);

  }

  setupServices() {
    this.service(CalculatorServiceProvider);
  }

  service<T>(provider: Constructor<Provider<T>>) {
    const key = `services.${provider.name.replace(/Provider$/, '')}`;
    this.bind(key).toProvider(provider);
  } 

}
