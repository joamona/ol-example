import './style.css';
import './ol-layerswitcher.css';
import { URL_GEOSERVER } from './settings';

import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import TileWMS from 'ol/source/TileWMS.js';
import OSM from 'ol/source/OSM';
import { Projection } from 'ol/proj';
import MousePosition from 'ol/control/MousePosition.js';
import {createStringXY} from 'ol/coordinate.js';

//layerswitcher
import LayerSwitcher from 'ol-layerswitcher';

let epsg25830 = new Projection({
  code:'EPSG:25830',
  extent: [-1234908.751,2893054.408, 1443329.298,5212093.472 ],
  units: 'm'
});

let beni = new TileLayer({
  title:'Beni',
  //extent: [691496, 4209151,691496, 4209151],
  source: new TileWMS({
    url: URL_GEOSERVER,
    params: {'LAYERS': 'gaspar:parcela', 'TILED': true,FORMAT:'image/png', trasparent:true},
    serverType: 'geoserver',
    // Countries have transparency, so do not fade tiles:
    transition: 0,
  })
});

let pnoa = new TileLayer({
  //extent: [691496, 4209151,691496, 4209151]
  title: 'PNOA',
  source: new TileWMS({
    url: 'https://www.ign.es/wms-inspire/pnoa-ma?',
    params: {'LAYERS': 'OI.OrthoimageCoverage', 'TILED': true, format: 'image/png','VERSION': "1.3.0"},
  })
});

let catastro = new TileLayer({
  //extent: [691496, 4209151,691496, 4209151]
  title: 'Catastro',
  source: new TileWMS({
    url: 'https://ovc.catastro.meh.es/Cartografia/WMS/ServidorWMS.aspx?',
    params: {'LAYERS': 'Catastro','VERSION': "1.1.1"},
  })
});

 
let map = new Map({
  controls: [],
  view: new View({
    center: [698099.714,4216603.712],
    zoom: 11,
    projection: epsg25830,
  }),
  layers: [pnoa,beni, catastro],
  target: 'map'
}); 

let layerSwitcher = new LayerSwitcher(
  {
    activationMode: 'mouseover',
    startActive: true,
    tipLabel: 'Show-hide layers',
    groupSelectStyle: 'group',
    reverse: false
  }
);
map.addControl(layerSwitcher);

let mousePositionControl = new MousePosition({
  coordinateFormat: createStringXY(1),
  projection: 'EPSG:25830',
  // comment the following two lines to have the mouse position
  // be placed within the map.
  className: 'custom-mouse-position',
  target: document.getElementById('map_mouse_position_control'),
  undefinedHTML: '----------------------'
});
map.addControl(mousePositionControl);