import { ApplicationConfig, Constructor, Provider } from '@loopback/core';
import { RestApplication } from '@loopback/rest';
import { Booter, Binding } from '@loopback/boot';
import { Class, Repository, juggler } from '@loopback/repository';
declare const HomeworkwebserviceApplication_base: (new (...args: any[]) => {
    [x: string]: any;
    projectRoot: string;
    bootOptions?: {
        [prop: string]: any;
        controllers?: {
            dirs?: string | string[] | undefined;
            extensions?: string | string[] | undefined;
            nested?: boolean | undefined;
            glob?: string | undefined;
        } | undefined;
        repositories?: {
            dirs?: string | string[] | undefined;
            extensions?: string | string[] | undefined;
            nested?: boolean | undefined;
            glob?: string | undefined;
        } | undefined;
    } | undefined;
    boot(): Promise<void>;
    booters(...booterCls: Constructor<Booter>[]): Binding<any>[];
    component(component: Constructor<{}>): void;
    mountComponentBooters(component: Constructor<{}>): void;
}) & (new (...args: any[]) => {
    [x: string]: any;
    repository(repo: Class<Repository<any>>): void;
    getRepository<R extends Repository<any>>(repo: Class<R>): Promise<R>;
    dataSource(dataSource: juggler.DataSource | Class<juggler.DataSource>, name?: string | undefined): void;
    component(component: Class<{}>): void;
    mountComponentRepository(component: Class<{}>): void;
}) & typeof RestApplication;
export declare class HomeworkwebserviceApplication extends HomeworkwebserviceApplication_base {
    constructor(options?: ApplicationConfig);
    start(): Promise<void>;
    setupServices(): void;
    service<T>(provider: Constructor<Provider<T>>): void;
}
