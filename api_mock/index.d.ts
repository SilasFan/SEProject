import Mock, { result } from "./utils";
import { getNewsList, getNewsContent, getHotComments } from "./news";

const api = {
    // 获取首页新闻列表
    getNewsList: (category: string, page: number, count: number) =>
        Mock(getNewsList(category, page, count), null),

    // 根据id获取新闻详细信息
    getNewsContent: (id: string) => Mock(getNewsContent(id), null),

    // 根据新闻id获取热门评论，个数可选
    getHotComments: (id: string, num: number) => Mock(getHotComments(id, num), null),

    // 获取单个评论（获取回复时用）(cid自己在前面转成number)
    getComment: (id: string, cid: number) => Mock(getComment(id, cid), null),

    // 模拟点赞
    likeComment: (newsID: string, commentID: number, token: string) =>
        Mock(() => new result(0, newsID + commentID + token, ""), null),

    // 取消点赞
    removeLike: (newsID: string, commentID: number, token: string) =>
        Mock(() => new result(0, newsID + commentID + token, ""), null)
};

export default api;