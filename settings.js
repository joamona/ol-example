/**
 * Mode depending on where is geoserver
 * mode 1. Uning an Apache proxy in Windows. Geoserver location: 'http://localhost/geoserver/wms?'
 * mode 2. Windows without Apache. Geoserver location: 'http://localhost:8081/geoserver/wms?'
 * mode 3. Production server Geoserver location: 'https://myserver.com/geoserver/wms?'
*/

var mode = 2;
export var URL_GEOSERVER = '';
switch (mode){
    case 1:
        URL_GEOSERVER = 'http://localhost/geoserver/wms?';
        break;
    case 2:
        URL_GEOSERVER = 'http://localhost:8081/geoserver/wms?'
        break;
    case 3:
        URL_GEOSERVER = 'https://myserver.com/geoserver/wms?'
        break;
    default:
        URL_GEOSERVER = 'http://localhost:8081/geoserver/wms?'
        break;
}


