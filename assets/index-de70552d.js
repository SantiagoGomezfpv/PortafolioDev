import{_ as i}from"./index-28d4649e.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-eaed0adb.js"),["assets/LifeUpdater-eaed0adb.js","assets/ValueWithRandom-aa534366.js","assets/index-28d4649e.js","assets/index-92296d52.css"]);return new r(e)},a)}export{d as loadLifeUpdater};
