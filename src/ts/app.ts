import {Rectangle} from "./shapes/Rectangle";
import {Circle} from "./shapes/Circle";
import {settings} from "./settings";
import {Triangle} from "./shapes/Triangle";


export const app: object = {

    init() {
        this.swiss();
        this.home();
        this.masterCard();
        this.triangle();
    },

    swiss(): void {
        settings.swissFlag.ctx.fillStyle = 'red';
        settings.swissFlag.ctx.fillRect(0, 0, settings.swissFlag.canvas.width, settings.swissFlag.canvas.height);
        const cross: Rectangle[] = [
            new Rectangle(60, 260, 'white', settings.swissFlag.ctx, settings.swissFlag.canvas),
            new Rectangle(260, 60, 'white', settings.swissFlag.ctx, settings.swissFlag.canvas)
        ];
        cross.forEach((r) => {
            r.x = settings.swissFlag.canvas.width / 2 - r.width / 2;
            r.y = settings.swissFlag.canvas.height / 2 - r.height / 2;
            r.draw();
        });
    },

    home() {
        settings.home.ctx.fillText('Nope', 40, 20,);
    },

    masterCard() {
        settings.masterCard.ctx.fillStyle = 'black';
        settings.masterCard.ctx.fillRect(0, 0, settings.swissFlag.canvas.width, settings.swissFlag.canvas.height);
        const circles: Circle[] = [
            new Circle(120, 70,30,'red', settings.masterCard.ctx, settings.masterCard.canvas),
            new Circle(120, 290, 30, 'orange', settings.masterCard.ctx, settings.masterCard.canvas)
        ];
        circles.forEach((c) => {
            c.draw();
        })

        settings.masterCard.ctx.fillStyle = 'white';
        settings.masterCard.ctx.font = '48px sans-serif';
        settings.masterCard.ctx.fillText('mastercard', settings.masterCard.canvas.width/2 - 120, settings.masterCard.canvas.height/2 + 140);
    },

    triangle() {
      const shapes:(Circle | Triangle)[] =  [
        new Triangle(250, 180, 50, 'black', settings.triangle.ctx, settings.triangle.canvas),
        new Circle(80, 230, 130, 'white', settings.triangle.ctx, settings.triangle.canvas),
        new Circle(65, 250, 140, 'black', settings.triangle.ctx, settings.triangle.canvas)
      ];
      shapes.forEach((s) => {
         s.draw();
      });

    },
}