angular.module('drugCtrl',['drugService'])


 // about page controller
 .controller('DrugsController', function(Drug) {

     var vm = this;
     vm.noData = false;
     vm.editDrugMode = false;
     vm.updDrug={}
     
    vm.searchOptions = {
      repeatSelect: 1,
      availableOptions: [
        {id: '1', name: 'Name'},
        {id: '2', name: 'Type'}
      ],
     };
    
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
    
     
    Drug.getAll().success(function(data){
        vm.drugs =data;
    });
    
    vm.refreshAndSearch = function()    {
        
        vm.editDrugMode=false;
        vm.searchDrug();
        Drug.getAll().success(function(data){
            vm.drugs =data;
        });
        
    };
    
    vm.searchDrug = function(){
        
              console.log("In Search Drug");
                
              console.log(vm.searchOptions.repeatSelect);
              console.log(vm.searchCriteria);
              vm.noData = false;
        
            if(vm.searchOptions.repeatSelect == 1){
                Drug.getDrugByName(vm.searchCriteria).success(function(data){
                    vm.drugRes=data;

                    console.log(vm.drugRes.length);
                    
                    if(!vm.drugRes.length){
                        vm.noData = true;
                    }
                    
                });
            }
            
            if(vm.searchOptions.repeatSelect == 2){
                Drug.getDrugByType(vm.searchCriteria).success(function(data){
                    vm.drugRes=data;

                    console.log(vm.drugRes.length);
                    
                    if(!vm.drugRes.length){
                        vm.noData = true;
                    }
                    
                });
            }
        
    };
    
    
    vm.editDrug = function(drug_id,oldDrug){
       console.log(drug_id);  
        vm.editDrugMode = true;
        vm.upDrugId = drug_id;
        
        vm.updDrug.name = oldDrug.name;
        vm.DrugTypes.typeChoice = oldDrug.drugType;
    };
        

    
    vm.deleteDrug = function(drug_id){
       console.log(drug_id);  
        
       Drug.deleteDrug(drug_id).success(function(data){
                console.log("Drug Delted");
                vm.refreshAndSearch();
                    
        });
       
    };
    
    vm.updateDrug = function(){
        
            vm.updDrug.drugType = vm.DrugTypes.typeChoice;
        
            Drug.updateDrug(vm.upDrugId,vm.updDrug).success(function(data){
                console.log("Drug Updated");
                vm.refreshAndSearch();
                    
            });

    };
    
    


 });