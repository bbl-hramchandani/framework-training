import {HomeworkwebserviceApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {HomeworkwebserviceApplication};

export async function main(options?: ApplicationConfig) {
  const app = new HomeworkwebserviceApplication(options);
  await app.boot();
  await app.start();
  return app;
}
