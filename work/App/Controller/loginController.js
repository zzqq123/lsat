app.directive('login',function(){
    return {
        replace:true,
        template:`<div class="login"><div class="filt"><li><span>综合</span><span ng-click="fun2('appraise',boo)">销量</span><span ng-click="fun2('sprice',boo)">价格</span><span>店铺</span><span>筛选</span></li></div><dl ng-repeat="val in data|orderBy:num:boo"><dt><img ng-src={{val.img}} alt="" /></dt><dd><h1>{{val.tit}}</h1><p>{{val.sprice}}</p><p>{{val.appraise}}</p></dd></dl></div>`,
        link:function(scope,ele,attr){
           var span = ele[0].querySelectorAll('span');
            span.forEach(function(v,i){
              span[i].onclick = function(){
                for(var j=0;j<span.length;j++){
                  span[j].className='fontColor'
                   }
                  span[i].className = 'fontColor2'
              }
            })
       }
   }
})
app.controller('loginController',['$scope','data',function($scope,data){
    $scope.boo = true;
    $scope.data = data;
    $scope.fun2 = function(num,boo){
      $scope.num = num;
      if(boo){
        $scope.boo = !boo;
        console.log($scope.boo)
      }else{
        $scope.boo = !boo;
        console.log($scope.boo)
      }

    }
}])