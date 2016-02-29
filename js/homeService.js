(function(){
    'use strict';

    angular.module('homeService', [])
        .service('homeService', homeService);

    homeService.$inject = ['$firebaseArray'];

    function homeService($firebaseArray) {
        var url = 'https://blistering-heat-9918.firebaseio.com/';
        var smRef = new Firebase(url + '/StormMesa');

        // list everything
        var hs = this;
        hs.data = $firebaseArray(smRef);
        hs.createData = createData;
        hs.addData = addData;


        // define functions
        function createData() {
            var newData = {
                Level: 'II',
                ChestColor: 'Green',
                R1Num: 4,
                R1Type: 'Slime',
                R2Num: 1,
                R2Type: 'Crystal'
            };
            hs.data.$add(newData);
        }

        function addData(obj) {
            hs.data.$add(obj);
        }
    }

}());
