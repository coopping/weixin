$(function(){
	 $(".my-group1").on("click", function () {
        groupBtnRadiu(".my-group1", this);
        if(this.innerHTML.indexOf('男')!=-1){
            $("#f_sex").val('0');
        }else if(this.innerHTML.indexOf('女')!=-1){
            $("#f_sex").val('1');
        }
    });
     $(".my-group2").on("click", function () {
        groupBtnRadiu(".my-group2", this);
        if(this.innerHTML.indexOf('40')!=-1){
            $("#f_bxqj").val('1');
        }else if(this.innerHTML.indexOf('50')!=-1){
            $("#f_bxqj").val('2');
        }else if(this.innerHTML.indexOf('88')!=-1){
            $("#f_bxqj").val('3');
        }
    });
    $(".my-group3").on("click", function () {
        groupBtnRadiu(".my-group3", this);
        if(this.innerHTML.indexOf('10')!=-1){
            $("#f_jfqj").val('1');
        }else if(this.innerHTML.indexOf('15')!=-1){
            $("#f_jfqj").val('2');
        }else if(this.innerHTML.indexOf('20')!=-1){
            $("#f_jfqj").val('3');
        }
    });
    function groupBtnRadiu(classID, target) {
        $(classID).removeClass("global-color-danger").addClass("global-color-gray");
        $(target).removeClass("global-color-gray").addClass("global-color-danger");
    };
    
     $("#f_age").change(function(){
        if($("#f_age").val()<0){
            alert("本产品最小投保年龄为0岁")
            $("#f_age").val(0)
        }
    });
    
    $("#be").change(function(){
        if($("#be").val()<10000){
            alert("最低投保10000元");
            $("#be").val(10000)
        }else{
        	if($("#f_age").val()<18){
        		if($("#be").val()>100000){
        			alert("该年龄最多允许投保10万元");
            		$("#be").val(100000)
        		}
        	}else{
        		if($("#be").val()>10000000){
        			alert("该年龄最多允许投保1000万元");
            		$("#be").val(10000000)
        		}
        	}
            if($("#be").val()%1000!=0){
                $("#be").val( ($("#be").val()/1000).toFixed()*1000);
            }
        }
    });
    
    $("#f_age").change(function(){
    	$("#toj2").show();
    	$("#to3").show();
    	$("#to2").show();
    	var num = $("#f_age").val();
    	if($("#f_sex").val()==0){//男
    		if(num>38&&num<=40){
    			$("#toj2").hide();
    		}else if(num>40&&num<=45){
    			$("#toj2").hide();
    			$("#to3").hide();
    		}else if(num>45&&num<=48){
    			$("#toj2").hide();
    			$("#to3").hide();
    			$("#to2").hide();
    		}else if(num>48&&num<=50){
    			$("#toj2").hide();
    			$("#toj1").hide();
    			$("#to3").hide();
    			$("#to2").hide();
    		}else if(num>50){
    			$("#toj2").hide();
    			$("#toj1").hide();
    			$("#to3").hide();
    			$("#to2").hide();
    			$("#f_age").val(50);
    			alert("男士最大投保年龄为50");
    		}
    	}else{
    		if(num>38&&num<=45){
    			$("#toj2").hide();
    		}else if(num>45&&num<=48){
    			$("#toj2").hide();
    			$("#to3").hide();
    		}else if(num>48&&num<=50){
    			$("#toj2").hide();
    			$("#toj1").hide();
    			$("#to3").hide();
    		}else if(num>50&&num<=55){
    			$("#toj2").hide();
    			$("#toj1").hide();
    			$("#to3").hide();
    			$("#to2").hide();
    		}else if(num>55){
    			$("#toj2").hide();
    			$("#toj1").hide();
    			$("#to3").hide();
    			$("#f_age").val(55);
    			alert("男士最大投保年龄为55");
    		}
    	}
    });
    
});
