"use strict";
const hardwareViews={
 concept:{src:'assets/hardware/groundtruth-field-box-v18.png',alt:'GroundTruth concept: a rose-tuff drone station with Armenian-inspired engraving in a highland landscape.',caption:'Concept'},
 reference:{src:'assets/hardware/heisha-dpad60-reference.png',alt:'HEISHA manufacturer photograph of the DPad 60 charging platform with a Mavic-type drone and centring guides.',caption:''}
};
document.querySelectorAll('[data-hardware]').forEach(button=>button.addEventListener('click',()=>{
 const key=button.dataset.hardware,view=hardwareViews[key],img=document.getElementById('hardware-image');
 img.src=view.src;img.alt=view.alt;img.classList.toggle('reference-hardware',key==='reference');
 const caption=document.getElementById('hardware-caption');caption.textContent=view.caption;caption.hidden=key==='reference';
 document.querySelectorAll('[data-hardware]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});
}));
