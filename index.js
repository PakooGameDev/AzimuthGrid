const canvas = document.getElementById('azimuthalGrid');
const ctx = canvas.getContext('2d');

// координаты границы Беларуси
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

let distanceStep = 10;
let azimuthStep = 10;
let minDistance = 20;

const scaleCoef = 400; // масштаб для пикселей
const size = 900; 

const center = { x: size / 2, y: size / 2 };


canvas.width = size;
canvas.height = size;


let originName = 'Бриллиант';

// центр круга - Мозырь по стандарту
let originCoords = {x:52.04, y:29.10}

let maxDistance = document.getElementById('gridDistance').value || 400;

let sectorsInfo = [];
let squareInfo = [];
let squareHorInfo = [];
let squareVertInfo = [];

let numbersCode = {}
let sectorCode = {}
let zoneCode = {}

let points = {};
let allPoints = []

let filteredData = [];

/* ----------------------------------------------------------------------------------------------------------- */

document.getElementById('fileInput').addEventListener('change', function(event) {
  var fileName = event.target.files[0].name; // Получаем название файла
  document.getElementById('file-name').textContent = fileName; // Отображаем название файла
});

// Установка начального состояния
document.getElementById('tableAz').style.display = 'block'; 
document.getElementById('tableAd').style.display = 'none'; 

document.getElementById('changeTable').addEventListener('click', () => {
  let tableAz = document.getElementById('tableAz');
  let tableAd = document.getElementById('tableAd');

  tableAz.style.display = tableAz.style.display == 'block' ? 'none' : 'block';
  tableAd.style.display = tableAd.style.display == 'none' ? 'block' : 'none';
});

/* ----------------------------------------------------------------------------------------------------------- */

// изменение параметров и ререндер по нажатию кнопки "установить"
document.getElementById('setter').addEventListener('click', () => {
  maxDistance = document.getElementById('gridDistance').value || 400; // km
  drawAzimuthalMap(originCoords.x, originCoords.y); 
});

/* ----------------------------------------------------------------------------------------------------------- */

let latSet = document.getElementById('latSet').value || 52.04
let lngSet = document.getElementById('lngSet').value || 29.10
let locSet = document.getElementById('locationName').value || 'Бриллиант'

document.getElementById('coordsSetter').addEventListener('click', () => {
  originName = locSet
  originCoords.x=parseFloat(latSet);
  originCoords.y=parseFloat(lngSet)
  drawAzimuthalMap(originCoords.x, originCoords.y); 
});

/* ----------------------------------------------------------------------------------------------------------- */

// рендер кэнваса после загрузки страницы
document.addEventListener('DOMContentLoaded', (event) => {
  
  drawAzimuthalMap(originCoords.x, originCoords.y); 
});		

// Отображаем сохраненные числа при загрузке страницы
window.onload = function() {
  for (let i = 1; i <= 6; i++) {
    let savedZone = localStorage.getItem('savedZone' + (i <= 3 ? i + 6 : i + 13));
    if (savedZone) {
      document.getElementById('zoneValue' + i).textContent = savedZone;
    }
  }
  for (let i = 1; i <= 8; i++) {
    let savedSector = localStorage.getItem('savedSector' + i);
    if (savedSector) {
      document.getElementById('sectorValue' + i).textContent = savedSector;
    }
  }
  for (let i = 1; i <= 10; i++) {
    let savedNumber = localStorage.getItem('savedNumber' + i);
    if (savedNumber) {
      document.getElementById('originalValue' + i).textContent = savedNumber;
    }
  }
};

document.getElementById('encodeButton').addEventListener('click', () => {
  for (let i = 1; i <= 6; i++) {
    // получаем значение в текущей ячейке
    let cellValue = document.getElementById('zoneInput' + i).value;
    // получаем цифру над текущей ячейкой
    let zoneValue = document.getElementById('zoneValue' + i).textContent;
    // сохраняем значение в локальное хранилище браузера, чтобы оно отображалось после перезагрузки страницы
    localStorage.setItem('savedZone' + i, cellValue < 10 ? `0` + cellValue : cellValue);
    // меняем цифру над ячейкей, если ячейка валидна
    document.getElementById('zoneValue' + i).textContent = (cellValue || zoneValue);
    
    if (cellValue) {
      zoneCode[(i <= 3 ? i + 6 : i + 13)] = cellValue;
    }
  }

  for (let i = 1; i <= 8; i++) {
    // получаем значение в текущей ячейке
    let cellValue = document.getElementById('sectorInput' + i).value;
    // получаем цифру над текущей ячейкой
    let sectorValue = document.getElementById('sectorValue' + i).textContent;
    // сохраняем значение в локальное хранилище браузера, чтобы оно отображалось после перезагрузки страницы
    localStorage.setItem('savedSector' + i, cellValue);
    // меняем цифру над ячейкей, если ячейка валидна
    document.getElementById('sectorValue' + i).textContent = (cellValue || sectorValue);
    
    if (cellValue) {
      sectorCode[i] = cellValue;
    }
  }
  // Большие квадраты
  for (let i = 1; i <= 10; i++) {
    // получаем значение в текущей ячейке
    let cellValue = document.getElementById('numberInput' + i).value;
    // получаем цифру над текущей ячейкой
    let originalValue = document.getElementById('originalValue' + i).textContent;
    // сохраняем значение в локальное хранилище браузера, чтобы оно отображалось после перезагрузки страницы
    localStorage.setItem('savedNumber' + i, cellValue == 10 ? 0 : cellValue);
    // меняем цифру над ячейкей, если ячейка валидна
    document.getElementById('originalValue' + i).textContent = (cellValue == 10 ? 0 : cellValue || originalValue);
    
    if (cellValue) {
      numbersCode[i] = cellValue == 10 ? 0 : cellValue;
    }
  }
  
  localStorage.setItem('zonesCode', JSON.stringify(zoneCode));
  localStorage.setItem('numbersCode', JSON.stringify(numbersCode));
  localStorage.setItem('sectorCode', JSON.stringify(sectorCode));
  processData(filteredData);
  drawAzimuthalMap(originCoords.x, originCoords.y); 
});


function encodeSquare(Square){
  const num = typeof('string') ? parseInt(Square) : Square
  const numbersCodeSaved = JSON.parse(localStorage.getItem('numbersCode'));
  return numbersCodeSaved[num] || num
}

function encodeZone(Zone){
  
  const num =  Zone
  const numbersCodeSaved = JSON.parse(localStorage.getItem('zonesCode'));
  return numbersCodeSaved[num] || num
}

function encodeSector(Sector){
  const num = typeof('string') ? parseInt(Sector) : Sector
  const numbersCodeSaved = JSON.parse(localStorage.getItem('sectorCode'));
  return numbersCodeSaved[num] || num
}

/* ----------------------------------------------------------------------------------------------------------- */

const gridAz = document.getElementById('gridAz');
const gridAd = document.getElementById('gridAD');
const borderSet = document.getElementById('borderGen');
const signalsGen = document.getElementById('signalsGen');
const regen = document.getElementById('regen');
// обработка галочки "включить сетку ПВО"
gridAd.addEventListener('change', () => {
  drawAzimuthalMap(originCoords.x, originCoords.y); 
});

// обработка галочки "Отобразить границу"
borderSet.addEventListener('change', () => {
  drawAzimuthalMap(originCoords.x, originCoords.y); 
});

// обработка галочки "включить азимутальную сетку"
gridAz.addEventListener('change', () => {
  drawAzimuthalMap(originCoords.x, originCoords.y); 
});

// обработка галочки "включить сигналы"
signalsGen.addEventListener('change', () => {
  drawAzimuthalMap(originCoords.x, originCoords.y); 
});

// обработка галочки "включить 517"
regen.addEventListener('change', () => {
  drawAzimuthalMap(originCoords.x, originCoords.y); 
});

/* ----------------------------------------------------------------------------------------------------------- */

// Формула большого круга
function greatCircleDistance(lat1, lon1, lat2, lon2) {
  const a = 6378137; // длина большой полуоси Земли в метрах (WGS-84)
  const b = 6356752.314245; // длина малой полуоси Земли в метрах (WGS-84)
  const f = 1 / 298.257223563; // сплюснутость Земли (WGS-84)

  const L = (lon2 - lon1) * Math.PI / 180;
  const U1 = Math.atan((1 - f) * Math.tan(lat1 * Math.PI / 180));
  const U2 = Math.atan((1 - f) * Math.tan(lat2 * Math.PI / 180));
  const sinU1 = Math.sin(U1);
  const cosU1 = Math.cos(U1);
  const sinU2 = Math.sin(U2);
  const cosU2 = Math.cos(U2);

  let λ = L;
  let λP;
  let iterLimit = 100;
  let sinλ, cosλ, sinσ, cosσ, σ, sinα, cos2α, cos2σm, C;
  do {
    sinλ = Math.sin(λ);
    cosλ = Math.cos(λ);
    sinσ = Math.sqrt((cosU2 * sinλ) * (cosU2 * sinλ) +
      (cosU1 * sinU2 - sinU1 * cosU2 * cosλ) *
      (cosU1 * sinU2 - sinU1 * cosU2 * cosλ));
    if (sinσ == 0) return 0; // совпадающие точки

    cosσ = sinU1 * sinU2 + cosU1 * cosU2 * cosλ;
    σ = Math.atan2(sinσ, cosσ);
    sinα = cosU1 * cosU2 * sinλ / sinσ;
    cos2α = 1 - sinα * sinα;
    cos2σm = cosσ - 2 * sinU1 * sinU2 / cos2α;
    if (isNaN(cos2σm)) cos2σm = 0; // экваториальная линия: cos2αm=0 (6)
    C = f / 16 * cos2α * (4 + f * (4 - 3 * cos2α));
    λP = λ;
    λ = L + (1 - C) * f * sinα *
      (σ + C * sinσ * (cos2σm + C * cosσ * (-1 + 2 * cos2σm * cos2σm)));
  } while (Math.abs(λ - λP) > 1e-12 && --iterLimit > 0);

  if (iterLimit == 0) return NaN; // не сошлось, возможно, плохие данные

  const uSq = cos2α * (a * a - b * b) / (b * b);
  const A = 1 + uSq / 16384 * (4096 + uSq * (-768 + uSq * (320 - 175 * uSq)));
  const B = uSq / 1024 * (256 + uSq * (-128 + uSq * (74 - 47 * uSq)));
  const Δσ = B * sinσ * (cos2σm + B / 4 * (cosσ * (-1 + 2 * cos2σm * cos2σm) -
    B / 6 * cos2σm * (-3 + 4 * sinσ * sinσ) * (-3 + 4 * cos2σm * cos2σm)));

  const s = b * A * (σ - Δσ); // расстояние между точками в метрах

  return s / 1000; // возвращаем расстояние в километрах
}

// географические координаты в полярные координаты
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

function polarToGeographic(radius, angle) {
  const earthRadius = 6371; // радиус Земли в км
  const radLat = originCoords.x * Math.PI / 180; // широта центра в радианах
  const radLng = originCoords.y * Math.PI / 180; // долгота центра в радианах
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

// Функция для определения азимута,дальности,географических координат по положению курсора
const getInfoUnderCursor = (event) => {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  const dx = x - center.x;
  const dy = y - center.y;
  const distance = Math.sqrt(dx * dx + dy * dy) * maxDistance / scaleCoef; // Преобразование пикселей в км
  let angle = Math.atan2(dy, dx) * 180 / Math.PI + 90; // Преобразование радиан в градусы и корректировка угла
  angle = (angle < 0) ? angle + 360 : angle; // Нормализация азимута
  let coords = {
    lat:polarToGeographic(distance, angle).lat,
    lng:polarToGeographic(distance, angle).lng
  }
  return {distance: distance, azimuth: angle, coords: coords}
}

function polarToGrid(distance, azimuth) {
  let polar = polarToGeographic(distance, azimuth);
  let grid = geoToGridCoords(polar.lat, polar.lng);
  let sectorAndZone = `${grid.zone}${grid.sector}`;
  let squareHor = grid.squareHor;
  let squareVert = grid.squareVert;
  let squares = `${grid.middleSquare}${grid.smallSquare}/${grid.additionalSquare}`;

  return [sectorAndZone, squareHor, squareVert, squares];
}


/* ----------------------------------------------------------------------------------------------------------- */

// Функция для определения координат сетки ПВО по географическим координатам
function geoToGridCoords(x, y) {
  let zone = 0;
  let sector = 0;
  let squareHor = 0;
  let squareVert = 0;
  let middleSquare  = 1
  let smallSquare  = 1
  let additionalSquare = 1;

  let zones = [
    {y1:0, y2:18, x1:72, x2:56, zoneNumber:'07'},
    {y1:18, y2:36, x1:72, x2:56, zoneNumber:'08'},
    {y1:36, y2:54, x1:72, x2:56, zoneNumber:'09'},
    {y1:0, y2:18, x1:56, x2:40, zoneNumber:'17'},
    {y1:18, y2:36, x1:56, x2:40, zoneNumber:'18'},
    {y1:36, y2:54, x1:56, x2:40, zoneNumber:'19'},
  ]

  zones.forEach(el => {
    if (x <= el.x1 && x >= el.x2 && y >= el.y1 && y <= el.y2) {     
      zone = encodeZone(el.zoneNumber)
    }
  })

  sectorsInfo.forEach(el => {
    if (x <= el.x1 && x >= el.x2 && y >= el.y1 && y <= el.y2) { 
      sector = el.sectNumber
    }
  })


  squareInfo.forEach(el => {
    if (x <= el.x2 && x >= el.x1 && y >= el.y1 && y <= el.y2) {  
      squareHor = encodeSquare(el.horizontalRow); 
      squareVert = encodeSquare(el.verticalRow);
    }
  })

  squareInfo.forEach(el => {
    if (x <= el.x2 && x >= el.x1 && y >= el.y1 && y <= el.y2) {
      middleSquare = getSquareIndexes(x, y, el.x1, el.x2, el.y1, el.y2).midSquare;
      smallSquare = getSquareIndexes(x, y, el.x1, el.x2, el.y1, el.y2).smallSquare;
      additionalSquare = getSquareIndexes(x, y, el.x1, el.x2, el.y1, el.y2).additionalSquare;
    }
  });

  return {zone, sector, squareHor, squareVert, middleSquare, smallSquare, additionalSquare};
}

// делит каждый сектор на квадраты вплоть до дополнительного
function getSquareIndexes(x, y, x1, x2, y1, y2) {
  const width = x2 - x1;
  const height = y2 - y1;

  // Разделение на 9 средних квадратов
  const midSquareWidth = width /3;
  const midSquareHeight = height /3;

  // Разделение каждого среднего квадрата на 9 малых
  const smallSquareWidth = midSquareWidth / 3;
  const smallSquareHeight = midSquareHeight / 3;

  // Разделение каждого малого квадрата на 9 ещё дополнительных
  const tinySquareWidth = smallSquareWidth / 3;
  const tinySquareHeight = smallSquareHeight / 3;

  // Определение номера среднего квадрата
  let midSquare = 0;
  if (x <= x1 + midSquareWidth) {
    if (y <= y1 + midSquareHeight) midSquare = 7;
    else if (y <= y1 + 2 * midSquareHeight) midSquare = 6;
    else midSquare = 5;
  } else if (x <= x1 + 2 * midSquareWidth) {
    if (y <= y1 + midSquareHeight) midSquare = 8;
    else if (y <= y1 + 2 * midSquareHeight) midSquare = 9;
    else midSquare = 4;
  } else {
    if (y <= y1 + midSquareHeight) midSquare = 1;
    else if (y <= y1 + 2 * midSquareHeight) midSquare = 2;
    else midSquare = 3;
  }

  // Определение номера малого квадрата внутри среднего
  let smallSquare = 0;
  const startX = x1 + (Math.ceil((x - x1) / midSquareWidth) - 1) * midSquareWidth;
  const startY = y1 + (Math.ceil((y - y1) / midSquareHeight) - 1) * midSquareHeight;

  if (x <= startX + smallSquareWidth) {
    if (y <= startY + smallSquareHeight) smallSquare = 7;
    else if (y <= startY + 2 * smallSquareHeight) smallSquare = 6;
    else smallSquare = 5;
  } else if (x <= startX + 2 * smallSquareWidth) {
    if (y <= startY + smallSquareHeight) smallSquare = 8;
    else if (y <= startY + 2 * smallSquareHeight) smallSquare = 9;
    else smallSquare = 4;
  } else {
    if (y <= startY + smallSquareHeight) smallSquare = 1;
    else if (y <= startY + 2 * smallSquareHeight) smallSquare = 2;
    else smallSquare = 3;
  }

  // Определение номера ещё меньшего квадрата внутри малого
  let additionalSquare = 0;
  const startTinyX = startX + (Math.ceil((x - startX) / smallSquareWidth) - 1) * smallSquareWidth;
  const startTinyY = startY + (Math.ceil((y - startY) / smallSquareHeight) - 1) * smallSquareHeight;

  if (x <= startTinyX + tinySquareWidth) {
    if (y <= startTinyY + tinySquareHeight) additionalSquare = 7;
    else if (y <= startTinyY + 2 * tinySquareHeight) additionalSquare = 6;
    else additionalSquare = 5;
  } else if (x <= startTinyX + 2 * tinySquareWidth) {
    if (y <= startTinyY + tinySquareHeight) additionalSquare = 8;
    else if (y <= startTinyY + 2 * tinySquareHeight) additionalSquare = 9;
    else additionalSquare = 4;
  } else {
    if (y <= startTinyY + tinySquareHeight) additionalSquare = 1;
    else if (y <= startTinyY + 2 * tinySquareHeight) additionalSquare = 2;
    else additionalSquare = 3;
  }  

  return { midSquare, smallSquare, additionalSquare };
}

/* ----------------------------------------------------------------------------------------------------------- */

function drawCircle(radius) {
  const pixelRadius = radius / maxDistance * scaleCoef; // Преобразование км в пиксели
  
    if (radius % 100 === 0) {
      ctx.strokeStyle = '#f54242'; // Каждые 100 км
      ctx.lineWidth = 5;
    } else if (radius % 50 === 0) {
      ctx.lineWidth = 5;
      ctx.strokeStyle = '#f54242'; // Каждые 50 км
    } else {
      ctx.lineWidth = 1;
      ctx.strokeStyle = '#b0d0ff'; // Для всех остальных расстояний
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

  angle % 30 === 0 ? ctx.strokeStyle = '#f54242' : ctx.strokeStyle = '#b0d0ff';
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

/* ----------------------------------------------------------------------------------------------------------- */

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

/* ----------------------------------------------------------------------------------------------------------- */

function determineSquareNum(y1, y2, x1, x2, sectNumber, zone) {
  const xStep = 1; 
  const yStep = 1.5;

  sectorsInfo.push({ y1, y2, x1, x2, sectNumber }); // сохраняем координаты и номер сектора
  // вычисляем координаты квадратов и определяем их номера по горизонтали и вертикали
  for (let horizontalRow = 4; horizontalRow > 0; horizontalRow--) {
    for (let verticalRow = 5; verticalRow <= 10; verticalRow++) {
      let sectorX1 = x2 + horizontalRow * xStep;
      let sectorY1 = y1 + (verticalRow - 5) * yStep;

      // рисуем в первых рядах секторов цифры-номера рядов и столбцов со смещением
      if (sectorX1 >= x2 && sectorY1 <= y2) {
        if (sectorY1 != y2 && sectorY1 % 9 == 0) {
          drawText(sectorX1 - xStep - 0.1, sectorY1 - 0.25, encodeSquare(horizontalRow)); 
        }

        if (sectorX1 != x2 && sectorX1 % 4 == 0) {
          drawText(sectorX1 - xStep + 0.1, sectorY1 + 0.3, verticalRow == 10 ? 0 : encodeSquare(verticalRow));
        }
        // сохраняем координаты о квадратах в секторе с их номерами
        squareInfo.push({
          y1: sectorY1,
          y2: sectorY1 + yStep,
          x1: sectorX1 - xStep,
          x2: sectorX1,
          horizontalRow: encodeSquare(horizontalRow),
          verticalRow: encodeSquare(verticalRow) == 10 ? 0 : encodeSquare(verticalRow)
        });
      }
    }
  }
  // рисуем номера секторов
  drawText(x1 - 3 * xStep, y1 + 2 * yStep, `${zone}${sectNumber}`, 14, 'red');
  
}

function drawZone(y1, y2, x1, x2, zoneNumber) {
  const xStep = 1;
  const yStep = 1.5;

  let sectorNumber = 1;

  // отрисовка линий
  for (let y = y1; y <= y2; y += yStep) {
    for (let x = x1; x >= x2; x -= xStep) {

      // определяем цвета и толщину линий границ секторов и квадратов
      let ySettings = y % 9 ? { color: 'RoyalBlue', lineWidth: 0.5 } : { color: 'darkblue', lineWidth: 1 }; 
      let xSettings = x % 4 ? { color: 'RoyalBlue', lineWidth: 0.5 } : { color: 'darkblue', lineWidth: 1 };

      // Отрисовываем горизонтальные линии в пределах зон
      if(!(x <= x2)){
        if (y == y1 || y == y2) {      
          drawLine(x, x - xStep, y, y, { color: 'red', lineWidth: 2 }); // границы зон
        } else {
            drawLine(x, x - xStep, y, y, ySettings);  // границы секторов и квадратов
        }
      }

      // Отрисовываем вертикальные линии в пределах зон
      if(!(y >= y2)){      
        if (x == x1 || x == x2) {
          drawLine(x, x, y, y + yStep, { color: 'red', lineWidth: 2 }); // границы зон
        } else {
          
          drawLine(x, x, y, y + yStep, xSettings); // границы секторов и квадратов
        }
      } 

    }
  }

  // дробим зону на секторы и вызываем функцию просчета их координат и номеров
  for (let i = 0; i < 4; i++) { // 4 колонки
    for (let j = 0; j < 2; j++) { // 2 ряда
      let sectorX1 = x1 - i * 4;
      let sectorY1 = y1 + j * 9;
      // убеждаемся, что сектор в пределах границ зоны
      if (sectorX1 >= x2 && sectorY1 <= y2) {
        determineSquareNum(sectorY1, sectorY1 + 9, sectorX1, sectorX1 - 4, encodeSector(sectorNumber), zoneNumber);
        sectorNumber++;
      }
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
function drawPointsAndLines() {
  allPoints = [];
  for (const id in points) {
    const pointsArray = points[id];
    let previousPoint = null;
    let firstPoint;
    pointsArray.forEach((point, index) => {
      if (point) {
        const pixelDistance = point.distance / maxDistance * scaleCoef;
        const radian = (point.azimuth - 90) * Math.PI / 180;
        const coords = {
          x: center.x + pixelDistance * Math.cos(radian),
          y: center.y + pixelDistance * Math.sin(radian)
        };
        if (index === 0) {
          firstPoint = point 
        }
        
        // Рисуем разные формы в зависимости от сигнала
        ctx.beginPath();
        ctx.lineWidth = 1; // Толщина линии
        if (point.signal == 190) {
          // Рисуем перпендикулярную линию
          drawPerpendicularLine(ctx, previousPoint, coords);
        } else if (point.signal == 192) {
          // Рисуем двойную линию
          drawDoubleLine(ctx, previousPoint, coords);
        } else if (point.signal == 332) {
          // Рисуем крестик
          drawCross(ctx, coords);
        } else if (point.signal == 336 && signalsGen.checked) {
          drawSignalFootnote(ctx, point, coords)
        } else if ((point.signal == 517 || (index % 4 == 0 && index != 0)) && regen.checked ) {
          drawRegenFootnote(ctx, point, coords, firstPoint)  
        } else {
          // Рисуем точку, если сигнал не соответствует специальным условиям
          ctx.arc(coords.x, coords.y, 1, 0, 2 * Math.PI);
          ctx.fillStyle = 'black';
          ctx.fill();
        }
        if ( index === 0) {  //index % 4 == 0 ||
          drawFootnote(ctx, point, coords, id);
        }
        // Рисуем линию к предыдущей точке
        if (previousPoint) {
          ctx.moveTo(previousPoint.x, previousPoint.y);
          ctx.lineTo(coords.x, coords.y);
          ctx.strokeStyle = 'black';
          ctx.stroke();
        }
        previousPoint = coords;
      }
      allPoints.push({
        number:`'${index === 0 ? id.padStart(6, '00') : id}'`,
        azimuth:point.azimuth,
        distance:point.distance,
        sectorAndZone:point.sectorAndZone, 
        squareHor:point.squareHor,
        squareVert:point.squareVert,
        squares:point.squares,
        affiliation:point.affiliation || '',
        height:point.height || '',
        speed:point.speed || '',
        signal:point.signal || '',
        time:point.time,
      }) 
    });
    // Сброс previousPoint после завершения отрисовки сегмента
    previousPoint = null;
  }
  fillTable();
}

function drawPerpendicularLine(ctx, previousPoint, currentPoint) {
  if (previousPoint) {
    const lineLength = 10; // Максимальная длина линии
    

    // Вычисляем направление перпендикуляра
    const directionX = previousPoint.y - currentPoint.y;
    const directionY = currentPoint.x - previousPoint.x;

    // Нормализуем направление
    const length = Math.sqrt(directionX * directionX + directionY * directionY);
    const unitX = directionX / length;
    const unitY = directionY / length;

    // Рисуем перпендикулярную линию от текущей точки

    ctx.moveTo(currentPoint.x + unitX * lineLength / 2, currentPoint.y + unitY * lineLength / 2);
    ctx.lineTo(currentPoint.x - unitX * lineLength / 2, currentPoint.y - unitY * lineLength / 2);
    ctx.strokeStyle = 'black';

  }
}

function drawDoubleLine(ctx, previousPoint, currentPoint) {
  if (previousPoint) {
    const lineLength = 10; // Максимальная длина линии
    const offset = 3; // Расстояние между линиями


    // Вычисляем направление перпендикуляра
    const directionX = previousPoint.y - currentPoint.y;
    const directionY = currentPoint.x - previousPoint.x;

    // Нормализуем направление
    const length = Math.sqrt(directionX * directionX + directionY * directionY);
    const unitX = directionX / length;
    const unitY = directionY / length;


    ctx.moveTo(currentPoint.x + unitX * lineLength / 2, currentPoint.y + unitY * lineLength / 2);
    ctx.lineTo(currentPoint.x - unitX * lineLength / 2, currentPoint.y - unitY * lineLength / 2);
    ctx.strokeStyle = 'black';


    // Рассчитываем позицию для второй линии
    const secondLineX = currentPoint.x + unitY * offset;
    const secondLineY = currentPoint.y - unitX * offset;

    // Рисуем вторую перпендикулярную линию, смещенную от первой

    ctx.moveTo(secondLineX + unitX * lineLength / 2, secondLineY + unitY * lineLength / 2);
    ctx.lineTo(secondLineX - unitX * lineLength / 2, secondLineY - unitY * lineLength / 2);

  }
}

function drawCross(ctx, point) {
  const crossLength = 7; // Устанавливаем длину линий крестика
  ctx.moveTo(point.x - crossLength / 2, point.y - crossLength / 2);
  ctx.lineTo(point.x + crossLength / 2, point.y + crossLength / 2);
  ctx.moveTo(point.x + crossLength / 2, point.y - crossLength / 2);
  ctx.lineTo(point.x - crossLength / 2, point.y + crossLength / 2);
  ctx.strokeStyle = 'black';

}

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function drawFootnote(ctx, point, coords, id) {

  let finalCoords = {x:coords.x + (point.azimuth >= 180 ? -getRandomNumber(15, 35) : getRandomNumber(15, 35)), y:coords.y + (point.azimuth >= 90 && point.azimuth <= 270 ? getRandomNumber(0, 45) : -getRandomNumber(0, 45))}


  ctx.beginPath();
  ctx.arc(coords.x, coords.y, 1, 0, 2 * Math.PI);
  ctx.fillStyle = 'black';
  ctx.fill();
  ctx.moveTo(coords.x, coords.y);
  ctx.lineTo(finalCoords.x, finalCoords.y);
  ctx.strokeStyle = 'black';
  ctx.stroke();

  const lineLength = point.azimuth >= 180 ? -60 : 60; // Adjust length as needed

  const lineEnd = {
    x: finalCoords.x + lineLength,
    y: finalCoords.y
  };

  // Draw the long line
  ctx.beginPath();
  ctx.moveTo(finalCoords.x, finalCoords.y);
  ctx.lineTo(lineEnd.x, lineEnd.y);
  ctx.strokeStyle = 'black';
 
  // Draw the small dividing line
  const dividerLength = 10; // Adjust length as needed
  const dividerCenter = {
    x: (finalCoords.x + lineEnd.x) / 2,
    y: (finalCoords.y + lineEnd.y) / 2,
  };

  ctx.moveTo(
    dividerCenter.x,
    dividerCenter.y + dividerLength
  );
  ctx.lineTo(
    dividerCenter.x,
    dividerCenter.y - dividerLength
  );
  ctx.stroke();

  // Рисуем дугу
  const arcRadius = 10; // Радиус дуги, настройте по необходимости
  const startAngle = point.azimuth >= 180 ? -0.5 * Math.PI : 0.5 * Math.PI; // Начальный угол
  const endAngle = point.azimuth >= 180 ? 0.5 * Math.PI : -0.5 * Math.PI; // Конечный угол

  ctx.beginPath();
  ctx.arc(lineEnd.x+(point.azimuth >= 180 ? -arcRadius : arcRadius), lineEnd.y, arcRadius, startAngle, endAngle);
  ctx.stroke();

  // Draw the text for the point id
  ctx.font = '10px Arial';
  ctx.fillText(id, lineEnd.x + (point.azimuth >= 180 ? -20 : 20), lineEnd.y);

  // Draw the data above and below the dividing line
  ctx.fillText(point.affiliation, dividerCenter.x - 15, dividerCenter.y - 7);  // Above the line
  ctx.fillText(point.height, dividerCenter.x + 15, dividerCenter.y - 7);// Further below the line
  ctx.fillText(point.speed, dividerCenter.x - (point.azimuth >= 180 ? -15 : 15) , dividerCenter.y + 7); // Below the line
}

function drawRegenFootnote(ctx, point, coords, firstPoint) {
  
  let finalCoords = {x:coords.x + (point.azimuth >= 180 ? -getRandomNumber(5, 10) : getRandomNumber(5, 10)), y:coords.y + (point.azimuth >= 90 && point.azimuth <= 270 ? getRandomNumber(0, 25) : -getRandomNumber(0, 25))}

  ctx.beginPath();
  ctx.arc(coords.x, coords.y, 1, 0, 2 * Math.PI);
  ctx.fillStyle = 'black';
  ctx.fill();

  ctx.strokeStyle = '#707070';
  ctx.moveTo(coords.x, coords.y);
  ctx.lineTo(finalCoords.x, finalCoords.y);
  ctx.stroke();

  const lineLength = point.azimuth >= 180 ? -60 : 60; // Adjust length as needed

  const lineEnd = {
    x: finalCoords.x + lineLength,
    y: finalCoords.y
  };

  // Draw the long line
  ctx.beginPath();
  ctx.moveTo(finalCoords.x, finalCoords.y);
  ctx.lineTo(lineEnd.x, lineEnd.y);
  ctx.stroke();

  ctx.beginPath();
  // Draw the small dividing line
  const dividerLength = 10; // Adjust length as needed
  const dividerCenter = {
    x: (finalCoords.x + lineEnd.x) / 2,
    y: (finalCoords.y + lineEnd.y) / 2,
  };

  ctx.moveTo(
    dividerCenter.x,
    dividerCenter.y + dividerLength
  );
  ctx.lineTo(
    dividerCenter.x,
    dividerCenter.y - dividerLength
  );
  ctx.stroke();

  // Draw the data above and below the dividing line
  ctx.font = '10px Arial';
  ctx.fillStyle = '#707070';

  let afflication = point.affiliation != undefined ? point.affiliation : firstPoint.affiliation
  let height = point.height != undefined ? point.height : firstPoint.height
  let speed = point.speed != undefined ? point.speed : firstPoint.speed

  ctx.fillText(afflication, dividerCenter.x - 15, dividerCenter.y - 7);  // Above the line
  ctx.fillText(height, dividerCenter.x + 15, dividerCenter.y - 7);// Further below the line
  ctx.fillText(speed, dividerCenter.x - (point.azimuth >= 180 ? -15 : 15) , dividerCenter.y + 7); // Below the line
}

function drawSignalFootnote(ctx, point, coords) {

  let finalCoords = {x:coords.x + (point.azimuth >= 180 ? -getRandomNumber(0, 6) : getRandomNumber(0, 6)), y:coords.y + (point.azimuth >= 90 && point.azimuth <= 270 ? getRandomNumber(0, 25) : -getRandomNumber(0, 25))}

  ctx.beginPath();
  ctx.arc(coords.x, coords.y, 1, 0, 2 * Math.PI);
  ctx.fillStyle = 'black';
  ctx.fill();
  ctx.strokeStyle = '#707070';
  ctx.moveTo(coords.x, coords.y);
  ctx.lineTo(finalCoords.x, finalCoords.y);
  ctx.stroke();

  const lineLength = point.azimuth >= 180 ? -30 : 30; // Adjust length as needed

  const lineEnd = {
    x: finalCoords.x + lineLength,
    y: finalCoords.y
  };

  // Draw the long line
  ctx.beginPath();
  ctx.moveTo(finalCoords.x, finalCoords.y);
  ctx.lineTo(lineEnd.x, lineEnd.y);
  ctx.stroke();


  const dividerCenter = {
    x: (finalCoords.x + lineEnd.x) / 2,
    y: (finalCoords.y + lineEnd.y) / 2,
  };

// Draw the data above and below the dividing line
  ctx.font = '10px Arial';
  ctx.fillStyle = '#707070';
  ctx.fillText(point.signal, dividerCenter.x, dividerCenter.y - 7);  // Above the line
}


function fillTable() {
  let pointsTable = document.getElementById('pointTable').getElementsByTagName('tbody')[0];
  let pointsGridTable = document.getElementById('pointGridTable').getElementsByTagName('tbody')[0];
  pointsTable.innerHTML = ''; // Очистка таблицы
  pointsGridTable.innerHTML = '';

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

  allPoints.forEach(point => {
    let row = pointsGridTable.insertRow();
    row.insertCell().textContent = point.number;
    row.insertCell().textContent = point.sectorAndZone;
    row.insertCell().textContent = point.squareHor;
    row.insertCell().textContent = point.squareVert;
    row.insertCell().textContent = point.squares;
    row.insertCell().textContent = point.affiliation;
    row.insertCell().textContent = point.height;
    row.insertCell().textContent = point.speed;
    row.insertCell().textContent = point.signal;
    row.insertCell().textContent = point.time;
  })
}

/* ----------------------------------------------------------------------------------------------------------- */

function drawAzimuthalMap(centerLat, centerLng) {

  ctx.clearRect(0, 0, size, size);

  sectorsInfo = [];
  squareInfo = [];

  const originPolar = toPolar(centerLat, centerLng, centerLat, centerLng);
  drawMarker(originPolar, originName);
  
  if (borderSet.checked) {
    drawBorder(centerLat, centerLng);
  }

  if (gridAz.checked) {
    for (let distance = minDistance; distance <= maxDistance; distance += distanceStep) {
      drawCircle(distance);
    }
   
    for (let angle = 0; angle < 360; angle += azimuthStep) {
      drawAzimuthLine(angle);
      drawAzimuthValues(15, angle);
    }
  }

  if (gridAd.checked) {
    drawZone(0,18, 72,56,encodeZone('07'));
    drawZone(18,36, 72,56,encodeZone('08'));
    drawZone(36,54, 72,56,encodeZone('09'));

    drawZone(0,18, 56,40,encodeZone('17'));
    drawZone(18,36, 56,40,encodeZone('18'));
    drawZone(36,54, 56,40,encodeZone('19'));
  }

  drawPointsAndLines();

}

/* ----------------------------------------------------------------------------------------------------------- */

// Измененный обработчик события mousemove
canvas.addEventListener('mousemove', (e) => {
  let sector = geoToGridCoords(getInfoUnderCursor(e).coords.lat.toFixed(2),getInfoUnderCursor(e).coords.lng.toFixed(2));
    document.getElementById('info').innerText = 
         `Азимут: ${getInfoUnderCursor(e).azimuth.toFixed(2)}°, 
          Дальность: ${getInfoUnderCursor(e).distance.toFixed(2)} км, 
          Координаты: ${getInfoUnderCursor(e).coords.lat.toFixed(2)}, ${getInfoUnderCursor(e).coords.lng.toFixed(2)},
          Сетка ПВО: ${sector.zone}${sector.sector} ${sector.squareHor} ${sector.squareVert} ${sector.middleSquare}${sector.smallSquare}(${sector.additionalSquare})
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
  filteredData = []

  const input = document.getElementById('fileInput');
  const file = input.files[0];

  const reader = new FileReader();
  reader.onload = (e) => {
    const data = new Uint8Array(e.target.result);
    const workbook = XLSX.read(data, { type: 'array' });

    // выбираем лист для чтения - вводимый пользователем или первый по стандарту
    let sheetInputName = document.getElementById("sheet").value || workbook.SheetNames[0];
    let sheet = workbook.Sheets[sheetInputName];

    //собираем данные из листа
    const dataArray = XLSX.utils.sheet_to_json(sheet, {
      header: 1,
      blankrow: false,
    });

    // Отфильтровываем пустые строки
    filteredData = dataArray.filter(row => {
      return row.some(cell => cell !== '');
    });

    // Удаляем шапку - 2 строки
    filteredData.shift();
    filteredData.shift();

    processData(filteredData);
    // обрабатываем и рендерим данные
    drawAzimuthalMap(originCoords.x, originCoords.y); // ререндер холста ???? 
  };
  reader.readAsArrayBuffer(file);
}, false);

// экспортируем данные в Excel
document.getElementById("exportTable").addEventListener('click',function exportTableToXLSX() {
  const firstSheet = XLSX.utils.table_to_sheet(document.getElementById('pointTable'));
  const secondSheet = XLSX.utils.table_to_sheet(document.getElementById('pointGridTable'));

  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, firstSheet, 'Азимуты');
  XLSX.utils.book_append_sheet(wb, secondSheet, 'Сетка ПВО');
  XLSX.writeFile(wb, 'Тренировка.xlsx');
}, false);

// обрабатываем и рендерим Excel данные
function processData(data) {

  // очищаем предыдущие точки
  points = {};
  allPoints = [];

  data.forEach(row => {
    const targetId = String(row[0]).replace(/'/g, '').replace(/^0+/, ''); // удаляем 00 в начале номера для корректного просчета и кавычки (на случай, если номера целей в эксель указаны с ними) 
    
    
    // получаем данные и записываем их в переменные, в зависимости от типа данных таблицы, которую мы импортировали
    let [azimuth, distance, affiliation, height, speed, signal, time] = data[0].length === 8 ? 
      [parseInt(row[1]), parseInt(row[2]), row[3], row[4], row[5], row[6], row[7]] : [undefined, undefined, row[5], row[6], row[7], row[8], row[9]]; // азимуты и дальности рассчитываются по Сетке ПВО
  

    const calcData = polarToGrid(distance, azimuth)

    // получаем данные о квадратах сетки ПВО, в зависимости от входных данных (если таблица с азимутами - расчитываем)
    const [sectorAndZone, squareHor, squareVert,squares] = data[0].length === 8 ? 
    [calcData[0], calcData[1], calcData[2], calcData[3]] : [row[1], row[2], row[3],row[4]]

    
    if(!(data[0].length === 8)) {
      let sectorCoords = findSectorCoords(sectorAndZone);

      let squareCoord = getFinalCoords(sectorCoords.sectorY1,sectorCoords.sectorY2,sectorCoords.sectorX1,sectorCoords.sectorX2,squareHor,squareVert,squares);
  
      azimuth = parseInt(toPolar(squareCoord.x, squareCoord.y,originCoords.x, originCoords.y).angle); // Convert
      distance = parseInt(toPolar(squareCoord.x, squareCoord.y,originCoords.x, originCoords.y).distance); // необходимо получать дальность и азимут по этим данным sectorAndZone squareHor squareVert squares  
    }
    
    const pointData = { azimuth, distance, sectorAndZone, squareHor, squareVert, squares, affiliation, height, speed, signal, time };

    //Проверяем, существует ли уже массив по ключу targetId в объекте points. Если да - добавляем точку, нет - создаем пустой массив с таким ключем
    points[targetId] = points[targetId] || []; 
    points[targetId].push(pointData);
  });

  for (const id in points) {
    if (points.hasOwnProperty(id)) {
      // Сортировка массива точек по времени
      points[id].sort((a, b) => a.time - b.time);
      // Конкатенация отсортированного массива с allPoints
      allPoints = allPoints.concat(points[id]);
    }
  }
}

/* ----------------------------------------------------------------------------------------------------------- */

let manualInputMode = 0;

const modeText = ['Ввод Выключен', 'Ввод включен', 'Режим удаления'];

// Переключение режима ввода
document.getElementById('manual-input-button').addEventListener('click', () => {
  manualInputMode = (manualInputMode + 1) % modeText.length; 
  document.getElementById('manual-input-button').textContent = modeText[manualInputMode]; // меняем текст кнопки
  document.getElementById("timeManualInput").value = '0'; // обнуляем время при переключении режимов
});

// обнуляем счетчик таймера, если вводится новый номер в инпуте
document.getElementById("idManualInput").addEventListener('input' , () => {
  document.getElementById("timeManualInput").value = '0';
})

// сохранение предыдущего клика
let previousPoint = {azimuth:null,distance:null};
// Обработчик события нажатия мыши
canvas.addEventListener('mousedown', (e) => {
  const currentPoint = getCursorInfo(e);

  if (manualInputMode === 0) return;
 
  if (manualInputMode === 1) { 
    if (currentPoint.azimuth !== previousPoint.azimuth || currentPoint.distance !== previousPoint.distance) {
      const id = document.getElementById("idManualInput").value || 3801;
      const affiliation = document.getElementById("affiliationManualInput").value;
      const height = document.getElementById("heightManualInput").value;
      const speed = document.getElementById("speedManualInput").value;
      const signal = document.getElementById("signalManualInput").value;
      let time = parseInt(document.getElementById("timeManualInput").value);

      addPoint(currentPoint, id, affiliation, height, speed, signal, time++);
      document.getElementById("timeManualInput").value = time.toString();
       drawAzimuthalMap(originCoords.x, originCoords.y)

      previousPoint = { ...currentPoint };
    }
  } 
  
  if (manualInputMode === 2) {
    const idToRemove = document.getElementById("idManualInput").value || 3801;
    removePoint(idToRemove);
  }
});

// Функция для получения информации о координатах курсора
const getCursorInfo = (e) => {
  const info = getInfoUnderCursor(e);
  return {
    grid: geoToGridCoords(info.coords.lat.toFixed(2), info.coords.lng.toFixed(2)),
    azimuth: parseInt(info.azimuth.toFixed(2)),
    distance: parseInt(info.distance.toFixed(2))
  };
};

// Функция для удаления точки
const removePoint = (idToRemove) => {
  if (points[idToRemove] && points[idToRemove].length > 0) {
    points[idToRemove].pop();
    if (points[idToRemove].length === 0) delete points[idToRemove];

    drawAzimuthalMap(originCoords.x, originCoords.y)  // ререндер холста ?????
  }
};

// Функция для добавления точки
const addPoint = (cursorInfo, id, affiliation, height, speed, signal, time) => {
  const { grid, azimuth, distance } = cursorInfo;
  const point = {
    id,
    azimuth,
    distance,
    sectorAndZone: `${grid.zone}${grid.sector}`,
    squareHor: grid.squareHor,
    squareVert: grid.squareVert,
    squares: `${grid.middleSquare}${grid.smallSquare}/${grid.additionalSquare}`,
    affiliation,
    height,
    speed,
    signal,
    time
  };

  points[id] = points[id] || [];
  points[id].push(point);
};

/* ----------------------------------------------------------------------------------------------------------- */


function findSectorCoords(sectorAndZone) {
  let number = sectorAndZone;
  let lastDigit = number % 10; // Получаем последнюю цифру
  let restOfTheNumber = Math.floor(number / 10); // Получаем оставшуюся часть числа

  let zones = [
    {y:0, x:72, zoneNumber:'07'},
    {y:18, x:72, zoneNumber:'08'},
    {y:36, x:72, zoneNumber:'09'},
    {y:0, x:56, zoneNumber:'17'},
    {y:18, x:56, zoneNumber:'18'},
    {y:36, x:56, zoneNumber:'19'},
  ]

  let sectorX1;
  let sectorX2;
  let sectorY1;
  let sectorY2; 

  zones.forEach(el => {
    if(parseInt(el.zoneNumber) == restOfTheNumber){

      let x = el.y //18  36
      let y = el.x //56  40
      
      let sectorNumber = 1;

      for (let i = 0; i < 4; i++) { // 4 columns
        for (let j = 0; j < 2; j++) { // 2 rows
          sectorX1 = y - i * 4;
          sectorX2 = sectorX1 - 4;
          sectorY1 = x + j * 9;
          sectorY2 = sectorY1 + 9;      
          if (sectorNumber == lastDigit) {
            return { sectorY1, sectorY2, sectorX1, sectorX2 };
          }
          sectorNumber++;
        }
      }
    }   
  })
  return { sectorY1, sectorY2, sectorX1, sectorX2 };
}


function getFinalCoords(y1,y2,x1,x2, squareHor,squareVert, squares) {

  const xStep = 1; 
  const yStep = 1.5;

  let squareCoords = []

  // вычисляем координаты квадратов и определяем их номера по горизонтали и вертикали
  for (let horizontalRow = 4; horizontalRow > 0; horizontalRow--) {
    for (let verticalRow = 5; verticalRow <= 10; verticalRow++) {
      let sectorX1 = x2 + horizontalRow * xStep;
      let sectorY1 = y1 + (verticalRow - 5) * yStep;

      // рисуем в первых рядах секторов цифры-номера рядов и столбцов со смещением
      if (sectorX1 >= x2 && sectorY1 <= y2) {
        // сохраняем координаты о квадратах в секторе с их номерами
        squareCoords.push({
          y1: sectorY1,
          y2: sectorY1 + yStep,
          x1: sectorX1 - xStep,
          x2: sectorX1,
          horizontalRow,
          verticalRow: verticalRow == 10 ? 0 : verticalRow
        });
      }
    }
  }

  let result = {};

  squareCoords.forEach(el => {
    if (squareHor == el.horizontalRow && squareVert == el.verticalRow) {  
      result = el
     
    }
  })

  let f = findSquareCoords(result.x2, result.y1, squares);

  return f
}

function findSquareCoords(x1, y1, squares) {
  function translateCoordinates(num) {
    const mapping = {
      1: { x: 0, y: 0,}, 2: { x: 1, y: 0, }, 3: { x: 2, y: 0 },
      4: { x: 2, y: 1 }, 5: { x: 2, y: 2, }, 6: { x: 1, y: 2 },
      7: { x: 0, y: 2 }, 8: { x: 0, y: 1, }, 9: { x: 1, y: 1 }
    };
    return mapping[num] || null;
  }
 

  const squaresDivided = squares.split(/\//);
  const squaresFiltered = squaresDivided[0].split("");
  const midSquare = translateCoordinates(parseInt(squaresFiltered[0]));
  const smallSquare = translateCoordinates(parseInt(squaresFiltered[1]));
  const additionaplSquare = translateCoordinates(parseInt(squaresDivided[1]));
  

  let output = [x1, y1];

  output[0] -= midSquare.y * 0.3333;
  output[0] -= smallSquare.y * 0.1111;
  output[0] -= (additionaplSquare.y + 0.5) * 0.037033;

  output[1] += midSquare.x * 0.5;
  output[1] += smallSquare.x * 0.1667;
  output[1] += (additionaplSquare.x + 0.5) * 0.055566;


  return {x:output[0], y:output[1]};
}

// FOR TEST
function showPoints(){
  allPoints = [];
   points = {};
 let coordsOfShit = [[22.619864948040377, 1104], [22.619864948040377, 1104], [22.619864948040377, 1104], [22.619864948040377, 1104], [22.619864948040377, 1104], [22.619864948040377, 1104], [22.619864948040377, 1104], [22.619864948040377, 1104], [22.619864948040377, 1104], [22.619864948040377, 1104]]

let azDistShit = [[75.96375653207369, 265.0], [75.96375653207369, 265.0], [75.96375653207369, 265.0], [75.96375653207369, 265.0], [75.96375653207369, 265.0], [75.96375653207369, 265.0], [75.96375653207369, 265.0], [75.96375653207369, 265.0], [75.96375653207369, 265.0], [75.96375653207369, 265.0]]
azDistShit.forEach((coord, index) => {

  //const azimuth = parseInt(toPolar(coord[0], coord[1],originCoords.x, originCoords.y).angle); // Convert
 // const distance = parseInt(toPolar(coord[0], coord[1],originCoords.x, originCoords.y).distance);

 let calcData = polarToGrid(coord[1], coord[0])
  const [sectorAndZone, squareHor, squareVert,squares] = [calcData[0], calcData[1], calcData[2], calcData[3]]

  const pointData = {
    number:3801,
    azimuth:coord[0].toFixed(2),
    distance:coord[1].toFixed(2),
    sectorAndZone:sectorAndZone, 
    squareHor:squareHor,
    squareVert:squareVert,
    squares:squares,
    affiliation:'',
    height:'',
    speed:'',
    signal:'',
    time:index,
  }


  points[3801] = points[3801] || []; 
  points[3801].push(pointData);

 })

 for (const id in points) {
  if (points.hasOwnProperty(id)) {
    // Сортировка массива точек по времени
    points[id].sort((a, b) => a.time - b.time);
    // Конкатенация отсортированного массива с allPoints
    allPoints = allPoints.concat(points[id]);
  }
}

drawAzimuthalMap(originCoords.x, originCoords.y); // ререндер холста ???? 
}


