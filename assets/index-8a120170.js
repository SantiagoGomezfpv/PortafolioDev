import{_ as e}from"./index-8e731696.js";async function i(r,o=!0){await r.addParticleUpdater("color",async t=>{const{ColorUpdater:a}=await e(()=>import("./ColorUpdater-c7982c69.js"),["assets/ColorUpdater-c7982c69.js","assets/index-8e731696.js","assets/index-92296d52.css"]);return new a(t)},o)}export{i as loadColorUpdater};