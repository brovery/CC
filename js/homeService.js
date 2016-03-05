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
        hs.averages = [{},{},{},{},{},{},{},{},{},{},{},{}];
        hs.shardValue = {
            Slime: 5,
            Crystal: 30,
            Champion: 150,
            Master: 750,
            HeroSlot: 0,
            DungeonEntry: 50,
            ShardPackI: 10,
            ShardPackII: 50,
            ShardPackIII: 200,
            QuestCompletion: 0,
            QuestRefresh: 100,
            GreenHeroCard: 5,
            BlueHeroCard: 12,
            MonsterPass: 75
        };

        // run these functions on startup?
        hs.data.$loaded().then(function() {
            calculateData();
        });


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
            hs.data.$add(obj).then(function() {
                calculateData();
                console.log("data added!");
            });
        }

        function calculateData() {
            var greenI = 0,greenIVal = 0,greenII = 0,greenIIVal = 0,greenIII = 0,greenIIIVal = 0,greenIV = 0,
                greenIVVal = 0,blueI = 0,blueIVal = 0,blueII = 0,blueIIVal = 0,blueIII = 0,blueIIIVal = 0,
                blueIV = 0,blueIVVal = 0,purpleI = 0,purpleIVal = 0,purpleII = 0,purpleIIVal = 0,purpleIII = 0,
                purpleIIIVal = 0,purpleIV = 0,purpleIVVal = 0,val = 0;
            for (var i = 0; i < hs.data.length; i++) {
                val = getShardValue(hs.data[i]);

                if (hs.data[i].Level == "I" && hs.data[i].ChestColor == "Green") {
                    greenI++;
                    greenIVal += val;
                } else if (hs.data[i].Level == "II" && hs.data[i].ChestColor == "Green") {
                    greenII++;
                    greenIIVal += val;
                } else if (hs.data[i].Level == "III" && hs.data[i].ChestColor == "Green") {
                    greenIII++;
                    greenIIIVal += val;
                } else if (hs.data[i].Level == "IV" && hs.data[i].ChestColor == "Green") {
                    greenIV++;
                    greenIVVal += val;
                } else if (hs.data[i].Level == "I" && hs.data[i].ChestColor == "Blue") {
                    blueI++;
                    blueIVal += val;
                } else if (hs.data[i].Level == "II" && hs.data[i].ChestColor == "Blue") {
                    blueII++;
                    blueIIVal += val;
                } else if (hs.data[i].Level == "III" && hs.data[i].ChestColor == "Blue") {
                    blueIII++;
                    blueIIIVal += val;
                } else if (hs.data[i].Level == "IV" && hs.data[i].ChestColor == "Blue") {
                    blueIV++;
                    blueIVVal += val;
                } else if (hs.data[i].Level == "I" && hs.data[i].ChestColor == "Purple") {
                    purpleI++;
                    purpleIVal += val;
                } else if (hs.data[i].Level == "II" && hs.data[i].ChestColor == "Purple") {
                    purpleII++;
                    purpleIIVal += val;
                } else if (hs.data[i].Level == "III" && hs.data[i].ChestColor == "Purple") {
                    purpleIII++;
                    purpleIIIVal += val;
                } else if (hs.data[i].Level == "IV" && hs.data[i].ChestColor == "Purple") {
                    purpleIV++;
                    purpleIVVal += val;
                } else {
                    alert("You should NOT have gotten to this point. Something went wrong!")
                }
            }



            hs.averages[0].average = greenI != 0 ? greenIVal/greenI : 0;
            hs.averages[0].quantity = greenI;
            hs.averages[1].average = blueI != 0 ? blueIVal/blueI : 0;
            hs.averages[1].quantity = blueI;
            hs.averages[2].average = purpleI != 0 ? purpleIVal/purpleI : 0;
            hs.averages[2].quantity = purpleI;
            hs.averages[3].average = greenII != 0 ? greenIIVal/greenII : 0;
            hs.averages[3].quantity = greenII;
            hs.averages[4].average = blueII != 0 ? blueIIVal/blueII : 0;
            hs.averages[4].quantity = blueII;
            hs.averages[5].average = purpleII != 0 ? purpleIIVal/purpleII : 0;
            hs.averages[5].quantity = purpleII;
            hs.averages[6].average = greenIII != 0 ? greenIIIVal/greenIII : 0;
            hs.averages[6].quantity = greenIII;
            hs.averages[7].average = blueIII != 0 ? blueIIIVal/blueIII : 0;
            hs.averages[7].quantity = blueIII;
            hs.averages[8].average = purpleIII != 0 ? purpleIIIVal/purpleIII : 0;
            hs.averages[8].quantity = purpleIII;
            hs.averages[9].average = greenIV != 0 ? greenIVVal/greenIV : 0;
            hs.averages[9].quantity = greenIV;
            hs.averages[10].average = blueIV != 0 ? blueIVVal/blueIV : 0;
            hs.averages[10].quantity = blueIV;
            hs.averages[11].average = purpleIV != 0 ? purpleIVVal/purpleIV : 0;
            hs.averages[11].quantity = purpleIV;
        }

        function getShardValue(obj) {
            return (hs.shardValue[obj.R1Type]*obj.R1Num + hs.shardValue[obj.R2Type]*obj.R2Num);
        }
    }

}());
