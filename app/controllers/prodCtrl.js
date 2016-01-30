angular.module('prodCtrl',['productService'])


 // contact page controller
 .controller('ProductsController', function(Product) {

     var vm = this;
    
    
      vm.searchOptions = {
      repeatSelect: 1,
      availableOptions: [
        {id: '1', name: 'Name'},
        {id: '2', name: 'Drug'},
        {id: '3', name: 'Product Type'},
        {id: '4', name: 'Company'},
      ],
     };
    
    vm.productsRes={};
    
    vm.noData = false;
    vm.editProductMode=false;
     vm.updProduct={};
    
    
    Product.getProductsRecent().success(function(data){
        vm.products =data;
    });
    
    
    vm.searchProduct = function(){
        
              console.log("In Search products");
                
              console.log(vm.searchOptions.repeatSelect);
              console.log(vm.searchCriteria);
              vm.noData = false;
        
            if(vm.searchOptions.repeatSelect == 1){
                Product.getProductByName(vm.searchCriteria).success(function(data){
                    vm.productsRes=data;
//                    console.log(vm.companiesRes);
                    console.log(vm.productsRes.length);
                    
                    if(!vm.productsRes.length){
                        vm.noData = true;
                    }
                    
                });
            }
            
            if(vm.searchOptions.repeatSelect == 2){
                Product.getProductByDrug(vm.searchCriteria).success(function(data){
                    vm.productsRes=data;
//                    console.log(vm.companiesRes);
                    console.log(vm.productsRes.length);
                    
                    if(!vm.productsRes.length){
                        vm.noData = true;
                    }
                    
                });
            }
        
            if(vm.searchOptions.repeatSelect == 3){
                Product.getProductByType(vm.searchCriteria).success(function(data){
                    vm.productsRes=data;
//                    console.log(vm.companiesRes);
                    console.log(vm.productsRes.length);
                    
                    if(!vm.productsRes.length){
                        vm.noData = true;
                    }
                    
                });
            }
        
            if(vm.searchOptions.repeatSelect == 4){
                Product.getProductByCompany(vm.searchCriteria).success(function(data){
                    vm.productsRes=data;
//                    console.log(vm.companiesRes);
                    console.log(vm.productsRes.length);
                    
                    if(!vm.productsRes.length){
                        vm.noData = true;
                    }
                    
                });
            }

        
            
  
    };
    
    
    
    
    
    vm.editProduct = function(product_id,oldProduct){
        vm.editProductMode = true;
        vm.updProductId = product_id;
        vm.updProduct.name = oldProduct.name;
        vm.updProduct.company = oldProduct.company;
        vm.updProduct.productType = oldProduct.productType;
        vm.updProduct.medicineType = oldProduct.medicineType;
        vm.updProduct.drug = oldProduct.drug;
        vm.updProduct.drugType = oldProduct.drugType;
        vm.updProduct.mrp = oldProduct.mrp;
        vm.updProduct.ptr = oldProduct.ptr;
        vm.updProduct.franchise = oldProduct.franchise;
        
    };
    
    
    vm.refreshAndSearch = function()    {
        
        vm.editProductMode=false;
        vm.searchProduct();
        
        Product.getProductsRecent().success(function(data){
            vm.products =data;
        });
    
        
    };
    
    
    vm.deleteProduct = function(product_id){
       console.log(product_id);  
        
        Product.deleteProduct(product_id).success(function(data){
                console.log("Product Delted");
                vm.refreshAndSearch();
                    
        });
    };
    
    vm.updateProduct = function(){      
        
            Product.updateProduct(vm.updProductId,vm.updProduct).success(function(data){
                console.log("Product Updated");
                vm.refreshAndSearch();
                    
            });

    };
    
    


 });