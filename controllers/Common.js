var static_domain = 'http://statict.chong100.com/resource/Imgs';
class Common{
	constructor(...args){
		[this.req,this.res,this.next] = [...args];
	}

	callBack(code,info,data,page){
		if(page){
			return {
				code:code,
				info:info,
				data:data || [],
				page:page
			};
		}else{
			return {
				code:code,
				info:info,
				data:data || {}
			};
		}
	}

	suc(data,info){
		var data = data || [];
		var info = info || 'success';
		return {
			code:1,
			info:info,
			data:data
		}
	}

	err(info,code = 0){
		var info = info || 'error';
		return {
			code:code,
			info:info
		}
	}

	errLogin(info = '您还未登录，请登录后重试'){
		return {
			code:-1,
			info:info
		}
	}

	emt(info = '未找到相关数据!'){
		return {
			code:-404,
			info:info
		}
	}

	showImg(path,rule='',defalt=1){
		if(path.length > 0){
			if( /^http/.test(path)){
				return path+rule;
			}
			return static_domain +  path + rule;
		}else{	
			return defalt ? static_domain + '/default.png' : '';
		}
	}
}
module.exports = Common;