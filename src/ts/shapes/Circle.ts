import {random} from '../helper';
export class Circle {

    private _x: number;
    private _y: number;
    private readonly _radius: number;
    private _color: string;

    private ctx: CanvasRenderingContext2D;
    private canvasElement: HTMLCanvasElement;


    constructor(radius: number, x:number, y:number, color: string, ctx: CanvasRenderingContext2D, canvasElement: HTMLCanvasElement) {
        this.ctx = ctx;
        this.canvasElement = canvasElement;
        this._radius = radius;
        this._color = color;
        this._x = x;
        this._y = y;
    }

    public draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.beginPath();
        this.ctx.arc(this._x + this._radius, this._y + this._radius, this._radius, 0, 2 * Math.PI);
        this.ctx.fill();
    }

    set color(value: string) {
        this._color = value;
    }

    set x(value: number) {
        this._x = value;
    }

    set y(value: number) {
        this._y = value;
    }

    get x(): number {
        return this._x;
    }

    get y(): number {
        return this._y;
    }

    get radius(): number {
        return this._radius;
    }

    get color(): string {
        return this._color;
    }
}
