import{_ as e}from"./index-17b7d5a2.js";import{O as s}from"./OptionsColor-4e226049.js";class r{constructor(){this.blink=!1,this.consent=!1,this.opacity=1}load(i){i&&(i.blink!==void 0&&(this.blink=i.blink),i.color!==void 0&&(this.color=s.create(this.color,i.color)),i.consent!==void 0&&(this.consent=i.consent),i.opacity!==void 0&&(this.opacity=i.opacity))}}class f{constructor(){this.distance=100,this.links=new r}load(i){i&&(i.distance!==void 0&&(this.distance=i.distance),this.links.load(i.links))}}async function a(n,i=!0){await n.addInteractor("externalGrab",async o=>{const{Grabber:t}=await e(()=>import("./Grabber-56380212.js"),["assets/Grabber-56380212.js","assets/CanvasUtils-705a4d2b.js","assets/index-17b7d5a2.js","assets/index-92296d52.css","assets/ExternalInteractorBase-029fb1b6.js","assets/OptionsColor-4e226049.js"]);return new t(o)},i)}export{f as Grab,r as GrabLinks,a as loadExternalGrabInteraction};