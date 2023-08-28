import instance from "./request";

// 获取验证码请求
export const GetCaptchaCodeApi = () => instance.get("/prod-api/captchaImage")