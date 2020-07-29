//设计一个简单的任务队列, 要求分别在 1,3,4 秒后打印出 "1", "2", "3"
// class Queue {
//     task(time, callback) {
//         setTimeout(() => {
//             callback()
//         }, time);
//         return this
//     }
//     start() {
//         // console.log()
//         return this;
//     }
// }

class Queue {
    constructor() {
        this.tasks = []
    }
    task(wait, cb) {
        this.tasks.push({ wait: wait, cb })
        return this;
    }
    start() {
        let startTime = 0;
        for (let task of this.tasks) {
            startTime += task.wait
            setTimeout(() => {
                task.cb()
            }, startTime);
        }
    }
}

new Queue()
    .task(1000, () => {
        console.log(1)
    }).task(2000, () => {
        console.log(2)
    }).task(1000, () => {
        console.log(3)
    }).start()
