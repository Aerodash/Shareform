angular.module('starter.controllers', [])
.controller('AuthCtrl', function($scope, $ionicModal, $ionicScrollDelegate) {

  console.log("@AuthCtrl");

  //init login modal
  $ionicModal.fromTemplateUrl('modals/login.html', {
    scope: $scope,
    animation: 'slide-in-up',
    focusFirstInput: true,
    backdropClickToClose: false,
    hardwareBackButtonClose: false
  }).then(function(modal) {
    $scope.loginModal = modal;
    $scope.loginModal.show();
  });

  //init login modal
  $ionicModal.fromTemplateUrl('modals/signup.html', {
    scope: $scope,
    animation: 'slide-in-up',
    focusFirstInput: true,
    backdropClickToClose: false,
    hardwareBackButtonClose: false
  }).then(function(modal) {
    $scope.signupModal = modal;
  });

  //show login modal on entering the view
  $scope.$on('$ionicView.enter', function(e) {
    if ($scope.loginModal)
      $scope.loginModal.show();
  });

})
.controller('LoginCtrl', function($scope, $ionicScrollDelegate, $state, $timeout){

  console.log('@LoginCtrl');

  //when login modal is shown scroll down then lock the scroll
  $scope.$on('modal.shown', function() {
    var loginScrollDelegate = $ionicScrollDelegate.$getByHandle('login-content');

    loginScrollDelegate.scrollBottom(false);
    loginScrollDelegate.freezeScroll(true);
  });

  $scope.login = function() {
    console.log('Login !');

    //hide login modal
    $scope.loginModal.hide();

    //show loading spinner

    //go home screen if login successful
    $timeout(function(){
      //$state.go('app');
      $state.go('app.profile');
    }, 500);

    //else go auth

  }

  $scope.showSignup = function(){
    $scope.loginModal.hide();
    $scope.signupModal.show();
  }

})
.controller('SignupCtrl', function($scope, $ionicScrollDelegate){

  console.log('@SignupCtrl');

  $scope.$on('modal.shown', function() {
    var loginScrollDelegate = $ionicScrollDelegate.$getByHandle('signup-content');

    loginScrollDelegate.freezeScroll(true);
  });

  $scope.signup = function() {
    console.log('Signup !');
  }

  $scope.closeSignup = function(){
    $scope.signupModal.hide();
    $scope.loginModal.show();
  }
})
.controller('AppCtrl', function($scope, $timeout, $ionicPopover){

  console.log('@AppCtrl');

  //variable to control animated appearance of this view
  $scope.showScreen = false;

  //on enter show
  $scope.$on('$ionicView.enter', function(e) {

    $timeout(function(){
      $scope.showScreen = true;
    }, 500);

  });

  //on leave hide
  $scope.$on('$ionicView.leave', function(e) {
    $scope.showScreen = false;
  });

  //chat popover
  $ionicPopover.fromTemplateUrl('popovers/chat.html', {
    scope: $scope,
    animation: 'slide-in-up',
    focusFirstInput: true
  }).then(function(popover) {
    $scope.chatPopover = popover;
  });

  $scope.showChat = function($event){
    $scope.chatPopover.show($event);
  }

})
.controller('ProfileCtrl', function($scope){

  console.log('@ProfileCtrl');


})
.controller('ChatPopoverCtrl', function($scope){

  console.log('@ChatPopoverCtrl');

  $scope.chats = {
    favorites : [
      {
        name: 'James Anderson',
        img: 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg',
        online: true
      },
      {
        name: 'Brad Frost',
        img: 'https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg',
        online: false
      },
      {
        name: 'Iris',
        img: 'https://s3.amazonaws.com/uifaces/faces/twitter/pixeliris/128.jpg',
        online: true
      },
      {
        name: 'Abinav Thakuri',
        img: 'https://s3.amazonaws.com/uifaces/faces/twitter/abinav_t/128.jpg',
        online: false
      }
    ]
  };
  $scope.chatSearchBox = '';

  $scope.clearSearchBox = function(){
    $scope.chatSearchBox = '';
  }
})
