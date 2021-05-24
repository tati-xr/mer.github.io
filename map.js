

	var map = L.map('map').setView([46.515, 6.631749473136732], 14.2);

var CartoDB_Voyager = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 19
});
		CartoDB_Voyager.addTo(map);

//map.scrollWheelZoom.disable()

		var mIcon = L.icon({
			iconUrl:'marker.png',
			iconSize: [25,41],
			iconAnchor:[0,30],
			popupAnchor: [10,-30]
		})

		var marker = L.marker([46.515298156445944, 6.621255374443324],{icon:mIcon}).addTo(map);
		marker.bindPopup("<b>MER Lausanne</b><br>Rue Louise Michel 1312<br>1000 Lausanne");




