import { result, comment, reply } from "./utils";

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
        comments.push(new comment(id, i));
    }
    comments.sort((a, b) => b.likes - a.likes);

    return new result(0, comments, "");
}

export function getAllComments(id, sortBy) {
    const num = Math.floor(Math.random() * 40);
    const comments = [];
    for (let i = 0; i < num; i++) {
        comments.push(new comment(id, i));
    }

    // sort
    if (sortBy === "likes") {
        comments.sort((a, b) => b.likes - a.likes);
    }

    return new result(0, comments, "");
}

export function getComment(id, cid) {
    return new result(0, new comment(id, cid), "");
}

export function getReplies(id, cid) {
    const num = Math.floor(Math.random() * 40);
    const replies = [];
    for (let i = 0; i < num; i++) {
        replies.push(new reply(id, cid, i));
    }

    return new result(0, replies, "");
}
