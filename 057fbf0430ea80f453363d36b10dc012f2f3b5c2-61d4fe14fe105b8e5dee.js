(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,s=r(a("PJYZ")),n=r(a("VbXa")),d=r(a("8OQS")),o=r(a("pVnL")),l=r(a("q1tI")),u=r(a("17x9")),f=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},c=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed,r=g(t||a||[]);return r&&r.src},g=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(c);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},h=Object.create({}),m=function(e){var t=f(e),a=p(t);return h[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,v=y&&window.IntersectionObserver,S=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,s=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},r&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:s}),a&&l.default.createElement("source",{media:i,srcSet:a,sizes:s}))}))}function E(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function L(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function R(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,s=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(s?'sizes="'+s+'" ':"")+"/>"}var x=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),S.set(e,t)),function(){a.unobserve(e),S.delete(e)}},O=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',n=e.width?'width="'+e.width+'" ':"",d=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+l+n+d+a+r+t+s+i+o+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},V=l.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,s=e.spreadProps,n=e.ariaHidden,d=l.default.createElement(z,(0,o.default)({ref:t,src:a},s,{ariaHidden:n}));return r.length>1?l.default.createElement("picture",null,i(r),d):d})),z=l.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,s=e.style,n=e.onLoad,u=e.onError,f=e.loading,c=e.draggable,p=e.ariaHidden,g=(0,d.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,o.default)({"aria-hidden":p,sizes:a,srcSet:r,src:i},g,{onLoad:n,onError:u,ref:t,loading:f,draggable:c,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},s)}))}));z.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var H=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=y&&m(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&v&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||y&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=l.default.createRef(),a.placeholderRef=t.placeholderRef||l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)(a)),a.handleRef=a.handleRef.bind((0,s.default)(a)),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:y}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=x(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=f(e),(a=p(t))&&(h[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=f(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,s=void 0===i?{}:i,n=e.imgStyle,d=void 0===n?{}:n,u=e.placeholderStyle,c=void 0===u?{}:u,p=e.placeholderClassName,h=e.fluid,m=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,S=e.itemProp,E=e.loading,I=e.draggable,x=h||m;if(!x)return null;var H=!1===this.state.fadeIn||this.state.imgLoaded,C=!0===this.state.fadeIn&&!this.state.imgCached,T=(0,o.default)({opacity:H?1:0,transition:C?"opacity "+y+"ms":"none"},d),N="boolean"==typeof b?"lightgray":b,P={transitionDelay:y+"ms"},j=(0,o.default)({opacity:this.state.imgLoaded?0:1},C&&P,d,c),k={title:t,alt:this.state.isVisible?"":a,style:j,className:p,itemProp:S},W=this.state.isHydrated?g(x):x[0];if(h)return l.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden",maxWidth:W.maxWidth?W.maxWidth+"px":null,maxHeight:W.maxHeight?W.maxHeight+"px":null},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(W.srcSet)},l.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/W.aspectRatio+"%"}}),N&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:N,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},C&&P)}),W.base64&&l.default.createElement(V,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:k,imageVariants:x,generateSources:R}),W.tracedSVG&&l.default.createElement(V,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:k,imageVariants:x,generateSources:L}),this.state.isVisible&&l.default.createElement("picture",null,w(x),l.default.createElement(z,{alt:a,title:t,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:E,draggable:I})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,o.default)({alt:a,title:t,loading:E},W,{imageVariants:x}))}}));if(m){var q=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:W.width,height:W.height},s);return"inherit"===s.display&&delete q.display,l.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:q,ref:this.handleRef,key:"fixed-"+JSON.stringify(W.srcSet)},N&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:N,width:W.width,opacity:this.state.imgLoaded?0:1,height:W.height},C&&P)}),W.base64&&l.default.createElement(V,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:k,imageVariants:x,generateSources:R}),W.tracedSVG&&l.default.createElement(V,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:k,imageVariants:x,generateSources:L}),this.state.isVisible&&l.default.createElement("picture",null,w(x),l.default.createElement(z,{alt:a,title:t,width:W.width,height:W.height,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:E,draggable:I})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,o.default)({alt:a,title:t,loading:E},W,{imageVariants:x}))}}))}return null},t}(l.default.Component);H.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var C=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),T=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});function N(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");u.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}H.propTypes={resolutions:C,sizes:T,fixed:N(u.default.oneOfType([C,u.default.arrayOf(C)])),fluid:N(u.default.oneOfType([T,u.default.arrayOf(T)])),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var P=H;t.default=P},JI6e:function(e,t,a){"use strict";var r=a("wx14"),i=a("zLVn"),s=a("TSYQ"),n=a.n(s),d=a("q1tI"),o=a.n(d),l=a("vUet"),u=["xl","lg","md","sm","xs"],f=o.a.forwardRef((function(e,t){var a=e.bsPrefix,s=e.className,d=e.as,f=void 0===d?"div":d,c=Object(i.a)(e,["bsPrefix","className","as"]),p=Object(l.a)(a,"col"),g=[],h=[];return u.forEach((function(e){var t,a,r,i=c[e];if(delete c[e],"object"==typeof i&&null!=i){var s=i.span;t=void 0===s||s,a=i.offset,r=i.order}else t=i;var n="xs"!==e?"-"+e:"";t&&g.push(!0===t?""+p+n:""+p+n+"-"+t),null!=r&&h.push("order"+n+"-"+r),null!=a&&h.push("offset"+n+"-"+a)})),g.length||g.push(p),o.a.createElement(f,Object(r.a)({},c,{ref:t,className:n.a.apply(void 0,[s].concat(g,h))}))}));f.displayName="Col",t.a=f}}]);
//# sourceMappingURL=057fbf0430ea80f453363d36b10dc012f2f3b5c2-61d4fe14fe105b8e5dee.js.map