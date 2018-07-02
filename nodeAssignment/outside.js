var data=require("./inventory");
function listInStock(res){
    var inStock=data.filter(function(item){
        return item.avail==="In stock";
    });
    res.end(JSON.stringify(inStock));
}
function listOnBackOrder(res){
    var onorder=data.filter(function(item){
        return item.avail==="on back order";
    });
    res.end(JSON.stringify(onorder));
}
module.exports.listInStock=listInStock;
module.exports.listOnBackOrder=listOnBackOrder;

