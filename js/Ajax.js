(function (){
	//本方法是自定义Ajax框架的对外接口
	//调用本方法就能够发送Ajax请求
	//jsonObj是，用户发送请求时需要携带的所有信息，是JSON类型的一个参数。
	function ajax(jsonObj){
		var xhr = new XMLHttpRequest();
		//处理get|post请求参数
		function params(data){
			var arr = [];
			for(var i in data){
				arr.push(i+"="+data[i]);
			}
			return arr.join("&");
		}
		if(jsonObj.method === "get"){
			jsonObj.data = params(jsonObj.data);
			jsonObj.url += (jsonObj.url.indexOf("?")==-1?"?"+jsonObj.data:"&"+jsonObj.data);
		}
		if(jsonObj.method === 'post'){
			var formData = new FormData();
			for(var i in jsonObj.data){
				formData.append(i, jsonObj.data[i]);
			}
			jsonObj.data = formData;
		}

		//设置监听和回调
		if(jsonObj.async == true){
			xhr.onreadystatechange = function (){
				if(xhr.readyState == 4){
					if(xhr.status == 200){
						jsonObj.success(JSON.parse(xhr.responseText));
					}else{
						jsonObj.error(xhr.statusText);
					}
				}
			}
		}else{
			//处理同步发送请求
		}
		
		//发送请求
		xhr.open(jsonObj.method, jsonObj.url, jsonObj.async);
		if(jsonObj.method.toLowerCase() == 'post'){
			xhr.send(jsonObj.data);
		}else if(jsonObj.method.toLowerCase() == 'get'){
			xhr.send();
		}
	}
	//对外接口名称为frankAjax
	window.Dreamy = ajax;
}());

	