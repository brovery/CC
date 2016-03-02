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
        hs.calculateData = calculateData;
        hs.averagesData = {
            LevelI: {
                Chests: {
                    Green: {
                        shardValue: 0
                    },
                    Blue: {
                        shardValue: 0
                    },
                    Purple: {
                        shardValue: 0
                    }
                }
            },
            LevelII: {
                Chests: {
                    Green: {
                        shardValue: 0
                    },
                    Blue: {
                        shardValue: 0
                    },
                    Purple: {
                        shardValue: 0
                    }
                }
            },
            LevelIII: {
                Chests: {
                    Green: {
                        shardValue: 0
                    },
                    Blue: {
                        shardValue: 0
                    },
                    Purple: {
                        shardValue: 0
                    }
                }
            },
            LevelIV: {
                Chests: {
                    Green: {
                        shardValue: 0
                    },
                    Blue: {
                        shardValue: 0
                    },
                    Purple: {
                        shardValue: 0
                    }
                }
            }
        };


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

        function calculateData() {
            for (var i = 0; i < hs.data.length; i++) {
                
            }

        }
    }

}());
