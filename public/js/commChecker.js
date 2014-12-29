//数据校验器 create by weikaifeng
/**
* ScopeObj--校验范围，不带返回值
* ScopeObjRet--校验范围，带返回值
* TimesObj--倍数校验
* ScaleObj--比例校验，带返回值
**/
function goBack(url){  		
		document.location.href=url;
    }
window.Checker = function(elementObj){
	var checker = this;	
	//范围校验器
	this.ScopeObj = function(data,options){	
		checker.ScopeObj.defaults = {
			minValue : 0,
			maxValue : 100000000,
			remindWord : "输入值超出范围，请重新填写！",	
			remindFunction : null,
			baseNumValue : 1,
		    maxValue : 1,
		    isGetfocus : false
					
		};		
		var config = (options)? mergeChartConfig(checker.ScopeObj.defaults,options) : checker.ScopeObj.defaults;		
		return new ScopeObj(data,config,elementObj);
	}	
	// 范围校验构造器
	var ScopeObj = function (data,config,elo) {
		var dataFirst;
		doCheck();
		function doCheck(){
			if (config.remindFunction){
				config.remindFunction();
			}else{			
				if(!dov.checkScope(data,config,elo)){				
					if (config.isGetfocus){
						alert(config.remindWord,elo);
					}else{
						alert(config.remindWord,null);					
					}
					//elo.focus();
				}else{
					dov.checkTimes(data,config,elo);
				}
				
				
			}	
		
		}		
		
		
	};	
	
	//范围校验器-带回值
	this.ScopeObjRet = function(data,options){	
		checker.ScopeObjRet.defaults = {
			minValue : 0,
			maxValue : 100000000,	
			remindWord : "输入值超出范围，请重新填写！",		
			baseNumValue : 1,
		    maxValue : 1,
			isGetfocus : false
		};		
		var config = (options)? mergeChartConfig(checker.ScopeObjRet.defaults,options) : checker.ScopeObjRet.defaults;		
		return new ScopeObjRet(data,config,elementObj);
	}	

	// 范围校验构造器-带回值
	var ScopeObjRet = function (data,config,elo) {
		this.data = data;
		this.config = config;
		this.elo = elo;	
		
	};	
	
	//范围校验方法
	ScopeObjRet.prototype.doScopeRet = function (){
			if(!dov.checkScope(this.data,this.config,this.elo)){
				//alert(this.config.remindWord,this.elo);
				if (this.config.isGetfocus){
					alert(this.config.remindWord,elo);
				}else{
					alert(this.config.remindWord,null);					
				}
				return false;
			}else{
				dov.checkTimes(this.data,this.config,this.elo);
			    return true;
			}		
	}
	
	
	
	
	
	//倍数校验器
	this.TimesObj = function(data,options){	
		checker.TimesObj.defaults = {
			baseNumValue : 10,
			maxValue : 100000000,
			remindWord : "输入值超出范围，请重新填写！",
			remindFunction : null
		};		
		var config = (options)? mergeChartConfig(checker.TimesObj.defaults,options) : checker.TimesObj.defaults;		
		return new TimesObj(data,config,elementObj);
	}	
	// 倍数校验构造器
	var TimesObj = function (data,config,elo) {
		var dataFirst;
		doCheck();
		function doCheck(){
			if (isNaN(data.dataFirst)){
				alert(config.remindWord,null);
				return;
			}		
			if (config.remindFunction){
				config.remindFunction();
			}else{
				dov.checkTimes(data,config,elo);
			}	
		
		}		
		
		
	};		
	
	//比例校验器
	this.ScaleObj = function(data,options){	
		checker.ScaleObj.defaults = {
			numeratorValue : 1,
			enominatorValue : 1,			
		};		
		var config = (options)? mergeChartConfig(checker.ScaleObj.defaults,options) : checker.ScaleObj.defaults;		
		return new ScaleObj(data,config,elementObj);
	}	

	// 比例校验构造器
	var ScaleObj = function (data,config,elo) {
		this.data = data;
		this.config = config;
		this.elo = elo;	
		
	};	
	
	//比例校验方法
	ScaleObj.prototype.doScale = function (){
			return dov.checkScale(this.data,this.config,this.elo);
	}
	
	
	// 私有对象供内部调用
	var dov = {
		checkTimes:function(data,config,elo){ 
 			if(data.dataFirst){
 				elo.value=Math.ceil(data.dataFirst/config.baseNumValue)*config.baseNumValue;
			}
        },   
        
 		checkScope:function(data,config,elo){ 
 		//alert(!data.dataFirst);
 			if(!data.dataFirst||isNaN(data.dataFirst)){
				return false;
			}else{
				if(data.dataFirst<config.minValue||data.dataFirst>config.maxValue){
					return false;
				}
			}
            return true;  
        },
        checkScale:function(data,config,elo){
        	if (data.dataSceond==null){
        		return true;
        	}
        	if (data.dataSceond==0){
        		return true;
        	}
        	if (data.dataFirst==null||data.dataSceond==null){
        		return false;
        	}
        	if (isNaN(data.dataFirst)||isNaN(data.dataSceond)){
        		return false;
        	}        	
       		if (data.dataFirst*config.enominatorValue>=data.dataSceond*config.numeratorValue){
				return true;
			}else{
				return false;
			}
        }
        
	};	
	
	// 参数合并
	function mergeChartConfig(defaults,userDefined){
		var returnObj = {};
	    for (var attrname in defaults) { returnObj[attrname] = defaults[attrname]; }
	    for (var attrname in userDefined) { returnObj[attrname] = userDefined[attrname]; }
	    return returnObj;
	}
}