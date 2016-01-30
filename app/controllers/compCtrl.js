angular.module('compCtrl',['companyService'])


 // about page controller
 .controller('CompaniesController', function(Company) {

     var vm = this;
         
     vm.companiesRes={};
     vm.noData = false;
     vm.editCompanyMode=false;
     vm.updCompany={}

    
     vm.searchOptions = {
      repeatSelect: 1,
      availableOptions: [
        {id: '1', name: 'Email'},
        {id: '2', name: 'Name'},
        {id: '3', name: 'Type'}
      ],
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
    
    

    
    Company.getAll().success(function(data){
        vm.companies =data;
    });
    

    
    vm.searchCompany = function(){
        
              console.log("In Search Company");
                
              console.log(vm.searchOptions.repeatSelect);
              console.log(vm.searchCriteria);
              vm.noData = false;
        
            if(vm.searchOptions.repeatSelect == 1){
                Company.getCompanyByEmail(vm.searchCriteria).success(function(data){
                    vm.companiesRes=data;
                    console.log(vm.companiesRes);
                    console.log(vm.companiesRes.length);
                    
                    if(!vm.companiesRes.length){
                        vm.noData = true;
                    }
                    
                });
            }
            
            if(vm.searchOptions.repeatSelect == 2){
                Company.getCompanyByName(vm.searchCriteria).success(function(data){
                    vm.companiesRes=data;
                    console.log(vm.companiesRes);
                    console.log(vm.companiesRes.length);
                    
                    if(!vm.companiesRes.length){
                        vm.noData = true;
                    }
                    
                });
            }
        
            
            if(vm.searchOptions.repeatSelect == 3){
                Company.getCompanyByType(vm.searchCriteria).success(function(data){
                    vm.companiesRes=data;
                    console.log(vm.companiesRes);
                    console.log(vm.companiesRes.length);
                    
                    if(!vm.companiesRes.length){
                        vm.noData = true;
                    }
                    
                });
            }
        
            
  
    };
    
    vm.editCompany = function(company_id,oldCompany){
        vm.editCompanyMode = true;
        vm.updCompanyId = company_id;
        
        vm.updCompany.name = oldCompany.name;
        vm.updCompany.email = oldCompany.email;
        vm.updCompany.poc = oldCompany.poc;
        vm.updCompany.mobile = oldCompany.mobile;
        vm.updCompany.phone = oldCompany.phone;
        vm.updCompany.licenseNo = oldCompany.licenseNo;
        vm.updCompany.briefIntro = oldCompany.briefIntro;
        vm.updCompany.franchise = oldCompany.franchise;
        vm.updCompany.street = oldCompany.address.street;
        vm.updCompany.city = oldCompany.address.city;
        vm.updCompany.state = oldCompany.address.state;       
        
    };
    
    
    vm.refreshAndSearch = function()    {
        vm.editCompanyMode=false;
        vm.searchCompany();
    };
    

    vm.deleteCompany = function(company_id){
       console.log(company_id);  
       
        Company.deleteCompany(company_id).success(function(data){
                console.log("Company Delted");
                vm.refreshAndSearch();
                    
        });
       
       
    };
    
    vm.updateCompany = function(){      
        
            Company.updateCompany(vm.updCompanyId,vm.updCompany).success(function(data){
                console.log("Company Updated");
                vm.refreshAndSearch();
                    
            });

    };
    
    
    
    

 });