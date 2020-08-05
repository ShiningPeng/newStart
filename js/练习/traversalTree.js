const chapterTree = {
    name: '总章节',
    children: [
        { name: '章节一', children: [{ name: '第一节', children: [{ name: '第一小节' }, { name: '第二小节' }] }, { name: '第二节' }] },
        { name: '章节二', children: [{ name: '第三节' }, { name: '第四节' }] }]
};

function serialize(tree) {
    // TODO
    let res = [];
    function traversal(node, i) {
        res.push(node.name)
        if (node.children) {
            for (let child of node.children) {
                traversal(child);
            }
        }
    }
    traversal(tree);
    return res;
}
// 测试
// const result = serialize(chapterTree);
// console.log(result);
// ["总章节", "章节一", "第一节", "第一小节", "第二小节", "第二节", "章节二", "第三节", "第四节"]



//  2. 改进上面的程序，输出章节号同时输出对应的序号

// ["总章节", "(1)章节一", "(1.1)第一节", "(1.1.1)第一小节", "(1.1.2)第二小节",
//  "(1.2)第二节", "(2)章节二", "(2.1)第三节", "(2.2)第四节"]

function serialize1(tree) {
    // TODO
    let res = [];
    function traversal(node, prefix) {
        res.push(prefix + node.name)
        if (node.children) {
            for (let i = 0; i < node.children.length; i++) {
                traversal(node.children[i], `${prefix}${i + 1}`);
            }
        }
    }
    traversal(tree, '');
    return res;
}
console.log(serialize1(chapterTree))