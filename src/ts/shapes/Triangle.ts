import {random} from '../helper';

export class Triangle {

    private _x: number;
    private _y: number;
    private readonly _sideLength: number;
    private _color: string;

    private ctx: CanvasRenderingContext2D;
    private canvasElement: HTMLCanvasElement;


    constructor(sideLength: number, color: string, ctx: CanvasRenderingContext2D, canvasElement: HTMLCanvasElement) {
        this.ctx = ctx;
        this.canvasElement = canvasElement;
        this._sideLength = sideLength;
        this._color = color;
        this._x = 0;
        this._y = 0;
    }

    public update() {
        if (this.x >= this.canvasElement.width - this._sideLength) {
            this.x = 0;
            this.y = random(0, this.canvasElement.height - this._sideLength);
            this.color = `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
        } else {
            this.x += 1;
        }
    }

    public draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.beginPath();

        // Calculate triangle vertices based on side length and center
        const halfSide = this._sideLength / 2;
        const topX = this._x + halfSide;
        const topY = this._y;
        const leftX = this._x;
        const leftY = this._y + this._sideLength;
        const rightX = this._x + this._sideLength;
        const rightY = this._y + this._sideLength;

        // Draw triangle using moveTo and lineTo methods
        this.ctx.moveTo(topX, topY);
        this.ctx.lineTo(leftX, leftY);
        this.ctx.lineTo(rightX, rightY);

        this.ctx.closePath();
        this.ctx.fill();
    }

    public animate() {
        this.update();
        this.ctx.clearRect(this.x, this.y, this._sideLength, this._sideLength); // Adjust clearing area for triangle
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

    get sideLength(): number {
        return this._sideLength;
    }

    get color(): string {
        return this._color;
    }
}
