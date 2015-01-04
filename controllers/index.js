'use strict';


module.exports = function(app) {

    //登录
    app.get('/login', function(req, res){        
        res.render('login',{});        
    });

    //注册
    app.get('/sign', function(req, res){         
        res.render('sign',{});        
    });

    //个人中心
    app.get('/', function(req, res){         
        res.render('personalCenter',{});        
    });

    //我的客户
    app.get('/customer',function(req,res){
        res.render('customer/index',{});
    });

    //产品列表
    app.get('/product', function(req, res){        
        res.render('productList',{});        
    });
    
    //产品明细
    app.get('/productDetail', function(req, res){        
        res.render('productDetail',{});        
    });

    //试算中心
    app.get('/cal', function(req, res){        
        res.render('calc',{});        
    });

    //我的续保
    app.get('/notice', function(req, res){        
        res.render('notice',{});        
    });

    //我的名片
    app.get('/card', function(req, res){        
        res.render('card',{});        
    });
    
    //我的名片
    app.get('/pref', function(req, res){    
        res.render('pref',{});        
    });

    //我的咨询
    app.get('/cons', function(req, res){        
        res.render('cons',{});        
    });

};