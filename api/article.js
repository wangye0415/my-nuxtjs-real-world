import { request } from '@/plugins/request'

// 获取公共的文章列表
export const getArticles = params => {
    return request({
        method: 'GET',
        url: '/api/articles',
        params
    })
}

// 获取关注的用户列表
export const getFeedArticle = params => {
    return request({
        method: 'GET',
        url: '/api/articles/feed',
        params
    })
}

// 添加点赞
export const addFavorite = (slug) => {
    return request({
        method: 'POST',
        url: `/api/articles/${slug}/favorite`,
    })
} 
// 删除点赞
export const delFavorite = (slug) => {
    return request({
        method: 'DELETE',
        url: `/api/articles/${slug}/favorite`,
    })
} 
// 获取文章详情
export const articleDetail = (slug) => {
    return request({
        method: 'GET',
        url: `/api/articles/${slug}`,
    })
} 
// 删除文章
export const deleteArticle = (slug) => {
    return request({
        method: 'DELETE',
        url: `/api/articles/${slug}`,
    })
} 
// 新建文章 
// 参数名不能乱用 如果使用params 会将参数拼接到URL后面 导致报错
export const createArticle = (data) => {
    return request({
        method: 'POST',
        url: '/api/articles',
        data,
    })
}

// 获取文章评论
export const getComments = (slug) => {
    return request({
        method: 'GET',
        url: `/api/articles/${slug}/comments`,
    })
}

// 新增文章评论
export const addComments = (slug,data) => {
    return request({
        method: 'POST',
        url: `/api/articles/${slug}/comments`,
        data
    })
}

// 删除文章评论
export const deleteComments = (slug,id) => {
    return request({
        method: 'DELETE',
        url: `/api/articles/${slug}/comments/${id}`,
    })
}

// 获取标签列表
export const getTags = () => {
    return request({
        method: 'GET',
        url: '/api/tags',
    })
} 