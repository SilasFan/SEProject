function mock(api_func, error_message) {
    return new Promise((resolve, reject) => {
        if (error_message) {
            reject(() => error_message);
        } else {
            setTimeout(resolve(api_func), 1000);
        }
    });
}

export class result {
    constructor(code, data, message) {
        this.code = code;
        this.data = data;
        this.message = message;
    }
}

export default mock;
