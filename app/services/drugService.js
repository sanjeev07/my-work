angular.module('drugService',[])

.factory('Drug',function($http){
    
    var drugFactory ={};
   
    
    
    drugFactory.getAll = function(){
        
        return $http.get('/drug/getDrugAll');
        
    }; 
    

    drugFactory.getDrugByName = function(name)  {
         return $http.get('/drug/getDrugByName/'+name);
    };
    
    drugFactory.getDrugByType = function(dType)  {
         return $http.get('/drug/getDrugByType/'+dType);
    };
    
    
    drugFactory.getCount = function(){
        
        return $http.get('/drug/getDrugCount');
        
    };   
    
    
    drugFactory.create = function(drugData) {
            return $http.post('/drug/create', drugData);
    };
    
    drugFactory.updateDrug = function(drugId,drugData) {
            return $http.put('/drug/update/'+drugId, drugData);
    };
    
    drugFactory.deleteDrug = function(drugId) {
            return $http.delete('/drug/delete/'+drugId);
    };
    
    
   return drugFactory;
   
});