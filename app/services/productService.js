angular.module('productService',[])

.factory('Product',function($http){
    
    var productFactory ={};
   
    
    
    productFactory.getAll = function(){
        
        return $http.get('/product/getProductAll');
        
    }; 
    

    productFactory.getProductByName = function(name)  {
         return $http.get('/product/getProductByName/'+name);
    };
    
    productFactory.getProductByType = function(dType)  {
         return $http.get('/product/getProductByType/'+dType);
    };
    
    
    productFactory.getCount = function(){
        
        return $http.get('/product/getProductCount');
        
    };   
    
    
    productFactory.create = function(productData) {
            return $http.post('/product/create', productData);
    };
    
    productFactory.getProductByCompany = function(cName)  {
         return $http.get('/product/getProductByCompany/'+cName);
    };
    
    productFactory.getProductByCompanyOne = function(cName)  {
         return $http.get('/product/getProductByCompanyOne/'+cName);
    };
    
    productFactory.getProductByDrug = function(dName)  {
         return $http.get('/product/getProductByDrug/'+dName);
    };
    
    
    productFactory.getProductsRecent = function(){
        return $http.get('/product/getProductsRecent');        
    }; 
    
    productFactory.updateProduct = function(productId,productData) {
            return $http.put('/product/update/'+productId, productData);
    };
    
    productFactory.deleteProduct = function(productId) {
            return $http.delete('/product/delete/'+productId);
    };
    
    
    
   return productFactory;
   
});