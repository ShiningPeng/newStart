// 类型定义文件



interface Iuser{
  name:string;
  age:number;
}

type IUserInfoFunc = (user:Iuser) => string

const getUserINFO :IUserInfoFunc = (user) =>{
  return `name:${user.name},age:${user.age}`
}