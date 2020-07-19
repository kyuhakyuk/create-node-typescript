/*
 * Centralize error-handling
 */
import { NextFunction, Request, Response } from 'express';
import logger from '@util/logger';

interface ResponseError extends Error {
  statusCode: number;
}

const sendErrorDev = (error: ResponseError, res: Response) => {
  res.status(error.statusCode).send({
    message: error.message,
    stack: error.stack,
  });
};

const sendErrorProd = (error: ResponseError, res: Response) => {
  res.status(error.statusCode).send({
    message: error.message,
  });
};

export default (error: ResponseError, req: Request, res: Response, next: NextFunction) => {
  logger.error('Error message from the centralized error-handling component', error);

  if (process.env.NODE_ENV === 'production') {
    sendErrorProd(error, res);
  } else {
    sendErrorDev(error, res);
  }
};
