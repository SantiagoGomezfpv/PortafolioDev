import{P as n}from"./PolygonDrawerBase-7639497d.js";import"./index-17b7d5a2.js";const o=1.66,a=3,s=2;class d extends n{getCenter(t,e){return{x:-e,y:e/o}}getSidesCount(){return a}getSidesData(t,e){const r=e*s;return{count:{denominator:2,numerator:3},length:r}}}export{d as TriangleDrawer};