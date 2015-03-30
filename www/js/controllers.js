angular.module('starter.controllers', [])

.controller('requestCtrl', function($scope,$state) {
  // display signup modal
  
  $scope.go = function(index){
    if(index == 1){
      $state.go("tab.explorerDetails",{"itemId": 1});
    }
        if(index == 2){
      $state.go("tab.explorerDetails",{"itemId": 2});
    }
        if(index == 3){
      $state.go("tab.explorerDetails",{"itemId": 3});
    }
        if(index == 4){
      $state.go("tab.explorerDetails",{"itemId": 4});
    }
        if(index == 5){
      $state.go("tab.explorerDetails",{"itemId": 5});
    }
        if(index == 6){
      $state.go("tab.explorerDetails",{"itemId": 6});
    }
        if(index == 7){
      $state.go("tab.explorerDetails",{"itemId": 7});
    }
        if(index == 8){
      $state.go("tab.explorerDetails",{"itemId": 8});
    }
  }
})

.controller('explorerDetailsCtrl', function($scope,$state,$stateParams, Chats) {
  // display signup modal
  $scope.chats = Chats.all();
  $scope.navigateTo = function(){
    return $state.go('tab.orders');
  };
})

.controller('makeorderCtrl', function($scope,$state,$cordovaCapture,$ionicLoading,$timeout) {
  // display signup modal
  $scope.$on('$ionicView.enter', function(){
    //Here your view content is fully loaded !!
    $scope.isPreviewShow = false
    $scope.captureVideo();
  })

  $scope.captureVideo = function() {
    var options = { limit: 3, duration: 20 };

    $cordovaCapture.captureVideo(options).then(function(videoData) {
      // Success! Video data is here
            $ionicLoading.show({
              duration: 5000,
              template: '<img src="./img/logo44.png"></img><p>Reconstructing 3D Model...'
            });
            $timeout(function(){$scope.isPreviewShow = true}, 5000); 

            
    }, function(err) {
      // An error occurred. Show a message to the user
    });
  }

  $scope.navigateTo = function(){
    return $state.go('tab.orders');
  };

})

.controller('getlistCtrl', function($scope,$state) {
  $scope.navigateTo = function(state){
    return $state.go(state);
  };
})

.controller('OrdersCtrl', function($scope, Orders) {
  $scope.orders = Orders.all();
  $scope.remove = function(order) {
    Orders.remove(order);
  }
})

.controller('OrderDetailsCtrl', function($scope, $stateParams, Orders) {

  $scope.order = Orders.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope,$state) {
  $scope.navigateTo = function(state){
    return $state.go(state);
  };
})

.controller('authCtrl', function($scope,$state) {
    // display signup modal
  $scope.navigateTo = function(state){
    return $state.go(state);
  };
})



  .directive(
    "tjsModelViewer",
    [function () {
      return {
        restrict: "E",
        scope: {
          assimpUrl: "=assimpUrl"
        },
        link: function (scope, elem, attr) {
          var camera;
          var scene;
          var renderer;
          var previous;

          // init scene
          init();

          var loader = new THREE.STLLoader();
          loader.load( './img/bunny3.stl', function ( geometry ) {

          var material = new THREE.MeshPhongMaterial( { color: 0xff5533, specular: 0x111111, shininess: 200 } );
          var mesh = new THREE.Mesh( geometry, material );

          mesh.position.set( 0, - 0.25, 0.6 );
          mesh.rotation.set( 0, - Math.PI / 2, 0 );
          mesh.scale.set( 0.1, 0.1, 0.1 );

          mesh.castShadow = true;
          mesh.receiveShadow = true;

          scene.add( mesh );

        } );
          animate();

          function init() {
            camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 2000);
            camera.position.set(2, 4, 5);
            scene = new THREE.Scene();
            scene.fog = new THREE.FogExp2(0x000000, 0.035);
            // Lights
            scene.add(new THREE.AmbientLight(0xcccccc));
            var directionalLight = new THREE.DirectionalLight(/*Math.random() * 0xffffff*/0xeeeeee);
            directionalLight.position.x = Math.random() - 0.5;
            directionalLight.position.y = Math.random() - 0.5;
            directionalLight.position.z = Math.random() - 0.5;
            directionalLight.position.normalize();
            scene.add(directionalLight);

            // Renderer
            renderer = new THREE.WebGLRenderer();
            renderer.setSize(window.innerWidth, window.innerHeight);
            elem[0].appendChild(renderer.domElement);



            // Events
            window.addEventListener('resize', onWindowResize, false);

          }

          //
          function onWindowResize(event) {
            renderer.setSize(window.innerWidth, window.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
          }

          //
          var t = 0;

          function animate() {
            requestAnimationFrame(animate);
            render();
          }

          //
          function render() {
            var timer = Date.now() * 0.0005;
            camera.position.x = Math.cos(timer) * 10;
            camera.position.y = 4;
            camera.position.z = Math.sin(timer) * 10;
            camera.lookAt(scene.position);
            renderer.render(scene, camera);
          }
        }
      }
    }
  ]);