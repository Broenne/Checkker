var app = angular.module('starter.controllers', []);


app.controller('CheckkerCtrl', function ($scope) {

    $scope.meterNumberInput = "";

    $scope.MeterNumberToAscii = function (meterNumberInput, meterVolumeInput) {
        
        // todo mb:
        // meterNumberInput = "12345678";
        // meterVolumeInput = 0;
        var meterNumberAsAscii = new Array();
        angular.forEach(meterNumberInput, function (value, key) {
			// console.log("meter number input:" + key + ': ' + value);
            var ascii = value.charCodeAt(0); // ascii 0 ist dezimal 48, 1=49,...
            meterNumberAsAscii.push(ascii);
        });

		
		// angular.forEach(meterNumberAsAscii, function (value, key) {
           //  console.log("helper original:" + key + ': ' + value);
        // });

		
		
        var meterNumberSum = 0;
        angular.forEach(meterNumberAsAscii, function (value, key) {
            // console.log("as ascii original:" + key + ': ' + value);
            // doing modulo 9
            var modulo9Result = parseInt(value % 9);
            //meterNoSum += meterNoRemainder[i] * Convert.ToInt32(Math.Pow(2, i));
            var positionPriotity = Math.pow(2, key);
            positionPriotity = parseInt(positionPriotity);
            // console.log("positionPriotrity:" + positionPriotity);
            meterNumberSum += parseInt(modulo9Result * positionPriotity);
        });
        // console.log("meterNumberSum:" + meterNumberSum);
        
        // chekkerRole1 is the low part (right)
        var chekkerRole1 = parseInt(meterNumberSum % 9) + 1;
        // console.log("chekkerRole1:" + chekkerRole1);
        meterNumberSum = parseInt(meterNumberSum / 11);
        var chekkerRole2 = parseInt(meterNumberSum % 9) + 1;
        chekkerRole2 = parseInt(chekkerRole2); // mb: hier unterscheidte sich der algorithmus, net parsed automatscih
        // console.log("chekkerRole2:" + chekkerRole2);
        
        // int[] rols = new int[9] { 1, 3, 5, 7, 9, 2, 4, 6, 8 };
        var rols = new Array(1, 3, 5, 7, 9, 2, 4, 6, 8);

        var rolsPos1 = rols.indexOf(chekkerRole1);
        var rolsPos2 = rols.indexOf(chekkerRole2);
        // console.log("rolsPos2: " + rolsPos2);

        rolsPos1 += parseInt(meterVolumeInput) + 1;
        // console.log("rolsPos1: " + rolsPos1);

        var quotient1 = parseInt(rolsPos1 / 9);
        // console.log("quotient1: " + quotient1);
        var remainder1 = parseInt(rolsPos1 % 9);
        // console.log("remainder1: " + remainder1);

        chekkerRole1 = rols[remainder1];
        // console.log("chekkerRole1: " + chekkerRole1);
        chekkerRole2 = parseInt(quotient1 + rolsPos2);// todo mb hier anders
        // console.log("chekkerRole2: " + chekkerRole2);

        remainder1 = parseInt(chekkerRole2 % 9); // hier ist remainder 0,1111
        // console.log("remainder1: " + remainder1);
        chekkerRole2 = rols[remainder1] * 10;
        // console.log("chekkerRole2: " + chekkerRole2);

        var chekkerFinal = chekkerRole1 + chekkerRole2;
        $scope.result = chekkerFinal;
        console.log("chekkerFinal: " + chekkerFinal);
    }
});