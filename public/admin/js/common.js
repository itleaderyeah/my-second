 // 封装serializeObject()方法
function serializeObject(obj){
    var result = {};
    var params = obj.serializeArray();
    params.forEach(function(item){
        result[item.name] = item.value;
    });
    return result;
};