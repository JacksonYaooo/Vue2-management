import instance from "./request";

// 获取验证码请求
export const GetCaptchaCodeApi = () => instance.get("/prod-api/captchaImage");

// 登录请求
export const LoginApi = (params) => instance.post("/prod-api/login", params);

// 获取用户可以访问的路由的Api
export const GetUserRoutersApi = () => instance.get("/prod-api/getRouters");