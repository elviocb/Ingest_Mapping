(function(){

	var app = angular.module('mapping', ['ngRoute']);
    
    app.controller('AlertCtrl', ['$scope', function($scope){
        
        $scope.successStatusAlert = false;

        $scope.status = function(){
            alert($scope.successStatusAlert);
        };

         $scope.setAlertSuccessOn = function(){
            $scope.successStatusAlert = true;
            $timeout(function(){alert("Hello");}, 500);
        };

         $scope.setAlertSuccessOff = function(){
            $scope.successStatusAlert = false;
        };

    }]);
    
    /*
	app.factory('Alerts', function(){
        var result = 'oopa';
        var successSettings = {
            status: false,
            setSuccessOn: function(){
                successSettings.status = true;
                result = 'shit';
                alert(result);
                console.log(successSettings);
            },
            setSuccessOff: function(){
                successSettings.status = false;
                console.log(successSettings);
            }
            
        };
        
        return {
            'successStatus' : result,
            'setSuccessOn' : successSettings.setSuccessOn,
            'setSuccessOff' : successSettings.setSuccessOff
        }
    });
    */
	app.controller('MainCtrl', ['$scope', 'Server', '$http', '$timeout', function($scope, Server, $http, $timeout) {

		/*
		$http.get('/js/dataOtions.js').success(function(data){
			$scope.dataOptions = data;
		});
		*/
        //ALERTS
        
        $scope.successStatusAlert = false;

        $scope.status = function(){
            alert($scope.successStatusAlert);
        };

         $scope.setAlertSuccessOn = function(){
            $scope.successStatusAlert = true;
            $timeout(function(){$scope.setAlertSuccessOff()}, 3000);
        };

         $scope.setAlertSuccessOff = function(){
            $scope.successStatusAlert = false;
        };
		
		var jsonGet = 'https://api.parse.com/1/classes/EntryList';
		var jsonHeaders = {
				headers: {'X-Parse-Application-Id':'fzXvShP5f4swUUjZOc8vw8BgEQtjTDP5jAE0k4JG',
				'X-Parse-REST-API-Key':'9VQFBZAxidfBRx2UHSuq9GH9vuFCjpYrp9LDnrL0'}};

		
		var data = {
			'statusOptions' : {
				'ingest' : [
					{
						'group' : null,
						'label' : 'INGESTED',
						'stat' : 'ingested'
					},{
						'group' : null,
						'label' : 'NOT INGESTED',
						'stat' : 'notIngested'
					},{
						'group' : null,
						'label' : 'PROBLEM',
						'stat' : 'problem'
					}
				],
				'proxy' : [
					{
						'group' : null,
						'label' : 'FAILED',
						'stat' : 'failed'
					},{
						'group' : null,
						'label' : 'ENCODED',
						'stat' : 'encoded'
					},{
						'group' : null,
						'label' : 'NOT ENCODED',
						'stat' : 'notEncoded'
					}
				],
				'cataloging' : [
					{ 
						'group' : null,
						'label' : 'CATALOGED',
						'stat' : 'cataloged'
					},{
						'group' : null,
						'label' : 'NOT CATALOGED',
						'stat' : 'notCataloged'
					}
				]
			},
			'fileOptions' : {
				'codec' : [
					{ 
						'group' : null,
						'label' : 'ProRes 4444',
						'stat' : 'prores4444'
					},{ 
						'group' : null,
						'label' : 'ProRes 422 (HQ)',
						'stat' : 'prores422Hq'
					},{ 
						'group' : null,
						'label' : 'ProRes 422',
						'stat' : 'prores422'
					},{ 
						'group' : null,
						'label' : 'ProRes 422 (LT)',
						'stat' : 'prores422Lt'
					},{ 
						'group' : null,
						'label' : 'ProRes 422 (Proxy)',
						'stat' : 'prores422Proxy'
					},{ 
						'group' : null,
						'label' : 'h264',
						'stat' : 'h264'
					},{ 
						'group' : null,
						'label' : 'xh264',
						'stat' : 'xh264'
					},{ 
						'group' : null,
						'label' : 'h265',
						'stat' : 'h265'
					}
				],
				'resolution' : [
					{ 
						'group' : null,
						'label' : '1920 x 1080',
						'stat' : '1920x1080'
					},{ 
						'group' : null,
						'label' : '1280 x 720',
						'stat' : '1280x720'
					},{ 
						'group' : null,
						'label' : '960 x 540',
						'stat' : '960x540'
					},{ 
						'group' : null,
						'label' : '720 x 480',
						'stat' : '720x480'
					},{ 
						'group' : null,
						'label' : '640 x 360',
						'stat' : '640x360'
					}
				],
				'fileFormat' : [
					{ 
						'group' : null,
						'label' : 'AVI',
						'stat' : 'avi'
					},{ 
						'group' : null,
						'label' : 'WMV',
						'stat' : 'wmv'
					},{ 
						'group' : null,
						'label' : 'MPEG',
						'stat' : 'mpeg'
					},{ 
						'group' : null,
						'label' : 'M2TS',
						'stat' : 'm2ts'
					},{ 
						'group' : null,
						'label' : 'MTS',
						'stat' : 'mts'
					},{ 
						'group' : null,
						'label' : 'MP4',
						'stat' : 'mp4'
					},{ 
						'group' : null,
						'label' : 'VOB',
						'stat' : 'vob'
					},{ 
						'group' : null,
						'label' : 'MXF',
						'stat' : 'mxf'
					}											
				],
				'physicalType' : [
					{ 
						'group' : null,
						'label' : 'Blue-Ray',
						'stat' : 'blueray'
					},{ 
						'group' : null,
						'label' : 'CD',
						'stat' : 'cd'
					},{ 
						'group' : null,
						'label' : 'CD Dados',
						'stat' : 'cdDados'
					},{ 
						'group' : null,
						'label' : 'DVD',
						'stat' : 'dvd'
					},{ 
						'group' : null,
						'label' : 'DVD Dados',
						'stat' : 'dvdDados'
					},{ 
						'group' : null,
						'label' : 'HD',
						'stat' : 'hd'
					},{ 
						'group' : null,
						'label' : 'Mini-DV',
						'stat' : 'miniDv'
					},{ 
						'group' : null,
						'label' : 'Fita Beta',
						'stat' : 'beta'
					}				
				],
				'scanType' : [
					{ 
						'group' : null,
						'label' : 'Progressive',
						'stat' : 'progressive'
					},{ 
						'group' : null,
						'label' : 'Interlaced',
						'stat' : 'interlaced'
					}
				],
				'idiom' : [
					{ 
						'group' : null,
						'label' : 'Portugues',
						'stat' : 'portugues'
					},{ 
						'group' : null,
						'label' : 'Ingles',
						'stat' : 'ingles'
					},{ 
						'group' : null,
						'label' : 'Espanhol',
						'stat' : 'espanhol'
					}
				],
				'aspect' : ['16:9', '4:3'],
				'frameRate' : ['23.97', '24']
				,'audioTrack' : ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16']

				

			}
		};

		//Status Scope
		$scope.statusOptionsIngest = data.statusOptions.ingest;
		$scope.statusOptionsProxy = data.statusOptions.proxy;
		$scope.statusOptionsCataloging = data.statusOptions.cataloging;
		//File Scope
		$scope.fileOptionsCodec = data.fileOptions.codec;
		$scope.fileOptionsResolution = data.fileOptions.resolution;
		$scope.fileOptionsFormat = data.fileOptions.fileFormat;
		$scope.fileOptionsPhysicalType = data.fileOptions.physicalType;
		$scope.fileOptionsScanType = data.fileOptions.scanType;
		$scope.fileOptionsIdiom = data.fileOptions.idiom;
		$scope.fileOptionsAspect = data.fileOptions.aspect;
		$scope.fileOptionsFrameRate = data.fileOptions.frameRate;
		$scope.fileOptionsAudioTrack = data.fileOptions.audioTrack;


		
				

	    

	    $scope.deleteEntry = function(watchers, index, e) {

	    	e.preventDefault();
	    	var parseId = watchers[watchers.length -1]['last'];
	    	var EntryList = Parse.Object.extend("EntryList");
			var query = new Parse.Query(EntryList);

			query.get(parseId, {
			  success: function(myObj) {
			    // The object was retrieved successfully.
			    console.log('destruiuuuuuuu');
			    myObj.destroy({
			    	success: function(myObject) {
				    // The delete  was successfully done.
				    	console.log('The object ' + myObject + ' was successfully deleted.');
				    	$scope.updateScreen();
			   		},
			   		error: function(myObject, error) {
			   		// The delete failed.
			   		  console.log('The object ' + myObject + ' failed to delete. Error: ' + error);
		   			}
		   		});
			    
			  },
			  error: function(object, error) {
			    // The object was not retrieved successfully.
			  	console.log('falhouuuuuu');
			  }
			});

			e.preventDefault();

	    };
		
		$scope.editEntry = function(watchers, index, e) {
			
			e.preventDefault();
			$scope.addBt = false;
			$scope.updateBt = true;
			$scope.stageId = watchers[watchers.length -1]['last'];

			//update the fields with the infos
	         $scope.statusIngest = watchers[15]['last']
	        ,$scope.statusProxy = watchers[14]['last']
	        ,$scope.statusCataloging = watchers[13]['last']
	        ,$scope.fileName = watchers[12]['last']
	        ,$scope.filePath = watchers[11]['last']
	        ,$scope.fileSize = watchers[10]['last']
	        ,$scope.fileDuration = watchers[9]['last']
	        ,$scope.fileCodec = watchers[8]['last']
	        ,$scope.fileResolution = watchers[7]['last']
	        ,$scope.fileFormat = watchers[6]['last']       
	        ,$scope.filePhysicalType = watchers[5]['last']       
	        ,$scope.fileScanType = watchers[4]['last']       
	        ,$scope.fileIdiom = watchers[3]['last']       
	        ,$scope.fileAspect = watchers[2]['last']       
	        ,$scope.fileFrameRate = watchers[1]['last']       
	        ,$scope.fileAudioTrack = watchers[0]['last'];       

	        console.log(typeof watchers[1]['last']);
		};
		
		$scope.updateEntry = function(watchers){

		    $scope.addBt = true;
			$scope.updateBt = false;

			//Create a pointer object // this object will be updated
			
			var EntryList = Parse.Object.extend("EntryList");			
			var entryList = new EntryList();
			entryList.id = $scope.stageId;

			// Set a new value on quantity
			entryList.set('statusIngest', $scope.statusIngest);
			entryList.set('statusProxy', $scope.statusProxy);
			entryList.set('statusCataloging', $scope.statusCataloging);
			entryList.set('fileName', $scope.fileName);
			entryList.set('filePath',$scope.filePath);
			entryList.set('fileSize',$scope.fileSize);
			entryList.set('fileDuration',$scope.fileDuration);
			entryList.set('fileCodec',$scope.fileCodec);
			entryList.set('fileResolution',$scope.fileResolution);
			entryList.set('fileFormat',$scope.fileFormat);
			entryList.set('filePhysicalType',$scope.filePhysicalType);
			entryList.set('fileScanType',$scope.fileScanType);
			entryList.set('fileIdiom',$scope.fileIdiom);
			entryList.set('fileAspect',$scope.fileAspect);
			entryList.set('fileFrameRate', Number($scope.fileFrameRate));
			entryList.set('fileAudioTrack', Number($scope.fileAudioTrack));

			// Save
			entryList.save(null, {
			  success: function(entryList) {
			    console.log('Object successfullyt updated');

			  },
			  error: function(entryList, error) {
			    // The save failed.
			    // error is a Parse.Error with an error code and description.
			    console.log('Object update error: ' + error);
			  }
			});

			$scope.updateScreen();	

		};	 

		$scope.addEntry = function() {

			// Create a new class in the Parse Object
			var EntryList = Parse.Object.extend("EntryList");

			// Create a new Object
			var entryList = new EntryList();


			
			//Set the DB entrys
			entryList.set('statusIngest', $scope.statusIngest);
			entryList.set('statusProxy', $scope.statusProxy);
			entryList.set('statusCataloging', $scope.statusCataloging);
			entryList.set('fileName', $scope.fileName);
			entryList.set('filePath',$scope.filePath);
			entryList.set('fileSize',$scope.fileSize);
			entryList.set('fileDuration',$scope.fileDuration);
			entryList.set('fileCodec',$scope.fileCodec);
			entryList.set('fileResolution',$scope.fileResolution);
			entryList.set('fileFormat',$scope.fileFormat);
			entryList.set('filePhysicalType',$scope.filePhysicalType);
			entryList.set('fileScanType',$scope.fileScanType);
			entryList.set('fileIdiom',$scope.fileIdiom);
			entryList.set('fileAspect',$scope.fileAspect);
			entryList.set('fileFrameRate', Number($scope.fileFrameRate));
			entryList.set('fileAudioTrack', Number($scope.fileAudioTrack));
			//entryList.set('k',$scope.k);

			//Save the entrys in the Parse's DB
			entryList.save(null, {
	  			success: function(callback) {
	  				console.log('The entry was successfully saved.');
                    $timeout(function(){$scope.setAlertSuccessOn();},1000);
	  				$scope.updateScreen();
	    		// The object was saved successfully.
	  			},
	  			error: function(callback, error) {
	  				console.log('The save failed.');
			    // The save failed.
			    // error is a Parse.Error with an error code and description.
	  			}
			});
		};	
				
		$scope.updateScreen = function(){


			console.log('REFRESHINGGGGG!!!');

		
			//Clear the Entry Field Slots
			 $scope.statusIngest = ''
		    ,$scope.statusProxy = ''
		    ,$scope.statusCataloging = ''
		    ,$scope.fileName = ''
		    ,$scope.filePath = ''
		    ,$scope.fileSize = ''
		    ,$scope.fileDuration = ''
		    ,$scope.fileCodec = ''
		    ,$scope.fileResolution = ''
		    ,$scope.fileFormat = ''
		    ,$scope.filePhysicalType = ''
		    ,$scope.fileScanType = ''
		    ,$scope.fileIdiom = ''
		    ,$scope.fileAspect = ''
		    ,$scope.fileFrameRate = ''
		    ,$scope.fileAudioTrack = '';

			Server.get(jsonGet, jsonHeaders)
				.success(function(data, status){

					//update the allEntrys with the response
					$scope.allEntrys = data.results;

					//console.log('XHR status: ' + status);
					//console.dir('Resposta: ' + data);


				})
				.error(function(){
					console.log('Error fetching the server');
				});

		}
        
		$scope.init = function () {
	    	Parse.initialize("fzXvShP5f4swUUjZOc8vw8BgEQtjTDP5jAE0k4JG", "2cIrOXcD9BkgK6Sg40IL9dJay3883tgInhkN2iAU");
	    	$scope.updateScreen();
	    	$scope.addBt = true;
	    	$scope.updateBt = false;
	    }();
        
        


	}]);

	app.factory('Server', ['$http', function ($http) {
	  return {
	    get: function(url, header) {
	      return $http.get(url, header);
	    },
	    post: function(url) {
	      return $http.post(url);
	    }
	  };
	}]);


})();
