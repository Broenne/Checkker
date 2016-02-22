var app=angular.module('starter.controllers', [])


app.controller('CheckkerCtrl', function($scope) {
    console.log("hello");
    $scope.meterNumberInput="";
    $scope.MeterNumberToAscii = function (data){
        
        console.log(data);
    }
});

/*.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
*/