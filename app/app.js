angular.module('dashboardApp', ['dashRoutes','ngAnimate','homeCtrl','compCtrl','drugCtrl','prodCtrl','addCompCtrl','addDrugsCtrl','addProdCtrl','companyService','drugService','productService','angularCharts'])

// create the controllers
// this will be the controller for the ENTIRE site

.controller('mainController',[ '$http','$location','$window', function( $http,$location,$window) {

    var vm = this;
    
    vm.test='Hello test';

    // create a bigMessage variable to display in our view
    
    
    vm.logout = function() {
        
         $http.get('/user/logout').success(function(response){
             console.log("Logged out");
//             $window.location="http//localhost:3000/admin";
             $window.location.reload();
             
             
//              var url = "http://" + $window.location.host + "/Account/Login";
//        $log.log(url);
//        $window.location.href = url;
             
                
         });
    };
    
    
//    Company.getCount().success(function(data){
//            vm.companiesCount=data;
//        
//         console.log(typeof vm.companiesCount);
//    });

 }])







