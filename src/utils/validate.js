// 用来存放项目所有的校验方法
export function validateUsername(rule, value, callback){
  // 需求：用户名3-15位
  if(value.length<3 || value.length>15){
    callback(new Error('用户名必须为3-15位之内'))
  }else{
    callback();
  }
}