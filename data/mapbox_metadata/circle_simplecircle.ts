import { MbStyle } from '../../src/MapboxStyleParser';

const circleSimpleCircle: MbStyle = {
  version: 8,
  name: 'Simple Circle',
  sources: {
    testsource: {
      type: 'vector'
    }
  },
  layers: [
    {
      id: 'r0_sy0_st0',
      source: 'testsource',
      'source-layer': 'foo',
      type: 'circle',
      paint: {
        'circle-color': '#000000',
        'circle-radius': 5,
        'circle-opacity': 1,
        'circle-stroke-width': 2,
        'circle-stroke-color': '#FF0000',
        'circle-stroke-opacity': 0.5
      }
    }
  ],
  metadata: {
    'geostyler:ref': {
      rules: [{
        name: 'Simple Circle',
        symbolizers: [
          [
            'r0_sy0_st0'
          ]
        ]
      }]
    }
  }
};

export default circleSimpleCircle;
