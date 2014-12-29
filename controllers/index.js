'use strict';


module.exports = function(app) {

    app.get('/', function(req, res) {        
        res.render('personalCenter',{});        
    });

    app.get('/customer',function(req,res){
        res.render('customer/index',{});
    });

    app.get('/product', function(req, res) {        
        res.render('productList',{});        
    });
    
    app.get('/productDetail', function(req, res) {        
        res.render('productDetail',{});        
    });

    app.get('/cal', function(req, res) {        
        res.render('calc',{});        
    });

     app.get('/renew', function(req, res) {        
        res.render('renew',{});        
    });
    
};