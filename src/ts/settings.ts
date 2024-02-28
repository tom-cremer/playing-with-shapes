export const settings: {
    swissFlag: {
        canvas: HTMLCanvasElement;
        ctx: CanvasRenderingContext2D;
    };
    home: {
        canvas: HTMLCanvasElement;
        ctx: CanvasRenderingContext2D;
    };
    masterCard: {
        canvas: HTMLCanvasElement;
        ctx: CanvasRenderingContext2D;
    };
    triangle: {
        canvas: HTMLCanvasElement;
        ctx: CanvasRenderingContext2D;
    };
    shapes: {
        canvas: HTMLCanvasElement;
        ctx: CanvasRenderingContext2D;
    };
} = {
    swissFlag: {
        canvas: document.getElementById("Swiss-flag") as HTMLCanvasElement,
        ctx: document.getElementById("Swiss-flag").getContext("2d"),
    },
    home: {
        canvas: document.getElementById("home") as HTMLCanvasElement,
        ctx: document.getElementById("home").getContext("2d"),
    },
    masterCard: {
        canvas: document.getElementById("master-card") as HTMLCanvasElement,
        ctx: document.getElementById("master-card").getContext("2d"),
    },
    triangle: {
        canvas: document.getElementById("triangle") as HTMLCanvasElement,
        ctx: document.getElementById("triangle").getContext("2d"),
    },
    shapes: {
        canvas: document.getElementById("shapes") as HTMLCanvasElement,
        ctx: document.getElementById("shapes").getContext("2d"),
    },
};
