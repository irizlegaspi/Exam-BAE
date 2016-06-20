var locations = [
  ['Wisma Academy\n4A, Jalan 19/1, Petaling Jaya, 46300', 3.1120654, 101.6278914],
  ['The Boulevard\nMid Valley City, Lingkaran Syed Putra, Kuala Lumpur, 59200', 3.100753, 101.667495],
  ['Vertical Business Suite II, \nAvenue 3, Bangsar South, \nNo.8, Jalan Kerinchi, Kuala Lumpur, 59200', 3.1105239, 101.6634711],
  ['Oval Damansara,\nNo.685, Jalan Damansara,\nSprint Highway, Kuala Lumpur,  60000', 3.1320123, 101.6289193],
  ['Jalan Pandan Cahaya 1/2\nPandan Cahaya\nSelangor Darul Ehsan, Ampang, 68000', 3.1384067, 101.7549664],
  ['Aljunied Rd, \nCititech Industrial Building, Singapore, 389838', 1.325676, 103.879393],
  ['CTI Tower, 191/11-12 Ratchadaphisek Road\nKhwaeng Klongtoey, Khet Klongtoey, Bangkok, 10110', 13.708034, 100.583109],
  ['HITTC building, 185 Gang Vo, Dong Da, Hanoi, Hanoi', 21.0361061, 105.7810633],
  ['Van Bao str., Ba Dinh dist., Hanoi', 21.0321657, 105.8148791]
    
];
var map;
var markers = [];

function init(){
  map = new google.maps.Map(document.getElementById('map_canvas'), {
    zoom: 4,
    center: new google.maps.LatLng(3.13, 101.75),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var num_markers = locations.length;
  for (var i = 0; i < num_markers; i++) {  
    markers[i] = new google.maps.Marker({
      position: {lat:locations[i][1], lng:locations[i][2]},
      map: map,
      html: locations[i][0],
      id: i,
    });
      
    google.maps.event.addListener(markers[i], 'click', function(){
      var infowindow = new google.maps.InfoWindow({
        id: this.id,
        content:this.html,
        position:this.getPosition()
      });
      google.maps.event.addListenerOnce(infowindow, 'closeclick', function(){
        markers[this.id].setVisible(true);
      });
      this.setVisible(false);
      infowindow.open(map);
    });
  }
}

init();

    
//calling of functions per country groupings
locationM(loc);
locationSG(loc);
locationTL(loc);
locationVN(loc);

	var b = "<br />";

	function locationM(countries){		
		var i;
		var output = '<div class="row"><div class="col bigSize textCenter borderStyle">Country Name</div><div class="col bigSize textCenter borderStyle">Address</div><div class="col bigSize textCenter borderStyle">City</div><div class="col bigSize textCenter borderStyle">Postal Code</div><div class="col bigSize textCenter borderStyle">Longitude</div><div class="col bigSize textCenter borderStyle">Latitude</div></div>';	
		for(i = 0; i < countries.country.malaysia.length; i++){ //Looping inside each nested keys
			countryName = countries.country.malaysia[i]; 
			output += '<div class="row"><div class="col smallFont textCenter">' + countryName.country +
			'</div><div class="col smallFont textLeft">' + countryName.address +  			
			'</div><div class="col smallFont textCenter">' + countryName.city + 
			'</div><div class="col smallFont textCenter">' + countryName.postalCode + 
			'</div><div class="col smallFont textCenter">' + countryName.lng + 
			'</div><div class="col smallFont textCenter">' + countryName.lat + 
			'</div></div>';
		}
		document.getElementById('ma').innerHTML = output;
	}

	function locationSG(countries){		
		var i;
		var output = '';		
		for(i = 0; i < countries.country.singapore.length; i++){
			countryName = countries.country.singapore[i];
			output += '<div class="row"><div class="col smallFont textCenter">' + countryName.country +
			'</div><div class="col smallFont textLeft">' + countryName.address +  			
			'</div><div class="col smallFont textCenter">' + countryName.city + 
			'</div><div class="col smallFont textCenter">' + countryName.postalCode + 
			'</div><div class="col smallFont textCenter">' + countryName.lng + 
			'</div><div class="col smallFont textCenter">' + countryName.lat + 
			'</div></div>';
		}
	
		document.getElementById('sg').innerHTML = output;
	}

	function locationTL(countries){    
    var i;
    var output = '';    
    for(i = 0; i < countries.country.thailand.length; i++){
      countryName = countries.country.thailand[i];
      output += '<div class="row"><div class="col smallFont textCenter">' + countryName.country +
      '</div><div class="col smallFont textLeft">' + countryName.address +        
      '</div><div class="col smallFont textCenter">' + countryName.city + 
      '</div><div class="col smallFont textCenter">' + countryName.postalCode + 
      '</div><div class="col smallFont textCenter">' + countryName.lng + 
      '</div><div class="col smallFont textCenter">' + countryName.lat + 
      '</div></div>';
   	} 
    document.getElementById('tl').innerHTML = output;
  }

  function locationVN(countries){    
    var i;
    var output = '';  
    for(i = 0; i < countries.country.vietnam.length; i++){
      countryName = countries.country.vietnam[i];
      output += '<div class="row"><div class="col smallFont textCenter">' + countryName.country +
      '</div><div class="col smallFont textLeft">' + countryName.address +        
      '</div><div class="col smallFont textCenter">' + countryName.city + 
      '</div><div class="col smallFont textCenter">' + countryName.postalCode +
      '</div><div class="col smallFont textCenter">' + countryName.lng + 
      '</div><div class="col smallFont textCenter">' + countryName.lat + 
      '</div></div>';
    }
        document.getElementById('vn').innerHTML = output;
  }

// By City
//calling of functions per city groupings
cityMA(loc);
citySG(loc);
cityTL(loc);
cityVN(loc);
  function cityMA(cities){    
    var i;
    var output = '<div class="row"><div class="col bigSize textCenter borderStyle">City Name</div><div class="col bigSize textCenter borderStyle">Address</div><div class="col bigSize textCenter borderStyle">Country</div><div class="col bigSize textCenter borderStyle">Postal Code</div><div class="col bigSize textCenter borderStyle">Longitude</div><div class="col bigSize textCenter borderStyle">Latitude</div></div>';  
    for(i = 0; i < cities.country.malaysia.length; i++){
      cityName = cities.country.malaysia[i];
      output += '<div class="row"><div class="col smallFont textCenter">' + cityName.city +
      '</div><div class="col smallFont textLeft">' + cityName.address +
      '</div><div class="col smallFont textCenter">' + cityName.country +        
      '</div><div class="col smallFont textCenter">' + cityName.postalCode +
      '</div><div class="col smallFont textCenter">' + cityName.lng + 
      '</div><div class="col smallFont textCenter">' + cityName.lat + 
      '</div></div>';
    }
        document.getElementById('cityMA').innerHTML = output;
  }

  function citySG(cities){    
    var i;
    var output = '';  
    for(i = 0; i < cities.country.singapore.length; i++){
      cityName = cities.country.singapore[i];
      output += '<div class="row"><div class="col smallFont textCenter">' + cityName.city +
      '</div><div class="col smallFont textLeft">' + cityName.address +
      '</div><div class="col smallFont textCenter">' + cityName.country +        
      '</div><div class="col smallFont textCenter">' + cityName.postalCode +
      '</div><div class="col smallFont textCenter">' + cityName.lng + 
      '</div><div class="col smallFont textCenter">' + cityName.lat + 
      '</div></div>';
    }
        document.getElementById('citySG').innerHTML = output;
  }

  function cityTL(cities){    
    var i;
    var output = '';  
    for(i = 0; i < cities.country.thailand.length; i++){
      cityName = cities.country.thailand[i];
      output += '<div class="row"><div class="col smallFont textCenter">' + cityName.city +
      '</div><div class="col smallFont textLeft">' + cityName.address +
      '</div><div class="col smallFont textCenter">' + cityName.country +        
      '</div><div class="col smallFont textCenter">' + cityName.postalCode +
      '</div><div class="col smallFont textCenter">' + cityName.lng + 
      '</div><div class="col smallFont textCenter">' + cityName.lat + 
      '</div></div>';
    }
        document.getElementById('cityTL').innerHTML = output;
  }
  

  function cityVN(cities){    
    var i;
    var output = '';  
    for(i = 0; i < cities.country.vietnam.length; i++){
      cityName = cities.country.vietnam[i];
      output += '<div class="row"><div class="col smallFont textCenter">' + cityName.city +
      '</div><div class="col smallFont textLeft">' + cityName.address +
      '</div><div class="col smallFont textCenter">' + cityName.country +        
      '</div><div class="col smallFont textCenter">' + cityName.postalCode +
      '</div><div class="col smallFont textCenter">' + cityName.lng + 
      '</div><div class="col smallFont textCenter">' + cityName.lat + 
      '</div></div>';
    }
        document.getElementById('cityVN').innerHTML = output;
  }


