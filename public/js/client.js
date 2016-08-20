var app = angular.module('mainApp', ['ngRoute','ngResource']);

app.config(['$locationProvider', function($locationProvider){
    $locationProvider.html5Mode({
  enabled: true,
  requireBase: false
}).hashPrefix('!');
}]);


app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

   $routeProvider

      .when('/', {
         templateUrl: 'partials/index.html',
         controller: 'HomeCtl'
      })

      .when('/about', {
         templateUrl: 'partials/about.html',
         controller: 'AboutCtl'
      })

      .when('/erp', {
         templateUrl: 'partials/erp-implementation.html',
         controller: 'erpCtl'
      })

      .when('/digitalmarketing', {
         templateUrl: 'partials/digital-marketing.html',
         controller: 'DigitalMarketingCtl'
      })

      .when('/mobile', {
         templateUrl: 'partials/mobile.html',
         controller: 'MobileCtl'
      })

      .when('/website', {
         templateUrl: 'partials/website.html',
         controller: 'WebCtl'
      })

      .when('/ecommerce', {
         templateUrl: 'partials/ecommerce.html',
         controller: 'WebCtl'
      })

      .when('/team', {
         templateUrl: 'partials/team.html',
         controller: 'TeamCtl'
      })

      .when('/contact', {
         templateUrl: 'partials/contact.html',
         controller: 'CntCtl'
      })



   $locationProvider.html5Mode(true);
   $locationProvider.hashPrefix('!');

}]);


function NavCtl($scope) { 
  // We will create an seo variable on the scope and decide which fields we want to populate 
  $scope.seo = { 
    pageTitle : '', 
    pageDescription : '' 
  }; 
}

app.controller('NavCtl', function($scope, $http, $location, $route) {

   $scope.home = function(){
      $location.path('/');
   }

   $scope.about = function(){
      $location.path('/about');
   }

   $scope.erp = function() {
      $location.path('/erp')
   }

   $scope.website = function() {
      $location.path('/website')
   }

   $scope.ecommerce = function() {
      $location.path('/ecommerce')
   }

   $scope.digitalmarketing = function() {
      $location.path('/digitalmarketing')
   }

   $scope.mobile = function() {
      $location.path('/mobile')
   }

   $scope.contact = function() {
      $location.path('/contact');
    }
    
   $scope.team = function() {
      $location.path('/team')
   }

});

function AboutCtl($scope) { 
  $scope.$parent.seo = { 
    pageTitle : 'ABOUT', 
    pageDescription : 'ABOUT US' 
  }; 
}

// app.service('MetaService', function() {
//        var title = '';
//        var metaDescription = '';
//        var metaKeywords = '';
//        return {
//           set: function(newTitle, newMetaDescription, newKeywords) {
//               metaKeywords = newKeywords;
//               metaDescription = newMetaDescription;
//               title = newTitle; 
//           },
//           metaTitle: function(){ return title; },
//           metaDescription: function() { return metaDescription; },
//           metaKeywords: function() { return metaKeywords; }
//        }
//     });
    
//     app.controller('HomeCtl',function($scope,$rootScope,MetaService){
//       $rootScope.metaservice = MetaService;
//       $rootScope.metaservice.set("DIGITAL ERP: Home",
//         "Digital Marketing System is a leading software company which provide ERP software,web development,digital marketing,search engine optimization and mobile application development",
//         "Digital Marketing System indore, erp software, website development indore, seo, digital marketing, software indore, custom erp indore");
//    });

//    app.controller('AboutCtl',function($scope,$rootScope,MetaService){
//       $rootScope.metaservice = MetaService;
//       $rootScope.metaservice.set("DIGITAL ERP: About",
//         "Digital ERP is enterprise that provide all services to the growth of organization",
//         "About us, Know about our company, Digital ERP");
//    });

//    app.controller('erpCtl',function($scope,$rootScope,MetaService){
//       $rootScope.metaservice = MetaService;
//       $rootScope.metaservice.set("DIGITAL ERP: Erp Implementation",
//         "Digital marketing system customized erp software according to the requirement of clinets at affordable rate",
//         "erp software in indore, custom software, financial management erp, inventory & warehouse wanagement erp, pay roll & HR management erp,custom erp software indore,hotel erp");
//    });

//    app.controller('DigitalMarketingCtl',function($scope,$rootScope,MetaService){
//       $rootScope.metaservice = MetaService;
//       $rootScope.metaservice.set("DIGITAL ERP: Digital Marketing",
//         "Increase your presence globally by digital marketing, seo provided by digital marketing system",
//         "Digital marketing, seo, smo, ppc, seo indore, digital marketing indore, search engine optimization indore, marketing indore");
//    });

//    app.controller('MobileCtl',function($scope,$rootScope,MetaService){
//       $rootScope.metaservice = MetaService;
//       $rootScope.metaservice.set("DIGITAL ERP: Mobile",
//         "Digital marketing system develop mobile application in android and Ios operating system as their is an increase mobile users",
//         "mobile application development, mobile app indore, appication development indore, software development indore, digital marketing");
//    });

//    app.controller('WebCtl',function($scope,$rootScope,MetaService){
//       $rootScope.metaservice = MetaService;
//       $rootScope.metaservice.set("DIGITAL ERP: Website",
//         "Digital marketing system provide website development and maintenance considering all security aspects",
//         "web development indore, website development, develop website, update website, website indore, maintenance of website");
//    });

//    app.controller('TeamCtl',function($scope,$rootScope,MetaService){
//       $rootScope.metaservice = MetaService;
//       $rootScope.metaservice.set("DIGITAL ERP: Team","desc","blah blah");
//    });

//    app.controller('CntCtl',function($scope,$rootScope,MetaService){
//       $rootScope.metaservice = MetaService;
//       $rootScope.metaservice.set("DIGITAL ERP: Contact",
//         "Contact as at, mail us at",
//         "Contact us, call on, contact no. digital marketing system, digital marketing system indore contact number");
//    });