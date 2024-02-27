import {random} from '../helper';
export class Circle {

    private _x: number;
    private _y: number;
    private readonly _radius: number;
    private _color: string;

    private ctx: CanvasRenderingContext2D;
    private canvasElement: HTMLCanvasElement;


    constructor(radius: number, color: string, ctx: CanvasRenderingContext2D, canvasElement: HTMLCanvasElement) {
        this.ctx = ctx;
        this.canvasElement = canvasElement;
        this._radius = radius;
        this._color = color;
        this._x = 0;
        this._y = 0;
    }

    public update() {
        if (this.x >= this.canvasElement.width - this.radius * 2) {
            this.x = 0;
            this.y = random(0, this.canvasElement.height - this.radius * 2);
            this.color = `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
        } else {
            this.x += 1;
        }
    }

    public draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.beginPath();
        this.ctx.arc(this._x + this._radius, this._y + this._radius, this._radius, 0, 2 * Math.PI);
        this.ctx.fill();
    }

    public animate() {
        this.update();
        this.ctx.clearRect(this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
        this.draw();
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
