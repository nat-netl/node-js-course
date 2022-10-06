module.exports = class Router {
  constructor() {
    this.endpoints = {};
  }

  request(method = "GET", path, handler) {
    if (!this.endpoints[path]) {
      this.endpoints[path] = {};
    }

    const edpoint = this.endpoints[path];

    if (edpoint[method]) {
      throw new Error(`[${method}] по адресу ${path} уже существует`);
    }

    edpoint[method] = handler;
    
  }

  get (path, handler) {
    this.request ('GET', path, handler)
  }

  post (path, handler) {
    this.request ('POST', path, handler)
  }

  put (path, handler) {
    this.request ('PUT', path, handler)
  }

  delete (path, handler) {
    this.request ('DELETE', path, handler)
  }
}