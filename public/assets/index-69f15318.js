import{r as R,H as G,u as W,bg as Y,a as Z,s as C,h as g,m as h,j as c,R as X,b as u}from"./index-8bc6b7eb.js";import{c as V}from"./shows-c2c0e33c.js";import{h as k}from"./moment-fbc5633a.js";import{m as q,a as z}from"./bookings-80e925ce.js";var E={},T={},J={get exports(){return T},set exports(r){T=r}},Q="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",$=Q,ee=$;function H(){}function B(){}B.resetWarningCache=H;var te=function(){function r(t,n,o,s,w,f){if(f!==ee){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}r.isRequired=r;function e(){return r}var i={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:e,element:r,elementType:r,instanceOf:e,node:r,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:B,resetWarningCache:H};return i.PropTypes=i,i};J.exports=te();Object.defineProperty(E,"__esModule",{value:!0});var D=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(r[t]=i[t])}return r},re=function(){function r(e,i){for(var t=0;t<i.length;t++){var n=i[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,i,t){return i&&r(e.prototype,i),t&&r(e,t),e}}(),oe=R,b=K(oe),ne=T,a=K(ne);function K(r){return r&&r.__esModule?r:{default:r}}function x(r,e,i){return e in r?Object.defineProperty(r,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[e]=i,r}function ae(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function ie(r,e){if(!r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:r}function se(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(r,e):r.__proto__=e)}var P=!1,A=!1,L=!1,N=function(r){se(e,r);function e(i){ae(this,e);var t=ie(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,i));return t.onScriptLoaded=function(){e.stripeHandler||(e.stripeHandler=StripeCheckout.configure({key:t.props.stripeKey}),t.hasPendingClick&&t.showStripeDialog())},t.onScriptError=function(){for(var n=arguments.length,o=Array(n),s=0;s<n;s++)o[s]=arguments[s];t.hideLoadingDialog(),t.props.onScriptError&&t.props.onScriptError.apply(t,o)},t.onClosed=function(){for(var n=arguments.length,o=Array(n),s=0;s<n;s++)o[s]=arguments[s];t._isMounted&&t.setState({open:!1}),t.props.closed&&t.props.closed.apply(t,o)},t.onOpened=function(){for(var n=arguments.length,o=Array(n),s=0;s<n;s++)o[s]=arguments[s];t.setState({open:!0}),t.props.opened&&t.props.opened.apply(t,o)},t.getConfig=function(){return["token","image","name","description","amount","locale","currency","panelLabel","zipCode","shippingAddress","billingAddress","email","allowRememberMe","bitcoin","alipay","alipayReusable"].reduce(function(n,o){return D({},n,t.props.hasOwnProperty(o)&&x({},o,t.props[o]))},{opened:t.onOpened,closed:t.onClosed})},t.onClick=function(){if(!t.props.disabled)if(L)try{throw new Error("Tried to call onClick, but StripeCheckout failed to load")}catch{}else e.stripeHandler?t.showStripeDialog():(t.showLoadingDialog(),t.hasPendingClick=!0)},t.handleOnMouseDown=function(){t.setState({buttonActive:!0})},t.handleOnMouseUp=function(){t.setState({buttonActive:!1})},t.state={open:!1,buttonActive:!1},t}return re(e,[{key:"componentDidMount",value:function(){var t=this;if(this._isMounted=!0,!A&&!P){P=!0;var n=document.createElement("script");typeof this.props.onScriptTagCreated=="function"&&this.props.onScriptTagCreated(n),n.src="https://checkout.stripe.com/checkout.js",n.async=1,this.loadPromise=function(){var o=!1,s=new Promise(function(f,p){n.onload=function(){A=!0,P=!1,f(),t.onScriptLoaded()},n.onerror=function(m){L=!0,P=!1,p(m),t.onScriptError(m)}}),w=new Promise(function(f,p){s.then(function(){return o?p({isCanceled:!0}):f()}),s.catch(function(m){return p(o?{isCanceled:!0}:m)})});return{promise:w,cancel:function(){o=!0}}}(),this.loadPromise.promise.then(this.onScriptLoaded).catch(this.onScriptError),document.body.appendChild(n)}}},{key:"componentDidUpdate",value:function(){P||this.updateStripeHandler()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.loadPromise&&this.loadPromise.cancel(),e.stripeHandler&&this.state.open&&e.stripeHandler.close()}},{key:"updateStripeHandler",value:function(){(!e.stripeHandler||this.props.reconfigureOnUpdate)&&(e.stripeHandler=StripeCheckout.configure({key:this.props.stripeKey}))}},{key:"showLoadingDialog",value:function(){if(this.props.showLoadingDialog){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];this.props.showLoadingDialog.apply(this,n)}}},{key:"hideLoadingDialog",value:function(){if(this.props.hideLoadingDialog){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];this.props.hideLoadingDialog.apply(this,n)}}},{key:"showStripeDialog",value:function(){this.hideLoadingDialog(),e.stripeHandler.open(this.getConfig())}},{key:"renderDefaultStripeButton",value:function(){return b.default.createElement("button",D({},x({},this.props.triggerEvent,this.onClick),{className:this.props.className,onMouseDown:this.handleOnMouseDown,onFocus:this.handleOnMouseDown,onMouseUp:this.handleOnMouseUp,onMouseOut:this.handleOnMouseUp,onBlur:this.handleOnMouseUp,style:D({},{overflow:"hidden",display:"inline-block",background:"linear-gradient(#28a0e5,#015e94)",border:0,padding:1,textDecoration:"none",borderRadius:5,boxShadow:"0 1px 0 rgba(0,0,0,0.2)",cursor:"pointer",visibility:"visible",userSelect:"none"},this.state.buttonActive&&{background:"#005d93"},this.props.style)}),b.default.createElement("span",{style:D({},{backgroundImage:"linear-gradient(#7dc5ee,#008cdd 85%,#30a2e4)",fontFamily:'"Helvetica Neue",Helvetica,Arial,sans-serif',fontSize:14,position:"relative",padding:"0 12px",display:"block",height:30,lineHeight:"30px",color:"#fff",fontWeight:"bold",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.25)",textShadow:"0 -1px 0 rgba(0,0,0,0.25)",borderRadius:4},this.state.buttonActive&&{color:"#eee",boxShadow:"inset 0 1px 0 rgba(0,0,0,0.1)",backgroundImage:"linear-gradient(#008cdd,#008cdd 85%,#239adf)"},this.props.textStyle)},this.props.label))}},{key:"renderDisabledButton",value:function(){return b.default.createElement("button",{disabled:!0,style:{background:"rgba(0,0,0,0.2)",overflow:"hidden",display:"inline-block",border:0,padding:1,textDecoration:"none",borderRadius:5,userSelect:"none"}},b.default.createElement("span",{style:{boxShadow:"inset 0 1px 0 rgba(255,255,255,0.25)",fontFamily:'"Helvetica Neue",Helvetica,Arial,sans-serif',fontSize:14,position:"relative",padding:"0 12px",display:"block",height:30,lineHeight:"30px",borderRadius:4,color:"#999",background:"#f8f9fa",textShadow:"0 1px 0 rgba(255,255,255,0.5)"}},this.props.label))}},{key:"render",value:function(){this.props.desktopShowModal===!0&&!this.state.open?this.onClick():this.props.desktopShowModal===!1&&this.state.open&&e.stripeHandler.close();var t=this.props.ComponentClass;return this.props.children?b.default.createElement(t,D({},x({},this.props.triggerEvent,this.onClick),{children:this.props.children})):this.props.disabled?this.renderDisabledButton():this.renderDefaultStripeButton()}}]),e}(b.default.Component);N.defaultProps={className:"StripeCheckout",label:"Pay With Card",locale:"auto",ComponentClass:"span",reconfigureOnUpdate:!1,triggerEvent:"onClick"};N.propTypes={desktopShowModal:a.default.bool,triggerEvent:a.default.oneOf(["onClick","onTouchTap","onTouchStart"]),label:a.default.string,style:a.default.object,textStyle:a.default.object,disabled:a.default.bool,ComponentClass:a.default.string,showLoadingDialog:a.default.func,hideLoadingDialog:a.default.func,onScriptError:a.default.func,onScriptTagCreated:a.default.func,reconfigureOnUpdate:a.default.bool,stripeKey:a.default.string.isRequired,token:a.default.func.isRequired,name:a.default.string,description:a.default.string,image:a.default.string,amount:a.default.number,locale:a.default.oneOf(["auto","zh","da","nl","en","fr","de","it","ja","no","es","sv"]),currency:a.default.oneOf(["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BIF","BMD","BND","BOB","BRL","BSD","BWP","BZD","CAD","CDF","CHF","CLP","CNY","COP","CRC","CVE","CZK","DJF","DKK","DOP","DZD","EEK","EGP","ETB","EUR","FJD","FKP","GBP","GEL","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","ISK","JMD","JPY","KES","KGS","KHR","KMF","KRW","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTL","LVL","MAD","MDL","MGA","MKD","MNT","MOP","MRO","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SEK","SGD","SHP","SLL","SOS","SRD","STD","SVC","SZL","THB","TJS","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","UYU","UZS","VND","VUV","WST","XAF","XCD","XOF","XPF","YER","ZAR","ZMW"]),panelLabel:a.default.string,zipCode:a.default.bool,billingAddress:a.default.bool,shippingAddress:a.default.bool,email:a.default.string,allowRememberMe:a.default.bool,bitcoin:a.default.bool,alipay:a.default.oneOf(["auto",!0,!1]),alipayReusable:a.default.bool,opened:a.default.func,closed:a.default.func};N._isMounted=!1;var le=E.default=N;const fe=()=>{const{user:r}=G(d=>d.user),[e,i]=R.useState(),[t,n]=R.useState([]),o=W(),{showId:s}=Y(),w=Z(),f=R.useCallback(async()=>{try{o(C());const d=await V({showId:s});o(g()),d.success?i(d.data):h.error(d.message)}catch(d){o(g()),h.error(d.message)}},[]),p=()=>{const l=e==null?void 0:e.totalSeats,_=l&&Math.ceil(l/12);return c("div",{className:"card flex flex-col gap-1 p-2",children:Array.from(Array(_).keys()).map((S,F)=>c("div",{className:"flex justify-center gap-1",children:Array.from(Array(12).keys()).map((y,I)=>{const O=S*12+y+1;let v="seat";return t.includes(S*12+y+1)&&(v=v+" selected-seat"),e!=null&&e.bookedSeats.includes(S*12+y+1)&&(v=v+" booked-seat"),l&&S*12+y+1<=l&&c("div",{className:v,onClick:()=>{t.includes(O)?n(M=>M.filter(j=>j!==O)):n(M=>[...M,O])},children:c("h1",{className:"text-sm",children:S*12+y+1})},I)})},F))})},m=async d=>{try{o(C());const l=await z({show:e==null?void 0:e._id,user:r==null?void 0:r._id,seats:t,transactionId:d});o(g()),l.success?(h.success(l.message),w("/profile")):h.error(l.message)}catch(l){o(g()),h.error(l.message)}},U=async d=>{try{o(C());const l=e&&await q(d,t.length*e.ticketPrice*100);o(g()),l.success?(h.success(l.message),m(l.data)):h.error(l.message)}catch(l){o(g()),h.error(l.message)}};return R.useEffect(()=>{f()},[]),c(X.Fragment,{children:e&&u("div",{children:[u("div",{className:"flex justify-between items-center card p-2",children:[u("div",{children:[c("h1",{className:"text-sm uppercase",children:e.theatreId.name}),c("h1",{className:"text-sm",children:e.theatreId.address})]}),c("div",{children:u("h1",{className:"text-2xl uppercase",children:[e.movieId.title," (",e.movieId.language,")"," "]})}),c("div",{children:u("h1",{className:"text-sm",children:[k(e.date).format("MMM Do YYYY")," -"," ",k(e.time,"HH:mm").format("hh:mm A")]})})]}),c("div",{className:"flex justify-center mt-2",children:p()}),t.length>0&&u("div",{className:"mt-2 flex justify-center gap-2 items-center flex-col",children:[c("div",{className:"flex justify-center",children:u("div",{className:"flex uppercase card p-2 gap-3",children:[u("h1",{className:"text-sm",children:[c("b",{children:"Selected Seats"})," : ",t.join(", ")]}),u("h1",{className:"text-sm",children:[c("b",{children:"Total Price"})," :"," ",t.length*e.ticketPrice]})]})}),c(le,{label:"Book Now",amount:t.length*e.ticketPrice*100,billingAddress:!0,token:U,stripeKey:"pk_test_51MuruhGvNgM8Ew8TYa17uMH9oI2o5LOe4XHuCH1oQltuQxDBpmS0v78XqWBLoMNSibjvcdDNrRkTIAzqvscmAhSg00YRM4tJXR"})]})]})})};export{fe as default};