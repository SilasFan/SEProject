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

export class comment {
    constructor(id, cid) {
        this.id = cid;
        this.content = `comment test: No.${cid} from ${id}`;
        this.user = {
            avatar: "/img/avatar.png",
            userName: "test"
        };
        this.likes = Math.floor(Math.random() * 3000);
    }
}

export class reply {
    constructor(id, cid, rid) {
        this.id = rid;
        this.cid = cid;
        this.content = `reply test: No.${rid} from comment ${cid} in ${id}`;
        this.user = {
            avatar: "/img/avatar.png",
            userName: "test"
        };
        this.likes = Math.floor(Math.random() * 3000);
    }
}

export default mock;
