(function() {

    var app = angular.module('CookingBookApp');

    app.config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/addRecipe');

            $stateProvider

            // search recipe
            .state('search', {
                url: '/search',
                templateUrl: 'views/search.html',
                controller: 'CookingBookSearch'
            })

            // add new recipe
            .state('addRecipe', {
                url: '/addRecipe',
                templateUrl: 'views/addRecipe.html',
                controller: 'CookingBookAddRecipeController'
            })

            // edit recipe
            .state('editRecipe', {
                url: '/editRecipe/:recipeID',
                templateUrl: 'views/addRecipe.html',
                controller: 'CookingBookAddRecipeController'
            })

            // view a recipe
            .state('recipe', {
                url: '/recipe/:recipeID',
                templateUrl: 'views/recipe.html',
                controller: 'CookingBookRecipe'
            });

        }
    ]);

})();