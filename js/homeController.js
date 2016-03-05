(function(){
    'use strict';

    angular.module('homeController', [])
        .controller('homeController', homeController);

    homeController.$inject = ['homeService'];

    function homeController(homeService) {

        // list everything
        var hc = this;
        hc.data = homeService.data;
        hc.newData = [];
        hc.chest = '';
        hc.R1Num = 0;
        hc.R1Type = '';
        hc.R2Num = 0;
        hc.r2Type = '';
        hc.createData = createData;
        hc.addData = addData;

        // define functions
        function createData() {
            homeService.createData();
        }

        function addData() {
            for (var i = 0; i < hc.newData.length; i++) {
                homeService.addData(hc.newData[i]);
            }

            hc.newData = [];
        }


    }

}());
