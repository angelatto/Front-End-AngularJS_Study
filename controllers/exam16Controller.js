// 메인 모듈인 app을 가져온다. 
angular.module("app")
.controller("exam16Controller", function($scope){
    $scope.view = {
        modes: ["none", "table", "list"],
        mode: "none"
    };
   
    $scope.todos = [
        {action: "동영상 녹화", complete: false},
        {action: "앵귤러JS 복습", complete: false},
        {action: "알마인드", complete: false},
        {action: "밥먹기", complete: false}
    ];
});