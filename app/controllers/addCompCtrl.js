angular.module('addCompCtrl',['companyService'])


 // about page controller
 .controller('addCompController', function(Company,$timeout) {

     var vm = this;
    
     vm.newCompany ={
         
       franchise : true
     };
    
    
     vm.CompanyTypes = {
      typeChoice: 'Allopathy',
      availableOptions: [
        {id: 'Allopathy', name: 'Allopathy'},
        {id: 'Surgical', name: 'Surgical'},
        {id: 'Ayurvedic', name: 'Ayurvedic'},
        {id: 'Others', name: 'Others'}
      ],
     };
    
    
    vm.operationalStates = {
      stateChoice: null,
      availableStates: [
        {id: 'AN', name: 'Andaman and Nicobar Islands'},
        {id: 'AP', name: 'Andhra Pradesh'},
        {id: 'AR', name: 'Arunachal Pradesh'},
        {id: 'AS', name: 'Assam'},
		{id: 'BR', name: 'Bihar'},
        {id: 'CG', name: 'Chhattisgarh'},
        {id: 'CH', name: 'Chandigarh'},
        {id: 'DD', name: 'Daman and Diu'},
		{id: 'DL', name: 'Delhi'},
        {id: 'DN', name: 'Dadra and Nagar Haveli'},
        {id: 'GA', name: 'Goa'},
        {id: 'GJ', name: 'Gujarat'},
		{id: 'HR', name: 'Haryana'},
        {id: 'HP', name: 'Himachal Pradesh'},
        {id: 'JH', name: 'Jharkhand'},
        {id: 'JK', name: 'Jammu and Kashmir'},
		{id: 'KA', name: 'Karnataka'},
        {id: 'KL', name: 'Kerala'},
        {id: 'LD', name: 'Lakshadweep'},
        {id: 'MH', name: 'Maharashtra'},
		{id: 'ML', name: 'Meghalaya'},
        {id: 'MN', name: 'Manipur'},
        {id: 'MP', name: 'Madhya Pradesh'},
        {id: 'MZ', name: 'Mizoram'},
		{id: 'NL', name: 'Nagaland'},
        {id: 'OD', name: 'Odisha'},
        {id: 'PB', name: 'Punjab'},
        {id: 'PY', name: 'Puducherry'},
		{id: 'RJ', name: 'Rajasthan'},
        {id: 'SK', name: 'Sikkim'},
        {id: 'TN', name: 'Tamil Nadu'},
        {id: 'TR', name: 'Tripura'},
        {id: 'TS', name: 'Telangana'},
        {id: 'UK', name: 'Uttarakhand'},
        {id: 'UP', name: 'Uttar Pradesh'},
        {id: 'WB', name: 'West Bengal'}
      ],
     };
    
     
    
     vm.createCompany = function() {
         console.log("Yippee!!:"+vm.newCompany.name);
         vm.newCompany.companyType = vm.CompanyTypes.typeChoice;
         console.log(vm.newCompany.companyType);
         
         vm.newCompany.operationalStates = vm.operationalStates.stateChoice;
         console.log(vm.newCompany.operationalStates);
         
         
         
          Company.create(vm.newCompany).success(function(data){
             vm.newCompany ={};
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