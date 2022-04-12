export class Alert {
    id: any;
    type: any;
    message: any;
    autoClose: any;
    keepAfterRouteChange: any;
    fade: any;

    constructor(init?:Partial<Alert>) {
        Object.assign(this, init);
    }
}

export enum AlertType {
    Success,
    Error,
    Info,
    Warning
}