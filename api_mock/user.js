import { result, comment } from "./utils";

// 暂时定code=2为注册返回，注意
export function loginOrRegister(email, passwd) {
    if (email === "fetter@163.com") {
        const data = {
            token: generateToken(),
            user: {
                uid: 2333333,
                userName: "Fetter",
                avatar: "/img/avatar.png"
            }
        };
        return new result(0, data, email + passwd);
    } else {
        return new result(2, null, "");
    }
}

export function authCode(authcode) {
    const data = {
        token: generateToken(),
        user: {
            uid: 2333333,
            userName: "Fetter",
            avatar: "/img/avatar.png"
        }
    };
    return new result(authcode.length > 4 ? 1 : 0, data, authcode);
}

export function getMyComment(token) {
    const comments = [];
    for (let i = 0; i < 10; i++) {
        comments.push(new comment("223333", 77777));
    }
    return new result(0, comments, token);
}

export function getMyFavorite(token) {
    const newsList = [];
    for (let i = 0; i < 10; i++) {
        newsList.push({
            title: "test my favorite",
            author: "test",
            id: Math.floor(Math.random() * 10000000)
        });
    }

    return new result(0, newsList, token);
}

function generateToken() {
    return "TOKEN_TEST";
}
