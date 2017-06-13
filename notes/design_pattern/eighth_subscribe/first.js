var salesoffice = {};
salesoffice.clientList = [];
salesoffice.listen = function(fn){
  this.clientList.push(fn)
};
