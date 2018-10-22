// == import modules ===========================================================
const fs = require( 'fs' );
const colorUtils = require( './color-utils' );

// == there we go ==============================================================
const colors = {
  'absolute-black': '#000000',
  'absolute-white': '#ffffff'
};
black = '#191a1f';
white = '#d0edff';

// == generate grays ===========================================================
colors.black = black;
for ( let i = 1; i < 16; i ++ ) {
  colors[ `gray-${ i }` ] = colorUtils.lerpColor( black, white, i / 16.0 );
}
colors.white = white;

// == generate dark-bright =====================================================
const hues = {
  red: '#ff0066',
  orange: '#ff5a1f',
  yellow: '#f7f025',
  green: '#00ff91',
  blue: '#00aaff',
  constblue: '#8a8aff',
  ansicyan: '#00c0b0',
  ansimagenta: '#ca4fff'
};

for ( let name in hues ) {
  const c = hues[ name ];
  colors[ name ] = c;
  colors[ `${ name }-bright` ] = colorUtils.lerpColor( white, c, 0.6 );
  colors[ `${ name }-dark` ] = colorUtils.lerpColor( black, c, 0.6 );
  colors[ `${ name }-superdark` ] = colorUtils.lerpColor( black, c, 0.2 );
}

// == output ===================================================================
fs.writeFileSync( './palette.json', JSON.stringify( colors ) );