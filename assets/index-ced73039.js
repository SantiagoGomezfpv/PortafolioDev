import{_ as e}from"./index-8e731696.js";import{O as s}from"./OptionsColor-5e63b5e5.js";class r{constructor(){this.blink=!1,this.consent=!1,this.opacity=1}load(i){i&&(i.blink!==void 0&&(this.blink=i.blink),i.color!==void 0&&(this.color=s.create(this.color,i.color)),i.consent!==void 0&&(this.consent=i.consent),i.opacity!==void 0&&(this.opacity=i.opacity))}}class f{constructor(){this.distance=100,this.links=new r}load(i){i&&(i.distance!==void 0&&(this.distance=i.distance),this.links.load(i.links))}}async function a(n,i=!0){await n.addInteractor("externalGrab",async o=>{const{Grabber:t}=await e(()=>import("./Grabber-e9154a3b.js"),["assets/Grabber-e9154a3b.js","assets/CanvasUtils-37381eda.js","assets/index-8e731696.js","assets/index-92296d52.css","assets/ExternalInteractorBase-029fb1b6.js","assets/OptionsColor-5e63b5e5.js"]);return new t(o)},i)}export{f as Grab,r as GrabLinks,a as loadExternalGrabInteraction};
