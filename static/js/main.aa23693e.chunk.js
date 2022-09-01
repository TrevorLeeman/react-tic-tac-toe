(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{24:function(t,n,e){"use strict";e.r(n);var r=e(1),i=e.n(r),a=e(13),o=e.n(a),c=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function s(t,n){navigator.serviceWorker.register(t).then((function(t){t.onupdatefound=function(){var e=t.installing;null!=e&&(e.onstatechange=function(){"installed"===e.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(t)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(t)))})}})).catch((function(t){console.error("Error during service worker registration:",t)}))}var d,l,b,p,u,g,x,j,f,m,h,O,w,v,y,k,C,S,R,W,z,B,L,N,E,M,T,A,X,P,H,G,U,F,I=e(8),J=e(4),K=e(2),D=e(3),V=e(0),$=D.b.div(d||(d=Object(K.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\twidth: fit-content;\n\tfont-size: 1.5rem;\n\tpadding: 0.75rem;\n\tborder-radius: 0.75rem;\n\tborder: 0.5rem solid transparent;\n\ttransition: all 200ms ease-out;\n\n\t","\n\t","\n"])),(function(t){return t.turnActive&&"border-color:#7051b8;"}),(function(t){return t.win&&"border-color: #109648;"})),_=D.b.h2(l||(l=Object(K.a)([""]))),q=D.b.div(b||(b=Object(K.a)(["\n\tfont-size: 3rem;\n"]))),Q=function(t){return t.target.innerText.length<=12&&"Enter"!==t.key||(t.preventDefault(),!1)},Y=function(t){var n=t.name,e=t.score,i=t.turnActive,a=t.win,o=Object(r.useState)(n),c=Object(J.a)(o,2),s=c[0],d=c[1];return Object(V.jsxs)($,{turnActive:i,win:a,children:[Object(V.jsx)(_,{onKeyPress:Q,onBlur:function(t){d(t.target.innerText)},contentEditable:"true",suppressContentEditableWarning:!0,children:s}),Object(V.jsx)(q,{children:e})]})},Z=D.b.div(p||(p=Object(K.a)(["\n\tdisplay: flex;\n\tjustify-content: space-around;\n\twidth: 100%;\n\tbackground-color: #f7f7f7;\n\tpadding: 1rem;\n\tborder-radius: 1rem 1rem 0 0;\n"]))),tt=function(t){var n=t.player1Wins,e=t.player2Wins,r=t.turnCounter,i=t.player1Win,a=t.player2Win;return Object(V.jsxs)(Z,{children:[Object(V.jsx)(Y,{name:"Player (X)",score:n,turnActive:r%2,win:i}),Object(V.jsx)(Y,{name:"Player (O)",score:e,turnActive:!(r%2),win:a})]})},nt=D.b.button(u||(u=Object(K.a)(["\n\tposition: relative;\n\ttop: 0;\n\tdisplay: inline-block;\n\tborder: 0;\n\tpadding: 1rem 2rem;\n\tborder-radius: 1rem;\n\tcursor: pointer;\n\n\tbackground-color: #7051b8;\n\tcolor: white;\n\tbox-shadow: 0 1rem 0 #553795;\n\n\tfont-size: 2rem;\n\tfont-family: 'Saira Condensed', sans-serif;\n\tfont-weight: 700;\n\tletter-spacing: 2pt;\n\twhite-space: nowrap;\n\tmargin-bottom: 1rem;\n\n\ttransition: all 0.2s;\n\n\t&:hover {\n\t\ttop: 0.1rem;\n\t\tbox-shadow: 0 0.9rem 0px #553795;\n\t\ttransition: all 0.2s;\n\t}\n\n\t&:active {\n\t\ttop: 1rem;\n\t\tbox-shadow: 0 2px 0px #553795;\n\t\ttransition: all 0.2s;\n\t}\n"]))),et=function(t){var n=t.children,e=t.className,r=t.clickHandler;return Object(V.jsx)(nt,{className:e,onClick:r,children:n})},rt=D.b.svg(g||(g=Object(K.a)(["\n\ttransition: 200ms ease-out;\n\twidth: 2rem;\n\theight: 2rem;\n\tcursor: pointer;\n\n\tpath {\n\t\tfill: white;\n\t}\n"]))),it=function(){return Object(V.jsx)(rt,{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false","data-prefix":"fas",role:"img",viewBox:"0 0 512 512",children:Object(V.jsx)("path",{d:"M499.5 332c0-5.66-3.112-11.13-8.203-14.07l-46.61-26.91C446.8 279.6 448 267.1 448 256s-1.242-23.65-3.34-35.02l46.61-26.91c5.092-2.941 8.203-8.411 8.203-14.07c0-14.1-41.98-99.04-63.86-99.04c-2.832 0-5.688 .7266-8.246 2.203l-46.72 26.98C362.9 94.98 342.4 83.1 320 75.16V21.28c0-7.523-5.162-14.28-12.53-15.82C290.8 1.977 273.7 0 256 0s-34.85 1.977-51.48 5.461C197.2 7.004 192 13.76 192 21.28v53.88C169.6 83.1 149.1 94.98 131.4 110.1L84.63 83.16C82.08 81.68 79.22 80.95 76.39 80.95c-19.72 0-63.86 81.95-63.86 99.04c0 5.66 3.112 11.13 8.203 14.07l46.61 26.91C65.24 232.4 64 244 64 256s1.242 23.65 3.34 35.02l-46.61 26.91c-5.092 2.941-8.203 8.411-8.203 14.07c0 14.1 41.98 99.04 63.86 99.04c2.832 0 5.688-.7266 8.246-2.203l46.72-26.98C149.1 417 169.6 428.9 192 436.8v53.88c0 7.523 5.162 14.28 12.53 15.82C221.2 510 238.3 512 255.1 512s34.85-1.977 51.48-5.461C314.8 504.1 320 498.2 320 490.7v-53.88c22.42-7.938 42.93-19.82 60.65-34.97l46.72 26.98c2.557 1.477 5.416 2.203 8.246 2.203C455.3 431 499.5 349.1 499.5 332zM256 336c-44.11 0-80-35.89-80-80S211.9 176 256 176s80 35.89 80 80S300.1 336 256 336z"})})},at=D.b.aside(x||(x=Object(K.a)(["\n\tgrid-area: controls;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\tbackground-color: #ffffff80;\n\tborder-radius: 1rem;\n\tbox-shadow: 0 12px 17px 2px rgba(0, 0, 0, 0.14),\n\t\t0 5px 22px 4px rgba(0, 0, 0, 0.12), 0 7px 8px -4px rgba(0, 0, 0, 0.2),\n\t\tinset 0 4px 5px 0 rgba(255, 255, 255, 0.14),\n\t\tinset 0 1px 10px 0 rgba(255, 255, 255, 0.12),\n\t\tinset 0 2px 4px -1px rgba(255, 255, 255, 0.2);\n\n\t@media (min-width: 1440px) {\n\t\talign-self: start;\n\t\tjustify-self: end;\n\t}\n"]))),ot=D.b.div(j||(j=Object(K.a)(["\n\tdisplay: flex;\n\tgap: 1rem;\n\talign-items: center;\n\tjustify-content: center;\n\tpadding: 1rem;\n"]))),ct=Object(D.b)(et)(f||(f=Object(K.a)(["\n\tmin-width: 18rem;\n\n\t@media (min-height: 800px) {\n\t\tpadding: 2rem 3rem;\n\t}\n"]))),st=Object(D.b)(et)(m||(m=Object(K.a)(["\n\tpadding: 0.5rem 1rem 0;\n\theight: fit-content;\n"]))),dt=function(t){var n=t.gameComplete,e=t.resetBoardState,r=t.showSettings,i=t.player1Wins,a=t.player2Wins,o=t.turnCounter,c=t.player1Win,s=t.player2Win;return Object(V.jsxs)(at,{children:[Object(V.jsx)(tt,{player1Wins:i,player2Wins:a,turnCounter:o,player1Win:c,player2Win:s}),Object(V.jsxs)(ot,{children:[Object(V.jsx)(ct,{clickHandler:e,gameComplete:n,children:n?"New Game":"Reset Game"}),Object(V.jsx)(st,{clickHandler:r,children:Object(V.jsx)(it,{})})]})]})},lt=D.b.div(h||(h=Object(K.a)(["\n\theight: 100%;\n\tposition: relative;\n"]))),bt=D.b.div(O||(O=Object(K.a)(["\n\tposition: absolute;\n\tleft: 50%;\n\ttop: 50%;\n\theight: 80%;\n\tborder-radius: 0.3rem;\n\tbackground-color: white;\n\tbox-shadow: 0 12px 17px 2px rgba(255, 255, 255, 0.14),\n\t\t0 5px 22px 4px rgba(255, 255, 255, 0.12),\n\t\t0 7px 8px -4px rgba(255, 255, 255, 0.2);\n\n\twidth: ",";\n"])),(function(t){return(3===t.gridRows?"1.5rem":5===t.gridRows&&"1.15rem")||7===t.gridRows&&"0.8rem"})),pt=Object(D.b)(bt)(w||(w=Object(K.a)(["\n\ttransform: translate(-50%, -50%) rotate(45deg);\n"]))),ut=Object(D.b)(bt)(v||(v=Object(K.a)(["\n\ttransform: translate(-50%, -50%) rotate(-45deg);\n"]))),gt=function(t){var n=t.className,e=t.gridRows;return Object(V.jsxs)(lt,{className:n,children:[Object(V.jsx)(pt,{gridRows:e}),Object(V.jsx)(ut,{gridRows:e})]})},xt=D.b.div(y||(y=Object(K.a)(["\n\theight: 100%;\n\tposition: relative;\n"]))),jt=D.b.div(k||(k=Object(K.a)(["\n\tposition: absolute;\n\tleft: 50%;\n\ttop: 50%;\n\theight: 80%;\n\twidth: 80%;\n\tborder: solid white 0.8rem;\n\tborder-width: ",";\n\tborder-radius: 80%;\n\ttransform: translate(-50%, -50%);\n\tbox-shadow: 0 12px 17px 2px rgba(255, 255, 255, 0.14),\n\t\t0 5px 22px 4px rgba(255, 255, 255, 0.12),\n\t\t0 7px 8px -4px rgba(255, 255, 255, 0.2);\n"])),(function(t){return(3===t.gridRows?"1.5rem":5===t.gridRows&&"1.1rem")||7===t.gridRows&&"0.8rem"})),ft=function(t){var n=t.className,e=t.gridRows;return Object(V.jsx)(xt,{className:n,children:Object(V.jsx)(jt,{gridRows:e})})},mt=D.b.div(C||(C=Object(K.a)(["\n\tposition: relative;\n\tbackground-color: #000000cc;\n\tborder-radius: ",";\n\n\tbox-shadow: inset 0 4px 5px 0 rgba(0, 0, 0, 0.14),\n\t\tinset 0 1px 10px 0 rgba(0, 0, 0, 0.12),\n\t\tinset 0 2px 4px -1px rgba(0, 0, 0, 0.2);\n"])),(function(t){return(3===t.gridRows?"1rem":5===t.gridRows&&"0.8rem")||7===t.gridRows&&"0.6rem"})),ht=D.b.div(S||(S=Object(K.a)(["\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\tbackground-color: transparent;\n\twidth: 75%;\n\theight: 75%;\n\ttransform: translate(-50%, -50%);\n\tz-index: 1;\n\tcursor: pointer;\n"]))),Ot=Object(D.b)(gt)(R||(R=Object(K.a)(["\n\topacity: 0.75;\n\n\tdiv {\n\t\tbox-shadow: unset;\n\t}\n"]))),wt=Object(D.b)(ft)(W||(W=Object(K.a)(["\n\topacity: 0.75;\n\n\tdiv {\n\t\tbox-shadow: unset;\n\t}\n"]))),vt=function(t){var n=t.row,e=t.column,i=t.turnCounter,a=t.occupied,o=t.output,c=t.gameComplete,s=t.setSelected,d=t.gridRows,l=Object(r.useState)(!1),b=Object(J.a)(l,2),p=b[0],u=b[1],g=Object(r.useState)("X"),x=Object(J.a)(g,2),j=x[0],f=x[1],m=Object(r.useCallback)((function(t){"click"!==t.type&&"Enter"!==t.code&&"Space"!==t.code||!1===a&&!1===c&&s(n,e,j)}),[j,e,c,a,n,s]),h=Object(r.useCallback)((function(t){"mouseenter"===t.type?u(!0):"mouseleave"===t.type&&u(!1)}),[]);return Object(r.useEffect)((function(){f(i%2?"X":"O")}),[i]),Object(V.jsxs)(mt,{gridRows:d,children:[Object(V.jsx)(ht,{onClick:m,onKeyPress:m,onMouseEnter:h,onMouseLeave:h,tabIndex:"0"}),"X"===o&&Object(V.jsx)(gt,{gridRows:d})||"O"===o&&Object(V.jsx)(ft,{gridRows:d})||p&&"X"===j&&!1===c&&Object(V.jsx)(Ot,{gridRows:d})||p&&"O"===j&&!1===c&&Object(V.jsx)(wt,{gridRows:d})]})},yt=D.b.div(z||(z=Object(K.a)(["\n\tgrid-area: grid;\n\taspect-ratio: 1;\n\twidth: clamp(300px, 100%, 650px);\n\n\tbackground-color: #ffffff80;\n\tpadding: 1.25rem;\n\tborder-radius: 1rem;\n\tbox-shadow: 0 12px 17px 2px rgba(0, 0, 0, 0.14),\n\t\t0 5px 22px 4px rgba(0, 0, 0, 0.12), 0 7px 8px -4px rgba(0, 0, 0, 0.2),\n\t\tinset 0 4px 5px 0 rgba(255, 255, 255, 0.14),\n\t\tinset 0 1px 10px 0 rgba(255, 255, 255, 0.12),\n\t\tinset 0 2px 4px -1px rgba(255, 255, 255, 0.2);\n\n\tdisplay: grid;\n\tgrid-template-rows: ",";\n\tgrid-template-columns: ",";\n\n\tgrid-gap: ",";\n\n\talign-self: start;\n\n\t@media (min-width: 1440px) {\n\t\tpadding: 2rem;\n\t\twidth: 70vh;\n\t}\n"])),(function(t){return"repeat(".concat(t.gridRows,", 1fr)")}),(function(t){return"repeat(".concat(t.gridColumns,", 1fr)")}),(function(t){return(3===t.gridRows?"1.2rem":5===t.gridRows&&"1rem")||7===t.gridRows&&"0.8rem"})),kt=function(t,n,e,r,i,a){for(var o=[],c=0;c<t;c++)for(var s=0;s<n;s++){var d=""!==e[c][s],l=d&&e[c][s];o.push(Object(V.jsx)(vt,{row:c,column:s,turnCounter:r,occupied:d,output:l,gameComplete:i,setSelected:a,gridRows:t},[c,s]))}return o},Ct=function(t){var n=t.gridRows,e=t.gridColumns,r=t.boardState,i=t.turnCounter,a=t.gameComplete,o=t.updateBoardState;return Object(V.jsx)(yt,{gridRows:n,gridColumns:e,children:kt(n,e,r,i,a,(function(t,n,e){return o(t,n,e)}))})},St=D.b.footer(B||(B=Object(K.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\n\tp {\n\t\tbackground-color: #000000cc;\n\t\tcolor: white;\n\t\tpadding: 0.25rem 1rem;\n\t\tborder-radius: 0.5rem 0.5rem 0 0;\n\t\tfont-size: 1.5rem;\n\n\t\ta {\n\t\t\ttext-decoration: underline;\n\t\t\tcolor: inherit;\n\n\t\t\t&:hover {\n\t\t\t\ttext-decoration: underline;\n\t\t\t}\n\t\t}\n\t}\n"]))),Rt=function(){return Object(V.jsx)(St,{children:Object(V.jsxs)("p",{children:["\xa9"," ",Object(V.jsx)("a",{href:"https://www.trevorleeman.com",title:"Trevor Leeman's portfolio website",target:"_blank",rel:"noreferrer",children:"Trevor Leeman"})," ","| 2021"]})})},Wt=D.b.div(L||(L=Object(K.a)(["\n\tbackground-color: #000000cc;\n\tbox-shadow: inset 0 4px 5px 0 rgba(0, 0, 0, 0.14),\n\t\tinset 0 1px 10px 0 rgba(0, 0, 0, 0.12),\n\t\tinset 0 2px 4px -1px rgba(0, 0, 0, 0.2);\n\n\tborder-radius: ",";\n"])),(function(t){return(3===t.rows?"0.6rem":5===t.rows&&"0.5rem")||7===t.rows&&"0.4rem"})),zt=function(t){var n=t.rows;return Object(V.jsx)(Wt,{rows:n})},Bt=D.b.div(N||(N=Object(K.a)(["\n\twidth: 200px;\n\theight: 200px;\n\tbackground-color: #7051b8e6;\n\tpadding: 1.25rem;\n\tborder-radius: 1rem;\n\tbox-shadow: inset 0 4px 5px 0 rgba(255, 255, 255, 0.14),\n\t\tinset 0 1px 10px 0 rgba(255, 255, 255, 0.12),\n\t\tinset 0 2px 4px -1px rgba(255, 255, 255, 0.2);\n\n\tdisplay: grid;\n\tgrid-template-rows: ",";\n\tgrid-template-columns: ",";\n\tgrid-gap: ",";\n\n\tscroll-snap-align: center;\n\n\t@media (min-width: 400px) {\n\t\twidth: 300px;\n\t\theight: 300px;\n\t}\n\n\t@media (min-width: 600px) {\n\t\tpadding: 0.8rem;\n\t}\n"])),(function(t){return"repeat(".concat(t.rows,", 1fr)")}),(function(t){return"repeat(".concat(t.columns,", 1fr)")}),(function(t){return(3===t.rows?"0.8rem":5===t.rows&&"0.6rem")||7===t.rows&&"0.5rem"})),Lt=function(t,n){for(var e=[],r=0;r<t;r++)for(var i=0;i<n;i++)e.push(Object(V.jsx)(zt,{rows:t},[r,i]));return e},Nt=function(t){var n=t.rows,e=t.columns;return Object(V.jsx)(Bt,{className:"styledGrid",rows:n,columns:e,children:Lt(n,e)})},Et=D.b.form(E||(E=Object(K.a)(["\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr 1fr;\n\tpadding: 1rem 1rem 2rem;\n\tgap: 2rem;\n\toverflow: auto;\n\twidth: 100%;\n\tscroll-snap-type: x mandatory;\n\tuser-select: none;\n\n\t@media (min-width: 400px) {\n\t\tpadding: 2rem 2rem 3rem;\n\t}\n\n\t@media (min-width: 800px) and (max-width: 1440px) {\n\t\tgrid-template-columns: 1fr;\n\t}\n"]))),Mt=D.b.div(M||(M=Object(K.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\tcursor: pointer;\n\ttransition: 0.1s ease-out;\n\n\t@media (min-width: 400px) {\n\t\t&:hover {\n\t\t\ttransform: scale(1.1);\n\t\t\ttransition: 0.1s ease-in;\n\n\t\t\t.styledGrid {\n\t\t\t\tbox-shadow: 0 12px 17px 2px rgba(0, 0, 0, 0.14),\n\t\t\t\t\t0 5px 22px 4px rgba(0, 0, 0, 0.12), 0 7px 8px -4px rgba(0, 0, 0, 0.2),\n\t\t\t\t\tinset 0 4px 5px 0 rgba(255, 255, 255, 0.14),\n\t\t\t\t\tinset 0 1px 10px 0 rgba(255, 255, 255, 0.12),\n\t\t\t\t\tinset 0 2px 4px -1px rgba(255, 255, 255, 0.2);\n\t\t\t}\n\t\t}\n\t}\n"]))),Tt=function(t){var n=t.setBoardSize,e=t.setNumToWin,r=t.closeModal,i=t.globalRows,a=function(t,i,a){n(t,i),e(a),r()};return Object(V.jsxs)(Et,{children:[Object(V.jsxs)(Mt,{onClick:function(){return a(3,3,3)},children:[Object(V.jsx)("h3",{children:"3x3"}),Object(V.jsx)("p",{children:"Win: 3 in a row"}),Object(V.jsx)(Nt,{rows:3,columns:3,globalRows:i})]}),Object(V.jsxs)(Mt,{onClick:function(){return a(5,5,4)},children:[Object(V.jsx)("h3",{children:"5x5"}),Object(V.jsx)("p",{children:"Win: 4 in a row"}),Object(V.jsx)(Nt,{rows:5,columns:5,globalRows:i})]}),Object(V.jsxs)(Mt,{onClick:function(){return a(7,7,5)},children:[Object(V.jsx)("h3",{children:"7x7"}),Object(V.jsx)("p",{children:"Win: 5 in a row"}),Object(V.jsx)(Nt,{rows:7,columns:7,globalRows:i})]})]})},At=D.b.svg(T||(T=Object(K.a)(["\n\ttransition: 200ms ease-out;\n\twidth: 3rem;\n\theight: 3rem;\n\tcursor: pointer;\n\n\tpath {\n\t\tstroke: grey;\n\t\tstroke-width: 2;\n\t}\n\n\t&:hover {\n\t\tpath {\n\t\t\tstroke: #7051b8;\n\t\t}\n\t}\n"]))),Xt=function(t){var n=t.clickHandler;return Object(V.jsxs)(At,{onClick:n,width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",children:[Object(V.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 6.75L6.75 17.25"}),Object(V.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 6.75L17.25 17.25"})]})},Pt=D.b.div(A||(A=Object(K.a)(["\n\tz-index: 998;\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbackground-color: rgba(0, 0, 0, 0.5);\n"]))),Ht=D.b.div(X||(X=Object(K.a)(["\n\tz-index: 999;\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n"]))),Gt=D.b.div(P||(P=Object(K.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 1rem;\n\tborder-radius: 1rem;\n\tmax-width: 90vw;\n\tbackground-color: #f7f7f7;\n\toverflow: auto;\n\tfont-size: 2rem;\n\tmax-height: 70vh;\n\n\tbox-shadow: 0 12px 17px 2px rgba(0, 0, 0, 0.14),\n\t\t0 5px 22px 4px rgba(0, 0, 0, 0.12), 0 7px 8px -4px rgba(0, 0, 0, 0.2),\n\t\tinset 0 4px 5px 0 rgba(255, 255, 255, 0.14),\n\t\tinset 0 1px 10px 0 rgba(255, 255, 255, 0.12),\n\t\tinset 0 2px 4px -1px rgba(255, 255, 255, 0.2);\n\n\t@media (min-width: 1440px) {\n\t\tpadding: 2rem;\n\t}\n"]))),Ut=D.b.div(H||(H=Object(K.a)(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tpadding-left: 1rem;\n\n\t@media (min-width: 400px) {\n\t\tpadding-left: 2rem;\n\t}\n"]))),Ft=function(t){var n=t.closeSettings,e=t.setBoardSize,r=t.setConsecutiveToWin;return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(Ht,{children:Object(V.jsxs)(Gt,{children:[Object(V.jsxs)(Ut,{children:[Object(V.jsx)("h2",{children:"Select Mode"}),Object(V.jsx)(Xt,{clickHandler:n})]}),Object(V.jsx)(Tt,{setBoardSize:e,setNumToWin:r,closeModal:n})]})}),Object(V.jsx)(Pt,{onClick:n})]})},It=e(5),Jt=function(t,n){for(var e=[],r=0;r<t;r++){e[r]=[];for(var i=0;i<n;i++)e[r][i]=""}return e},Kt=function(t,n){for(var e=[],r=0;r<t+n-1;r++)e.push([]);return e},Dt=function(t,n){var e,r=!1,i=null,a=Object(It.a)(t);try{for(a.s();!(e=a.n()).done;){var o,c=e.value,s=0,d="",l=Object(It.a)(c);try{for(l.s();!(o=l.n()).done;){var b=o.value;if(b===d&&""!==b){if(++s===n){r=!0,i=d;break}}else s=1,d=b}}catch(p){l.e(p)}finally{l.f()}}}catch(p){a.e(p)}finally{a.f()}return[r,i]},Vt=Object(D.a)(G||(G=Object(K.a)(["\n  *{\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n\n  html{\n    font-family: 'Saira Condensed', sans-serif;\n\n    font-size: 0.6em;\n\n    @media (min-width: 420px) {\n      font-size: 0.8em;\n    }\n\n    @media (min-width: 600px) {\n      font-size: 1em;\n    }\n  }\n"]))),$t=D.b.div(U||(U=Object(K.a)(["\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tmin-width: 300px;\n\toverflow: auto;\n\tdisplay: flex;\n\tflex-direction: column;\n\n\tbackground-image: linear-gradient(\n\t\t\t201deg,\n\t\t\trgba(148, 148, 148, 0.07) 0%,\n\t\t\trgba(148, 148, 148, 0.07) 50%,\n\t\t\trgba(83, 83, 83, 0.07) 50%,\n\t\t\trgba(83, 83, 83, 0.07) 100%\n\t\t),\n\t\tlinear-gradient(\n\t\t\t192deg,\n\t\t\trgba(176, 176, 176, 0.08) 0%,\n\t\t\trgba(176, 176, 176, 0.08) 50%,\n\t\t\trgba(180, 180, 180, 0.08) 50%,\n\t\t\trgba(180, 180, 180, 0.08) 100%\n\t\t),\n\t\tlinear-gradient(\n\t\t\t48deg,\n\t\t\trgba(185, 185, 185, 0.1) 0%,\n\t\t\trgba(185, 185, 185, 0.1) 50%,\n\t\t\trgba(243, 243, 243, 0.1) 50%,\n\t\t\trgba(243, 243, 243, 0.1) 100%\n\t\t),\n\t\tlinear-gradient(\n\t\t\t65deg,\n\t\t\trgba(172, 172, 172, 0.09) 0%,\n\t\t\trgba(172, 172, 172, 0.09) 50%,\n\t\t\trgba(209, 209, 209, 0.09) 50%,\n\t\t\trgba(209, 209, 209, 0.09) 100%\n\t\t),\n\t\tlinear-gradient(\n\t\t\t4deg,\n\t\t\trgba(224, 224, 224, 0.03) 0%,\n\t\t\trgba(224, 224, 224, 0.03) 50%,\n\t\t\trgba(49, 49, 49, 0.03) 50%,\n\t\t\trgba(49, 49, 49, 0.03) 100%\n\t\t),\n\t\tlinear-gradient(\n\t\t\t228deg,\n\t\t\trgba(152, 152, 152, 0.03) 0%,\n\t\t\trgba(152, 152, 152, 0.03) 50%,\n\t\t\trgba(130, 130, 130, 0.03) 50%,\n\t\t\trgba(130, 130, 130, 0.03) 100%\n\t\t),\n\t\tlinear-gradient(\n\t\t\t163deg,\n\t\t\trgba(170, 170, 170, 0.08) 0%,\n\t\t\trgba(170, 170, 170, 0.08) 50%,\n\t\t\trgba(232, 232, 232, 0.08) 50%,\n\t\t\trgba(232, 232, 232, 0.08) 100%\n\t\t),\n\t\tlinear-gradient(\n\t\t\t152deg,\n\t\t\trgba(12, 12, 12, 0.05) 0%,\n\t\t\trgba(12, 12, 12, 0.05) 50%,\n\t\t\trgba(161, 161, 161, 0.05) 50%,\n\t\t\trgba(161, 161, 161, 0.05) 100%\n\t\t),\n\t\tlinear-gradient(\n\t\t\t302deg,\n\t\t\trgba(48, 48, 48, 0.1) 0%,\n\t\t\trgba(48, 48, 48, 0.1) 50%,\n\t\t\trgba(195, 195, 195, 0.1) 50%,\n\t\t\trgba(195, 195, 195, 0.1) 100%\n\t\t),\n\t\tlinear-gradient(90deg, rgb(144, 14, 253), rgb(74, 115, 255));\n"]))),_t=D.b.div(F||(F=Object(K.a)(["\n\tdisplay: grid;\n\tgrid-template-rows: auto 1fr;\n\tgrid-template-columns: 1fr;\n\tgrid-template-areas:\n\t\t'controls'\n\t\t'grid';\n\tgap: 2rem;\n\tplace-items: center;\n\tpadding: 2rem 1rem;\n\tflex-grow: 1;\n\n\t@media (min-width: 400px) {\n\t\tpadding: 2rem;\n\t}\n\n\t@media (min-width: 1440px) {\n\t\tgrid-template-rows: 1fr;\n\t\tgrid-template-columns: 1fr 1fr 1fr;\n\t\tgrid-template-areas: 'controls grid .';\n\t}\n"]))),qt=function(){var t=Object(r.useState)(3),n=Object(J.a)(t,2),e=n[0],i=n[1],a=Object(r.useState)(3),o=Object(J.a)(a,2),c=o[0],s=o[1],d=Object(r.useState)(3),l=Object(J.a)(d,2),b=l[0],p=l[1],u=Object(r.useState)(Jt(e,c)),g=Object(J.a)(u,2),x=g[0],j=g[1],f=Object(r.useState)(1),m=Object(J.a)(f,2),h=m[0],O=m[1],w=Object(r.useState)(h),v=Object(J.a)(w,2),y=v[0],k=v[1],C=Object(r.useState)(!1),S=Object(J.a)(C,2),R=S[0],W=S[1],z=Object(r.useState)(!1),B=Object(J.a)(z,2),L=B[0],N=B[1],E=Object(r.useState)(!1),M=Object(J.a)(E,2),T=M[0],A=M[1],X=Object(r.useState)(!1),P=Object(J.a)(X,2),H=P[0],G=P[1],U=Object(r.useState)(0),F=Object(J.a)(U,2),K=F[0],D=F[1],$=Object(r.useState)(0),_=Object(J.a)($,2),q=_[0],Q=_[1],Y=Object(r.useCallback)((function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c;j(Jt(n,r)),W(!1),k(h+1),O((function(t){return t+1})),A(!1),G(!1)}),[c,h,R,e]),Z=Object(r.useCallback)((function(t,n,e){j((function(r){var i=Object(I.a)(r);return i[t][n]=e,i})),k((function(t){return t+1}))}),[]),tt=Object(r.useCallback)((function(){return N(!L)}),[L]),nt=Object(r.useCallback)((function(t,n){i(t),s(n),Y(null,t,n)}),[Y]);return Object(r.useEffect)((function(){var t=Dt(x,b),n=Object(J.a)(t,2),r=n[0],i=n[1],a=function(t,n,e,r){var i,a=Jt(n,e),o=Object(It.a)(t.entries());try{for(o.s();!(i=o.n()).done;){var c,s=Object(J.a)(i.value,2),d=s[0],l=s[1],b=Object(It.a)(l.entries());try{for(b.s();!(c=b.n()).done;){var p=Object(J.a)(c.value,2),u=p[0],g=p[1];a[u][d]=g}}catch(x){b.e(x)}finally{b.f()}}}catch(x){o.e(x)}finally{o.f()}return Dt(a,r)}(x,c,e,b),o=Object(J.a)(a,2),s=o[0],d=o[1],l=function(t,n,e,r){var i,a=Kt(n,e),o=Kt(n,e),c=Object(It.a)(t.entries());try{for(c.s();!(i=c.n()).done;){var s,d=Object(J.a)(i.value,2),l=d[0],b=d[1],p=Object(It.a)(b.entries());try{for(p.s();!(s=p.n()).done;){var u=Object(J.a)(s.value,2),g=u[0],x=u[1];a[l+g].push(x),o[l-g+n-1].push(x)}}catch(f){p.e(f)}finally{p.f()}}}catch(f){c.e(f)}finally{c.f()}var j=[].concat(Object(I.a)(a),Object(I.a)(o)).filter((function(t){return t.length>=r}));return Dt(j,r)}(x,c,e,b),p=Object(J.a)(l,2),u=p[0],g=p[1];(r||s||u||y-h===e*c)&&(W(!0),k((function(t){return t+1})),"X"===i||"X"===d||"X"===g?(A(!0),D((function(t){return t+1}))):"O"!==i&&"O"!==d&&"O"!==g||(G(!0),Q((function(t){return t+1}))))}),[x]),Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(Vt,{}),Object(V.jsxs)($t,{children:[Object(V.jsxs)(_t,{children:[Object(V.jsx)(dt,{gameComplete:R,resetBoardState:Y,showSettings:tt,player1Wins:K,player2Wins:q,turnCounter:y,player1Win:T,player2Win:H}),Object(V.jsx)(Ct,{gridRows:e,gridColumns:c,boardState:x,turnCounter:y,gameComplete:R,updateBoardState:Z})]}),Object(V.jsx)(Rt,{}),L&&Object(V.jsx)(Ft,{closeSettings:tt,setBoardSize:nt,setConsecutiveToWin:p})]})]})};o.a.render(Object(V.jsx)(i.a.StrictMode,{children:Object(V.jsx)(qt,{})}),document.getElementById("root")),function(t){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");c?(!function(t,n){fetch(t,{headers:{"Service-Worker":"script"}}).then((function(e){var r=e.headers.get("content-type");404===e.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(t){t.unregister().then((function(){window.location.reload()}))})):s(t,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,t),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):s(n,t)}))}}()}},[[24,1,2]]]);
//# sourceMappingURL=main.aa23693e.chunk.js.map