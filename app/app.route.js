// inject ngRoute for all our routing needs
angular.module('dashRoutes', ['ngRoute'])

    // configure our routes
    .config(function($routeProvider, $locationProvider) {
        $routeProvider

        // route for the home page
        .when('/admin', {
             templateUrl : 'app/views/home.html',
             controller : 'homeController',
             controllerAs: 'home'
         })

          //route for the about page
         .when('/companies', {
             templateUrl : 'app/views/companies.html',
             controller : 'CompaniesController',
             controllerAs: 'companies'
         })
         
         .when('/drugs', {
             templateUrl : 'app/views/drugs.html',
             controller : 'DrugsController',
             controllerAs: 'drugs'
         })
        
         // route for the contact page
         .when('/products', {
            templateUrl : 'app/views/products.html',
            controller : 'ProductsController',
            controllerAs: 'products'
         })
        
                 // route for adding company
         .when('/addCompany', {
            templateUrl : 'app/views/addCompany.html',
            controller : 'addCompController',
            controllerAs: 'addComp'
         })
        
         .when('/addProduct', {
            templateUrl : 'app/views/addProduct.html',
            controller : 'addProdController',
            controllerAs: 'addProd'
         })
        
         .when('/addDrugs', {
            templateUrl : 'app/views/addDrug.html',
            controller : 'addDrugsController',
            controllerAs: 'addDrugs'
         });
        
//         .when('/user/logout',{
//             templateUrl : 'app/views/home.html',
//             controller : 'homeController',
//             controllerAs: 'home'
//        });
    
    
    
        // set our app up to have pretty URLS
        $locationProvider.html5Mode(true);
});