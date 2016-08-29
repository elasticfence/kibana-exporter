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

    function saveToJson(data) {
        const blob = new Blob([JSON.stringify(data)], {type: 'application/json'});
        saveAs(blob, 'response_export.json');
    };

    $scope.exportJson = function() {
	// server.log(['info','status','export'], 'Saving response as JSON... ');
          saveToJson(resp);
    };

    function saveToCsv(data) {
        const blob = new Blob([data], {type: 'text/csv'});
        saveAs(blob, 'response_export.csv');
    };

    $scope.exportCsv = function() {
	// server.log(['info','status','export'], 'Saving response as CSV... ');
	jsonexport(resp,function(err, csv){
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

