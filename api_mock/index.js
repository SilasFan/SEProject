import Mock, { result } from "./utils";
import {
    getNewsList,
    getNewsContent,
    getHotComments,
    getAllComments,
    getComment,
    getReplies,
    addComment,
    addReply,
    favoriteNews
} from "./news";
import { loginOrRegister, authCode, getMyComment, getMyFavorite } from "./user";

const api = {
    // 获取首页新闻列表
    getNewsList: (category, page, count) =>
        Mock(getNewsList(category, page, count), null),

    // 根据id获取新闻详细信息
    getNewsContent: id => Mock(getNewsContent(id), null),

    // 根据新闻id获取热门评论，个数可选
    getHotComments: (id, num) => Mock(getHotComments(id, num), null),

    // 获取所有评论,按照时间或者赞数排序
    getAllComments: (id, sortBy) => Mock(getAllComments(id, sortBy), null),

    // 获取单个评论（获取回复时用）(cid自己在前面转成number)
    getComment: (id, cid) => Mock(getComment(id, cid), null),

    // 模拟点赞
    likeComment: (newsID, commentID, token) =>
        Mock(() => new result(0, newsID + commentID + token, ""), null),

    // 取消点赞
    removeLike: (newsID, commentID, token) =>
        Mock(() => new result(0, newsID + commentID + token, ""), null),

    // 获取回复
    getReplies: (newsID, commentID) =>
        Mock(getReplies(newsID, commentID), null),

    // 给回复点赞
    likeReply: (newsID, commentID, replyID, token) =>
        Mock(
            () => new result(0, newsID + commentID + replyID + token, ""),
            null
        ),

    // 取消回复的赞
    removeLikeForReply: (newsID, commentID, replyID, token) =>
        Mock(
            () => new result(0, newsID + commentID + replyID + token, ""),
            null
        ),

    // 登录或注册
    loginOrRegister: (email, passwd) =>
        Mock(loginOrRegister(email, passwd), null),

    // 注册验证码验证
    authCode: authcode => Mock(authCode(authcode), null),

    // 添加评论
    addComment: (newsID, comment, token) =>
        Mock(addComment(newsID, comment, token)),

    // 添加回复
    addReply: (newsID, commentID, reply, token) =>
        Mock(addReply(newsID, commentID, reply, token)),

    // 收藏新闻
    favoriteNews: (newsID, token) => Mock(favoriteNews(newsID, token)),

    // 获取我的评论
    getMyComment: token => Mock(getMyComment(token)),

    // 获取我的收藏
    getMyFavorite: token => Mock(getMyFavorite(token))
};

export default api;
