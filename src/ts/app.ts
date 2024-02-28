import {Rectangle} from "./shapes/Rectangle";
import {Circle} from "./shapes/Circle";
import {settings} from "./settings";


export const app: object = {

    init() {
        this.swiss();
        this.home();
        this.masterCard();
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
            new Circle(130, 50,40,'red', settings.masterCard.ctx, settings.masterCard.canvas),
            new Circle(130, 270, 40, 'orange', settings.masterCard.ctx, settings.masterCard.canvas)
        ];

        circles.forEach((c) => {
            c.draw();
        })

    },


}