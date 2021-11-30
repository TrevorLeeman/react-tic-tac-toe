(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{24:function(t,n,e){"use strict";e.r(n);var r,i,a,o,c,s,d,b,l,p,x,u,g,j,m,h,f,O,w,v,y,k,C,S,R,z,W,B,L,T,M,N,E,X,A,H,G,P,I,F,J=e(3),K=e.n(J),D=e(13),V=e.n(D),q=e(8),Q=e(4),U=e(1),Y=e(2),Z=Y.b.svg(r||(r=Object(U.a)(["\n\ttransition: all 0.5s ease;\n\tborder-radius: 50%;\n\n\t&:hover {\n\t\tbox-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),\n\t\t\t0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);\n\t}\n"]))),$=e(0),_=Object(Y.b)(Z)(i||(i=Object(U.a)(["\n\t&:hover {\n\t\tfill: #2867b2;\n\t}\n"]))),tt=function(){return Object($.jsx)(_,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:Object($.jsx)("path",{d:"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"})})},nt=Object(Y.b)(Z)(a||(a=Object(U.a)(["\n\t&:hover {\n\t\tfill: #6cc644;\n\t}\n"]))),et=function(){return Object($.jsx)(nt,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:Object($.jsx)("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})},rt=Y.b.footer(o||(o=Object(U.a)(["\n\tul {\n\t\tdisplay: flex;\n\t\tgap: 1rem;\n\t\tlist-style: none;\n\n\t\tli {\n\t\t\twidth: 4rem;\n\t\t\twidth: 4rem;\n\t\t\ttransition: all 0.5s ease;\n\n\t\t\t&:hover {\n\t\t\t\ttransform: scale(1.1);\n\t\t\t}\n\n\t\t\tsvg {\n\t\t\t\twidth: 100%;\n\t\t\t}\n\n\t\t\t@media (min-width: 800px) and (min-height: 800px) {\n\t\t\t\twidth: 5rem;\n\t\t\t\twidth: 5rem;\n\t\t\t}\n\t\t}\n\t}\n"]))),it=function(t){var n=t.className;return Object($.jsx)(rt,{className:n,children:Object($.jsxs)("ul",{children:[Object($.jsx)("li",{children:Object($.jsx)("a",{href:"https://github.com/TrevorLeeman",title:"Trevor Leeman on GitHub",children:Object($.jsx)(et,{})})}),Object($.jsx)("li",{children:Object($.jsx)("a",{href:"https://www.linkedin.com/in/trevor-leeman/",title:"Trevor Leeman on LinkedIn",children:Object($.jsx)(tt,{})})})]})})},at=Y.b.header(c||(c=Object(U.a)(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tflex-wrap: wrap;\n\tgap: 1rem;\n\twidth: 100%;\n\tpadding: 2rem;\n\tbackground-color: #f7f7f7;\n\tbox-shadow: 0 12px 17px 2px rgba(0, 0, 0, 0.14),\n\t\t0 5px 22px 4px rgba(0, 0, 0, 0.12), 0 7px 8px -4px rgba(0, 0, 0, 0.2);\n\n\t@media (min-width: 420px) {\n\t\tpadding: 1rem;\n\t\tmin-height: unset;\n\t}\n"]))),ot=Y.b.h1(s||(s=Object(U.a)(["\n\tvertical-align: middle;\n\tfont-size: 3rem;\n\tfont-family: 'Anton', sans-serif;\n\tfont-weight: 700;\n\tletter-spacing: 2pt;\n"]))),ct=function(t){var n=t.title;return Object($.jsxs)(at,{children:[Object($.jsx)(ot,{children:n}),Object($.jsx)(it,{})]})},st=Y.b.div(d||(d=Object(U.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\twidth: fit-content;\n\tfont-size: 1.5rem;\n\tpadding: 0.75rem;\n\tborder-radius: 0.75rem;\n\tborder: 0.5rem solid transparent;\n\ttransition: all 200ms ease-out;\n\n\t","\n\t","\n"])),(function(t){return t.turnActive&&"border-color:#7051b8;"}),(function(t){return t.win&&"border-color: #109648;"})),dt=Y.b.h2(b||(b=Object(U.a)([""]))),bt=Y.b.div(l||(l=Object(U.a)(["\n\tfont-size: 3rem;\n"]))),lt=function(t){return t.target.innerText.length<=12&&"Enter"!==t.key||(t.preventDefault(),!1)},pt=function(t){var n=t.name,e=t.score,r=t.turnActive,i=t.win,a=Object(J.useState)(n),o=Object(Q.a)(a,2),c=o[0],s=o[1];return Object($.jsxs)(st,{turnActive:r,win:i,children:[Object($.jsx)(dt,{onKeyPress:lt,onBlur:function(t){s(t.target.innerText)},contentEditable:"true",suppressContentEditableWarning:!0,children:c}),Object($.jsx)(bt,{children:e})]})},xt=Y.b.div(p||(p=Object(U.a)(["\n\tdisplay: flex;\n\tjustify-content: space-around;\n\twidth: 100%;\n\tbackground-color: #f7f7f7;\n\tpadding: 1rem;\n\tborder-radius: 1rem 1rem 0 0;\n"]))),ut=function(t){var n=t.player1Wins,e=t.player2Wins,r=t.turnCounter,i=t.player1Win,a=t.player2Win;return Object($.jsxs)(xt,{children:[Object($.jsx)(pt,{name:"Player (X)",score:n,turnActive:r%2,win:i}),Object($.jsx)(pt,{name:"Player (O)",score:e,turnActive:!(r%2),win:a})]})},gt=Y.b.button(x||(x=Object(U.a)(["\n\tposition: relative;\n\ttop: 0;\n\tdisplay: inline-block;\n\tborder: 0;\n\tpadding: 1rem 2rem;\n\tborder-radius: 1rem;\n\tcursor: pointer;\n\n\tbackground-color: #7051b8;\n\tcolor: white;\n\tbox-shadow: 0 1rem 0 #553795;\n\n\tfont-size: 2rem;\n\tfont-family: 'Saira Condensed', sans-serif;\n\tfont-weight: 700;\n\tletter-spacing: 2pt;\n\twhite-space: nowrap;\n\tmargin-bottom: 1rem;\n\n\ttransition: all 0.2s;\n\n\t&:hover {\n\t\ttop: 0.1rem;\n\t\tbox-shadow: 0 0.9rem 0px #553795;\n\t\ttransition: all 0.2s;\n\t}\n\n\t&:active {\n\t\ttop: 1rem;\n\t\tbox-shadow: 0 2px 0px #553795;\n\t\ttransition: all 0.2s;\n\t}\n"]))),jt=function(t){var n=t.children,e=t.className,r=t.clickHandler;return Object($.jsx)(gt,{className:e,onClick:r,children:n})},mt=Y.b.svg(u||(u=Object(U.a)(["\n\ttransition: 200ms ease-out;\n\twidth: 2rem;\n\theight: 2rem;\n\tcursor: pointer;\n\n\tpath {\n\t\tfill: white;\n\t}\n"]))),ht=function(){return Object($.jsx)(mt,{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false","data-prefix":"fas",role:"img",viewBox:"0 0 512 512",children:Object($.jsx)("path",{d:"M499.5 332c0-5.66-3.112-11.13-8.203-14.07l-46.61-26.91C446.8 279.6 448 267.1 448 256s-1.242-23.65-3.34-35.02l46.61-26.91c5.092-2.941 8.203-8.411 8.203-14.07c0-14.1-41.98-99.04-63.86-99.04c-2.832 0-5.688 .7266-8.246 2.203l-46.72 26.98C362.9 94.98 342.4 83.1 320 75.16V21.28c0-7.523-5.162-14.28-12.53-15.82C290.8 1.977 273.7 0 256 0s-34.85 1.977-51.48 5.461C197.2 7.004 192 13.76 192 21.28v53.88C169.6 83.1 149.1 94.98 131.4 110.1L84.63 83.16C82.08 81.68 79.22 80.95 76.39 80.95c-19.72 0-63.86 81.95-63.86 99.04c0 5.66 3.112 11.13 8.203 14.07l46.61 26.91C65.24 232.4 64 244 64 256s1.242 23.65 3.34 35.02l-46.61 26.91c-5.092 2.941-8.203 8.411-8.203 14.07c0 14.1 41.98 99.04 63.86 99.04c2.832 0 5.688-.7266 8.246-2.203l46.72-26.98C149.1 417 169.6 428.9 192 436.8v53.88c0 7.523 5.162 14.28 12.53 15.82C221.2 510 238.3 512 255.1 512s34.85-1.977 51.48-5.461C314.8 504.1 320 498.2 320 490.7v-53.88c22.42-7.938 42.93-19.82 60.65-34.97l46.72 26.98c2.557 1.477 5.416 2.203 8.246 2.203C455.3 431 499.5 349.1 499.5 332zM256 336c-44.11 0-80-35.89-80-80S211.9 176 256 176s80 35.89 80 80S300.1 336 256 336z"})})},ft=Y.b.aside(g||(g=Object(U.a)(["\n\tgrid-area: controls;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\tbackground-color: #ffffff80;\n\tborder-radius: 1rem;\n\tbox-shadow: 0 12px 17px 2px rgba(0, 0, 0, 0.14),\n\t\t0 5px 22px 4px rgba(0, 0, 0, 0.12), 0 7px 8px -4px rgba(0, 0, 0, 0.2),\n\t\tinset 0 4px 5px 0 rgba(255, 255, 255, 0.14),\n\t\tinset 0 1px 10px 0 rgba(255, 255, 255, 0.12),\n\t\tinset 0 2px 4px -1px rgba(255, 255, 255, 0.2);\n\n\t@media (min-width: 1440px) {\n\t\talign-self: start;\n\t\tjustify-self: end;\n\t}\n"]))),Ot=Y.b.div(j||(j=Object(U.a)(["\n\tdisplay: flex;\n\tgap: 1rem;\n\talign-items: center;\n\tjustify-content: center;\n\tpadding: 1rem;\n"]))),wt=Object(Y.b)(jt)(m||(m=Object(U.a)(["\n\tmin-width: 18rem;\n\n\t@media (min-height: 800px) {\n\t\tpadding: 2rem 3rem;\n\t}\n"]))),vt=Object(Y.b)(jt)(h||(h=Object(U.a)(["\n\tpadding: 0.5rem 1rem 0;\n\theight: fit-content;\n"]))),yt=function(t){var n=t.gameComplete,e=t.resetBoardState,r=t.showSettings,i=t.player1Wins,a=t.player2Wins,o=t.turnCounter,c=t.player1Win,s=t.player2Win;return Object($.jsxs)(ft,{children:[Object($.jsx)(ut,{player1Wins:i,player2Wins:a,turnCounter:o,player1Win:c,player2Win:s}),Object($.jsxs)(Ot,{children:[Object($.jsx)(wt,{clickHandler:e,gameComplete:n,children:n?"New Game":"Reset Game"}),Object($.jsx)(vt,{clickHandler:r,children:Object($.jsx)(ht,{})})]})]})},kt=Y.b.div(f||(f=Object(U.a)(["\n\theight: 100%;\n\tposition: relative;\n"]))),Ct=Y.b.div(O||(O=Object(U.a)(["\n\tposition: absolute;\n\tleft: 50%;\n\ttop: 50%;\n\theight: 80%;\n\tborder-radius: 0.3rem;\n\tbackground-color: white;\n\tbox-shadow: 0 12px 17px 2px rgba(255, 255, 255, 0.14),\n\t\t0 5px 22px 4px rgba(255, 255, 255, 0.12),\n\t\t0 7px 8px -4px rgba(255, 255, 255, 0.2);\n\n\twidth: ",";\n"])),(function(t){return(3===t.gridRows?"1.5rem":5===t.gridRows&&"1.15rem")||7===t.gridRows&&"0.8rem"})),St=Object(Y.b)(Ct)(w||(w=Object(U.a)(["\n\ttransform: translate(-50%, -50%) rotate(45deg);\n"]))),Rt=Object(Y.b)(Ct)(v||(v=Object(U.a)(["\n\ttransform: translate(-50%, -50%) rotate(-45deg);\n"]))),zt=function(t){var n=t.className,e=t.gridRows;return Object($.jsxs)(kt,{className:n,children:[Object($.jsx)(St,{gridRows:e}),Object($.jsx)(Rt,{gridRows:e})]})},Wt=Y.b.div(y||(y=Object(U.a)(["\n\theight: 100%;\n\tposition: relative;\n"]))),Bt=Y.b.div(k||(k=Object(U.a)(["\n\tposition: absolute;\n\tleft: 50%;\n\ttop: 50%;\n\theight: 80%;\n\twidth: 80%;\n\tborder: solid white 0.8rem;\n\tborder-width: ",";\n\tborder-radius: 80%;\n\ttransform: translate(-50%, -50%);\n\tbox-shadow: 0 12px 17px 2px rgba(255, 255, 255, 0.14),\n\t\t0 5px 22px 4px rgba(255, 255, 255, 0.12),\n\t\t0 7px 8px -4px rgba(255, 255, 255, 0.2);\n"])),(function(t){return(3===t.gridRows?"1.5rem":5===t.gridRows&&"1.1rem")||7===t.gridRows&&"0.8rem"})),Lt=function(t){var n=t.className,e=t.gridRows;return Object($.jsx)(Wt,{className:n,children:Object($.jsx)(Bt,{gridRows:e})})},Tt=Y.b.div(C||(C=Object(U.a)(["\n\tposition: relative;\n\tbackground-color: #000000cc;\n\tborder-radius: ",";\n\n\tbox-shadow: inset 0 4px 5px 0 rgba(0, 0, 0, 0.14),\n\t\tinset 0 1px 10px 0 rgba(0, 0, 0, 0.12),\n\t\tinset 0 2px 4px -1px rgba(0, 0, 0, 0.2);\n"])),(function(t){return(3===t.gridRows?"1rem":5===t.gridRows&&"0.8rem")||7===t.gridRows&&"0.6rem"})),Mt=Y.b.div(S||(S=Object(U.a)(["\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\tbackground-color: transparent;\n\twidth: 75%;\n\theight: 75%;\n\ttransform: translate(-50%, -50%);\n\tz-index: 1;\n\tcursor: pointer;\n"]))),Nt=Object(Y.b)(zt)(R||(R=Object(U.a)(["\n\topacity: 0.75;\n\n\tdiv {\n\t\tbox-shadow: unset;\n\t}\n"]))),Et=Object(Y.b)(Lt)(z||(z=Object(U.a)(["\n\topacity: 0.75;\n\n\tdiv {\n\t\tbox-shadow: unset;\n\t}\n"]))),Xt=function(t){var n=t.row,e=t.column,r=t.turnCounter,i=t.occupied,a=t.output,o=t.gameComplete,c=t.setSelected,s=t.gridRows,d=Object(J.useState)(!1),b=Object(Q.a)(d,2),l=b[0],p=b[1],x=Object(J.useState)("X"),u=Object(Q.a)(x,2),g=u[0],j=u[1],m=Object(J.useCallback)((function(t){"click"!==t.type&&"Enter"!==t.code&&"Space"!==t.code||!1===i&&!1===o&&c(n,e,g)}),[g,e,o,i,n,c]),h=Object(J.useCallback)((function(t){"mouseenter"===t.type?p(!0):"mouseleave"===t.type&&p(!1)}),[]);return Object(J.useEffect)((function(){j(r%2?"X":"O")}),[r]),Object($.jsxs)(Tt,{gridRows:s,children:[Object($.jsx)(Mt,{onClick:m,onKeyPress:m,onMouseEnter:h,onMouseLeave:h,tabIndex:"0"}),"X"===a&&Object($.jsx)(zt,{gridRows:s})||"O"===a&&Object($.jsx)(Lt,{gridRows:s})||l&&"X"===g&&!1===o&&Object($.jsx)(Nt,{gridRows:s})||l&&"O"===g&&!1===o&&Object($.jsx)(Et,{gridRows:s})]})},At=Y.b.div(W||(W=Object(U.a)(["\n\tgrid-area: grid;\n\n\tmin-width: 300px;\n\tmin-height: 300px;\n\tmax-width: 70vh;\n\tmax-height: 70vh;\n\n\tbackground-color: #ffffff80;\n\tpadding: 1.25rem;\n\tborder-radius: 1rem;\n\tbox-shadow: 0 12px 17px 2px rgba(0, 0, 0, 0.14),\n\t\t0 5px 22px 4px rgba(0, 0, 0, 0.12), 0 7px 8px -4px rgba(0, 0, 0, 0.2),\n\t\tinset 0 4px 5px 0 rgba(255, 255, 255, 0.14),\n\t\tinset 0 1px 10px 0 rgba(255, 255, 255, 0.12),\n\t\tinset 0 2px 4px -1px rgba(255, 255, 255, 0.2);\n\n\tdisplay: grid;\n\tgrid-template-rows: ",";\n\tgrid-template-columns: ",";\n\n\tgrid-gap: ",";\n\n\talign-self: start;\n\n\t@media (min-width: 300px) {\n\t\twidth: 90vw;\n\t\theight: 90vw;\n\t}\n\n\t@media (min-width: 800px) and (min-height: 800px) {\n\t\tpadding: 2rem;\n\t\twidth: 80vw;\n\t\theight: 80vw;\n\t}\n"])),(function(t){return"repeat(".concat(t.gridRows,", 1fr)")}),(function(t){return"repeat(".concat(t.gridColumns,", 1fr)")}),(function(t){return(3===t.gridRows?"1.2rem":5===t.gridRows&&"1rem")||7===t.gridRows&&"0.8rem"})),Ht=function(t,n,e,r,i,a){for(var o=[],c=0;c<t;c++)for(var s=0;s<n;s++){var d=""!==e[c][s],b=d&&e[c][s];o.push(Object($.jsx)(Xt,{row:c,column:s,turnCounter:r,occupied:d,output:b,gameComplete:i,setSelected:a,gridRows:t},[c,s]))}return o},Gt=function(t){var n=t.gridRows,e=t.gridColumns,r=t.boardState,i=t.turnCounter,a=t.gameComplete,o=t.updateBoardState;return Object($.jsx)(At,{gridRows:n,gridColumns:e,children:Ht(n,e,r,i,a,(function(t,n,e){return o(t,n,e)}))})},Pt=Y.b.footer(B||(B=Object(U.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tposition: sticky;\n\ttop: 100vh;\n\n\tp {\n\t\tbackground-color: #000000cc;\n\t\tcolor: white;\n\t\tpadding: 0.25rem 1rem;\n\t\tborder-radius: 0.5rem 0.5rem 0 0;\n\t\tfont-size: 1.5rem;\n\n\t\ta {\n\t\t\ttext-decoration: none;\n\t\t\tcolor: inherit;\n\n\t\t\t&:hover {\n\t\t\t\ttext-decoration: underline;\n\t\t\t}\n\t\t}\n\t}\n"]))),It=function(){return Object($.jsx)(Pt,{children:Object($.jsxs)("p",{children:["\xa9 ",Object($.jsx)("a",{href:"https://github.com/TrevorLeeman",children:"Trevor Leeman"})," | 2021"]})})},Ft=Y.b.div(L||(L=Object(U.a)(["\n\tbackground-color: #000000cc;\n\tbox-shadow: inset 0 4px 5px 0 rgba(0, 0, 0, 0.14),\n\t\tinset 0 1px 10px 0 rgba(0, 0, 0, 0.12),\n\t\tinset 0 2px 4px -1px rgba(0, 0, 0, 0.2);\n\n\tborder-radius: ",";\n"])),(function(t){return(3===t.rows?"0.6rem":5===t.rows&&"0.5rem")||7===t.rows&&"0.4rem"})),Jt=function(t){var n=t.rows;return Object($.jsx)(Ft,{rows:n})},Kt=Y.b.div(T||(T=Object(U.a)(["\n\twidth: 200px;\n\theight: 200px;\n\tbackground-color: #7051b8e6;\n\tpadding: 1.25rem;\n\tborder-radius: 1rem;\n\tbox-shadow: inset 0 4px 5px 0 rgba(255, 255, 255, 0.14),\n\t\tinset 0 1px 10px 0 rgba(255, 255, 255, 0.12),\n\t\tinset 0 2px 4px -1px rgba(255, 255, 255, 0.2);\n\n\tdisplay: grid;\n\tgrid-template-rows: ",";\n\tgrid-template-columns: ",";\n\tgrid-gap: ",";\n\n\tscroll-snap-align: center;\n\n\t@media (min-width: 400px) {\n\t\twidth: 300px;\n\t\theight: 300px;\n\t}\n\n\t@media (min-width: 600px) {\n\t\tpadding: 0.8rem;\n\t}\n"])),(function(t){return"repeat(".concat(t.rows,", 1fr)")}),(function(t){return"repeat(".concat(t.columns,", 1fr)")}),(function(t){return(3===t.rows?"0.8rem":5===t.rows&&"0.6rem")||7===t.rows&&"0.5rem"})),Dt=function(t,n){for(var e=[],r=0;r<t;r++)for(var i=0;i<n;i++)e.push(Object($.jsx)(Jt,{rows:t},[r,i]));return e},Vt=function(t){var n=t.rows,e=t.columns;return Object($.jsx)(Kt,{className:"styledGrid",rows:n,columns:e,children:Dt(n,e)})},qt=Y.b.form(M||(M=Object(U.a)(["\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr 1fr;\n\tpadding: 1rem 1rem 2rem;\n\tgap: 2rem;\n\toverflow: auto;\n\twidth: 100%;\n\tscroll-snap-type: x mandatory;\n\tuser-select: none;\n\n\t@media (min-width: 400px) {\n\t\tpadding: 2rem 2rem 3rem;\n\t}\n\n\t@media (min-width: 800px) and (max-width: 1440px) {\n\t\tgrid-template-columns: 1fr;\n\t}\n"]))),Qt=Y.b.div(N||(N=Object(U.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\tcursor: pointer;\n\ttransition: 0.1s ease-out;\n\n\t@media (min-width: 400px) {\n\t\t&:hover {\n\t\t\ttransform: scale(1.1);\n\t\t\ttransition: 0.1s ease-in;\n\n\t\t\t.styledGrid {\n\t\t\t\tbox-shadow: 0 12px 17px 2px rgba(0, 0, 0, 0.14),\n\t\t\t\t\t0 5px 22px 4px rgba(0, 0, 0, 0.12), 0 7px 8px -4px rgba(0, 0, 0, 0.2),\n\t\t\t\t\tinset 0 4px 5px 0 rgba(255, 255, 255, 0.14),\n\t\t\t\t\tinset 0 1px 10px 0 rgba(255, 255, 255, 0.12),\n\t\t\t\t\tinset 0 2px 4px -1px rgba(255, 255, 255, 0.2);\n\t\t\t}\n\t\t}\n\t}\n"]))),Ut=function(t){var n=t.setBoardSize,e=t.setNumToWin,r=t.closeModal,i=t.globalRows,a=function(t,i,a){n(t,i),e(a),r()};return Object($.jsxs)(qt,{children:[Object($.jsxs)(Qt,{onClick:function(){return a(3,3,3)},children:[Object($.jsx)("h3",{children:"3x3"}),Object($.jsx)("p",{children:"Win: 3 in a row"}),Object($.jsx)(Vt,{rows:3,columns:3,globalRows:i})]}),Object($.jsxs)(Qt,{onClick:function(){return a(5,5,4)},children:[Object($.jsx)("h3",{children:"5x5"}),Object($.jsx)("p",{children:"Win: 4 in a row"}),Object($.jsx)(Vt,{rows:5,columns:5,globalRows:i})]}),Object($.jsxs)(Qt,{onClick:function(){return a(7,7,5)},children:[Object($.jsx)("h3",{children:"7x7"}),Object($.jsx)("p",{children:"Win: 5 in a row"}),Object($.jsx)(Vt,{rows:7,columns:7,globalRows:i})]})]})},Yt=Y.b.svg(E||(E=Object(U.a)(["\n\ttransition: 200ms ease-out;\n\twidth: 3rem;\n\theight: 3rem;\n\tcursor: pointer;\n\n\tpath {\n\t\tstroke: grey;\n\t\tstroke-width: 2;\n\t}\n\n\t&:hover {\n\t\tpath {\n\t\t\tstroke: #7051b8;\n\t\t}\n\t}\n"]))),Zt=function(t){var n=t.clickHandler;return Object($.jsxs)(Yt,{onClick:n,width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",children:[Object($.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 6.75L6.75 17.25"}),Object($.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 6.75L17.25 17.25"})]})},$t=Y.b.div(X||(X=Object(U.a)(["\n\tz-index: 998;\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbackground-color: rgba(0, 0, 0, 0.5);\n"]))),_t=Y.b.div(A||(A=Object(U.a)(["\n\tz-index: 999;\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n"]))),tn=Y.b.div(H||(H=Object(U.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 1rem;\n\tborder-radius: 1rem;\n\tmax-width: 90vw;\n\tbackground-color: #f7f7f7;\n\toverflow: auto;\n\tfont-size: 2rem;\n\tmax-height: 70vh;\n\n\tbox-shadow: 0 12px 17px 2px rgba(0, 0, 0, 0.14),\n\t\t0 5px 22px 4px rgba(0, 0, 0, 0.12), 0 7px 8px -4px rgba(0, 0, 0, 0.2),\n\t\tinset 0 4px 5px 0 rgba(255, 255, 255, 0.14),\n\t\tinset 0 1px 10px 0 rgba(255, 255, 255, 0.12),\n\t\tinset 0 2px 4px -1px rgba(255, 255, 255, 0.2);\n\n\t@media (min-width: 1440px) {\n\t\tpadding: 2rem;\n\t}\n"]))),nn=Y.b.div(G||(G=Object(U.a)(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tpadding-left: 1rem;\n\n\t@media (min-width: 400px) {\n\t\tpadding-left: 2rem;\n\t}\n"]))),en=function(t){var n=t.closeSettings,e=t.setBoardSize,r=t.setConsecutiveToWin;return Object($.jsxs)($.Fragment,{children:[Object($.jsx)(_t,{children:Object($.jsxs)(tn,{children:[Object($.jsxs)(nn,{children:[Object($.jsx)("h2",{children:"Select Mode"}),Object($.jsx)(Zt,{clickHandler:n})]}),Object($.jsx)(Ut,{setBoardSize:e,setNumToWin:r,closeModal:n})]})}),Object($.jsx)($t,{onClick:n})]})},rn=e(5),an=function(t,n){for(var e=[],r=0;r<t;r++){e[r]=[];for(var i=0;i<n;i++)e[r][i]=""}return e},on=function(t,n){for(var e=[],r=0;r<t+n-1;r++)e.push([]);return e},cn=function(t,n){var e,r=!1,i=null,a=Object(rn.a)(t);try{for(a.s();!(e=a.n()).done;){var o,c=e.value,s=0,d="",b=Object(rn.a)(c);try{for(b.s();!(o=b.n()).done;){var l=o.value;if(l===d&&""!==l){if(++s===n){r=!0,i=d;break}}else s=1,d=l}}catch(p){b.e(p)}finally{b.f()}}}catch(p){a.e(p)}finally{a.f()}return[r,i]},sn=Object(Y.a)(P||(P=Object(U.a)(["\n  *{\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n\n  html{\n\tfont-family: 'Saira Condensed', sans-serif;\n\n\tfont-size: 0.6em;\n\n\t@media (min-width: 420px) {\n\t\tfont-size: 0.8em;\n\t}\n\n\t@media (min-width: 600px) {\n\t\tfont-size: 1em;\n\t}\n  }\n"]))),dn=Y.b.div(I||(I=Object(U.a)(["\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tmin-width: 300px;\n\toverflow: auto;\n\tdisplay: flex;\n\tflex-direction: column;\n\n\tbackground-image: linear-gradient(\n\t\t\t201deg,\n\t\t\trgba(148, 148, 148, 0.07) 0%,\n\t\t\trgba(148, 148, 148, 0.07) 50%,\n\t\t\trgba(83, 83, 83, 0.07) 50%,\n\t\t\trgba(83, 83, 83, 0.07) 100%\n\t\t),\n\t\tlinear-gradient(\n\t\t\t192deg,\n\t\t\trgba(176, 176, 176, 0.08) 0%,\n\t\t\trgba(176, 176, 176, 0.08) 50%,\n\t\t\trgba(180, 180, 180, 0.08) 50%,\n\t\t\trgba(180, 180, 180, 0.08) 100%\n\t\t),\n\t\tlinear-gradient(\n\t\t\t48deg,\n\t\t\trgba(185, 185, 185, 0.1) 0%,\n\t\t\trgba(185, 185, 185, 0.1) 50%,\n\t\t\trgba(243, 243, 243, 0.1) 50%,\n\t\t\trgba(243, 243, 243, 0.1) 100%\n\t\t),\n\t\tlinear-gradient(\n\t\t\t65deg,\n\t\t\trgba(172, 172, 172, 0.09) 0%,\n\t\t\trgba(172, 172, 172, 0.09) 50%,\n\t\t\trgba(209, 209, 209, 0.09) 50%,\n\t\t\trgba(209, 209, 209, 0.09) 100%\n\t\t),\n\t\tlinear-gradient(\n\t\t\t4deg,\n\t\t\trgba(224, 224, 224, 0.03) 0%,\n\t\t\trgba(224, 224, 224, 0.03) 50%,\n\t\t\trgba(49, 49, 49, 0.03) 50%,\n\t\t\trgba(49, 49, 49, 0.03) 100%\n\t\t),\n\t\tlinear-gradient(\n\t\t\t228deg,\n\t\t\trgba(152, 152, 152, 0.03) 0%,\n\t\t\trgba(152, 152, 152, 0.03) 50%,\n\t\t\trgba(130, 130, 130, 0.03) 50%,\n\t\t\trgba(130, 130, 130, 0.03) 100%\n\t\t),\n\t\tlinear-gradient(\n\t\t\t163deg,\n\t\t\trgba(170, 170, 170, 0.08) 0%,\n\t\t\trgba(170, 170, 170, 0.08) 50%,\n\t\t\trgba(232, 232, 232, 0.08) 50%,\n\t\t\trgba(232, 232, 232, 0.08) 100%\n\t\t),\n\t\tlinear-gradient(\n\t\t\t152deg,\n\t\t\trgba(12, 12, 12, 0.05) 0%,\n\t\t\trgba(12, 12, 12, 0.05) 50%,\n\t\t\trgba(161, 161, 161, 0.05) 50%,\n\t\t\trgba(161, 161, 161, 0.05) 100%\n\t\t),\n\t\tlinear-gradient(\n\t\t\t302deg,\n\t\t\trgba(48, 48, 48, 0.1) 0%,\n\t\t\trgba(48, 48, 48, 0.1) 50%,\n\t\t\trgba(195, 195, 195, 0.1) 50%,\n\t\t\trgba(195, 195, 195, 0.1) 100%\n\t\t),\n\t\tlinear-gradient(90deg, rgb(144, 14, 253), rgb(74, 115, 255));\n"]))),bn=Y.b.div(F||(F=Object(U.a)(["\n\tdisplay: grid;\n\tgrid-template-rows: fit-content 1fr;\n\tgrid-template-columns: 1fr;\n\tgrid-template-areas:\n\t\t'controls'\n\t\t'grid';\n\tgap: 2rem;\n\tplace-items: center;\n\tpadding: 2rem 0;\n\n\t@media (min-width: 400px) {\n\t\tpadding: 2rem;\n\t}\n\n\t@media (min-width: 1440px) {\n\t\tgrid-template-rows: 1fr;\n\t\tgrid-template-columns: 1fr 1fr 1fr;\n\t\tgrid-template-areas: 'controls grid .';\n\t}\n"]))),ln=function(){var t=Object(J.useState)(3),n=Object(Q.a)(t,2),e=n[0],r=n[1],i=Object(J.useState)(3),a=Object(Q.a)(i,2),o=a[0],c=a[1],s=Object(J.useState)(3),d=Object(Q.a)(s,2),b=d[0],l=d[1],p=Object(J.useState)(an(e,o)),x=Object(Q.a)(p,2),u=x[0],g=x[1],j=Object(J.useState)(1),m=Object(Q.a)(j,2),h=m[0],f=m[1],O=Object(J.useState)(h),w=Object(Q.a)(O,2),v=w[0],y=w[1],k=Object(J.useState)(!1),C=Object(Q.a)(k,2),S=C[0],R=C[1],z=Object(J.useState)(!1),W=Object(Q.a)(z,2),B=W[0],L=W[1],T=Object(J.useState)(!1),M=Object(Q.a)(T,2),N=M[0],E=M[1],X=Object(J.useState)(!1),A=Object(Q.a)(X,2),H=A[0],G=A[1],P=Object(J.useState)(0),I=Object(Q.a)(P,2),F=I[0],K=I[1],D=Object(J.useState)(0),V=Object(Q.a)(D,2),U=V[0],Y=V[1],Z=Object(J.useCallback)((function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o;g(an(n,r)),R(!1),y(h+1),f((function(t){return t+1})),E(!1),G(!1)}),[o,h,S,e]),_=Object(J.useCallback)((function(t,n,e){g((function(r){var i=Object(q.a)(r);return i[t][n]=e,i})),y((function(t){return t+1}))}),[]),tt=Object(J.useCallback)((function(){return L(!B)}),[B]),nt=Object(J.useCallback)((function(t,n){r(t),c(n),Z(null,t,n)}),[Z]);return Object(J.useEffect)((function(){var t=cn(u,b),n=Object(Q.a)(t,2),r=n[0],i=n[1],a=function(t,n,e,r){var i,a=an(n,e),o=Object(rn.a)(t.entries());try{for(o.s();!(i=o.n()).done;){var c,s=Object(Q.a)(i.value,2),d=s[0],b=s[1],l=Object(rn.a)(b.entries());try{for(l.s();!(c=l.n()).done;){var p=Object(Q.a)(c.value,2),x=p[0],u=p[1];a[x][d]=u}}catch(g){l.e(g)}finally{l.f()}}}catch(g){o.e(g)}finally{o.f()}return cn(a,r)}(u,o,e,b),c=Object(Q.a)(a,2),s=c[0],d=c[1],l=function(t,n,e,r){var i,a=on(n,e),o=on(n,e),c=Object(rn.a)(t.entries());try{for(c.s();!(i=c.n()).done;){var s,d=Object(Q.a)(i.value,2),b=d[0],l=d[1],p=Object(rn.a)(l.entries());try{for(p.s();!(s=p.n()).done;){var x=Object(Q.a)(s.value,2),u=x[0],g=x[1];a[b+u].push(g),o[b-u+n-1].push(g)}}catch(m){p.e(m)}finally{p.f()}}}catch(m){c.e(m)}finally{c.f()}var j=[].concat(Object(q.a)(a),Object(q.a)(o)).filter((function(t){return t.length>=r}));return cn(j,r)}(u,o,e,b),p=Object(Q.a)(l,2),x=p[0],g=p[1];(r||s||x||v-h===e*o)&&(R(!0),y((function(t){return t+1})),"X"===i||"X"===d||"X"===g?(E(!0),K((function(t){return t+1}))):"O"!==i&&"O"!==d&&"O"!==g||(G(!0),Y((function(t){return t+1}))))}),[u]),console.log(u),Object($.jsxs)($.Fragment,{children:[Object($.jsx)(sn,{}),Object($.jsxs)(dn,{children:[Object($.jsx)(ct,{title:"React-Tac-Toe"}),Object($.jsxs)(bn,{children:[Object($.jsx)(yt,{gameComplete:S,resetBoardState:Z,showSettings:tt,player1Wins:F,player2Wins:U,turnCounter:v,player1Win:N,player2Win:H}),Object($.jsx)(Gt,{gridRows:e,gridColumns:o,boardState:u,turnCounter:v,gameComplete:S,updateBoardState:_})]}),Object($.jsx)(It,{}),B&&Object($.jsx)(en,{closeSettings:tt,setBoardSize:nt,setConsecutiveToWin:l})]})]})};V.a.render(Object($.jsx)(K.a.StrictMode,{children:Object($.jsx)(ln,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.ec9fdc18.chunk.js.map