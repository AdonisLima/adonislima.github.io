import{u as o,j as t,a as w}from"./index-cYqTYoSU.js";import"./react-vendor-5nDjdL3T.js";const e={primary1:"#2B3A67",secondary1:"#FEFEE3",tertiary1:"#333333",text1:"#333333",text2:"#FEFEE3"},j=o.a.attrs({role:"button",className:"button"})`
  position: relative;
  z-index: 0;

  display: flex;
  width: 320px;
  height: 61px;

  background-color: transparent;
  border: 4px solid ${e.secondary1};

  line-height: 34px;
  font-weight: 600;
  font-size: 28px;
  color: ${e.secondary1};
  text-align: center;
  text-decoration: none;

  transition: color 0.2s;
  overflow: hidden;
  cursor: pointer;

  &::after {
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 0;

    transition: height 0.2s;
    z-index: -1;
    content: "";
  }

  &:hover {
    color: ${e.primary1};
  }

  &:hover:after {
    height: 100%;
    background: ${e.secondary1};
  }
`,v=o.span.attrs({className:"button__label"})`
  margin: auto;
`;function s(i){const{children:n}=i;return t.jsx(j,{...i,children:t.jsx(v,{children:n})})}const c=w`
  transform: skewY(3deg);

  @media (min-width: 1300px) {
    transform: skewY(2deg);
  }

  @media (min-width: 2300px) {
    transform: skewY(1.5deg);
  }

  @media (min-width: 3300px) {
    transform: skewY(0.7deg);
  }
`,y=o.section`
  display: flex;
  position: relative;
  height: 100vh;

  background-color: ${e.primary1};

  color: ${e.text2};

  &:after {
    position: absolute;
    bottom: -40px;
    left: 0;
    right: 0;
    transform: skewY(3deg);

    display: block;
    width: 100%;
    height: 70px;
    background-color: ${e.secondary1};

    content: "";

    ${c}
  }
`,C=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  padding-left: 24px;
  padding-right: 24px;

  background-color: transparent;
`,$=o.h1`
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 48px;
  margin-bottom: 32px;
`,k=o.h2`
  font-size: 3.5rem;
  font-weight: 600;
  line-height: 58px;
  margin-bottom: 24px;
`,S=o.h3`
  font-size: 1.75rem;
  font-weight: 400;
  line-height: 34px;
  margin-bottom: 56px;
`,M=o.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;function A(){return t.jsx(y,{children:t.jsxs(C,{children:[t.jsx($,{children:"Hello! I'm Adonis Lima"}),t.jsx(k,{children:"Front-end developer"}),t.jsx(S,{children:"Currently based in Salvador - Bahia, Brazil"}),t.jsxs(M,{children:[t.jsx(s,{href:"#projects",children:"Projects"}),t.jsx(s,{href:"#contact",children:"Contact"})]})]})})}const L=o.h2`
  color: ${i=>i.color||e.primary1};
  text-align: center;
  font-weight: 600;
  font-size: 2.5rem;
`;function l(i){const{children:n,color:r}=i;return t.jsx(L,{color:r,children:n})}const z=o.section`
  position: relative;

  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 64px 0 178px 0;

  color: ${e.text1};
  background-color: ${e.secondary1};

  &:after {
    position: absolute;
    bottom: -40px;
    left: 0;
    right: 0;
    transform: skewY(3deg);

    display: block;
    width: 100%;
    height: 70px;
    background-color: ${e.tertiary1};

    content: "";

    ${c}
  }
`,D=o.p`
  margin-top: 40px;
  margin-left: 40px;
  margin-right: 40px;
  max-width: 1144px;

  color: ${e.primary1};
  font-weight: 500;
  text-align: center;
  font-size: 1.5rem;
  line-height: 29px;

  @media (min-width: 1114px) {
    font-size: 1.75rem;
    line-height: 34px;
  }
`;function T(){return t.jsxs(z,{children:[t.jsx(l,{children:"About Me"}),t.jsx(D,{children:"Front-end developer passionate about creating rich user interfaces using technologies from the React ecosystem and TypeScript. I am also an enthusiast of software design topics such as Test-Driven Development (TDD), Domain-Driven Design (DDD), and Clean Architecture."})]})}const B="/assets/adon-ecotourism-AbPg93cu.png",H="/assets/tetris-demo-Df_kzyfj.png",I="data:image/svg+xml,%3csvg%20id='Camada_1'%20data-name='Camada%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20725.23%20707.32'%3e%3cdefs%3e%3cstyle%3e.cls-1,.cls-2{fill:%23fff;}.cls-1{fill-rule:evenodd;}%3c/style%3e%3c/defs%3e%3ctitle%3egithub-logo%3c/title%3e%3cpath%20class='cls-1'%20d='M362.61,0C162.37,0,0,162.34,0,362.61,0,522.82,103.9,658.74,248,706.69c18.12,3.36,24.77-7.87,24.77-17.44,0-8.64-.33-37.21-.49-67.51C171.38,643.67,150.1,579,150.1,579c-16.5-41.9-40.27-53.06-40.27-53.06-32.9-22.5,2.48-22,2.48-22,36.42,2.56,55.59,37.37,55.59,37.37,32.34,55.43,84.83,39.41,105.52,30.14,3.26-23.43,12.65-39.43,23-48.49-80.54-9.16-165.21-40.26-165.21-179.2,0-39.58,14.17-71.93,37.37-97.33-3.77-9.14-16.18-46,3.51-96,0,0,30.46-9.74,99.74,37.17a343.72,343.72,0,0,1,181.6,0c69.21-46.91,99.62-37.17,99.62-37.17,19.74,49.94,7.33,86.82,3.56,96,23.25,25.4,37.32,57.75,37.32,97.33C594,483,509.12,513.61,428.37,522.59c13,11.25,24.6,33.32,24.6,67.15,0,48.52-.42,87.56-.42,99.51,0,9.65,6.52,21,24.91,17.4,144-48,247.77-183.88,247.77-344C725.23,162.34,562.88,0,362.61,0'/%3e%3cpath%20class='cls-2'%20d='M137.34,520.63c-.8,1.81-3.63,2.35-6.21,1.1s-4.11-3.63-3.26-5.44,3.62-2.37,6.25-1.13,4.13,3.66,3.22,5.47M152,537c-1.73,1.61-5.11.86-7.4-1.67s-2.82-5.92-1.06-7.54,5.06-.85,7.43,1.68,2.84,5.91,1,7.53m14.3,20.88c-2.22,1.55-5.86.11-8.11-3.12s-2.22-7.1.05-8.64,5.83-.16,8.11,3,2.22,7.14,0,8.72m19.58,20.18c-2,2.19-6.22,1.61-9.32-1.38s-4.05-7.08-2.06-9.27,6.27-1.58,9.4,1.39,4.1,7.09,2,9.26m27,11.72c-.89,2.84-5,4.12-9.07,2.92s-6.78-4.57-6-7.44,5-4.2,9.08-2.91,6.79,4.54,5.94,7.43M242.61,592c.1,3-3.38,5.47-7.69,5.52s-7.85-2.32-7.9-5.26,3.42-5.47,7.74-5.55,7.85,2.32,7.85,5.29m27.62-4.7c.51,2.91-2.48,5.91-6.76,6.71s-8.11-1-8.65-3.92,2.53-6,6.74-6.76,8.12,1,8.67,4'/%3e%3c/svg%3e",_="data:image/svg+xml,%3csvg%20id='Camada_1'%20data-name='Camada%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2052%2052'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23fff;fill-rule:evenodd;}%3c/style%3e%3c/defs%3e%3ctitle%3elinkedin-logo%3c/title%3e%3cpath%20class='cls-1'%20d='M52,52H41.32V33.8c0-5-1.9-7.78-5.85-7.78-4.3,0-6.54,2.91-6.54,7.78V52H18.63V17.33h10.3V22a12.1,12.1,0,0,1,10.45-5.73C46.74,16.27,52,20.76,52,30.05ZM6.35,12.79A6.4,6.4,0,1,1,12.7,6.4,6.37,6.37,0,0,1,6.35,12.79ZM1,52H11.77V17.33H1Z'/%3e%3c/svg%3e",F="data:image/svg+xml,%3csvg%20id='Layer_1'%20data-name='Layer%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20122.88%2088.86'%3e%3ctitle%3eemail%3c/title%3e%3cpath%20fill='%23fff'%20d='M7.05,0H115.83a7.07,7.07,0,0,1,7,7.05V81.81a7,7,0,0,1-1.22,4,2.78,2.78,0,0,1-.66,1,2.62,2.62,0,0,1-.66.46,7,7,0,0,1-4.51,1.65H7.05a7.07,7.07,0,0,1-7-7V7.05A7.07,7.07,0,0,1,7.05,0Zm-.3,78.84L43.53,40.62,6.75,9.54v69.3ZM49.07,45.39,9.77,83.45h103L75.22,45.39l-11,9.21h0a2.7,2.7,0,0,1-3.45,0L49.07,45.39Zm31.6-4.84,35.46,38.6V9.2L80.67,40.55ZM10.21,5.41,62.39,47.7,112.27,5.41Z'/%3e%3c/svg%3e",E=o.a.attrs({className:"social-media-link"})`
  position: relative;
  display: flex;
  width: 130px;
  height: 130px;

  text-align: center;

  border-radius: 50%;
  background-color: ${e.tertiary1};
  transition: background-color 0.2s;

  cursor: pointer;

  &:hover {
    background-color: ${e.primary1};
  }
`,V=o.img`
  margin: auto;
  width: 45%;
  height: 45%;
`;function a(i){const{socialMediaIcon:n,href:r}=i;return t.jsx(E,{href:r,target:"_blank",children:t.jsx(V,{src:n})})}const Z=o.section`
  position: relative;

  padding: 64px 0 100px 0;

  background-color: ${e.secondary1};

  color: ${e.text1};

  overflow: hidden;

  &:after {
    position: absolute;
    bottom: -40px;
    left: 0;
    right: 0;
    transform: skewY(3deg);

    display: block;
    width: 100%;
    height: 70px;
    background-color: ${e.tertiary1};

    content: "";

    ${c}
  }
`,P=o.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 500px;
  margin: 0 auto;
  justify-content: space-around;
  gap: 16px;
  margin-top: 48px;
  margin-bottom: 10px;
`;function Y(){return t.jsxs(Z,{id:"contact",children:[t.jsx(l,{children:"Contact"}),t.jsxs(P,{children:[t.jsx(a,{href:"https://www.linkedin.com/in/adonisjv-lima",socialMediaIcon:_}),t.jsx(a,{href:"https://github.com/AdonisLima",socialMediaIcon:I}),t.jsx(a,{href:"mailto:adonisjvl@gmail.com",socialMediaIcon:F})]})]})}const N=o.section`
  position: relative;
  padding: 64px 0 178px 0;

  background-color: ${e.primary1};

  color: ${e.text2};
`,G=o.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 1144px;
  margin: 0 auto;
  gap: 16px;
  margin-top: 40px;
`,J=o.article.attrs({className:"project-card"})`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: ${e.secondary1};
  max-width: 80%;

  color: ${e.primary1};
  box-shadow:
    0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media (min-width: 1114px) {
    max-width: 1090px;
    min-width: 1090px;
  }
`,R=o.img`
  width: 100%;
  height: 420px;
  padding: 0;
  margin: 0;

  background-color: ${e.tertiary1};
  object-fit: contain;

  @media (min-width: 1114px) {
    width: 472px;
  }
`,O=o.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
`,q=o.h1`
  font-size: 1.438rem;
  font-weight: 700;
  line-height: 28px;

  margin-bottom: 24px;
`,K=o.div`
  margin-bottom: 16px;
`,Q=o.h2`
  font-size: 1rem;
  font-weight: 700;
  line-height: 20px;
`,U=o.p`
  font-size: 1rem;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
`,W=o.div`
  display: flex;
  gap: 24px;
  margin-top: auto;
  flex-wrap: wrap;
`,x=o(s)`
  width: 145px;
  height: 48px;

  border-color: ${e.primary1};
  color: ${e.primary1};

  &:hover {
    color: ${e.secondary1};
  }

  &:hover:after {
    height: 100%;
    background: ${e.primary1};
  }

  > .button__label {
    font-size: 1.438rem;
    line-height: 28px;
  }
`;function X(i){const{data:n,className:r}=i,{title:m,image:g,buttons:u,projectInfo:f}=n,{demo:d,sourceCode:p}=u;function b(){return f.map(h=>t.jsxs(K,{children:[t.jsx(Q,{children:h.subtitle}),t.jsx(U,{children:h.text})]}))}return t.jsxs(J,{className:r,children:[t.jsx(R,{src:g}),t.jsxs(O,{children:[t.jsx(q,{children:m}),b(),t.jsxs(W,{children:[t.jsx(x,{href:d.source,target:"_blank",children:d.label}),t.jsx(x,{href:p.source,target:"_blank",children:p.label})]})]})]})}function tt(){const i=[{title:"Tetris Clone",image:H,projectInfo:[{subtitle:"Technologies used",text:"HTML (canvas), CSS, JavaScript."},{subtitle:"Description",text:"A simple tetris clone made with vanilla JavaScript and HTML5"},{subtitle:"Challenges",text:"First time working with canvas. First JavaScript project."}],buttons:{demo:{label:"Demo",source:"https://adonisl.me/tetriss.js/"},sourceCode:{label:"Source",source:"https://github.com/AdonisLima/tetriss.js/"}}},{title:"Adon ecotourism",image:B,projectInfo:[{subtitle:"Technologies used",text:"HTML, CSS, Bootstrap, SASS."},{subtitle:"Description",text:"A website for a fictional ecotourism agency based in the Amazon region."},{subtitle:"Challenges",text:"First time using SASS."}],buttons:{demo:{label:"Demo",source:"https://adonislima.github.io/adon-ecotourism/"},sourceCode:{label:"Source",source:"https://github.com/AdonisLima/adon-ecotourism/"}}}];return t.jsxs(N,{id:"projects",children:[t.jsx(l,{color:e.secondary1,children:"Projects"}),t.jsx(G,{children:i.map(n=>t.jsx(X,{data:n}))})]})}function it(){return t.jsxs(t.Fragment,{children:[t.jsx(A,{}),t.jsx(T,{}),t.jsx(tt,{}),t.jsx(Y,{})]})}export{it as default};
