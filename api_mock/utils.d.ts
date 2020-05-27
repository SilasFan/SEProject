export default function (api_func: Function, error_message: string): Promise<any>;

export class result {
    constructor(code: number, data: any, message: string) {
        this.code = code;
        this.data = data;
        this.message = message;
    }
}

export class comment {
    constructor(id: string, cid: number)
}