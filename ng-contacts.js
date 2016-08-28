/**
 * It's a AngularJS mobile contacts.
 * @version  v1.0.0
 * @author front-thinking <Xjw919@gmail.com>
 * @link front-thinking.github.io
 * @copyright Copyright &copy; 2016
 * @license MIT
 */
;(function (CONTACTS_DIRECTIVE){

    var m = angular.module('ngContacts', []);
    m.version = '1.0.0';


    // 将数据转换为分组字母顺序联系人信息
    function process(data) {

        var contactMap = {};

        data.map(function(v) {
            var alph = v.py[0].toLowerCase();
            if(!!contactMap[alph]){
                contactMap[alph].push(v);
            } else {
                contactMap[alph] = [v];
            }
        });
        // 将contactMap转换成二维数组并按字母排序。
        if(Object.keys(contactMap).length !== 0){
            var contactGroupArray = Object.keys(contactMap).map(function (key) {return contactMap[key]}).sort(function (a,b) {
                if(a[0]['py'][0] >= b[0]['py'][0]){
                    return 1;
                } else if (a[0]['py'][0] == b[0]['py'][0]) {
                    return 0;
                } else {
                    return -1;
                }

            });
        }
        return contactGroupArray;
    }

    m.directive('ngContacts', ['$parse', '$compile', '$location', '$anchorScroll', function($parse, $compile, $location, $anchorScroll) {

        return {
            restrict: "AE",
            replace: true,
            scope: {
                history : "=",
                data : "=",
                title: "="
            },
            templateUrl: 'contacts.html',
            link: function ($scope, $element, $attrs){
                $scope.title = $scope.title || '通讯录';
                $scope.isNull = true;//默认国家和地区数据为空
                $scope.historyIsNull = true; //默认历史数据为空
                $scope.search = '';

                //var historyData = $attrs.ngCtHistory;

                $scope.history = $scope.history || [];

                var data = $scope.data || [];


                if($scope.history.length !== 0){
                    $scope.historyIsNull = false;
                }

                if(data.length === 0){
                    $scope.isNull = true;
                } else {
                    $scope.isNull = false;
                    $scope.contactGroup = process(data);
                }

                // 导航点击滚动
                $scope.go = function(v){
                    var idSelector = 'group-' + v.toLowerCase();
                    $location.hash(idSelector);
                    $anchorScroll();

                };

                // 历史选择切换
                $scope.choose = function(v){
                    $scope.search = v;
                };
            }
        };
    }]);








})();