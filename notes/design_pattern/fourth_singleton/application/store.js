//redux 中的 store有且仅有一个，就是用单例模式写成的

var store;
function getInstance() {
    if(!store) store = createStore();
    return store;
}
function createStore() {
    return {}
}
module.exports = getInstance();