/**
 * Mode depending on where is geoserver, FROM THE POINT OF VIEW OF THE CLIENT. 
 * mode 1. Visiting the page from Windows, using an Apache proxy in Windows. 
 *          Geoserver location: 'http://localhost/geoserver/wms?'
 * mode 2. Visiting the page from Windows, without Apache proxy. 
 *          Geoserver location: 'http://localhost:8081/geoserver/wms?'
 * mode 3. Production. Geoserver location is in a remote server: 
 *                  'https://myserver.com/geoserver/wms?'
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


