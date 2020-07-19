/**
 * Customized Error
 */

class ExtendableError extends Error {
  public readonly statusCode: number;

  constructor(description: string, statusCode: number) {
    // 'Error' breaks prototype chain
    // by switching 'this' object to be constructed to a 'new', different object,
    // when you call super
    super(description);
    // restore prototype chain
    Object.setPrototypeOf(this, new.target.prototype);

    this.statusCode = statusCode;

    // prevents this class from showing up in the stack trace
    Error.captureStackTrace(this);
  }
}

// 400 Bad Request
class BadRequest extends ExtendableError {
  constructor(m?: string) {
    if (!m) super('bad request', 400);
    else super(m, 400);
  }
}

// 401 Unauthorized
class Unauthorized extends ExtendableError {
  constructor(m?: string) {
    if (!m) super('unauthorized', 401);
    else super(m, 401);
  }
}

// 403 Forbidden
class Forbidden extends ExtendableError {
  constructor(m?: string) {
    if (!m) super('forbidden', 403);
    else super(m, 403);
  }
}

// 404 Not Found
class NotFound extends ExtendableError {
  constructor(m?: string) {
    if (!m) super('not found', 404);
    else super(m, 404);
  }
}

// 409 Conflict
class Conflict extends ExtendableError {
  constructor(m?: string) {
    if (!m) super('conflict', 409);
    else super(m, 409);
  }
}

// 429 Too many requests
class TooManyRequests extends ExtendableError {
  constructor(m?: string) {
    if (!m) super('too many requests', 429);
    else super(m, 429);
  }
}

// 500 Internal Server Error
class InternalServerError extends ExtendableError {
  constructor(m?: string) {
    if (!m) super('internal server error', 500);
    else super(m, 500);
  }
}

export { BadRequest, Unauthorized, Forbidden, TooManyRequests, InternalServerError, Conflict, NotFound };
