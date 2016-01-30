angular.module('addProdCtrl',['productService','companyService','drugService'])


 // about page controller
 .controller('addProdController', function(Product,Company,Drug,$timeout) {

    var vm = this;
    
    vm.newProduct={};
    
    vm.selectedRow ={};
    vm.selectedDrugRow ={};
    
    vm.ProductTypes = {
      prodTypeChoice: 'Medicine',
      availableOptions: [
        {id: 'Medicine', name: 'Medicine'},
        {id: 'Equipment', name: 'Equipment'},
        {id: 'Surgical', name: 'Surgical'},  
        {id: 'Others', name: 'Others'}
      ],
     };
    
    
    vm.MedicineTypes = {
      medTypeChoice: null,
      availableOptions: [
        {id: 'Tablet', name: 'Tablet'},
        {id: 'Capsule', name: 'Capsule'},
        {id: 'Syrup', name: 'Syrup'},
        {id: 'Others', name: 'Others'}
      ],
     };
    
    
    vm.DrugTypes = {
      drugTypeChoice: null,
      availableOptions: [
        {id: 'Scheduled H', name: 'Scheduled H'},
        {id: 'Scheduled K', name: 'Scheduled K'},
        {id: 'Non Scheduled', name: 'Non Scheduled'},
        {id: 'Vitamins', name: 'Vitamins'},
        {id: 'General', name: 'General'},  
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
    
  
    
    vm.selectLookupDrug= function(dName,index){
        console.log("cName"+dName);
        vm.selectedDrugRow = index;
        vm.newProduct.drug = dName;
    }
    
    vm.modalGetDrug = function(){
        
         Drug.getDrugByName(vm.modalDrugName).success(function(data){
                    vm.lookupDrugs=data;
                    console.log(vm.lookupDrugs);
                    console.log(vm.lookupDrugs.length);
                    
                    
         });
        
    }
    
    
    vm.modalGetComp = function(){
        
         Company.getCompanyByName(vm.modalCompanyName).success(function(data){
                    vm.lookupCompanies=data;
                    console.log(vm.lookupCompanies);
                    console.log(vm.lookupCompanies.length);
                    
                    
         });
        
    }
    
    
    vm.selectLookupComp= function(cName,index){
        console.log("cName"+cName);
        vm.selectedRow = index;
        vm.newProduct.company = cName;
    }
     
     vm.createProduct = function() {
         
          
          vm.newProduct.drugType= vm.DrugTypes.drugTypeChoice;
          vm.newProduct.productType= vm.ProductTypes.prodTypeChoice;
          vm.newProduct.medicineType= vm.MedicineTypes.medTypeChoice;
          vm.newProduct.operationalStates = vm.operationalStates.stateChoice;
         
          console.log(vm.newProduct.name+":"+vm.newProduct.drugType)
         
          Product.create(vm.newProduct).success(function(data){
             vm.newProduct ={};
             vm.DrugTypes.drugTypeChoice=null;
             vm.ProductTypes.prodTypeChoice=null;
             vm.MedicineTypes.medTypeChoice=null;
             vm.operationalStates.stateChoice=null;
              
             console.log("Success");  
             vm.confirmMessage =data.success;
              
             $timeout(function(){
                  vm.confirmMessage =null;
                  }, 2400); 
             
          }).error(function(data){
              vm.confirmMessage =data.error;
              console.log("Fail");
              
              $timeout(function(){
                  vm.confirmMessage =null;
                  }, 2400); 
          });
                    
     }


 });