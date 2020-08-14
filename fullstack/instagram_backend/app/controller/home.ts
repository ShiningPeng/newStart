import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    // node http协议 基于应答式 ctx = request + response
    // ctx.response 
    ctx.body = '塑料袋放进哦大家送风机就是'
    // ctx.body = await ctx.service.test.sayHi('egg');
  }
}
