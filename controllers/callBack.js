module.exports = (code,info,data,page) =>{
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