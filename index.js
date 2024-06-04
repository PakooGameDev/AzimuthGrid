const canvas = document.getElementById('azimuthalGrid');
const ctx = canvas.getContext('2d');
let maxDistance = document.getElementById('gridDistance').value || 400;
const distanceStep =  10; // km
const azimuthStep = 10; // degrees
const minDistance = 20; // km
const scaleCoef = 400;
const size = 900; // adjustable size
canvas.width = size;
canvas.height = size;
let gridCoord = [

];


const center = { x: size / 2, y: size / 2 };
const originCoords = {x:52.4, y:29.10}
const geoJson = {
  "type": "FeatureCollection",
  "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
  "features": [
    {
      "type": "Feature",
      "properties": {
        "shapeISO": "BLR",
        "shapeName": "Belarus",
        "shapeID": "10690812B6439167788480",
        "shapeGroup": "BLR",
        "shapeType": "ADM0"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [ [ [ 31.78388, 52.10805 ], [ 31.78611, 52.12416 ], [ 31.78604, 52.15756 ], [ 31.76541, 52.17638 ], [ 31.70139, 52.2211 ], [ 31.59382, 52.31312 ], [ 31.60597, 52.3318 ], [ 31.62875, 52.36721 ], [ 31.60889, 52.49138 ], [ 31.58708, 52.59221 ], [ 31.50514, 52.68783 ], [ 31.55514, 52.70145 ], [ 31.59375, 52.73715 ], [ 31.5875, 52.78222 ], [ 31.57972, 52.80457 ], [ 31.53847, 52.85471 ], [ 31.50889, 52.8575 ], [ 31.48486, 52.86125 ], [ 31.43888, 52.87943 ], [ 31.41527, 52.89305 ], [ 31.39083, 52.91027 ], [ 31.26666, 53.02332 ], [ 31.31472, 53.05138 ], [ 31.38684, 53.10402 ], [ 31.37483, 53.12193 ], [ 31.38319, 53.15347 ], [ 31.4, 53.1886 ], [ 31.42576, 53.20881 ], [ 31.62319, 53.21777 ], [ 31.77646, 53.19269 ], [ 31.78944, 53.17027 ], [ 31.79965, 53.13214 ], [ 31.91833, 53.09833 ], [ 31.95805, 53.09444 ], [ 32.11208, 53.08721 ], [ 32.14207, 53.08957 ], [ 32.22332, 53.10555 ], [ 32.29888, 53.13193 ], [ 32.42194, 53.1961 ], [ 32.4461, 53.21499 ], [ 32.61194, 53.31305 ], [ 32.72444, 53.36027 ], [ 32.73654, 53.43836 ], [ 32.74006, 53.45881 ], [ 32.66513, 53.49847 ], [ 32.64124, 53.50166 ], [ 32.62027, 53.49986 ], [ 32.47374, 53.55277 ], [ 32.44353, 53.57284 ], [ 32.42444, 53.60124 ], [ 32.42054, 53.64756 ], [ 32.50548, 53.68277 ], [ 32.4843, 53.71222 ], [ 32.45666, 53.72457 ], [ 32.32944, 53.76221 ], [ 32.11971, 53.81999 ], [ 31.99305, 53.80249 ], [ 31.97138, 53.79833 ], [ 31.93555, 53.78916 ], [ 31.8902, 53.77811 ], [ 31.76423, 53.80435 ], [ 31.77916, 53.83735 ], [ 31.8052, 53.85652 ], [ 31.82888, 53.88638 ], [ 31.85722, 53.96971 ], [ 31.86527, 54.00611 ], [ 31.84555, 54.06097 ], [ 31.75583, 54.10486 ], [ 31.72624, 54.10638 ], [ 31.67555, 54.10666 ], [ 31.54416, 54.14332 ], [ 31.52417, 54.15083 ], [ 31.32861, 54.24325 ], [ 31.31041, 54.30041 ], [ 31.31201, 54.34131 ], [ 31.22597, 54.4593 ], [ 31.1986, 54.46094 ], [ 31.13055, 54.4786 ], [ 31.0927, 54.49263 ], [ 31.08729, 54.51617 ], [ 31.11138, 54.54777 ], [ 31.13819, 54.57638 ], [ 31.10305, 54.64554 ], [ 31.00875, 54.70916 ], [ 30.91944, 54.75139 ], [ 30.87639, 54.76916 ], [ 30.83805, 54.78124 ], [ 30.78271, 54.79909 ], [ 30.79472, 54.8436 ], [ 30.83889, 54.92249 ], [ 30.86472, 54.94721 ], [ 30.90819, 54.95402 ], [ 30.94041, 54.96388 ], [ 31.02753, 55.0485 ], [ 30.97805, 55.15221 ], [ 30.94402, 55.19165 ], [ 30.91791, 55.20096 ], [ 30.81597, 55.30173 ], [ 30.83139, 55.33 ], [ 30.85777, 55.3536 ], [ 30.8893, 55.37569 ], [ 30.91347, 55.3786 ], [ 30.93624, 55.39936 ], [ 30.93999, 55.49583 ], [ 30.93028, 55.57777 ], [ 30.92625, 55.60257 ], [ 30.91458, 55.61069 ], [ 30.885, 55.61846 ], [ 30.84569, 55.61478 ], [ 30.78875, 55.59471 ], [ 30.7575, 55.597 ], [ 30.65527, 55.66055 ], [ 30.61097, 55.71776 ], [ 30.49152, 55.79902 ], [ 30.46666, 55.80555 ], [ 30.24583, 55.85444 ], [ 29.97252, 55.85637 ], [ 29.93736, 55.85305 ], [ 29.90694, 55.8461 ], [ 29.65638, 55.76528 ], [ 29.52444, 55.69297 ], [ 29.48499, 55.69221 ], [ 29.38229, 55.76 ], [ 29.35979, 55.7968 ], [ 29.41028, 55.89749 ], [ 29.45565, 55.9194 ], [ 29.41006, 55.95791 ], [ 29.17222, 56.01555 ], [ 29.13916, 56.02194 ], [ 29.05944, 56.03277 ], [ 29.02764, 56.02944 ], [ 29.00611, 56.02388 ], [ 28.86514, 55.97832 ], [ 28.84381, 55.95116 ], [ 28.74611, 55.9561 ], [ 28.72549, 55.96856 ], [ 28.70701, 56.00381 ], [ 28.70055, 56.0336 ], [ 28.65, 56.09124 ], [ 28.62097, 56.0993 ], [ 28.52819, 56.10513 ], [ 28.37895, 56.09041 ], [ 28.34804, 56.05553 ], [ 28.3099, 56.05136 ], [ 28.18708, 56.13402 ], [ 28.1686, 56.14861 ], [ 28.16801, 56.15015 ], [ 28.14965, 56.16096 ], [ 28.12166, 56.16749 ], [ 27.9225, 56.10513 ], [ 27.89777, 56.07027 ], [ 27.79611, 56.00111 ], [ 27.71249, 55.9561 ], [ 27.64638, 55.91957 ], [ 27.63204, 55.846 ], [ 27.61999, 55.81833 ], [ 27.60024, 55.79252 ], [ 27.55972, 55.78916 ], [ 27.53111, 55.78889 ], [ 27.31083, 55.80749 ], [ 27.21166, 55.82583 ], [ 27.15277, 55.84652 ], [ 26.98583, 55.83236 ], [ 26.90499, 55.77555 ], [ 26.88326, 55.74048 ], [ 26.85666, 55.71388 ], [ 26.76583, 55.68749 ], [ 26.73847, 55.68777 ], [ 26.69205, 55.70173 ], [ 26.66527, 55.70583 ], [ 26.64222, 55.69874 ], [ 26.62486, 55.68791 ], [ 26.61321, 55.67483 ], [ 26.62263, 55.65235 ], [ 26.62791, 55.59839 ], [ 26.52666, 55.44694 ], [ 26.46486, 55.33874 ], [ 26.50583, 55.32388 ], [ 26.52888, 55.31777 ], [ 26.56083, 55.31388 ], [ 26.62527, 55.33027 ], [ 26.64583, 55.33028 ], [ 26.77541, 55.31124 ], [ 26.81305, 55.29027 ], [ 26.8068, 55.26972 ], [ 26.78375, 55.25485 ], [ 26.64166, 55.19082 ], [ 26.51208, 55.15027 ], [ 26.48166, 55.15499 ], [ 26.28014, 55.14569 ], [ 26.25305, 55.11874 ], [ 26.24944, 55.07867 ], [ 26.21472, 55.02568 ], [ 26.16083, 54.97721 ], [ 26.07639, 54.96194 ], [ 25.93666, 54.95555 ], [ 25.91194, 54.95361 ], [ 25.87514, 54.9411 ], [ 25.79208, 54.87304 ], [ 25.73694, 54.78812 ], [ 25.72708, 54.67486 ], [ 25.73208, 54.65416 ], [ 25.7577, 54.61499 ], [ 25.76264, 54.58249 ], [ 25.74888, 54.56444 ], [ 25.72472, 54.54847 ], [ 25.65576, 54.52311 ], [ 25.55514, 54.36263 ], [ 25.55166, 54.32691 ], [ 25.57541, 54.31263 ], [ 25.61111, 54.31138 ], [ 25.65027, 54.31583 ], [ 25.69152, 54.32736 ], [ 25.7127, 54.33152 ], [ 25.80722, 54.24666 ], [ 25.785, 54.1645 ], [ 25.76611, 54.15388 ], [ 25.66867, 54.13653 ], [ 25.53993, 54.14548 ], [ 25.50541, 54.18513 ], [ 25.54458, 54.20055 ], [ 25.57305, 54.24305 ], [ 25.50111, 54.30305 ], [ 25.46694, 54.30437 ], [ 25.43833, 54.28889 ], [ 25.42069, 54.27097 ], [ 25.39875, 54.25847 ], [ 25.3725, 54.25416 ], [ 25.34583, 54.25277 ], [ 25.20444, 54.21596 ], [ 25.17888, 54.18611 ], [ 25.16194, 54.17249 ], [ 25.10139, 54.14444 ], [ 25.07722, 54.13611 ], [ 25.02708, 54.13194 ], [ 25.00403, 54.14235 ], [ 24.97152, 54.15728 ], [ 24.84778, 54.1434 ], [ 24.7984, 54.10159 ], [ 24.8225, 54.06478 ], [ 24.83944, 54.03819 ], [ 24.84041, 54.01111 ], [ 24.82673, 53.98437 ], [ 24.72402, 53.97019 ], [ 24.69562, 53.99652 ], [ 24.61222, 53.99222 ], [ 24.51444, 53.95041 ], [ 24.46749, 53.92263 ], [ 24.39166, 53.89034 ], [ 24.26736, 53.90721 ], [ 24.25625, 53.92943 ], [ 24.2418, 53.94569 ], [ 24.20687, 53.96298 ], [ 24.17555, 53.96749 ], [ 24.14958, 53.96527 ], [ 24.12263, 53.95145 ], [ 24.08493, 53.93756 ], [ 24.01611, 53.93721 ], [ 23.98611, 53.93888 ], [ 23.89888, 53.94054 ], [ 23.78388, 53.93555 ], [ 23.70944, 53.92388 ], [ 23.5943, 53.93083 ], [ 23.56861, 53.93915 ], [ 23.54361, 53.94332 ], [ 23.51667, 53.94666 ], [ 23.50404, 53.94704 ], [ 23.50278, 53.94249 ], [ 23.50389, 53.92138 ], [ 23.51001, 53.89932 ], [ 23.53972, 53.84083 ], [ 23.58055, 53.7311 ], [ 23.59044, 53.69443 ], [ 23.59278, 53.68527 ], [ 23.60861, 53.6375 ], [ 23.61722, 53.61402 ], [ 23.64027, 53.55916 ], [ 23.67354, 53.49374 ], [ 23.70055, 53.45305 ], [ 23.78592, 53.31433 ], [ 23.85861, 53.19582 ], [ 23.93319, 53.01208 ], [ 23.92749, 52.94838 ], [ 23.93138, 52.8586 ], [ 23.93866, 52.77471 ], [ 23.93972, 52.77027 ], [ 23.9411, 52.74972 ], [ 23.93527, 52.71749 ], [ 23.9118, 52.69319 ], [ 23.88388, 52.67805 ], [ 23.7468, 52.61464 ], [ 23.71583, 52.61595 ], [ 23.68833, 52.61721 ], [ 23.65527, 52.61028 ], [ 23.63361, 52.60555 ], [ 23.59722, 52.59638 ], [ 23.52305, 52.57361 ], [ 23.50361, 52.5675 ], [ 23.41722, 52.52527 ], [ 23.39722, 52.51444 ], [ 23.3775, 52.49833 ], [ 23.24838, 52.37449 ], [ 23.1654, 52.28227 ], [ 23.19277, 52.23319 ], [ 23.21472, 52.22346 ], [ 23.29778, 52.21166 ], [ 23.34833, 52.2068 ], [ 23.595, 52.11194 ], [ 23.63861, 52.07944 ], [ 23.66083, 52.0061 ], [ 23.6268, 51.95207 ], [ 23.61248, 51.91596 ], [ 23.55805, 51.75249 ], [ 23.54778, 51.68638 ], [ 23.55548, 51.6652 ], [ 23.53499, 51.65359 ], [ 23.53917, 51.59277 ], [ 23.56717, 51.5396 ], [ 23.60463, 51.52769 ], [ 23.64107, 51.5235 ], [ 23.62778, 51.57972 ], [ 23.61329, 51.60673 ], [ 23.65, 51.63617 ], [ 23.75131, 51.65179 ], [ 23.90159, 51.63416 ], [ 23.92291, 51.61985 ], [ 23.9384, 51.59611 ], [ 23.96347, 51.58555 ], [ 23.99819, 51.59291 ], [ 24.04305, 51.61027 ], [ 24.07055, 51.62499 ], [ 24.2834, 51.74117 ], [ 24.29736, 51.76458 ], [ 24.30611, 51.80305 ], [ 24.31458, 51.82403 ], [ 24.39423, 51.88472 ], [ 24.70027, 51.89388 ], [ 24.74055, 51.88972 ], [ 24.8975, 51.90069 ], [ 24.99194, 51.91193 ], [ 25.05194, 51.93221 ], [ 25.09361, 51.94222 ], [ 25.17305, 51.9593 ], [ 25.24097, 51.95986 ], [ 25.26958, 51.95361 ], [ 25.31222, 51.93971 ], [ 25.35208, 51.92861 ], [ 25.43999, 51.92222 ], [ 25.54667, 51.92214 ], [ 25.56277, 51.91999 ], [ 25.59833, 51.91889 ], [ 25.68597, 51.92235 ], [ 25.73361, 51.92736 ], [ 25.77042, 51.93818 ], [ 25.81833, 51.93582 ], [ 26.02694, 51.91027 ], [ 26.14444, 51.87846 ], [ 26.17541, 51.86291 ], [ 26.20777, 51.85833 ], [ 26.29666, 51.85361 ], [ 26.33861, 51.8575 ], [ 26.36416, 51.85889 ], [ 26.43555, 51.85617 ], [ 26.44, 51.82305 ], [ 26.45722, 51.81276 ], [ 26.4986, 51.81193 ], [ 26.53083, 51.81333 ], [ 26.57111, 51.81833 ], [ 26.60805, 51.8211 ], [ 26.64236, 51.82069 ], [ 26.6725, 51.81499 ], [ 26.7225, 51.80249 ], [ 26.7725, 51.78583 ], [ 26.82083, 51.77249 ], [ 26.895, 51.75555 ], [ 26.92652, 51.75041 ], [ 26.94805, 51.74888 ], [ 26.97111, 51.75222 ], [ 27.0193, 51.76812 ], [ 27.08083, 51.7711 ], [ 27.17, 51.76416 ], [ 27.20256, 51.75131 ], [ 27.20458, 51.71749 ], [ 27.19937, 51.67513 ], [ 27.28257, 51.59819 ], [ 27.41667, 51.59749 ], [ 27.45319, 51.60277 ], [ 27.51197, 51.62887 ], [ 27.59722, 51.61583 ], [ 27.68722, 51.60139 ], [ 27.72447, 51.58166 ], [ 27.70976, 51.55051 ], [ 27.68166, 51.49319 ], [ 27.74791, 51.46652 ], [ 27.8168, 51.53326 ], [ 27.81423, 51.56833 ], [ 27.81389, 51.59222 ], [ 27.83208, 51.60916 ], [ 27.86597, 51.6218 ], [ 27.89583, 51.61305 ], [ 27.92562, 51.59166 ], [ 27.95527, 51.575 ], [ 27.98375, 51.56583 ], [ 28.00611, 51.56221 ], [ 28.07902, 51.56444 ], [ 28.10916, 51.56944 ], [ 28.13819, 51.58305 ], [ 28.1575, 51.60999 ], [ 28.18201, 51.63777 ], [ 28.21569, 51.65569 ], [ 28.25673, 51.65929 ], [ 28.31944, 51.58916 ], [ 28.43333, 51.5661 ], [ 28.46819, 51.57791 ], [ 28.49055, 51.58111 ], [ 28.62826, 51.56485 ], [ 28.63277, 51.5436 ], [ 28.63722, 51.51 ], [ 28.65292, 51.46471 ], [ 28.66653, 51.44666 ], [ 28.75715, 51.41565 ], [ 28.76944, 51.44805 ], [ 28.76604, 51.48138 ], [ 28.79305, 51.5161 ], [ 28.81055, 51.53444 ], [ 28.83694, 51.55027 ], [ 29.0525, 51.6311 ], [ 29.08396, 51.63798 ], [ 29.11805, 51.63694 ], [ 29.16319, 51.62777 ], [ 29.18139, 51.61805 ], [ 29.24152, 51.54097 ], [ 29.24958, 51.50228 ], [ 29.31201, 51.38763 ], [ 29.34222, 51.37319 ], [ 29.35384, 51.37532 ], [ 29.40972, 51.40277 ], [ 29.62402, 51.49068 ], [ 29.67583, 51.4993 ], [ 29.71895, 51.49103 ], [ 29.73822, 51.45714 ], [ 29.76277, 51.44083 ], [ 29.83444, 51.44193 ], [ 29.88166, 51.45972 ], [ 29.91166, 51.47276 ], [ 29.98333, 51.48638 ], [ 30.01222, 51.48916 ], [ 30.04305, 51.49027 ], [ 30.15222, 51.49332 ], [ 30.17999, 51.49152 ], [ 30.20722, 51.48374 ], [ 30.34764, 51.40006 ], [ 30.35027, 51.35833 ], [ 30.46472, 51.295 ], [ 30.55141, 51.25185 ], [ 30.56777, 51.29777 ], [ 30.61583, 51.32388 ], [ 30.6426, 51.3312 ], [ 30.64375, 51.36888 ], [ 30.58639, 51.48916 ], [ 30.55389, 51.54194 ], [ 30.565, 51.64333 ], [ 30.62597, 51.70791 ], [ 30.66694, 51.80111 ], [ 30.66208, 51.82166 ], [ 30.74694, 51.89527 ], [ 30.825, 51.94749 ], [ 30.89694, 51.97777 ], [ 30.95889, 52.00083 ], [ 30.93062, 52.03222 ], [ 30.93499, 52.0618 ], [ 30.95966, 52.07935 ], [ 31.10639, 52.08638 ], [ 31.13222, 52.08638 ], [ 31.29625, 52.08694 ], [ 31.32389, 52.105 ], [ 31.34597, 52.11375 ], [ 31.37083, 52.11735 ], [ 31.4225, 52.11999 ], [ 31.50277, 52.11749 ], [ 31.52361, 52.11639 ], [ 31.62222, 52.10889 ], [ 31.73472, 52.1061 ], [ 31.78388, 52.10805 ] ] ]
      }
    }
  ]
};


/* ----------------------------------------------------------------------------------------------------------- */


document.getElementById('setter').addEventListener('click', () => {
  maxDistance = document.getElementById('gridDistance').value || 400; // km
  drawAzimuthalMap(originCoords.x, originCoords.y); 
});

document.addEventListener('DOMContentLoaded', (event) => {
  drawAzimuthalMap(originCoords.x, originCoords.y); 
});

document.getElementById('gridAD').addEventListener('change', function() {
  drawAzimuthalMap(originCoords.x, originCoords.y); 
});

document.getElementById('gridAz').addEventListener('change', function() {
  drawAzimuthalMap(originCoords.x, originCoords.y); 
});

/* ----------------------------------------------------------------------------------------------------------- */

function greatCircleDistance(lat1, lon1, lat2, lon2) {
	const R = 6371; // радиус Земли в километрах
	const φ1 = lat1 * Math.PI / 180; // φ, λ в радианах
	const φ2 = lat2 * Math.PI / 180;
	const Δφ = (lat2-lat1) * Math.PI / 180;
	const Δλ = (lon2-lon1) * Math.PI / 180;

	const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
				Math.cos(φ1) * Math.cos(φ2) *
				Math.sin(Δλ/2) * Math.sin(Δλ/2);
	const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

	return R * c; // в километрах
}

function toPolar(lat, lng, centerLat, centerLng) {
  const distance = greatCircleDistance(centerLat, centerLng, lat, lng);
 //if (distance > maxDistance) return null; // Игнорируем точки за пределами maxDistance

  // Преобразование координат в радианы
  const latRad = lat * Math.PI / 180;
  const lngRad = lng * Math.PI / 180;
  const centerLatRad = centerLat * Math.PI / 180;
  const centerLngRad = centerLng * Math.PI / 180;

  // Вычисление разности долгот
  const dLng = lngRad - centerLngRad;

  // Вычисление компонент x и y для atan2
  const y = Math.sin(dLng) * Math.cos(latRad);
  const x = Math.cos(centerLatRad) * Math.sin(latRad) -
            Math.sin(centerLatRad) * Math.cos(latRad) * Math.cos(dLng);

  // Вычисление угла относительно севера
  let angle = Math.atan2(y, x) * 180 / Math.PI;
  angle = (angle + 360) % 360; // Нормализация угла

  return { distance, angle };
}

function polarToGeographic(centerLat, centerLng, radius, angle) {
  const earthRadius = 6371; // радиус Земли в км
  const radLat = centerLat * Math.PI / 180; // широта центра в радианах
  const radLng = centerLng * Math.PI / 180; // долгота центра в радианах
  const radDistance = radius / earthRadius; // радиальное расстояние
  const radAngle = angle * Math.PI / 180; // угол в радианах

  const newLat = Math.asin(Math.sin(radLat) * Math.cos(radDistance) +
                           Math.cos(radLat) * Math.sin(radDistance) * Math.cos(radAngle));
  const newLng = radLng + Math.atan2(Math.sin(radAngle) * Math.sin(radDistance) * Math.cos(radLat),
                                     Math.cos(radDistance) - Math.sin(radLat) * Math.sin(newLat));

  return {
    lat: newLat * 180 / Math.PI,
    lng: newLng * 180 / Math.PI
  };
}

const calcInfo = (event) => {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  const dx = x - center.x;
  const dy = y - center.y;
  const distance = Math.sqrt(dx * dx + dy * dy) * maxDistance / scaleCoef; // Преобразование пикселей в км
  let angle = Math.atan2(dy, dx) * 180 / Math.PI + 90; // Преобразование радиан в градусы и корректировка угла
  angle = (angle < 0) ? angle + 360 : angle; // Нормализация азимута
  let coords = {
    lat:polarToGeographic(originCoords.x,originCoords.y, distance, angle).lat,
    lng:polarToGeographic(originCoords.x,originCoords.y, distance, angle).lng
  }
  return {distance: distance, azimuth: angle, coords: coords}
}
function mergeArrays(array1, array2) {
  let arr = [];
    for (var i = 0; i < array1.length; i++) {
      for (var j = 0; j < array2.length; j++){
        if (array1[i].y1 == array2[j].y1 && array1[i].y2 == array2[j].y2 && array1[i].x1 == array2[j].x1 && array1[i].x2 == array2[j].x2){
          arr.push({
            y1:array1[i].y1,
            y2:array1[i].y2,
            x1:array1[i].x1,
            x2:array1[i].x2,
            horizontalRow:array1[i].horizontalRow,
            verticalRow:array2[j].verticalRow
          })
        }  
      }


    }
  return arr;
}


/* ----------------------------------------------------------------------------------------------------------- */

function drawCircle(radius) {
  const pixelRadius = radius / maxDistance * scaleCoef; // Преобразование км в пиксели
  
    if (radius % 100 === 0) {
      ctx.strokeStyle = 'black'; // Каждые 100 км
    } else if (radius % 50 === 0) {
      ctx.strokeStyle = 'gray'; // Каждые 50 км
    } else {
      ctx.strokeStyle = 'lightgray'; // Для всех остальных расстояний
    }
  
  ctx.beginPath();
  ctx.arc(center.x, center.y, pixelRadius, 0, 2 * Math.PI);
  ctx.lineWidth = 1;
  ctx.stroke();
}

function drawAzimuthLine(angle) {
  const radian = (angle - 90) * Math.PI / 180;
  const startPixelRadius =  minDistance / maxDistance * scaleCoef;
  const endPixelRadius = maxDistance / maxDistance * scaleCoef;

  ctx.strokeStyle = 'gray';
  ctx.beginPath();
  // Начальная точка на расстоянии 20 км от центра
  ctx.moveTo(center.x + startPixelRadius * Math.cos(radian), center.y + startPixelRadius * Math.sin(radian));
  // Конечная точка на максимальном расстоянии
  ctx.lineTo(center.x + endPixelRadius * Math.cos(radian), center.y + endPixelRadius * Math.sin(radian));
  ctx.lineWidth = 1;
  ctx.stroke();
}

function drawAzimuthValues(gap, angle) {
  const radius = maxDistance / maxDistance * scaleCoef + gap;   
  const radian = (angle - 90) * Math.PI / 180;

  const x = center.x + radius * Math.cos(radian);
  const y = center.y + radius * Math.sin(radian);

  ctx.fillStyle = 'black'; // Цвет текста
  ctx.font = '12px Arial'; // Размер и шрифт текста
  ctx.textAlign = 'center'; // Выравнивание текста по центру
  ctx.textBaseline = 'middle'; // Выравнивание текста по середине

  ctx.fillText(angle, x, y); // Отрисовка значения угла
}

function drawBorder(centerLat, centerLng) {
  geoJson.features.forEach(feature => {
    const coordinates = feature.geometry.coordinates[0];
    let first = true;
	
    coordinates.forEach((coord, index) => {
      const polarCoord = toPolar(coord[1], coord[0], centerLat, centerLng);
      if (polarCoord) {
        const { distance, angle } = polarCoord;
        let adjustedAngle = angle - 90;
        if (adjustedAngle < 0) {
          adjustedAngle += 360; // Нормализация угла
        }
        const radius = distance / maxDistance * scaleCoef;
        const radian = adjustedAngle * Math.PI / 180;
        const x = center.x + radius * Math.cos(radian);
        const y = center.y + radius * Math.sin(radian);

        if (first) {
          ctx.beginPath(); // Начинаем новый путь
          
          ctx.strokeStyle = 'red';
          ctx.lineWidth = 2;

          ctx.moveTo(x, y);
          first = false;
        } else {
          ctx.lineTo(x, y);
        }
      } else {
        if (!first) {
          ctx.stroke(); // Отрисовка текущего сегмента
          first = true;
        }
      }

      // Если это последняя точка и предыдущая была валидной, заканчиваем сегмент
      if (index === coordinates.length - 1 && !first) {
        ctx.stroke();
      }
    });
  });

  // Необходимо установить стили рисования здесь, если они одинаковы для всех сегментов
}

function drawMarker(polarCoord, label) {
  if (polarCoord) {
    const pixelDistance = polarCoord.distance / maxDistance * scaleCoef; // Преобразование км в пиксели
    const radian = (polarCoord.angle - 90) * Math.PI / 180; // Смещение на 90 градусов для корректного отображения
    ctx.lineWidth = 1;
    ctx.fillStyle = 'black'; // Цвет текста
    ctx.font = '10px Arial'; // Размер и шрифт текста
    ctx.textAlign = 'left'; // Выравнивание текста по центру
    ctx.textBaseline = 'middle'; // Выравнивание текста по середине
    ctx.beginPath();
    ctx.arc(center.x + pixelDistance * Math.cos(radian), center.y + pixelDistance * Math.sin(radian), 3, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillText(label, center.x + pixelDistance * Math.cos(radian) + 5, center.y + pixelDistance * Math.sin(radian) + 5);
  }
}

let sectorsInfo = [];
let zoneInfo = [];
let squareInfo = [];
let squareHorInfo = [];
let squareVertInfo = [];

function drawSectorSquares(y1,y2,x1,x2,  sectNumber, zone) {
  const xStep = 1; 
  const yStep = 1.5; 

  let verticalRow = 5;
  let horizontalRow = 4;



  sectorsInfo.push({y1,y2,x1,x2,sectNumber})  


  for (let y = y1; y <= y2; y += yStep) { 
    for (let x = x1; x > x2; x -= xStep) { 
      let settings = y % 9 ? {color:'RoyalBlue', lineWidth: 0.5} : {color:'darkblue', lineWidth: 1};
      if (!(y == 0 || y == 18 || y == 36 || y == 54)) {
        drawLine(x, x-xStep, y, y, settings)
      } 
      if(y != y2){
        if(y % 9 == 0){
           drawText(x-xStep, y-0.3, horizontalRow )
        }
      
        let curX = x-xStep
        let curY = y+yStep
       
        squareHorInfo.push({y1:y,y2:curY,x1:curX,x2:x,horizontalRow})

        if(horizontalRow == 1){
          horizontalRow = 4
        } else {
          horizontalRow--
        }
      }
    }
  }

  for (let x = x1; x >= x2; x -= xStep) { 
    for (let y = y1; y < y2; y += yStep) { 
      let settings = x % 4 ? {color:'RoyalBlue', lineWidth: 0.5} : {color:'darkblue', lineWidth: 1};
      if (!(x == 40 || x == 56 || x == 72)) {
        drawLine(x, x, y, y+yStep, settings)
      }

      if(x != x2){
        if(x % 4 == 0){
          drawText(x-0.8, y+0.2, verticalRow == 10 ? 0 : verticalRow )
        }
     
        let curX = x-xStep
        let curY = y+yStep

       if(verticalRow == 10){
        squareVertInfo.push({y1:y,y2:curY,x1:curX,x2:x, verticalRow:0 })
       } else {
        squareVertInfo.push({y1:y,y2:curY,x1:curX,x2:x,verticalRow:verticalRow})
       }
        

        if(verticalRow == 10){
          verticalRow = 5
        } else {
          verticalRow++
        }
      }

      
    }
  }
   squareInfo = [];
  squareInfo = mergeArrays(squareHorInfo, squareVertInfo)

  drawText(x1-3*xStep, y1+2*yStep, `${zone}${sectNumber}`, 14, 'red')
}


function drawZone(y1,y2,x1,x2, zoneNumber){
  const xStep = 1; // degrees
  const yStep = 1.5; // degrees, which is equivalent to 1°30'
  let sectorNumber = 1;
  zoneInfo.push({y1,y2,x1,x2,zoneNumber})  
  //веертикальные линии
  for (let y = y1; y <= y2; y += yStep) { // Шаг в 1°30' для квадратов  
    for (let x = x1; x > x2; x -= xStep) { // Шаг в 1 градус для квадратов
      if (y == 0 || y == 18 || y == 36 || y == 54) { 
       drawLine(x, x-xStep, y, y, {color:'red', lineWidth: 2})
      } 
      
    }
  }
  //горизонтальные линии
  for (let x = x1; x >= x2; x -= xStep) { 
    for (let y = y1; y < y2; y += yStep) { 
      if (x == 40 || x == 56 || x == 72) {
        drawLine(x, x, y, y+yStep, {color:'red', lineWidth: 2})
      }   
    }
  }

  // Разделение зоны на сектора и их отрисовка
  for (let i = 0; i < 4; i++) { // 4 columns
    for (let j = 0; j < 2; j++) { // 2 rows
      let sectorX1 = x1 - i * 4;
      let sectorY1 = y1 + j * 9;
      drawSectorSquares(sectorY1, sectorY1 + 9, sectorX1, sectorX1 - 4, sectorNumber, zoneNumber);
      sectorNumber++;
    }
  }
}

function drawLine(lat1, lat2, lng1,lng2, settings) {

  // Начало пути для линий
  ctx.beginPath();

  const startPolar = toPolar(lat1, lng1, originCoords.x, originCoords.y);
  const endPolar = toPolar(lat2, lng2, originCoords.x, originCoords.y);

  if (startPolar && endPolar) {
    const startRadius = startPolar.distance / maxDistance * scaleCoef;
    const startRadian = (startPolar.angle - 90) * Math.PI / 180;
    const startX = center.x + startRadius * Math.cos(startRadian);
    const startY = center.y + startRadius * Math.sin(startRadian);

    const endRadius = endPolar.distance / maxDistance * scaleCoef;
    const endRadian = (endPolar.angle - 90) * Math.PI / 180;
    const endX = center.x + endRadius * Math.cos(endRadian);
    const endY = center.y + endRadius * Math.sin(endRadian);

    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
  }

  // Закрытие пути и отрисовка линий
  ctx.closePath();

  // Установка цвета и стиля линий
  ctx.lineWidth = settings.lineWidth;
  ctx.strokeStyle = settings.color;
  ctx.stroke();
}

function drawText(lat, lng, text,fontSize = 10, color = 'black', latStep = 1,lngStep = 1.5 ) {
  // Вычисляем координаты центра сектора или квадрата
  const polarCenter = toPolar((lat + latStep / 2), (lng + lngStep / 2), originCoords.x, originCoords.y);
  const radiusCenter = polarCenter.distance / maxDistance * scaleCoef;
  const radianCenter = (polarCenter.angle - 90) * Math.PI / 180;
  const centerX = center.x + radiusCenter * Math.cos(radianCenter);
  const centerY = center.y + radiusCenter * Math.sin(radianCenter);

  // Выравнивание текста по центру
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  // Рисуем текст на холсте
  ctx.fillStyle = color;
  ctx.font = `${fontSize}px April`;
  ctx.fillText(text, centerX, centerY);
}
/* ----------------------------------------------------------------------------------------------------------- */

function drawAzimuthalMap(centerLat, centerLng) {
  let gridAz = document.getElementById('gridAz');
  let gridAD = document.getElementById('gridAD');
  sectorsInfo = [];
  zoneInfo = [];
 squareInfo = [];
  // Очистка холста
  ctx.clearRect(0, 0, size, size);

  const originPolar = toPolar(centerLat, centerLng, centerLat, centerLng);
  drawMarker(originPolar, 'Бриллиант');// ... Добавьте другие метки по необходимости ...
  
  if (gridAz.checked) {
    for (let distance = minDistance; distance <= maxDistance; distance += distanceStep) {
      drawCircle(distance);
    }
   
    for (let angle = 0; angle < 360; angle += azimuthStep) {
      drawAzimuthLine(angle);
      drawAzimuthValues(15, angle);
    }
  }
  
  drawBorder(centerLat, centerLng);
  drawPointsAndLines();

  if (gridAD.checked) {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 2; j++) {
        let lng1 = 0;
        let lng2 = 18;
        let lat1 = 72;
        let lat2 = 56;
       // drawZone(lng1,lng2,lat1,lat2);
        let lngMult = 18;
        let latmult = 16
        if (i == 0) {
          if(j == 0){
            drawZone(lng1,lng2,lat1,lat2,'07');
          } else {
            drawZone(lng1,lng2,lat1-latmult,lat2-latmult,'17');
          }    
        } 
        if(i == 1){
          if(j == 0){
            drawZone(lng1+lngMult,lng2+lngMult,lat1,lat2,'08');
          } else {
            drawZone(lng1+lngMult,lng2+lngMult,lat1-latmult,lat2-latmult,'18');
          }   
        }
        if(i == 2){
          if(j == 0){
            drawZone(lng1+lngMult*2,lng2+lngMult*2,lat1,lat2,'09');
          } else {
            drawZone(lng1+lngMult*2,lng2+lngMult*2,lat1-latmult,lat2-latmult,'19');
          }   
        }
      }
    }
  }

}

let points = {};
let allPoints = []
let prevId = null;

function drawPointsAndLines() {
  allPoints = [];
  for (const id in points) {
      const pointsArray = points[id];
      let previousPoint = null;

      pointsArray.forEach((point, index) => {
          if (point) {
              const pixelDistance = point.distance / maxDistance * scaleCoef;
              const radian = (point.azimuth - 90) * Math.PI / 180;
              const coords = {
                  x: center.x + pixelDistance * Math.cos(radian),
                  y: center.y + pixelDistance * Math.sin(radian)
              };
              // Рисуем точку
              ctx.beginPath();
              ctx.arc(coords.x, coords.y, 2, 0, 2 * Math.PI);
              ctx.fillStyle = 'black';
              ctx.fill();

              // Рисуем линию к предыдущей точке
              if (previousPoint) {
                  ctx.beginPath();
                  ctx.moveTo(previousPoint.x, previousPoint.y);
                  ctx.lineTo(coords.x, coords.y);
                  ctx.strokeStyle = 'black';
                  ctx.stroke();
              }
              previousPoint = coords;
          }

          allPoints.push({
            number: `'${index === 0 ? id.padStart(6, '00') : id}'`,
            azimuth: point.azimuth,
            distance: point.distance,
            affiliation: point.affiliation || '',
            height: point.height || '',
            speed: point.speed || '',
            signal: point.signal || '',
            time: point.time,
          })
      });

      // Сброс previousPoint после завершения отрисовки сегмента
      previousPoint = null;
  }
  fillTable()
}

function fillTable() {
  let pointsTable = document.getElementById('pointTable').getElementsByTagName('tbody')[0];
  pointsTable.innerHTML = ''; // Очистка таблицы

allPoints.sort((a, b) => {
  // Сначала сортировка по времени
  if (a.time < b.time) return -1;
  if (a.time > b.time) return 1;

  // Если время одинаковое, сортировка по номеру
  if (a.number < b.number) return -1;
  if (a.number > b.number) return 1;

  return 0; // Если элементы равны
});

  allPoints.forEach(point => {
    let row = pointsTable.insertRow();
    row.insertCell().textContent = point.number;
    row.insertCell().textContent = point.azimuth;
    row.insertCell().textContent = point.distance;
    row.insertCell().textContent = point.affiliation;
    row.insertCell().textContent = point.height;
    row.insertCell().textContent = point.speed;
    row.insertCell().textContent = point.signal;
    row.insertCell().textContent = point.time;
  })
}
/* ----------------------------------------------------------------------------------------------------------- */



// Функция для определения сектора по координатам курсора
function getNumberByCoords(x, y) {
  let sector = 0;
  let zone = '0';
  let square = '00';

  sectorsInfo.forEach(el => {
    if (x <= el.x1 && x >= el.x2 && y >= el.y1 && y <= el.y2) {
      sector = el.sectNumber
    }
  })

  zoneInfo.forEach(el => {
    if (x <= el.x1 && x >= el.x2 && y >= el.y1 && y <= el.y2) {

      zone = el.zoneNumber    
    }
  })

  squareInfo.forEach(el => {
    

    if (x <= el.x2 && x >= el.x1 && y >= el.y1 && y <= el.y2) {
      
      square = `${el.horizontalRow} ${el.verticalRow}`    
      
    }
  })

  return {sector, zone, square};
}

// Измененный обработчик события mousemove
canvas.addEventListener('mousemove', (e) => {
  let sector = getNumberByCoords(calcInfo(e).coords.lat.toFixed(2),calcInfo(e).coords.lng.toFixed(2));
  //console.log(sector)
    document.getElementById('info').innerText = 
         `Азимут: ${calcInfo(e).azimuth.toFixed(2)}°, 
          Дальность: ${calcInfo(e).distance.toFixed(2)} км, 
          Координаты: ${calcInfo(e).coords.lat.toFixed(2)}, ${calcInfo(e).coords.lng.toFixed(2)},
          Сетка ПВО: ${sector.zone}${sector.sector} ${sector.square}
          `;

    document.getElementById('info').style.top = `${e.clientY + 10}px`;
    document.getElementById('info').style.left = `${e.clientX + 10}px`;
    document.getElementById('info').style.display = 'block';          
    // ... остальная часть вашего кода ...
  
});

//скрывает информацию, когда курсор вне сетки
canvas.addEventListener('mouseout', () => {
  document.getElementById('info').style.display = 'none';
});

/* ----------------------------------------------------------------------------------------------------------- */

//считывает Excel файл
document.getElementById("readFile").addEventListener('click', function readFile() {
  const input = document.getElementById('fileInput');
  const file = input.files[0];

  const reader = new FileReader();
  reader.onload = (e) => {
    const data = new Uint8Array(e.target.result);
    const workbook = XLSX.read(data, { type: 'array' });
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const dataArray = XLSX.utils.sheet_to_json(sheet, {
      header: 1,
      blankrow: false,
    });

    // Filter out empty rows
    const filteredData = dataArray.filter(row => {
      return row.some(cell => cell !== '');
    });


    // Ignore the first and the second line of the input file
    filteredData.shift();
    filteredData.shift();

    processData(filteredData);
  };
  reader.readAsArrayBuffer(file);
}, false);

//render Excel data
function processData(data) {
  points = {};
  allPoints = [];
  let previousTargetId = null;

  data.forEach((row) => {
    const targetId = String(row[0]).replace(/^0+/, ''); // Remove leading zeros
    const azimuth = parseInt(row[1]);
    const distance = parseInt(row[2]);
    const affiliation = row[3];
    const height = row[4];
    const speed = row[5];
    const signal = row[6]
    const time = row[7];

    if (!points[targetId]) {
      // Replace the previousId with the targetId if it's a new target or the first occurrence
      previousTargetId = targetId;
      points[targetId] = [{ azimuth: azimuth, distance: distance, affiliation: affiliation, height: height, speed: speed, signal: signal,time: time }].sort((a, b) => a.time - b.time);
    } else {
      // If the target already exists, append the data
      points[targetId].push({ azimuth: azimuth, distance: distance, affiliation: affiliation, height: height, speed: speed,signal:signal, time: time });
      points[targetId] = points[targetId].sort((a, b) => a.time - b.time);
    }

    previousTargetId = targetId;
    });

    for (const id in points) {
      allPoints = allPoints.concat(points[id]);
    }
  

    drawAzimuthalMap(originCoords.x, originCoords.y);
  }

document.getElementById("exportTable").addEventListener('click',function exportTableToXLSX() {
  
  const ws = XLSX.utils.table_to_sheet(document.getElementById('pointTable'));

  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Points');
  XLSX.writeFile(wb, 'Тренировка.xlsx');
}, false);

/* ----------------------------------------------------------------------------------------------------------- */

let manualInputMode = 0;
let manualInputId = null;

//switch mode
document.getElementById('manual-input-button').addEventListener('click', () => {

  manualInputMode++
  document.getElementById("timeManualInput").value = '0'
  if(manualInputMode > 2) { 
    manualInputMode = 0  
  }

  switch (manualInputMode) {
  case 0:
    document.getElementById('manual-input-button').textContent = 'Ввод Выключен';
    manualInputId = null;
    break;
  case 1:
    document.getElementById('manual-input-button').textContent = 'Ввод включен';
    break;          
  case 2:
    document.getElementById('manual-input-button').textContent = 'Режим удаления';
    manualInputId = null;
    break;
  default:
    document.getElementById('manual-input-button').textContent = manualInputMode;
    manualInputId = null;
    break;
  }

});

//put a point on click or delete it
canvas.addEventListener('mousedown', (e) => {

  //turn off manual input
  if (manualInputMode == 0) return;
  if (manualInputMode == 1){
    // Find the smallest unused id in range from 3800 to 3899 in the points list
    if (manualInputId === null) {
      for (let id = 3801; id < 3900; id++) {
        if (points[id] === undefined) {
          manualInputId = id;
          break;
        }
      }
    }
    // Add the new point to the points list
    let point = {
      id: document.getElementById("idManualInput").value === '' ? manualInputId : document.getElementById("idManualInput").value,
      azimuth: parseInt(calcInfo(e).azimuth.toFixed(2)),
      distance: parseInt(calcInfo(e).distance.toFixed(2)),
      affiliation: '',
      height: '',
      speed: '',
      signal: document.getElementById("signalManualInput").value === '' ? '' :  document.getElementById("signalManualInput").value,
      time: document.getElementById("timeManualInput").value++
    };            

    if (points[point.id] === undefined) {
      // First time using the manual input id
      point.affiliation = document.getElementById("affiliationManualInput").value === '' ? '91' : document.getElementById("affiliationManualInput").value;
      point.height = document.getElementById("heightManualInput").value === '' ? '' : document.getElementById("heightManualInput").value;
      point.speed = document.getElementById("speedManualInput").value === '' ? '' : document.getElementById("speedManualInput").value;
      points[point.id] = [point];
    } else {
      points[point.id].push(point);
    }
  }

  if (manualInputMode == 2) {
    let idToRemove = document.getElementById("idRemove").value;
  
    if (idToRemove && points[idToRemove]) {
      points[idToRemove].pop(); // Удаляем последнюю точку
      if (points[idToRemove].length === 0) {
        delete points[idToRemove]; // Удаляем id, если больше нет точек
      }
    }
  }
  drawAzimuthalMap(originCoords.x, originCoords.y);
});

/* ----------------------------------------------------------------------------------------------------------- */






