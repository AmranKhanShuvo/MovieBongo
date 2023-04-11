import{r,_ as ut,d as ze,e as G,f as Ge,g as Le,i as le,k as ne,C as Et,P as Rt,w as Lt,l as x,K as nt,R as ye,A as Te,n as At,T as xe,o as rt,p as Tt,t as Dt,q as kt,v as $t,x as dt,y as je,z as at,E as zt,u as We,j as u,b as se,F as de,D as jt,G as we,I as De,B as Ue,s as Ae,h as re,m as X}from"./index-8bc6b7eb.js";import{g as mt,a as Ee,D as _t,b as Yt,c as Zt,i as Xt,L as Ht,R as Bt,M as Ft,I as Gt,S as te,T as ft,d as Ut,u as Vt,P as Wt,e as Kt}from"./theatres-39ac5535.js";import{a as Qt,u as Jt,g as qt,d as en}from"./movies-4b656299.js";import{h as vt}from"./moment-fbc5633a.js";var tn=["visible","onVisibleChange","getContainer","current","countRender","onChange"],Ke=r.createContext({previewUrls:new Map,setPreviewUrls:function(){return null},current:null,setCurrent:function(){return null},setShowPreview:function(){return null},setMousePosition:function(){return null},registerImage:function(){return function(){return null}},rootClassName:""}),nn=Ke.Provider;function Fe(n,e){if(e!==void 0){var t=n.indexOf(e);if(t!==-1)return t}}var rn=function(e){var t=e.previewPrefixCls,a=t===void 0?"rc-image-preview":t,i=e.children,s=e.icons,o=s===void 0?{}:s,l=e.preview,c=ut(l)==="object"?l:{},v=c.visible,p=v===void 0?void 0:v,h=c.onVisibleChange,m=h===void 0?void 0:h,d=c.getContainer,S=d===void 0?void 0:d,R=c.current,T=R===void 0?0:R,_=c.countRender,H=_===void 0?void 0:_,D=c.onChange,k=D===void 0?void 0:D,U=ze(c,tn),P=r.useState(new Map),Y=G(P,2),V=Y[0],O=Y[1],$=Array.from(V.keys()),B=r.useRef(),W=Ge(void 0,{onChange:function(w,A){B.current!==void 0&&(k==null||k(Fe($,w),Fe($,A))),B.current=A}}),z=G(W,2),I=z[0],N=z[1],b=Ge(!!p,{value:p,onChange:function(w,A){m==null||m(w,A,Fe($,I)),B.current=w?I:void 0}}),M=G(b,2),E=M[0],K=M[1],j=r.useState(null),g=G(j,2),F=g[0],y=g[1],Q=p!==void 0,L=$[T],Z=new Map(Array.from(V).filter(function(J){var w=G(J,2),A=w[1].canPreview;return!!A}).map(function(J){var w=G(J,2),A=w[0],me=w[1].url;return[A,me]})),Pe=function(w,A){var me=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,Ce=function(){O(function(ve){var Se=new Map(ve),ge=Se.delete(w);return ge?Se:ve})};return O(function(fe){return new Map(fe).set(w,{url:A,canPreview:me})}),Ce},Ie=function(w){w.stopPropagation(),K(!1),y(null)};return r.useEffect(function(){N(L)},[L]),r.useEffect(function(){!E&&Q&&N(L)},[L,Q,E]),r.createElement(nn,{value:{isPreviewGroup:!0,previewUrls:Z,setPreviewUrls:O,current:I,setCurrent:N,setShowPreview:K,setMousePosition:y,registerImage:Pe}},i,r.createElement(gt,Le({"aria-hidden":!E,visible:E,prefixCls:a,onClose:Ie,mousePosition:F,src:Z.get(I),icons:o,getContainer:S,countRender:H},U)))},ke=1,$e=50,Re=1,an=1,on=function(e){var t,a=e.visible,i=e.maskTransitionName,s=e.getContainer,o=e.prefixCls,l=e.rootClassName,c=e.icons,v=e.countRender,p=e.showSwitch,h=e.showProgress,m=e.current,d=e.count,S=e.scale,R=e.onSwitchLeft,T=e.onSwitchRight,_=e.onClose,H=e.onZoomIn,D=e.onZoomOut,k=e.onRotateRight,U=e.onRotateLeft,P=e.onFlipX,Y=e.onFlipY,V=c.rotateLeft,O=c.rotateRight,$=c.zoomIn,B=c.zoomOut,W=c.close,z=c.left,I=c.right,N=c.flipX,b=c.flipY,M="".concat(o,"-operations-operation"),E="".concat(o,"-operations-icon"),K=[{icon:W,onClick:_,type:"close"},{icon:$,onClick:H,type:"zoomIn",disabled:S===$e},{icon:B,onClick:D,type:"zoomOut",disabled:S===ke},{icon:O,onClick:k,type:"rotateRight"},{icon:V,onClick:U,type:"rotateLeft"},{icon:N,onClick:P,type:"flipX"},{icon:b,onClick:Y,type:"flipY"}],j=r.createElement(r.Fragment,null,p&&r.createElement(r.Fragment,null,r.createElement("div",{className:le("".concat(o,"-switch-left"),ne({},"".concat(o,"-switch-left-disabled"),m===0)),onClick:R},z),r.createElement("div",{className:le("".concat(o,"-switch-right"),ne({},"".concat(o,"-switch-right-disabled"),m===d-1)),onClick:T},I)),r.createElement("ul",{className:"".concat(o,"-operations")},h&&r.createElement("li",{className:"".concat(o,"-operations-progress")},(t=v==null?void 0:v(m+1,d))!==null&&t!==void 0?t:"".concat(m+1," / ").concat(d)),K.map(function(g){var F,y=g.icon,Q=g.onClick,L=g.type,Z=g.disabled;return r.createElement("li",{className:le(M,(F={},ne(F,"".concat(o,"-operations-operation-").concat(L),!0),ne(F,"".concat(o,"-operations-operation-disabled"),!!Z),F)),onClick:Q,key:L},r.isValidElement(y)?r.cloneElement(y,{className:E}):y)})));return r.createElement(Et,{visible:a,motionName:i},function(g){var F=g.className,y=g.style;return r.createElement(Rt,{open:!0,getContainer:s??document.body},r.createElement("div",{className:le("".concat(o,"-operations-wrapper"),F,l),style:y},j))})},ot={x:0,y:0,rotate:0,scale:1,flipX:!1,flipY:!1};function sn(n){var e=r.useRef(null),t=r.useRef([]),a=r.useState(ot),i=G(a,2),s=i[0],o=i[1],l=function(){o(ot)},c=function(h){e.current===null&&(t.current=[],e.current=Lt(function(){o(function(m){var d=m;return t.current.forEach(function(S){d=x(x({},d),S)}),e.current=null,d})})),t.current.push(x(x({},s),h))},v=function(h,m,d){var S=n.current,R=S.width,T=S.height,_=S.offsetWidth,H=S.offsetHeight,D=S.offsetLeft,k=S.offsetTop,U=h,P=s.scale*h;P>$e?(U=$e/s.scale,P=$e):P<ke&&(U=ke/s.scale,P=ke);var Y=m??innerWidth/2,V=d??innerHeight/2,O=U-1,$=O*R*.5,B=O*T*.5,W=O*(Y-s.x-D),z=O*(V-s.y-k),I=s.x-(W-$),N=s.y-(z-B);if(h<1&&P===1){var b=_*P,M=H*P,E=mt(),K=E.width,j=E.height;b<=K&&M<=j&&(I=0,N=0)}c({x:I,y:N,scale:P})};return{transform:s,resetTransform:l,updateTransform:c,dispatchZoomChange:v}}function it(n,e,t,a){var i=e+t,s=(t-a)/2;if(t>a){if(e>0)return ne({},n,s);if(e<0&&i<a)return ne({},n,-s)}else if(e<0||i>a)return ne({},n,e<0?s:-s);return{}}function ln(n,e,t,a){var i=mt(),s=i.width,o=i.height,l=null;return n<=s&&e<=o?l={x:0,y:0}:(n>s||e>o)&&(l=x(x({},it("x",t,n,s)),it("y",a,e,o))),l}var cn=["prefixCls","src","alt","onClose","visible","icons","rootClassName","getContainer","countRender","scaleStep","transitionName","maskTransitionName"],gt=function(e){var t=e.prefixCls,a=e.src,i=e.alt,s=e.onClose,o=e.visible,l=e.icons,c=l===void 0?{}:l,v=e.rootClassName,p=e.getContainer,h=e.countRender,m=e.scaleStep,d=m===void 0?.5:m,S=e.transitionName,R=S===void 0?"zoom":S,T=e.maskTransitionName,_=T===void 0?"fade":T,H=ze(e,cn),D=r.useRef(),k=r.useRef({deltaX:0,deltaY:0,transformX:0,transformY:0}),U=r.useState(!1),P=G(U,2),Y=P[0],V=P[1],O=r.useContext(Ke),$=O.previewUrls,B=O.current,W=O.isPreviewGroup,z=O.setCurrent,I=$.size,N=Array.from($.keys()),b=N.indexOf(B),M=W?$.get(B):a,E=W&&I>1,K=W&&I>=1,j=sn(D),g=j.transform,F=j.resetTransform,y=j.updateTransform,Q=j.dispatchZoomChange,L=g.rotate,Z=g.scale,Pe=le(ne({},"".concat(t,"-moving"),Y)),Ie=function(){F()},J=function(){Q(Re+d)},w=function(){Q(Re-d)},A=function(){y({rotate:L+90})},me=function(){y({rotate:L-90})},Ce=function(){y({flipX:!g.flipX})},fe=function(){y({flipY:!g.flipY})},ve=function(f){f.preventDefault(),f.stopPropagation(),b>0&&z(N[b-1])},Se=function(f){f.preventDefault(),f.stopPropagation(),b<I-1&&z(N[b+1])},ge=function(){if(o&&Y){V(!1);var f=k.current,q=f.transformX,ae=f.transformY,oe=g.x!==q&&g.y!==ae;if(!oe)return;var ie=D.current.offsetWidth*Z,ce=D.current.offsetHeight*Z,Ne=D.current.getBoundingClientRect(),Xe=Ne.left,He=Ne.top,be=L%180!==0,ue=ln(be?ce:ie,be?ie:ce,Xe,He);ue&&y(x({},ue))}},Me=function(f){f.button===0&&(f.preventDefault(),f.stopPropagation(),k.current={deltaX:f.pageX-g.x,deltaY:f.pageY-g.y,transformX:g.x,transformY:g.y},V(!0))},pe=function(f){o&&Y&&y({x:f.pageX-k.current.deltaX,y:f.pageY-k.current.deltaY})},Ye=function(f){if(!(!o||f.deltaY==0)){var q=Math.abs(f.deltaY/100),ae=Math.min(q,an),oe=Re+ae*d;f.deltaY>0&&(oe=Re/oe),Q(oe,f.clientX,f.clientY)}},Oe=r.useCallback(function(C){!o||!E||(C.keyCode===nt.LEFT?b>0&&z(N[b-1]):C.keyCode===nt.RIGHT&&b<I-1&&z(N[b+1]))},[b,I,N,z,E,o]),Ze=function(f){o&&(Z!==1?y({x:0,y:0,scale:1}):Q(Re+d,f.clientX,f.clientY))};return r.useEffect(function(){var C,f,q=Ee(window,"mouseup",ge,!1),ae=Ee(window,"mousemove",pe,!1),oe=Ee(window,"keydown",Oe,!1);try{window.top!==window.self&&(C=Ee(window.top,"mouseup",ge,!1),f=Ee(window.top,"mousemove",pe,!1))}catch{}return function(){var ie,ce;q.remove(),ae.remove(),oe.remove(),(ie=C)===null||ie===void 0||ie.remove(),(ce=f)===null||ce===void 0||ce.remove()}},[o,Y,Oe]),ye.createElement(ye.Fragment,null,ye.createElement(_t,Le({transitionName:R,maskTransitionName:_,closable:!1,keyboard:!0,prefixCls:t,onClose:s,visible:o,wrapClassName:Pe,rootClassName:v,getContainer:p},H,{afterClose:Ie}),ye.createElement("div",{className:"".concat(t,"-img-wrapper")},ye.createElement("img",{width:e.width,height:e.height,onWheel:Ye,onMouseDown:Me,onDoubleClick:Ze,ref:D,className:"".concat(t,"-img"),src:M,alt:i,style:{transform:"translate3d(".concat(g.x,"px, ").concat(g.y,"px, 0) scale3d(").concat(g.flipX?"-":"").concat(Z,", ").concat(g.flipY?"-":"").concat(Z,", 1) rotate(").concat(L,"deg)")}}))),ye.createElement(on,{visible:o,maskTransitionName:_,getContainer:p,prefixCls:t,rootClassName:v,icons:c,countRender:h,showSwitch:E,showProgress:K,current:b,count:I,scale:Z,onSwitchLeft:ve,onSwitchRight:Se,onZoomIn:J,onZoomOut:w,onRotateRight:A,onRotateLeft:me,onFlipX:Ce,onFlipY:fe,onClose:s}))},un=["src","alt","onPreviewClose","prefixCls","previewPrefixCls","placeholder","fallback","width","height","style","preview","className","onClick","onError","wrapperClassName","wrapperStyle","rootClassName","crossOrigin","decoding","loading","referrerPolicy","sizes","srcSet","useMap","draggable"],dn=["src","visible","onVisibleChange","getContainer","mask","maskClassName","icons","scaleStep"],st=0;function mn(n){return new Promise(function(e){var t=document.createElement("img");t.onerror=function(){return e(!1)},t.onload=function(){return e(!0)},t.src=n})}var _e=function(e){var t,a=e.src,i=e.alt,s=e.onPreviewClose,o=e.prefixCls,l=o===void 0?"rc-image":o,c=e.previewPrefixCls,v=c===void 0?"".concat(l,"-preview"):c,p=e.placeholder,h=e.fallback,m=e.width,d=e.height,S=e.style,R=e.preview,T=R===void 0?!0:R,_=e.className,H=e.onClick,D=e.onError,k=e.wrapperClassName,U=e.wrapperStyle,P=e.rootClassName,Y=e.crossOrigin,V=e.decoding,O=e.loading,$=e.referrerPolicy,B=e.sizes,W=e.srcSet,z=e.useMap,I=e.draggable,N=ze(e,un),b=p&&p!==!0,M=ut(T)==="object"?T:{},E=M.src,K=M.visible,j=K===void 0?void 0:K,g=M.onVisibleChange,F=g===void 0?s:g,y=M.getContainer,Q=y===void 0?void 0:y,L=M.mask,Z=M.maskClassName,Pe=M.icons,Ie=M.scaleStep,J=ze(M,dn),w=E??a,A=j!==void 0,me=Ge(!!j,{value:j,onChange:F}),Ce=G(me,2),fe=Ce[0],ve=Ce[1],Se=r.useState(b?"loading":"normal"),ge=G(Se,2),Me=ge[0],pe=ge[1],Ye=r.useState(null),Oe=G(Ye,2),Ze=Oe[0],C=Oe[1],f=Me==="error",q=r.useContext(Ke),ae=q.isPreviewGroup,oe=q.setCurrent,ie=q.setShowPreview,ce=q.setMousePosition,Ne=q.registerImage,Xe=r.useState(function(){return st+=1,st}),He=G(Xe,1),be=He[0],ue=!!T,Be=r.useRef(!1),Qe=function(){pe("normal")},Pt=function(ee){if(!A){var qe=Yt(ee.target),et=qe.left,tt=qe.top;ae?(oe(be),ce({x:et,y:tt})):C({x:et,y:tt})}ae?ie(!0):ve(!0),H==null||H(ee)},It=function(ee){ee.stopPropagation(),ve(!1),A||C(null)},Mt=function(ee){Be.current=!1,Me==="loading"&&ee!=null&&ee.complete&&(ee.naturalWidth||ee.naturalHeight)&&(Be.current=!0,Qe())};r.useEffect(function(){mn(w).then(function(he){he||pe("error")})},[w]),r.useEffect(function(){var he=Ne(be,w);return he},[]),r.useEffect(function(){Ne(be,w,ue)},[w,ue]),r.useEffect(function(){f&&pe("normal"),b&&!Be.current&&pe("loading")},[a]);var Ot=le(l,k,P,ne({},"".concat(l,"-error"),f)),Nt=f&&h?h:w,Je={crossOrigin:Y,decoding:V,draggable:I,loading:O,referrerPolicy:$,sizes:B,srcSet:W,useMap:z,onError:D,alt:i,className:le("".concat(l,"-img"),ne({},"".concat(l,"-img-placeholder"),p===!0),_),style:x({height:d},S)};return r.createElement(r.Fragment,null,r.createElement("div",Le({},N,{className:Ot,onClick:ue?Pt:H,style:x({width:m,height:d},U)}),r.createElement("img",Le({},Je,{ref:Mt},f&&h?{src:h}:{onLoad:Qe,src:a},{width:m,height:d})),Me==="loading"&&r.createElement("div",{"aria-hidden":"true",className:"".concat(l,"-placeholder")},p),L&&ue&&r.createElement("div",{className:le("".concat(l,"-mask"),Z),style:{display:((t=Je.style)===null||t===void 0?void 0:t.display)==="none"?"none":void 0}},L)),!ae&&ue&&r.createElement(gt,Le({"aria-hidden":!fe,visible:fe,prefixCls:v,onClose:It,mousePosition:Ze,src:Nt,alt:i,getContainer:Q,icons:Pe,scaleStep:Ie,rootClassName:P},J)))};_e.PreviewGroup=rn;_e.displayName="Image";var fn={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M672 418H144c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H188V494h440v326z"}},{tag:"path",attrs:{d:"M819.3 328.5c-78.8-100.7-196-153.6-314.6-154.2l-.2-64c0-6.5-7.6-10.1-12.6-6.1l-128 101c-4 3.1-3.9 9.1 0 12.3L492 318.6c5.1 4 12.7.4 12.6-6.1v-63.9c12.9.1 25.9.9 38.8 2.5 42.1 5.2 82.1 18.2 119 38.7 38.1 21.2 71.2 49.7 98.4 84.3 27.1 34.7 46.7 73.7 58.1 115.8a325.95 325.95 0 016.5 140.9h74.9c14.8-103.6-11.3-213-81-302.3z"}}]},name:"rotate-left",theme:"outlined"};const vn=fn;var pt=function(e,t){return r.createElement(Te,x(x({},e),{},{ref:t,icon:vn}))};pt.displayName="RotateLeftOutlined";const gn=r.forwardRef(pt);var pn={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-.4-12.6 6.1l-.2 64c-118.6.5-235.8 53.4-314.6 154.2A399.75 399.75 0 00123.5 631h74.9c-.9-5.3-1.7-10.7-2.4-16.1-5.1-42.1-2.1-84.1 8.9-124.8 11.4-42.2 31-81.1 58.1-115.8 27.2-34.7 60.3-63.2 98.4-84.3 37-20.6 76.9-33.6 119.1-38.8z"}},{tag:"path",attrs:{d:"M880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H396V494h440v326z"}}]},name:"rotate-right",theme:"outlined"};const hn=pn;var ht=function(e,t){return r.createElement(Te,x(x({},e),{},{ref:t,icon:hn}))};ht.displayName="RotateRightOutlined";const wn=r.forwardRef(ht);var Cn={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M847.9 592H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h605.2L612.9 851c-4.1 5.2-.4 13 6.3 13h72.5c4.9 0 9.5-2.2 12.6-6.1l168.8-214.1c16.5-21 1.6-51.8-25.2-51.8zM872 356H266.8l144.3-183c4.1-5.2.4-13-6.3-13h-72.5c-4.9 0-9.5 2.2-12.6 6.1L150.9 380.2c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"swap",theme:"outlined"};const Sn=Cn;var wt=function(e,t){return r.createElement(Te,x(x({},e),{},{ref:t,icon:Sn}))};wt.displayName="SwapOutlined";const lt=r.forwardRef(wt);var bn={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"}}]},name:"zoom-in",theme:"outlined"};const yn=bn;var Ct=function(e,t){return r.createElement(Te,x(x({},e),{},{ref:t,icon:yn}))};Ct.displayName="ZoomInOutlined";const xn=r.forwardRef(Ct);var Pn={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M637 443H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h312c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"}}]},name:"zoom-out",theme:"outlined"};const In=Pn;var St=function(e,t){return r.createElement(Te,x(x({},e),{},{ref:t,icon:In}))};St.displayName="ZoomOutOutlined";const Mn=r.forwardRef(St),Ve=n=>({position:n||"absolute",inset:0}),On=n=>{const{iconCls:e,motionDurationSlow:t,paddingXXS:a,marginXXS:i,prefixCls:s}=n;return{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",background:new xe("#000").setAlpha(.5).toRgbString(),cursor:"pointer",opacity:0,transition:`opacity ${t}`,[`.${s}-mask-info`]:Object.assign(Object.assign({},Dt),{padding:`0 ${a}px`,[e]:{marginInlineEnd:i,svg:{verticalAlign:"baseline"}}})}},Nn=n=>{const{previewCls:e,modalMaskBg:t,paddingSM:a,imagePreviewOperationDisabledColor:i,motionDurationSlow:s}=n,o=new xe(t).setAlpha(.1),l=o.clone().setAlpha(.2);return{[`${e}-operations`]:Object.assign(Object.assign({},kt(n)),{display:"flex",flexDirection:"row-reverse",alignItems:"center",color:n.imagePreviewOperationColor,listStyle:"none",background:o.toRgbString(),pointerEvents:"auto","&-operation":{marginInlineStart:a,padding:a,cursor:"pointer",transition:`all ${s}`,"&:hover":{background:l.toRgbString()},"&-disabled":{color:i,pointerEvents:"none"},"&:last-of-type":{marginInlineStart:0}},"&-progress":{position:"absolute",left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%)"},"&-icon":{fontSize:n.imagePreviewOperationSize}})}},En=n=>{const{modalMaskBg:e,iconCls:t,imagePreviewOperationDisabledColor:a,previewCls:i,zIndexPopup:s,motionDurationSlow:o}=n,l=new xe(e).setAlpha(.1),c=l.clone().setAlpha(.2);return{[`${i}-switch-left, ${i}-switch-right`]:{position:"fixed",insetBlockStart:"50%",zIndex:s+1,display:"flex",alignItems:"center",justifyContent:"center",width:n.imagePreviewSwitchSize,height:n.imagePreviewSwitchSize,marginTop:-n.imagePreviewSwitchSize/2,color:n.imagePreviewOperationColor,background:l.toRgbString(),borderRadius:"50%",transform:"translateY(-50%)",cursor:"pointer",transition:`all ${o}`,pointerEvents:"auto","&:hover":{background:c.toRgbString()},["&-disabled"]:{"&, &:hover":{color:a,background:"transparent",cursor:"not-allowed",[`> ${t}`]:{cursor:"not-allowed"}}},[`> ${t}`]:{fontSize:n.imagePreviewOperationSize}},[`${i}-switch-left`]:{insetInlineStart:n.marginSM},[`${i}-switch-right`]:{insetInlineEnd:n.marginSM}}},Rn=n=>{const{motionEaseOut:e,previewCls:t,motionDurationSlow:a,componentCls:i}=n;return[{[`${i}-preview-root`]:{[t]:{height:"100%",textAlign:"center",pointerEvents:"none"},[`${t}-body`]:Object.assign(Object.assign({},Ve()),{overflow:"hidden"}),[`${t}-img`]:{maxWidth:"100%",maxHeight:"100%",verticalAlign:"middle",transform:"scale3d(1, 1, 1)",cursor:"grab",transition:`transform ${a} ${e} 0s`,userSelect:"none",pointerEvents:"auto","&-wrapper":Object.assign(Object.assign({},Ve()),{transition:`transform ${a} ${e} 0s`,display:"flex",justifyContent:"center",alignItems:"center","&::before":{display:"inline-block",width:1,height:"50%",marginInlineEnd:-1,content:'""'}})},[`${t}-moving`]:{[`${t}-preview-img`]:{cursor:"grabbing","&-wrapper":{transitionDuration:"0s"}}}}},{[`${i}-preview-root`]:{[`${t}-wrap`]:{zIndex:n.zIndexPopup}}},{[`${i}-preview-operations-wrapper`]:{position:"fixed",insetBlockStart:0,insetInlineEnd:0,zIndex:n.zIndexPopup+1,width:"100%"},"&":[Nn(n),En(n)]}]},Ln=n=>{const{componentCls:e}=n;return{[e]:{position:"relative",display:"inline-block",[`${e}-img`]:{width:"100%",height:"auto",verticalAlign:"middle"},[`${e}-img-placeholder`]:{backgroundColor:n.colorBgContainerDisabled,backgroundImage:"url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQuNSAyLjVoLTEzQS41LjUgMCAwIDAgMSAzdjEwYS41LjUgMCAwIDAgLjUuNWgxM2EuNS41IDAgMCAwIC41LS41VjNhLjUuNSAwIDAgMC0uNS0uNXpNNS4yODEgNC43NWExIDEgMCAwIDEgMCAyIDEgMSAwIDAgMSAwLTJ6bTguMDMgNi44M2EuMTI3LjEyNyAwIDAgMS0uMDgxLjAzSDIuNzY5YS4xMjUuMTI1IDAgMCAxLS4wOTYtLjIwN2wyLjY2MS0zLjE1NmEuMTI2LjEyNiAwIDAgMSAuMTc3LS4wMTZsLjAxNi4wMTZMNy4wOCAxMC4wOWwyLjQ3LTIuOTNhLjEyNi4xMjYgMCAwIDEgLjE3Ny0uMDE2bC4wMTUuMDE2IDMuNTg4IDQuMjQ0YS4xMjcuMTI3IDAgMCAxLS4wMi4xNzV6IiBmaWxsPSIjOEM4QzhDIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=')",backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"30%"},[`${e}-mask`]:Object.assign({},On(n)),[`${e}-mask:hover`]:{opacity:1},[`${e}-placeholder`]:Object.assign({},Ve())}}},An=n=>{const{previewCls:e}=n;return{[`${e}-root`]:Tt(n,"zoom"),["&"]:Xt(n,!0)}},bt=At("Image",n=>{const e=new xe(n.colorTextLightSolid),t=`${n.componentCls}-preview`,a=rt(n,{previewCls:t,imagePreviewOperationColor:e.toRgbString(),imagePreviewOperationDisabledColor:new xe(e).setAlpha(.25).toRgbString(),modalMaskBg:new xe("#000").setAlpha(.45).toRgbString(),imagePreviewOperationSize:n.fontSizeIcon*1.5,imagePreviewSwitchSize:n.controlHeightLG});return[Ln(a),Rn(a),Zt(rt(a,{componentCls:t})),An(a)]},n=>({zIndexPopup:n.zIndexPopupBase+80}));var Tn=globalThis&&globalThis.__rest||function(n,e){var t={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&e.indexOf(a)<0&&(t[a]=n[a]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(n);i<a.length;i++)e.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(n,a[i])&&(t[a[i]]=n[a[i]]);return t};const yt={rotateLeft:r.createElement(gn,null),rotateRight:r.createElement(wn,null),zoomIn:r.createElement(xn,null),zoomOut:r.createElement(Mn,null),close:r.createElement($t,null),left:r.createElement(Ht,null),right:r.createElement(Bt,null),flipX:r.createElement(lt,null),flipY:r.createElement(lt,{rotate:90})},Dn=n=>{var{previewPrefixCls:e,preview:t}=n,a=Tn(n,["previewPrefixCls","preview"]);const{getPrefixCls:i}=r.useContext(dt),s=i("image",e),o=`${s}-preview`,l=i(),[c,v]=bt(s),p=r.useMemo(()=>{if(t===!1)return t;const h=typeof t=="object"?t:{};return Object.assign(Object.assign({},h),{transitionName:je(l,"zoom",h.transitionName),maskTransitionName:je(l,"fade",h.maskTransitionName),rootClassName:v})},[t]);return c(r.createElement(_e.PreviewGroup,Object.assign({preview:p,previewPrefixCls:o,icons:yt},a)))},kn=Dn;var ct=globalThis&&globalThis.__rest||function(n,e){var t={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&e.indexOf(a)<0&&(t[a]=n[a]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(n);i<a.length;i++)e.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(n,a[i])&&(t[a[i]]=n[a[i]]);return t};const xt=n=>{var{prefixCls:e,preview:t,rootClassName:a}=n,i=ct(n,["prefixCls","preview","rootClassName"]);const{getPrefixCls:s,locale:o=at,getPopupContainer:l}=r.useContext(dt),c=s("image",e),v=s(),p=o.Image||at.Image,[h,m]=bt(c),d=le(a,m),S=r.useMemo(()=>{if(t===!1)return t;const R=typeof t=="object"?t:{},{getContainer:T}=R,_=ct(R,["getContainer"]);return Object.assign(Object.assign({mask:r.createElement("div",{className:`${c}-mask-info`},r.createElement(zt,null),p==null?void 0:p.preview),icons:yt},_),{getContainer:T||l,transitionName:je(v,"zoom",R.transitionName),maskTransitionName:je(v,"fade",R.maskTransitionName)})},[t,p]);return h(r.createElement(_e,Object.assign({prefixCls:`${c}`,preview:S,rootClassName:d},i)))};xt.PreviewGroup=kn;const $n=xt,zn=({showMovieForm:n,setMovieForm:e,selectedMovie:t,setSelectedMovie:a,formType:i,fetchMovies:s})=>{const o=We();return t&&(t.releaseDate=vt(t.releaseDate).format("YYYY-MM-DD")),u(Ft,{title:i==="add"?"ADD MOVIE":"EDIT MOVIE",open:n,onCancel:()=>{e(!1),a(void 0)},footer:null,width:800,maskClosable:!1,keyboard:!1,children:se(de,{layout:"vertical",onFinish:async c=>{try{o(Ae());let v;i==="add"?v=await Qt(c):v=await Jt({...c,movieId:t==null?void 0:t._id}),o(re()),v.success?(s(),a(void 0),e(!1),X.success(v.message)):X.error(v.message)}catch(v){o(re()),X.error(v.message)}},initialValues:t,children:[se(jt,{gutter:16,children:[u(we,{span:24,children:u(de.Item,{label:"Movie Name",name:"title",children:u(De,{})})}),u(we,{span:24,children:u(de.Item,{label:"Movie Description",name:"description",children:u(De.TextArea,{})})}),u(we,{span:8,children:u(de.Item,{label:"Movie Duration (Min)",name:"duration",children:u(Gt,{})})}),u(we,{span:8,children:u(de.Item,{label:"Language",name:"language",children:se(te,{defaultActiveFirstOption:!0,placeholder:"Select Language",children:[u(te.Option,{value:"Bangla",children:"Bangla"}),u(te.Option,{value:"English",children:"English"}),u(te.Option,{value:"Hindi",children:"Hindi"}),u(te.Option,{value:"Turkish",children:"Turkish"})]})})}),u(we,{span:8,children:u(de.Item,{label:"Movie Release Date",name:"releaseDate",children:u(De,{type:"date"})})}),u(we,{span:8,children:u(de.Item,{label:"Genre",name:"genre",children:se(te,{defaultActiveFirstOption:!0,placeholder:"Select Genre",children:[u(te.Option,{value:"Action",children:"Action"}),u(te.Option,{value:"Comedy",children:"Comedy"}),u(te.Option,{value:"Sci-fi",children:"Sci-fi"}),u(te.Option,{value:"Horror",children:"Horror"})]})})}),u(we,{span:16,children:u(de.Item,{label:"Poster URL",name:"poster",children:u(De,{})})})]}),se("div",{className:"flex justify-end gap-1",children:[u(Ue,{title:"Cancel",variant:"outlined",type:"button",onClick:()=>{e(!1),a(void 0)}}),u(Ue,{title:"Save",type:"submit"})]})]})})},jn=()=>{const[n,e]=r.useState(),[t,a]=r.useState(!1),[i,s]=r.useState(),[o,l]=r.useState("add"),c=We(),v=r.useCallback(async()=>{try{c(Ae());const m=await qt();c(re()),m.success?e(m.movies):X.error(m.message)}catch(m){c(re()),X.error(m.message)}},[]),p=async m=>{try{c(Ae());const d=await en({movieId:m});c(re()),d.success?(X.success(d.message),v()):X.error(d.error)}catch(d){c(re()),X.error(d.message)}},h=[{title:"Poster",dataIndex:"poster",render:(m,d)=>u($n,{src:d.poster,alt:"movie poster",height:60,width:80,className:"br-1"})},{title:"Name",dataIndex:"title"},{title:"Description",dataIndex:"description",ellipsis:!0},{title:"Duration",dataIndex:"duration"},{title:"Language",dataIndex:"language"},{title:"Release Date",dataIndex:"releaseDate",render:(m,d)=>vt(d.releaseDate).format("DD-MM-YYYY")},{title:"Genre",dataIndex:"genre"},{title:"Action",dataIndex:"action",render:(m,d)=>se("div",{className:"flex gap-2",children:[u("i",{className:"ri-close-circle-line text-danger",onClick:()=>{p(d._id)}}),u("i",{className:"ri-pencil-fill text-primary",onClick:()=>{s(d),l("edit"),a(!0)}})]})}];return r.useEffect(()=>{v()},[]),se("div",{children:[u("div",{className:"flex justify-end mb-1",children:u(Ue,{title:"Add Movie",variant:"outlined",onClick:()=>{a(!0),l("add")}})}),u(ft,{columns:h,dataSource:n,rowKey:m=>m._id}),t&&u(zn,{showMovieForm:t,setMovieForm:a,selectedMovie:i,setSelectedMovie:s,formType:o,fetchMovies:v})]})},_n=()=>{const[n,e]=r.useState(),t=We(),a=r.useCallback(async()=>{try{t(Ae());const o=await Ut();t(re()),o.success?e(o.theatres):X.error(o.message)}catch(o){t(re()),X.error(o.message)}},[t]),i=async o=>{try{t(Ae());const l=await Vt({...o,theatreId:o._id,isActive:!o.isActive});t(re()),l.success?(a(),X.success(l.message)):X.error(l.message)}catch(l){t(re()),X.error(l.message)}},s=[{title:"Name",dataIndex:"name"},{title:"Address",dataIndex:"address",ellipsis:!0},{title:"Phone Number",dataIndex:"phone"},{title:"Email Address",dataIndex:"email",ellipsis:!0},{title:"Owner",dataIndex:"owner",render:(o,l)=>{var c;return(c=l.owner)==null?void 0:c.name}},{title:"Status",dataIndex:"isActive",render:o=>o?"Approved":"Pending/Blocked"},{title:"Action",dataIndex:"action",render:(o,l)=>se("div",{className:"flex gap-2",children:[l.isActive&&u("span",{className:"underline",onClick:()=>i(l),children:"Block"}),!l.isActive&&u("span",{className:"underline",onClick:()=>i(l),children:"Approve"})]})}];return r.useEffect(()=>{a()},[a]),u(ft,{columns:s,dataSource:n,rowKey:o=>o._id})},Bn=()=>se("div",{children:[u(Wt,{title:"admin"}),u(Kt,{defaultActiveKey:"1",items:[{key:"1",label:"Movies",children:u(jn,{})},{key:"2",label:"Theatres",children:u(_n,{})}]})]});export{Bn as default};
