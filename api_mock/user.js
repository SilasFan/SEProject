import { result } from "./utils";

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

function generateToken() {
    return "TOKEN_TEST";
}
