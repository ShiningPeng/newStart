interface IUser{
  name:string;
  age:number;
}

const getUserInfo = (user:IUser):string => {
  return `name:${user.name},age:${user.age}`
}