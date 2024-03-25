"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["ui_packages_commit-attribution_index_ts-ui_packages_commit-checks-status_index_ts-ui_packages-ffbe33"],{53924:(e,t,a)=>{a.d(t,{D:()=>j,C:()=>A});var r=a(85893),o=a(79804),i=a(22326),n=a(42483),s=a(73290),l=a(97011);function c(e){return e.path?.startsWith("/apps/")??!1}var d=a(65379);function u({renderTooltip:e,author:t,children:a}){return!1===e?(0,r.jsx)(r.Fragment,{children:a}):(0,r.jsx)(d.Z,{"aria-label":`commits by ${t.login}`,direction:"se",children:a})}try{u.displayName||(u.displayName="AuthorTooltip")}catch{}var h=a(9996),p=a.n(h),x=a(67294);let m={fontWeight:"bold",fontColor:"fg.default",includeTooltip:!0,avatarSize:void 0},f=(0,x.createContext)(m);function g({authorSettings:e,children:t}){let a=p()(m,e??{});return(0,r.jsx)(f.Provider,{value:a,children:t})}function y(){return(0,x.useContext)(f)||m}try{f.displayName||(f.displayName="AuthorSettingsContext")}catch{}try{g.displayName||(g.displayName="AuthorSettingsProvider")}catch{}function j({author:e,repo:t,sx:a={}}){let d=y();if(!e)return null;let h=(0,r.jsx)(o.O,{"aria-label":`${e.login||"author"}`,src:e.avatarUrl,alt:`${e.login||"author"}`,sx:{mr:2,mt:"-1px",ml:"1px"},size:d.avatarSize,square:c(e)});return(0,r.jsxs)(n.Z,{sx:{display:"flex",flexDirection:"row",alignItems:"center",...a},"data-testid":"author-avatar",children:[e.path?(0,r.jsx)(s.Z,{href:e.path,"data-testid":"avatar-icon-link","data-hovercard-url":e.login?(0,i.zP)({owner:e.login}):void 0,children:h}):h,e.login?(0,r.jsx)(u,{author:e,renderTooltip:d.includeTooltip,children:(0,r.jsx)(s.Z,{muted:!0,href:(0,i.OI)({repo:t,author:e.login}),"aria-label":`commits by ${e.login}`,"data-hovercard-url":(0,i.zP)({owner:e.login}),sx:{fontWeight:d.fontWeight,whiteSpace:"nowrap",color:d.fontColor,"&:hover":{color:d.fontColor,textDecoration:"underline"}},children:e.login})}):(0,r.jsx)(l.Z,{sx:{fontWeight:d.fontWeight,whiteSpace:"nowrap",color:d.fontColor},children:e.displayName})]})}try{j.displayName||(j.displayName="AuthorAvatar")}catch{}var b=a(52516),k=a(79902),v=a(59148);function C({authors:e,repo:t}){let a=e.length,[o,i]=(0,x.useState)(!1),n=(0,x.useRef)(null);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.Z,{as:"button","aria-label":`Show ${a} authors`,"data-testid":"authors-dialog-anchor",onClick:()=>{i(!0)},sx:{mx:1},ref:n,muted:!0,children:[a," ","people"]}),o&&(0,r.jsx)(v.V,{title:`${a} authors`,onClose:()=>{i(!1),setTimeout(()=>n.current?.focus(),25)},width:"medium",height:a>=12?"small":"auto",renderBody:()=>(0,r.jsx)(b.S,{sx:{overflowY:"auto",py:2},"data-testid":"contributor-dialog-list",children:e.map((e,a)=>(0,r.jsx)(S,{author:e,repo:t},`${e.login}_${a}`))})})]})}function S({author:e,repo:t}){return(0,r.jsxs)(b.S.LinkItem,{sx:{display:"flex",flexDirection:"row",fontSize:1,py:2,color:"fg.default","&:hover":{backgroundColor:"canvas.subtle"}},"data-testid":"contributor-dialog-row",href:(0,i.OI)({repo:t,author:e.login??""}),children:[(0,r.jsx)(o.O,{src:e.avatarUrl,alt:e.login??e.displayName,sx:{mr:2},"aria-hidden":"true",square:c(e)}),(0,r.jsx)(k.Z,{inline:!0,title:e.login??e.displayName??"",children:e.login??e.displayName})]})}try{C.displayName||(C.displayName="AuthorsDialog")}catch{}try{S.displayName||(S.displayName="AuthorRow")}catch{}var N=a(90836);function w({authors:e}){let t=y();return(0,r.jsx)(N.Z,{children:e.slice(0,5).map((e,a)=>(0,r.jsx)(o.O,{"data-testid":"commit-stack-avatar",src:e.avatarUrl,alt:e.login??e.displayName,"data-hovercard-url":(0,i.zP)({owner:e.login??""}),square:c(e),size:t.avatarSize},`${e.login}_${a}`))})}try{w.displayName||(w.displayName="CommitAuthorStack")}catch{}function Z({author:e,repo:t,sx:a={}}){let o=y();return e?(0,r.jsx)(n.Z,{sx:{display:"flex",flexDirection:"row",alignItems:"center",...a},"data-testid":"author-link",children:e.login?(0,r.jsx)(u,{author:e,renderTooltip:o.includeTooltip,children:(0,r.jsx)(s.Z,{muted:!0,href:(0,i.OI)({repo:t,author:e.login}),"aria-label":`commits by ${e.login}`,"data-hovercard-url":(0,i.zP)({owner:e.login}),sx:{fontWeight:o.fontWeight,whiteSpace:"nowrap",color:o.fontColor,"&:hover":{color:o.fontColor,textDecoration:"underline"}},children:e.login})}):(0,r.jsx)(l.Z,{sx:{fontWeight:o.fontWeight,whiteSpace:"nowrap",color:o.fontColor},children:e.displayName})}):null}try{Z.displayName||(Z.displayName="AuthorLink")}catch{}function I({author:e,repo:t}){return(0,r.jsx)(j,{author:e,repo:t})}function z({author:e,committer:t,repo:a}){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(w,{authors:[e,t]}),(0,r.jsx)(Z,{author:e,repo:a,sx:{pl:1}})]})}function _({authors:e,repo:t}){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(w,{authors:e}),e.map((a,o)=>(0,r.jsxs)(x.Fragment,{children:[(0,r.jsx)(Z,{author:a,repo:t,sx:{pl:1}}),o!==e.length-1&&(0,r.jsx)("span",{className:"pl-1",children:"and"})]},`${a.login}_${o}`))]})}function W({authors:e,repo:t}){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(w,{authors:e}),(0,r.jsx)(C,{authors:e,repo:t})]})}function A({authors:e,committer:t,committerAttribution:a,repo:o,children:i,includeVerbs:s=!0,authorSettings:l}){let c=1===e.length&&!a,d=1===e.length&&a,u=2===e.length&&!a,h=s?{pl:1}:{};return(0,r.jsx)(n.Z,{sx:{display:"flex",flexDirection:"row",flexWrap:["wrap","wrap","wrap","nowrap"],alignItems:"center"},children:(0,r.jsxs)(g,{authorSettings:l,children:[c&&(0,r.jsx)(I,{author:e[0],repo:o}),d&&(0,r.jsx)(z,{author:e[0],committer:t,repo:o}),u&&(0,r.jsx)(_,{authors:e,repo:o}),!c&&!d&&!u&&(0,r.jsx)(W,{authors:e,repo:o}),a?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{className:"pl-1",children:s?"authored and":"and"}),(0,r.jsx)(Z,{author:t,repo:o,sx:{pl:1}}),(0,r.jsx)(n.Z,{as:"span",sx:h,children:s&&"committed"})]}):(0,r.jsx)(n.Z,{as:"span",sx:h,children:s&&"committed"}),i]})})}try{I.displayName||(I.displayName="SingleAuthor")}catch{}try{z.displayName||(z.displayName="AuthorAndCommitter")}catch{}try{_.displayName||(_.displayName="TwoAuthors")}catch{}try{W.displayName||(W.displayName="MultipleAuthors")}catch{}try{A.displayName||(A.displayName="CommitAttribution")}catch{}},20756:(e,t,a)=>{a.d(t,{AF:()=>j,vC:()=>v,fQ:()=>N});var r=a(85893),o=a(85529),i=a(98833),n=a(97011),s=a(88216),l=a(65379),c=a(50919),d=a(67294),u=a(42483),h=a(74121),p=a(59148),x=a(79804),m=a(73290);function f({checkRun:e}){let{icon:t,iconColor:a}=function(e){switch(e){case"check":return{icon:o.CheckIcon,iconColor:"success.fg"};case"dot-fill":return{icon:o.DotFillIcon,iconColor:"attention.fg"};case"stop":return{icon:o.StopIcon,iconColor:"muted.fg"};case"issue-reopened":return{icon:o.IssueReopenedIcon,iconColor:"muted.fg"};case"clock":return{icon:o.ClockIcon,iconColor:"attention.fg"};case"square-fill":return{icon:o.SquareFillIcon,iconColor:"fg.default"};case"skip":return{icon:o.SkipIcon,iconColor:"muted.fg"};case"alert":return{icon:o.AlertIcon,iconColor:"danger.fg"};default:return{icon:o.XIcon,iconColor:"danger.fg"}}}(e.icon),s=(0,d.useId)(),c="in_progress"===e.state;return(0,r.jsxs)(u.Z,{"data-testid":"check-run-item",as:"li",sx:{display:"flex",borderBottomWidth:"1px",borderBottomStyle:"solid",borderBottomColor:"border.default",backgroundColor:"canvas.subtle",py:2,pr:3,pl:"12px",alignItems:"center"},children:[(0,r.jsxs)(u.Z,{sx:{alignSelf:"center",display:"flex"},children:[c?(0,r.jsx)(u.Z,{sx:{height:"16px",width:"16px",minWidth:"16px",alignSelf:"center",mx:"7px"},children:(0,r.jsxs)("svg",{fill:"none",viewBox:"0 0 16 16",className:"anim-rotate","aria-hidden":"true",role:"img",children:[(0,r.jsx)("path",{opacity:".5",d:"M8 15A7 7 0 108 1a7 7 0 000 14v0z",stroke:"#dbab0a",strokeWidth:"2"}),(0,r.jsx)("path",{d:"M15 8a7 7 0 01-7 7",stroke:"#dbab0a",strokeWidth:"2"}),(0,r.jsx)("path",{d:"M8 12a4 4 0 100-8 4 4 0 000 8z",fill:"#dbab0a"})]})}):(0,r.jsx)(i.Z,{icon:t,sx:{color:a,margin:"0px 7px",alignSelf:"center"}}),(0,r.jsx)(l.Z,{"aria-label":e.avatarDescription,direction:"e",id:s,children:(0,r.jsx)(m.Z,{href:e.avatarUrl,sx:{mr:2},"aria-labelledby":s,children:(0,r.jsx)(x.O,{square:!0,src:e.avatarLogo,sx:{backgroundColor:e.avatarBackgroundColor}})})})]}),(0,r.jsxs)(n.Z,{sx:{fontSize:"13px",color:"fg.muted"},children:[(0,r.jsxs)(n.Z,{sx:{fontWeight:"bold",color:"fg.default",mr:"2px"},children:[e.name," "]}),e.pending?(0,r.jsx)(n.Z,{sx:{fontStyle:"italic"},children:e.additionalContext}):e.additionalContext,e.description&&(0,r.jsxs)(n.Z,{children:[" ","- ",e.pending?(0,r.jsx)(n.Z,{sx:{fontStyle:"italic"},children:e.description}):e.description]})]}),(0,r.jsx)(m.Z,{href:e.targetUrl,sx:{pl:"12px",fontSize:"13px",marginLeft:"auto"},children:"Details"})]})}try{f.displayName||(f.displayName="CheckRunItem")}catch{}function g({checkRuns:e}){return(0,r.jsx)(u.Z,{as:"ul",sx:{display:"flex",flexDirection:"column",maxHeight:["230px","380px"],overflow:"auto"},children:e.map((e,t)=>(0,r.jsx)(f,{checkRun:e},t))})}try{g.displayName||(g.displayName="ChecksStatusBadgeFooter")}catch{}function y({checksHeaderState:e}){switch(e){case"SUCCEEDED":return(0,r.jsx)(n.Z,{sx:{fontWeight:"bold",fontSize:2},children:"All checks have passed"});case"FAILED":return(0,r.jsx)(n.Z,{sx:{color:"checks.donutError",fontWeight:"bold",fontSize:2},children:"All checks have failed"});case"PENDING":return(0,r.jsx)(n.Z,{sx:{color:"checks.donutPending",fontWeight:"bold",fontSize:2},children:"Some checks haven\u2019t completed yet"});default:return(0,r.jsx)(n.Z,{sx:{color:"checks.donutError",fontWeight:"bold",fontSize:2},children:"Some checks were not successful"})}}try{y.displayName||(y.displayName="HeaderState")}catch{}function j(e){let{combinedStatus:t,isOpen:a,onDismiss:o}=e,i=t?(0,r.jsx)(y,{checksHeaderState:t.checksHeaderState}):"Loading...";return a?(0,r.jsx)(p.V,{onClose:o,sx:{overflowY:"auto",backgroundColor:"canvas.default",boxShadow:"none",border:"1px solid",borderColor:"border.default",borderBottom:0},title:i,subtitle:t?t.checksStatusSummary:void 0,width:"xlarge",renderBody:()=>(0,r.jsx)(p.V.Body,{sx:{padding:0},children:t?(0,r.jsx)(g,{checkRuns:t.checkRuns}):(0,r.jsx)(u.Z,{sx:{display:"flex",justifyContent:"center",p:2},children:(0,r.jsx)(h.Z,{size:"medium"})})})}):null}try{j.displayName||(j.displayName="CheckStatusDialog")}catch{}let b={success:{circled:o.CheckCircleIcon,filled:o.CheckCircleFillIcon,default:o.CheckIcon,color:"checks.donutSuccess"},pending:{circled:o.CircleIcon,filled:o.DotFillIcon,default:o.DotFillIcon,color:"checks.donutPending"},error:{circled:o.XCircleIcon,filled:o.XCircleFillIcon,default:o.XIcon,color:"checks.donutError"}};function k({descriptionText:e,icon:t,iconColor:a}){return(0,r.jsxs)("span",{"data-testid":"checks-status-badge-icon-only",children:[(0,r.jsx)(i.Z,{icon:t,"aria-label":"See all checks",sx:{color:a}}),e&&(0,r.jsxs)(n.Z,{children:[" ",e]})]})}function v(e){let{statusRollup:t,combinedStatus:a,variant:o="default",disablePopover:i,buttonSx:n,size:u="medium",descriptionText:h="",onWillOpenPopup:p}=e,[x,m]=(0,d.useState)(!1),f=(0,d.useId)(),g=(0,d.useRef)(null),y=b[t],{icon:v,iconColor:C}={icon:y?.[o]||b.error[o],iconColor:y?.color||b.error.color};return i?(0,r.jsx)(k,{descriptionText:h,icon:v,iconColor:C}):(0,r.jsxs)(r.Fragment,{children:[h?(0,r.jsx)(s.r,{"data-testid":"checks-status-badge-button",leadingVisual:v,variant:"invisible",size:u,"aria-label":a?.checksStatusSummary??`Status checks: ${t}`,sx:{p:1,color:"fg.default",fontWeight:"normal",svg:{color:C},...n},ref:g,onClick:()=>{p?.(),m(!0)},children:h}):(0,r.jsx)(l.Z,{id:f,"aria-label":a?.checksStatusSummary??t,direction:"se",sx:{mr:2},children:(0,r.jsx)(c.h,{"data-testid":"checks-status-badge-icon",icon:v,variant:"invisible",size:u,"aria-labelledby":f,sx:{py:0,px:0,svg:{color:C},":hover:not([disabled])":{bg:"pageHeaderBg"},...n},ref:g,onClick:()=>{p?.(),m(!0)}})}),x&&(0,r.jsx)(j,{combinedStatus:a,isOpen:x,onDismiss:()=>{m(!1),setTimeout(()=>{g.current?.focus()},0)}})]})}try{k.displayName||(k.displayName="IconOnlyStatus")}catch{}try{v.displayName||(v.displayName="ChecksStatusBadge")}catch{}var C=a(22326),S=a(87623);function N(e,t){let[a,r]=(0,d.useState)(),[o,i]=(0,d.useState)(),n=(0,d.useCallback)(async()=>{if(o!==e&&(i(e),r(void 0),e)){let a=(0,C.S$)(t,e),o=await (0,S.v)(a);r(await o.json())}},[e,o,t]);return[a,n]}},91534:(e,t,a)=>{a.d(t,{Z:()=>r});let r=(e,t)=>{let a=new URL(e,window.location.origin),r=new URL(t,window.location.origin),o=r.href.includes("#");return o&&a.host===r.host&&a.pathname===r.pathname&&a.search===r.search}},85193:(e,t,a)=>{a.d(t,{l:()=>u,s:()=>d});var r=a(67294),o=a(89250),i=a(12599),n=a(79655),s=a(91534),l=a(40940),c=a(10394);let d=()=>{let{routes:e,history:t}=r.useContext(l.I),n=(0,o.s0)();return r.useCallback((r,o)=>{let l=(0,i.i3)(r).pathname,d=!(0,i.fp)(e,l);if(d){let e=t.createHref(r);(async()=>{let{softNavigate:t}=await Promise.all([a.e("vendors-node_modules_github_turbo_dist_turbo_es2017-esm_js"),a.e("ui_packages_soft-navigate_soft-navigate_ts")]).then(a.bind(a,12272));t(e)})()}else{(0,s.Z)(location.href,r.toString())||(0,c.LD)("react"),n(r,o);let{turbo:e,...t}=window.history.state;window.history.replaceState({...t,skipTurbo:!0},"",location.href)}},[t,n,e])},u=()=>{let[e]=(0,n.lr)(),t=d(),{pathname:a}=(0,o.TH)(),i=r.useCallback((r,o)=>{let i=(0,n.fW)("function"==typeof r?r(e):r);t({pathname:a,search:i.toString()},o)},[e,t,a]);return[e,i]}},79804:(e,t,a)=>{a.d(t,{O:()=>s});var r=a(85893),o=a(67294),i=a(26012),n=a(71207);let s=(0,o.forwardRef)(function({src:e,size:t=20,...a},s){let l=(0,o.useMemo)(()=>{let a=new URL(e,n.ssrSafeLocation.origin);return a.searchParams.has("size")||a.searchParams.has("s")||a.searchParams.set("size",String(2*Number(t))),a.toString()},[e,t]);return(0,r.jsx)(i.Z,{ref:s,src:l,size:t,"data-testid":"github-avatar",...a})});try{s.displayName||(s.displayName="GitHubAvatar")}catch{}},77461:(e,t,a)=>{a.d(t,{r:()=>c});var r=a(85893),o=a(67294),i=a(12599),n=a(79655),s=a(40940),l=a(71207);let c=o.forwardRef(({to:e,reloadDocument:t,...a},c)=>{let{routes:d}=o.useContext(s.I),u=(0,i.i3)(e,l.ssrSafeLocation.pathname).pathname;return t=t??!(0,i.fp)(d,u),(0,r.jsx)(n.rU,{to:e,...a,reloadDocument:t,ref:c})});c.displayName="Link"}}]);
//# sourceMappingURL=ui_packages_commit-attribution_index_ts-ui_packages_commit-checks-status_index_ts-ui_packages-ffbe33-5917302b9c7b.js.map