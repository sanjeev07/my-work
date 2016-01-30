angular.module('addDrugsCtrl',['drugService'])


 // about page controller
 .controller('addDrugsController', function(Drug,$timeout) {

     var vm = this;
    
    vm.DrugTypes = {
      typeChoice: 'Scheduled H',
      availableOptions: [
        {id: 'Scheduled H', name: 'Scheduled H'},
        {id: 'Scheduled K', name: 'Scheduled K'},
        {id: 'Non Scheduled', name: 'Non Scheduled'},
        {id: 'Vitamins', name: 'Vitamins'},
        {id: 'General', name: 'General'},  
        {id: 'Others', name: 'Others'}
      ],
     };
    
     
    
     vm.createDrug = function() {
         
          
          vm.newDrug.drugType= vm.DrugTypes.typeChoice;
          
          console.log(vm.newDrug.name+":"+vm.newDrug.drugType)
         
         
          Drug.create(vm.newDrug).success(function(data){
             vm.newDrug ={};
             console.log("Success");  
             vm.confirmMessage =data.success;
              
              $timeout(function(){
                  vm.confirmMessage =null;
               }, 2400);
             
          }).error(function(data){
              vm.confirmMessage =data.error;
              console.log("Fail");
          });
                    
     }


 });