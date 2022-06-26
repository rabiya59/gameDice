"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEE = void 0;
class DEE {
    constructor() {
        this._valuedee = 0;
    }
    get_value() {
        return this._valuedee;
    }
    lancer() {
        this._valuedee = Math.floor(1 + 6 * Math.random());
    }
}
exports.DEE = DEE;
