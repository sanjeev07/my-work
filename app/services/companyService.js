angular.module('companyService',[])

.factory('Company',function($http){
    
    var companyFactory ={};
   
    companyFactory.getCount = function(){
        
        return $http.get('/company/getCompanyCount');
        
    };  
    
    
    companyFactory.getAll = function(){
        
        return $http.get('/company/getCompanyAll');
        
    }; 
    
    
    companyFactory.getCompanyByEmail = function(email)  {
         return $http.get('/company/getCompany/'+email);
    };
    
    companyFactory.getCompanyByName = function(name)  {
         return $http.get('/company/getCompanyByName/'+name);
    };
    
    
    companyFactory.getCompanyByType = function(cType)  {
         return $http.get('/company/getCompanyByType/'+cType);
    };
    
    
    companyFactory.create = function(companyData) {
            return $http.post('/company/create', companyData);
    };
    
    companyFactory.updateCompany = function(companyId,companyData) {
            return $http.put('/company/update/'+companyId, companyData);
    };
    
    companyFactory.deleteCompany = function(companyId) {
            return $http.delete('/company/delete/'+companyId);
    };
    
   return companyFactory;
   
});