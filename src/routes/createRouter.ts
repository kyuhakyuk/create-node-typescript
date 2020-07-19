/**
 * Returns array of all the registered routes in the api folder
 * @returns {array}
 */
import { Router } from 'express';
import glob from 'glob';

export default () => glob
    .sync('**/!(*.test).ts', { cwd: `${__dirname}/api/` })
    .map(filename => require(`./api/${filename}`).default)
    .reduce((rootRouter, router) => rootRouter.use(router), Router({ mergeParams: true }));