import { saveAs } from '@spalger/filesaver';
var jsonexport = require('jsonexport');

const linkReqRespStats = function ($scope, config) {
  $scope.$bind('req', 'searchSource.history[searchSource.history.length - 1]');
  $scope.$watchMulti([
    'req',
    'req.started',
    'req.stopped',
    'searchSource'
  ], function () {
    if (!$scope.searchSource || !$scope.req) return;

    const resp = $scope.req.resp;

    $scope.resKeys = [];
    $scope.iterateKeys = function(data) {
 	   var result = {};
 	   result['resp'] = 'resp';
 	   result['req'] = 'req';
 	   function recurse (cur, prop) {
 	       if (Object(cur) !== cur) {
 	           // result[prop] = cur;
 	       } else if (Array.isArray(cur)) {
 	           result[prop] = cur;
 	       } else {
 	           var isEmpty = true;
 	           for (var p in cur) {
 	               isEmpty = false;
 	               recurse(cur[p], prop ? prop+"."+p : p);
 	           }
 	           if (isEmpty && prop)
 	               result[prop] = {};
 	       }
 	   }
 	   recurse(data, "");
 	   $scope.resKeys = result;
    }

    if ($scope.req.resp) $scope.iterateKeys($scope.req.resp);
    else $scope.resKeys = [];

    $scope.export_root;
    $scope.filtered = $scope.req.resp;

    $scope.updateRoot = function() {
	 if ($scope.export_root == "resp") {
             $scope.filtered = $scope.req.resp;
	} else if ($scope.export_root == "req") {
             $scope.filtered = $scope.req;
        } else {
             var newdata = $scope.req.resp;
    	     var res = $scope.export_root.split(".")
             res.forEach(function(node){ newdata = newdata[node] });
   	     $scope.filtered = newdata;
	}
    }


    function saveToJson(data) {
        const blob = new Blob([JSON.stringify(data)], {type: 'application/json'});
        saveAs(blob, 'response_export.json');
    };

    $scope.exportJson = function() {
          saveToJson($scope.filtered ? $scope.filtered : resp);
    };

    function saveToCsv(data) {
        const blob = new Blob([data], {type: 'text/csv'});
        saveAs(blob, 'response_export.csv');
    };

    $scope.exportCsv = function() {
	jsonexport($scope.filtered ? $scope.filtered : resp,function(err, csv){
	    if(err) return console.log(err);
            saveToCsv(csv);
	});
    };


  });
};


// Spy Placement
require('ui/registry/spy_modes').register(function () {
  return {
    display: 'Export Data',
    name: 'exportdata',
    order: 1000,
    link: linkReqRespStats,
    template: require('plugins/kibana-exporter/button/export_spy.html')
  };
});

