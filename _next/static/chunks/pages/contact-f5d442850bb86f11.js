(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{9873:function(e,t,n){"use strict";n.d(t,{Ee:function(){return o}});var r=n(959),a=n(1529),l=n(5810),i=(e,t)=>"loaded"!==e&&"beforeLoadOrError"===t||"failed"===e&&"onError"===t,s=(0,a.Gp)(function(e,t){let{htmlWidth:n,htmlHeight:a,alt:l,...i}=e;return r.createElement("img",{width:n,height:a,ref:t,alt:l,...i})});s.displayName="NativeImage";var o=(0,a.Gp)(function(e,t){let{fallbackSrc:n,fallback:o,src:d,srcSet:u,align:c,fit:m,loading:p,ignoreFallback:h,crossOrigin:f,fallbackStrategy:v="beforeLoadOrError",referrerPolicy:g,...x}=e,E=null!=p||h||!(void 0!==n||void 0!==o),y=function(e){let{loading:t,src:n,srcSet:a,onLoad:i,onError:s,crossOrigin:o,sizes:d,ignoreFallback:u}=e,[c,m]=(0,r.useState)("pending");(0,r.useEffect)(()=>{m(n?"loading":"pending")},[n]);let p=(0,r.useRef)(),h=(0,r.useCallback)(()=>{if(!n)return;f();let e=new Image;e.src=n,o&&(e.crossOrigin=o),a&&(e.srcset=a),d&&(e.sizes=d),t&&(e.loading=t),e.onload=e=>{f(),m("loaded"),null==i||i(e)},e.onerror=e=>{f(),m("failed"),null==s||s(e)},p.current=e},[n,o,a,d,i,s,t]),f=()=>{p.current&&(p.current.onload=null,p.current.onerror=null,p.current=null)};return(0,l.G)(()=>{if(!u)return"loading"===c&&h(),()=>{f()}},[c,h,u]),u?"loaded":c}({...e,ignoreFallback:E}),_=i(y,v),b={ref:t,objectFit:m,objectPosition:c,...E?x:function(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}(x,["onError","onLoad"])};return _?o||r.createElement(a.m$.img,{as:s,className:"chakra-image__placeholder",src:n,...b}):r.createElement(a.m$.img,{as:s,src:d,srcSet:u,crossOrigin:f,loading:p,referrerPolicy:g,className:"chakra-image",...b})});o.displayName="Image",(0,a.Gp)((e,t)=>r.createElement(a.m$.img,{ref:t,as:s,className:"chakra-image",...e}))},8811:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return n(8201)}])},8201:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return J}});var r=n(1527),a=n(1878),l=n(9873),i=n(959),s=n(9993),o=n(4110),d=n(1529),u=n(1303),c=n(7072),m=(...e)=>e.filter(Boolean).join(" "),p=e=>e?"":void 0,h=e=>!!e||void 0;function f(...e){return function(t){e.some(e=>(null==e||e(t),null==t?void 0:t.defaultPrevented))}}var[v,g]=(0,s.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),[x,E]=(0,s.k)({strict:!1,name:"FormControlContext"}),y=(0,d.Gp)(function(e,t){let n=(0,d.jC)("Form",e),r=(0,u.Lr)(e),{getRootProps:a,htmlProps:l,...s}=function(e){let{id:t,isRequired:n,isInvalid:r,isDisabled:a,isReadOnly:l,...s}=e,d=(0,i.useId)(),u=t||`field-${d}`,c=`${u}-label`,m=`${u}-feedback`,h=`${u}-helptext`,[f,v]=(0,i.useState)(!1),[g,x]=(0,i.useState)(!1),[E,y]=(0,i.useState)(!1),_=(0,i.useCallback)((e={},t=null)=>({id:h,...e,ref:(0,o.lq)(t,e=>{e&&x(!0)})}),[h]),b=(0,i.useCallback)((e={},t=null)=>({...e,ref:t,"data-focus":p(E),"data-disabled":p(a),"data-invalid":p(r),"data-readonly":p(l),id:e.id??c,htmlFor:e.htmlFor??u}),[u,a,E,r,l,c]),N=(0,i.useCallback)((e={},t=null)=>({id:m,...e,ref:(0,o.lq)(t,e=>{e&&v(!0)}),"aria-live":"polite"}),[m]),I=(0,i.useCallback)((e={},t=null)=>({...e,...s,ref:t,role:"group"}),[s]),j=(0,i.useCallback)((e={},t=null)=>({...e,ref:t,role:"presentation","aria-hidden":!0,children:e.children||"*"}),[]);return{isRequired:!!n,isInvalid:!!r,isReadOnly:!!l,isDisabled:!!a,isFocused:!!E,onFocus:()=>y(!0),onBlur:()=>y(!1),hasFeedbackText:f,setHasFeedbackText:v,hasHelpText:g,setHasHelpText:x,id:u,labelId:c,feedbackId:m,helpTextId:h,htmlProps:s,getHelpTextProps:_,getErrorMessageProps:N,getRootProps:I,getLabelProps:b,getRequiredIndicatorProps:j}}(r),c=m("chakra-form-control",e.className);return i.createElement(x,{value:s},i.createElement(v,{value:n},i.createElement(d.m$.div,{...a({},t),className:c,__css:n.container})))});function _(e){let{isDisabled:t,isInvalid:n,isReadOnly:r,isRequired:a,...l}=function(e){let t=E(),{id:n,disabled:r,readOnly:a,required:l,isRequired:i,isInvalid:s,isReadOnly:o,isDisabled:d,onFocus:u,onBlur:c,...m}=e,p=e["aria-describedby"]?[e["aria-describedby"]]:[];return(null==t?void 0:t.hasFeedbackText)&&(null==t?void 0:t.isInvalid)&&p.push(t.feedbackId),(null==t?void 0:t.hasHelpText)&&p.push(t.helpTextId),{...m,"aria-describedby":p.join(" ")||void 0,id:n??(null==t?void 0:t.id),isDisabled:r??d??(null==t?void 0:t.isDisabled),isReadOnly:a??o??(null==t?void 0:t.isReadOnly),isRequired:l??i??(null==t?void 0:t.isRequired),isInvalid:s??(null==t?void 0:t.isInvalid),onFocus:f(null==t?void 0:t.onFocus,u),onBlur:f(null==t?void 0:t.onBlur,c)}}(e);return{...l,disabled:t,readOnly:r,required:a,"aria-invalid":h(n),"aria-required":h(a),"aria-readonly":h(r)}}y.displayName="FormControl",(0,d.Gp)(function(e,t){let n=E(),r=g(),a=m("chakra-form__helper-text",e.className);return i.createElement(d.m$.div,{...null==n?void 0:n.getHelpTextProps(e,t),__css:r.helperText,className:a})}).displayName="FormHelperText";var[b,N]=(0,s.k)({name:"FormErrorStylesContext",errorMessage:"useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormError />\" "});(0,d.Gp)((e,t)=>{let n=(0,d.jC)("FormError",e),r=(0,u.Lr)(e),a=E();return(null==a?void 0:a.isInvalid)?i.createElement(b,{value:n},i.createElement(d.m$.div,{...null==a?void 0:a.getErrorMessageProps(r,t),className:m("chakra-form__error-message",e.className),__css:{display:"flex",alignItems:"center",...n.text}})):null}).displayName="FormErrorMessage",(0,d.Gp)((e,t)=>{let n=N(),r=E();if(!(null==r?void 0:r.isInvalid))return null;let a=m("chakra-form__error-icon",e.className);return i.createElement(c.JO,{ref:t,"aria-hidden":!0,...e,__css:n.icon,className:a},i.createElement("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"}))}).displayName="FormErrorIcon";var I=(0,d.Gp)(function(e,t){let n=(0,d.mq)("FormLabel",e),r=(0,u.Lr)(e),{className:a,children:l,requiredIndicator:s=i.createElement(j,null),optionalIndicator:o=null,...c}=r,p=E(),h=(null==p?void 0:p.getLabelProps(c,t))??{ref:t,...c};return i.createElement(d.m$.label,{...h,className:m("chakra-form__label",r.className),__css:{display:"block",textAlign:"start",...n}},l,(null==p?void 0:p.isRequired)?s:o)});I.displayName="FormLabel";var j=(0,d.Gp)(function(e,t){let n=E(),r=g();if(!(null==n?void 0:n.isRequired))return null;let a=m("chakra-form__required-indicator",e.className);return i.createElement(d.m$.span,{...null==n?void 0:n.getRequiredIndicatorProps(e,t),__css:r.requiredIndicator,className:a})});j.displayName="RequiredIndicator";var k=n(3838),S=n(8074),C=n(3798),w=(0,d.Gp)(function(e,t){let{htmlSize:n,...r}=e,a=(0,d.jC)("Input",r),l=(0,u.Lr)(r),s=_(l),o=(0,k.cx)("chakra-input",e.className);return i.createElement(d.m$.input,{size:n,...s,__css:a.field,ref:t,className:o})});w.displayName="Input",w.id="Input";var[F,R]=(0,s.k)({name:"InputGroupStylesContext",errorMessage:"useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<InputGroup />\" "});(0,d.Gp)(function(e,t){let n=(0,d.jC)("Input",e),{children:r,className:a,...l}=(0,u.Lr)(e),s=(0,k.cx)("chakra-input__group",a),o={},c=(0,S.W)(r),m=n.field;c.forEach(e=>{n&&(m&&"InputLeftElement"===e.type.id&&(o.paddingStart=m.height??m.h),m&&"InputRightElement"===e.type.id&&(o.paddingEnd=m.height??m.h),"InputRightAddon"===e.type.id&&(o.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(o.borderStartRadius=0))});let p=c.map(t=>{var n,r;let a=(0,C.oA)({size:(null==(n=t.props)?void 0:n.size)||e.size,variant:(null==(r=t.props)?void 0:r.variant)||e.variant});return"Input"!==t.type.id?(0,i.cloneElement)(t,a):(0,i.cloneElement)(t,Object.assign(a,o,t.props))});return i.createElement(d.m$.div,{className:s,ref:t,__css:{width:"100%",display:"flex",position:"relative"},...l},i.createElement(F,{value:n},p))}).displayName="InputGroup";var G={left:{marginEnd:"-1px",borderEndRadius:0,borderEndColor:"transparent"},right:{marginStart:"-1px",borderStartRadius:0,borderStartColor:"transparent"}},q=(0,d.m$)("div",{baseStyle:{flex:"0 0 auto",width:"auto",display:"flex",alignItems:"center",whiteSpace:"nowrap"}}),L=(0,d.Gp)(function(e,t){let{placement:n="left",...r}=e,a=G[n]??{},l=R();return i.createElement(q,{ref:t,...r,__css:{...l.addon,...a}})});L.displayName="InputAddon";var $=(0,d.Gp)(function(e,t){return i.createElement(L,{ref:t,placement:"left",...e,className:(0,k.cx)("chakra-input__left-addon",e.className)})});$.displayName="InputLeftAddon",$.id="InputLeftAddon";var A=(0,d.Gp)(function(e,t){return i.createElement(L,{ref:t,placement:"right",...e,className:(0,k.cx)("chakra-input__right-addon",e.className)})});A.displayName="InputRightAddon",A.id="InputRightAddon";var O=(0,d.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),T=(0,d.Gp)(function(e,t){let{placement:n="left",...r}=e,a=R(),l=a.field,s={["left"===n?"insetStart":"insetEnd"]:"0",width:(null==l?void 0:l.height)??(null==l?void 0:l.h),height:(null==l?void 0:l.height)??(null==l?void 0:l.h),fontSize:null==l?void 0:l.fontSize,...a.element};return i.createElement(O,{ref:t,__css:s,...r})});T.id="InputElement",T.displayName="InputElement";var z=(0,d.Gp)(function(e,t){let{className:n,...r}=e,a=(0,k.cx)("chakra-input__left-element",n);return i.createElement(T,{ref:t,placement:"left",className:a,...r})});z.id="InputLeftElement",z.displayName="InputLeftElement";var P=(0,d.Gp)(function(e,t){let{className:n,...r}=e,a=(0,k.cx)("chakra-input__right-element",n);return i.createElement(T,{ref:t,placement:"right",className:a,...r})});P.id="InputRightElement",P.displayName="InputRightElement";var M=(...e)=>e.filter(Boolean).join(" "),D=["h","minH","height","minHeight"],H=(0,d.Gp)((e,t)=>{let n=(0,d.mq)("Textarea",e),{className:r,rows:a,...l}=(0,u.Lr)(e),s=_(l),o=a?function(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}(n,D):n;return i.createElement(d.m$.textarea,{ref:t,rows:a,...s,className:M("chakra-textarea",r),__css:o})});H.displayName="Textarea";var B=n(3259),X=n(3335),Z=n.n(X);let W=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(Z(),{children:[(0,r.jsx)("title",{children:"Contact Page | Shivom Srivastava"}),(0,r.jsx)("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>\uD83E\uDD19</text></svg>"})]}),(0,r.jsxs)(a.kC,{justifyContent:"center",alignItems:"center",direction:{sm:"column",md:"row"},gap:12,minHeight:"inherit",children:[(0,r.jsxs)(a.xu,{children:[(0,r.jsx)(a.X6,{fontSize:"4xl",textAlign:"center",children:"The Contact Page"}),(0,r.jsx)(a.oM,{ratio:16/9,children:(0,r.jsx)(l.Ee,{src:"/naruto1.jpg",alt:"naruto",marginTop:4,height:"full",width:"full",rounded:"xl",shadow:"2xl",draggable:"false"})})]}),(0,r.jsx)(a.xu,{boxShadow:"lg",p:6,maxWidth:400,width:"100%",children:(0,r.jsxs)("form",{action:"https://formsubmit.co/shvomsrivastava@gmail.com",method:"POST",style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:[(0,r.jsxs)(y,{id:"name",isRequired:!0,children:[(0,r.jsx)(I,{children:"Name"}),(0,r.jsx)(w,{type:"text",name:"name",placeholder:"guchiii"})]}),(0,r.jsxs)(y,{id:"email",isRequired:!0,children:[(0,r.jsx)(I,{children:"Email"}),(0,r.jsx)(w,{type:"email",name:"email",placeholder:"guchiii@mail.com"})]}),(0,r.jsxs)(y,{id:"message",isRequired:!0,children:[(0,r.jsx)(I,{children:"Your Message"}),(0,r.jsx)(H,{placeholder:"#include <iostream>...",name:"message",rows:4,maxHeight:"50%",resize:"none"})]}),(0,r.jsx)("input",{type:"hidden",name:"_next",value:"https://shivom.me/thanks"}),(0,r.jsx)("input",{type:"hidden",name:"_subject",value:"New submission!"}),(0,r.jsx)(B.zx,{variant:"primary",type:"submit",children:"Submit Response"})]})})]})]});var J=W},3335:function(e,t,n){e.exports=n(3572)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8811)}),_N_E=e.O()}]);