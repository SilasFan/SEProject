import Mock, { result } from "./utils";
import { getNewsList, getNewsContent, getHotComments } from "./news";

const api = {
    // 获取首页新闻列表
    getNewsList: (category, page, count) =>
        Mock(getNewsList(category, page, count), null),

    // 根据id获取新闻详细信息
    getNewsContent: id => Mock(getNewsContent(id), null),

    // 根据新闻id获取热门评论，个数可选
    getHotComments: (id, num) => Mock(getHotComments(id, num), null),

    // 模拟点赞
    likeComment: (newsID, commentID, token) =>
        Mock(() => new result(0, newsID + commentID + token, ""), null)
};

export default api;
