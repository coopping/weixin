/**
 * Created by zheng on 14-6-18.
 */
function goBackIndex() {
    document.location.href = "/demonew/front_index.html";
}
function goBackList() {
    document.location.href = "/demonew/front_gexian.html";
}

$(function () {
//        $(".panel-group .panel-collapse").css("display", "none");
    $(".panel-heading").on("click", function () {
        window.scrollTo(0, 0);
        if ($(this).hasClass("my-turnNext")) {
            window.location.href = "/cal";
            return;
        }

        $(".panel-group .panel-collapse").slideUp(500);
        if ($(this).siblings(".panel-collapse").css("display") == "block") {
            $(this).siblings(".panel-collapse").slideUp(500);
            $(".my-proPic").slideDown(500);
        } else {
            $(this).siblings(".panel-collapse").slideDown(500);
            $(".my-proPic").slideUp(500);
        }

    });
    $(".my-group1").on("click", function () {
        groupBtnRadiu(".my-group1", this);
    });
   // setalpage(1);
    //$("#al_yearnum").change(function(){
    //	setalpage($("#al_yearnum").val());
   // });
    
})
function setalpage(num){
	var aljson=[[1,1000,1024,1024,1075,1043,1043,1095,1057,1057,1110],
				[2,3000,3100,3100,3255,3180,3180,3339,3241,3241,3433],
				[3,5000,5227,5227,5488,5413,5413,5684,5555,5555,5833],
				[4,7000,7408,7408,7778,7747,7747,8134,8009,8009,8409],
				[5,9000,9643,9643,10125,10185,10185,10695,10609,10609,11140],
				[6,11000,11934,11934,12531,12734,12734,13370,13366,13366,14034],
				[7,13000,14282,14282,14996,15397,15397,16167,16288,16288,17102],
				[8,15000,16689,16689,17524,18180,18180,19089,19385,19385,20354],
				[9,17000,19157,19157,20114,21088,21088,22142,22668,22668,23801],
				[10,19000,21686,21686,22770,24127,24127,25333,26148,26148,27456]];
	var aladd = [
        [],
        [],
        []
    ];   
    var input = $(".altd");
    for(var i=0;i<input.length;i++){
        aladd[i % 3].push($(input[i]));
    }
    num=num>8?8:num;
	for (var i = 0; i < 3; i++) {
        if (aljson.length > (Number(num)-1+ i)) {
            var obj = aljson[Number(num)-1+i];
            aladd[i][0].html(obj[0]);
            aladd[i][1].html(obj[1]);
            aladd[i][2].html(obj[2]);
            aladd[i][3].html(obj[3]);
            aladd[i][4].html(obj[4]);
            aladd[i][5].html(obj[5]);
            aladd[i][6].html(obj[6]);
            aladd[i][7].html(obj[7]);
            aladd[i][8].html(obj[8]);
            aladd[i][9].html(obj[9]);
            aladd[i][10].html(obj[10]);
        }
    }
}

//递归取得当前元素坐标Y
function getTop(e) {
    var offset = e.offsetTop;
    if (e.offsetParent != null) offset += getTop(e.offsetParent);
    return offset;
}
//递归取得当前元素坐标X
function getLeft(e) {
    var offset = e.offsetLeft;
    if (e.offsetParent != null) offset += getLeft(e.offsetParent);
    return offset;
}
//显示 返回下来列表
function show_back_dialog(e) {
    var backDialog = document.getElementById("backDialog");
    if (backDialog != null) {
        document.body.removeChild(document.getElementById("backDialog"));
    } else {
        var rightedge = getLeft(e) - 58;
        var bottomedge = getTop(e) + 31;
        //var rightedge=event.clientX-54;
        //var bottomedge=event.clientY+10;
        var backDialog = document.createElement("DIV");
        backDialog.id = "backDialog";
        backDialog.style.position = "absolute";
        backDialog.style.marginLeft = rightedge + "px";
        backDialog.style.marginTop = bottomedge + "px";
        backDialog.style.width = "92px";
        backDialog.style.height = "108px";
        backDialog.style.backgroundSize = "92px 108px";
        backDialog.style.backgroundImage = "url(images/border.png)";
        backDialog.style.textAlign = "center";
        backDialog.style.zIndex = "10002";
        //strHtml = "<img src=\"xfbx/images/border.png\" width=\"100\" height=\"100\" />";
        //backDialog.innerHTML = strHtml;
        strHtml = "<div  class=\"clbgmain catalogmain \"  onclick=\"goBackIndex()\"/ >";
        strHtml += "</div>";
        strHtml += "<div  class=\"clbglist cataloglist \"  onclick=\"goBackList()\" />";
        strHtml += "</div>";
        backDialog.innerHTML = strHtml;
        document.body.appendChild(backDialog);
    }
}
function getEvent() {
    if (document.all) {
        return window.event;//如果是ie
    }
    func = getEvent.caller;
    while (func != null) {
        var arg0 = func.arguments[0];
        if (arg0) {
            if ((arg0.constructor == Event || arg0.constructor == MouseEvent)
                || (typeof(arg0) == "object" && arg0.preventDefault && arg0.stopPropagation)) {
                return arg0;
            }
        }
        func = func.caller;
    }
    return null;
}

$(document).bind("click", function () {
    var wobj = getEvent().srcElement ? getEvent().srcElement : getEvent().target;
    var wobjstr = wobj.src;
    if (wobjstr != "" && typeof(wobjstr) != "undefined") {
        if (wobjstr.substring(wobjstr.lastIndexOf("/") + 1) != "fh-icon.png") {
            RemoveBackDialog();
        }
    } else {
        RemoveBackDialog();
    }


});
function RemoveBackDialog() {
    var backDialog = document.getElementById("backDialog");
    if (backDialog != null) {
        document.body.removeChild(document.getElementById("backDialog"));
    }
}


function groupBtnRadiu(classID, target) {
    $(classID).removeClass("global-color-danger").addClass("global-color-gray");
    $(target).removeClass("global-color-gray").addClass("global-color-danger");
};