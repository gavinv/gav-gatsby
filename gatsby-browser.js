// import React from "react"
// import { silentAuth } from "./src/utils/auth"
export const onInitialClientRender = () => {
  var animation = false,
    animationstring = 'anim',
    keyframeprefix = '',
    domPrefixes = 'Webkit Moz O ms Khtml'.split(' '),
    pfx  = '',
    elem = document.createElement('div');

  if( elem.style.animationName !== undefined ) { animation = true; }

  if( animation === false ) {
    for( var i = 0; i < domPrefixes.length; i++ ) {
      if( elem.style[ domPrefixes[i] + 'anim' ] !== undefined ) {
        pfx = domPrefixes[ i ];
        animationstring = pfx + 'anim';
        keyframeprefix = '-' + pfx.toLowerCase() + '-';
        animation = true;
        break;
      }
    }
  }

  if( animation === false ) {
    // animate in JavaScript fallback
  } else {
    elem.style[ animationstring ] = 'rotate 1s linear infinite';

    var keyframes = '@' + keyframeprefix + 'keyframes rotate { '+
    'from {' + keyframeprefix + 'transform:rotate( 0deg ) }'+
    'to {' + keyframeprefix + 'transform:rotate( 360deg ) }'+
    '}';

    if( document.styleSheets && document.styleSheets.length ) {
      document.styleSheets[0].insertRule( keyframes, 0 );
    } else {
      var s = document.createElement( 'style' );
      s.innerHTML = keyframes;
      document.getElementsByTagName( 'head' )[ 0 ].appendChild( s );
    }
  }
}

// class SessionCheck extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       loading: true,
//     }
//   }

//   handleCheckSession = () => {
//     this.setState({ loading: false })
//   }

//   componentDidMount() {
//     silentAuth(this.handleCheckSession)
//   }

//   render() {
//     return (
//       this.state.loading === false && (
//         <>{this.props.children}</>
//       )
//     )
//   }
// }

// export const wrapRootElement = ({ element }) => {
//   return <SessionCheck>{element}</SessionCheck>
// }