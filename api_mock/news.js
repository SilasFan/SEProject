import { result } from "./utils";

export function getNewsList(category, page, count) {
    let newsList = [];
    const code = page * count >= 30 ? 0 : 2;
    for (let i = 0; i < count; i++) {
        newsList.push({
            title: category + page * count + i,
            author: "test",
            id: Math.floor(Math.random() * 10000000)
        });
    }
    return new result(code, newsList, "");
}

export function getNewsContent(id) {
    const content = {
        id: id,
        title: "Title test",
        author: "Lee",
        content: `<p>tets</p><img src="/img/test.jpg" />`
    };

    return new result(0, content, "");
}

export function getHotComments(id, num) {
    const comments = [];
    for (let i = 0; i < num; i++) {
        comments.push({
            id: i,
            content: `comment test: No.${i} from ${id}`,
            user: {
                avatar: "/img/avatar.png",
                userName: "test"
            },
            likes: Math.floor(Math.random() * 3000)
        });
    }

    return new result(0, comments, "");
}
