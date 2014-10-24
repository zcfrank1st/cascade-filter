/**
 * Created by zcfrank1st on 10/24/14.
 */
angular
    .module('myControllers',[])
    .controller('mockContrl', function ($scope) {
        $scope.data = [{
            one: '上海',
            two: [{
                    name: 'A',
                    id: '1'
                },
                {
                    name: 'B',
                    id: '2'
                },
                {
                    name: 'C',
                    id: '3'
                }]
        },
            {
                one: '南京',
                two: [{
                    name: 'AA',
                    id: '11'
                },
                    {
                        name: 'BB',
                        id: '22'
                    },
                    {
                        name: 'CC',
                        id: '33'
                    },{
                        name: 'DD',
                        id: '44'
                    }]
            }];

        $scope.trigger = function (item) {
            for (var i = 0 ; i <= $scope.data.length - 1; i++){
                $scope.data[i].show = false;
                $scope.data[i].active = false;
            }
            item.show = true;
            item.active = true;
            $scope.obtain = -1; // 归零判定
        };

        $scope.trigger2 = function (item2) {
            for (var i = 0 ; i <= $scope.data.length - 1; i++){
                for (var j = 0 ; j <= $scope.data[i].two.length - 1; j++) {
                    $scope.data[i].two[j].active = false;
                }
            }
            item2.active = true;
            $scope.obtain = item2.id; // 获取维表特定id
        };

    });