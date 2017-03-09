declare global {
    interface ObjectConstructor {
        setPrototypeOf: Function;
    }
}

// polyfill for setPrototypeOf
Object.setPrototypeOf = Object.setPrototypeOf || function(obj, proto) {
  obj.__proto__ = proto;
  return obj; 
}

export class ConnectionError extends Error {
    constructor(message?: string) {
        super(message); // 'Error' breaks prototype chain here
        (Object as any).setPrototypeOf(this, new.target.prototype); // restore prototype chain
    }
}

export class NoResponseError extends Error {
    constructor(message?: string) {
        super(message);
        (Object as any).setPrototypeOf(this, new.target.prototype);
    }
}

export class AuthorizationError extends Error {
    constructor(message?: string) {
        super(message);
        (Object as any).setPrototypeOf(this, new.target.prototype);
    }
}