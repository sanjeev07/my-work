angular.module('homeCtrl',['companyService','drugService','productService'])

 // home page specific controller
 .controller('homeController', function(Company,Drug,Product) {
    
    var vm = this;
    
    vm.chartType="pie";
    
        
    Company.getCount().success(function(data){
            vm.companiesCount=data;
        
         console.log(typeof vm.companiesCount);
    });
    
    Drug.getCount().success(function(data){
        
            vm.drugsCount=data;
    });
    
    Product.getCount().success(function(data){
        
            vm.productsCount=JSON.stringify(data);
        
            vm.statData =  {
                series: [],
                data: [{
                  x: "  Companies",
                  y: [vm.companiesCount]
                }, {
                  x: "  Products",
                  y: [vm.productsCount]
                }, {
                  x: "  Drugs",
                  y: [ vm.drugsCount]
                }, {
                  x: "  Users",
                  y: [1]
                }]
            };
        
        
//            vm.prodNo = JSON.stringify(vm.productsCount) ;
//            console.log(vm.prodNo);
//            console.log(typeof vm.prodNo)
        
        
    });
        vm.usersCount=1;
    

    vm.data =  {
        series: [],
        data: [{
          x: "  Allopathy",
          y: [5]
        }, {
          x: "  Ayurvedic",
          y: [3]
        }, {
          x: "  Surgical",
          y: [2]
        }, {
          x: "  Others",
          y: [1]
        }]
      };
    
    


    
    vm.pieConfig = {
        title: 'Types of Companies',
        tooltips: true,
        labels: false,
        "innerRadius": 54,
        mouseover: function() {},
        mouseout: function() {},
        click: function() {},
        colors: ['steelblue','Chartreuse','CadetBlue','DarkSalmon'],
        lineCurveType: 'cardinal', // change this as per d3 guidelines to avoid smoothline
        legend: {
          display: true,
          //could be 'left, right'
          position: 'right'
        }
      };
    
    vm.barConfig = {
        title: 'Statistics',
        tooltips: true,
        labels: false,
        "innerRadius": 0,
        mouseover: function() {},
        mouseout: function() {},
        click: function() {},
        lineCurveType: 'cardinal', // change this as per d3 guidelines to avoid smoothline
        colors: ['steelblue'],
        legend: {
          display: false,
          //could be 'left, right'
          position: 'right'
        }
      };
    

    





 });