var fs = require('fs');
exports.getData = function(){
	var content = fs.readeFile('./mock/test2.json','utf-8');
	return content;
}