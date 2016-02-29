(function(){
    'use strict';

    angular.module('tableController', [])
        .controller('tableController', tableController);

    tableController.$inject = ['homeService'];

    function tableController(homeService) {

        // list everything
        var tc = this;
        tc.data = homeService.data;
        tc.collateData = collateData;
        tc.displayData = collateData();



        // define functions
        function collateData() {
            var GreenI, BlueI, PurpleI, GreenII, BlueII, PurpleII, GreenIII, BlueIII, PurpleIII, GreenIV, BlueIV, PurpleIV;
            var GreenICount, BlueICount, PurpleICount, GreenIICount, BlueIICount, PurpleIICount, GreenIIICount, BlueIIICount, PurpleIIICount, GreenIVCount, BlueIVCount, PurpleIVCount;
            var multiplier, chestType;

            for (var i = 0; i < tc.data.length; i++) {
                console.log("This is going to be a bit complicated!")
            }


        }


    }

}());
