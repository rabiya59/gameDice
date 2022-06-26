export class DEE {

    public _valuedee: number;

    constructor() {

        this._valuedee = 0;
    }

    get_value() {
        return this._valuedee;
    }

    lancer(): void {

        this._valuedee = Math.floor(1 + 6 * Math.random())
    }
}