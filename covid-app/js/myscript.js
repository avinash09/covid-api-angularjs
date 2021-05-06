const URL = "https://covid19.mathdro.id/api";

let app = angular.module("MyApp",[]);

app.controller("MyCtrl", ($scope, $http)=>{

    //this is controller
    $scope.title="Stay Home Stay Safe";

    console.log("application loaded");

    //get world details
    $http.get(URL).then( 
        (response)=>{
        console.log(response);
        $scope.all_data = response.data;
        } , 
        (error)=>{
            console.log(error);
        } );

    //get country details
    $scope.getCountryData = ()=>{
        let country = $scope.country;
        console.log(country);

        if(country=='' || country=='undefined'){
            $scope.all_country_data= undefined;
            return;
        }

        
        $http.get(URL+'/countries/'+country).then( 
            (response)=>{
                console.log(response.data);
                $scope.all_country_data= response.data;

            }, 
            (error)=>{
                $scope.all_country_data= undefined;
                console.log(error);
            });

    };
    
});