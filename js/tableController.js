(function(){
    'use strict';

    angular.module('tableController', [])
        .controller('tableController', tableController);

    tableController.$inject = ['homeService'];

    function tableController(homeService) {

        // list everything
        var tc = this;
        tc.data = homeService.data;
        tc.averages = homeService.averages;

        // define functions



    }

}());
