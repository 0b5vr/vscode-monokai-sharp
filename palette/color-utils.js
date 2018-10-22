const lerp = ( a, b, x ) => b * x + a * ( 1.0 - x );
const saturate = ( v ) => Math.round( Math.min( Math.max( v, 0 ), 255 ) );

const hexToArray = ( _hex ) => [
  parseInt( _hex.substring( 1, 3 ), 16 ),
  parseInt( _hex.substring( 3, 5 ), 16 ),
  parseInt( _hex.substring( 5, 7 ), 16 )
];

const arrayToHex = ( _arr ) => {
  let ret = '#';
  ret += ( '0' + saturate( _arr[ 0 ] ).toString( 16 ) ).slice( -2 );
  ret += ( '0' + saturate( _arr[ 1 ] ).toString( 16 ) ).slice( -2 );
  ret += ( '0' + saturate( _arr[ 2 ] ).toString( 16 ) ).slice( -2 );
  return ret;
};

module.exports = {
  hexToArray,
  arrayToHex,
  lerpColor: ( _a, _b, _x ) => {
    const a = hexToArray( _a );
    const b = hexToArray( _b );
    return arrayToHex( [
      lerp( a[ 0 ], b[ 0 ], _x ),
      lerp( a[ 1 ], b[ 1 ], _x ),
      lerp( a[ 2 ], b[ 2 ], _x )
    ] );
  }
};