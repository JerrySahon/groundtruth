"use strict";
(() => {
 const dialog = document.getElementById('source-dialog');
 if (!dialog) return;
 const sources = {
  fire: {title:'Wildfire in Khosrov',place:'ARMENIA · AUGUST 2017',images:[['assets/observations/khosrov-fire-aua.png','Original AUA Khosrov fire map, showing 13 August 2017 above and 28 July 2017 below.']],caption:'AUA’s original map. Top: during the fire, 13 August 2017. Bottom: before, 28 July 2017. This is a false-colour Landsat 8 composite: bright red marks active fires and dark brown marks burned ground.',credit:'Map: AUA Acopian Center for the Environment. Landsat 8 OLI data: NASA / USGS. This historical analysis was produced by AUA, not GroundTruth.'},
  road: {title:'New transport links',place:'ARAGATS · ARMENIA',images:[['assets/aragats/road-annotated.png','Unmodified annotated road comparison from the supplied archive.']],caption:'GroundTruth team concept using free Sentinel-2 satellite data. Original comparison: 17 October 2019 and 17 September 2026. A pale diagonal route appears across the fields. The images are enlarged from a native resolution of 10 m; the route’s condition needs a field survey.',credit:'GroundTruth team concept / Aragats archive. Free Sentinel-2 L2A imagery / ESA Copernicus. Dates and locations follow the supplied metadata. Annotations are those of the source archive.'},
  flood: {title:'Flooding along the Debed',place:'LORI · ARMENIA · MAY 2024',images:[['assets/observations/debed-flood-unosat.png','Original UNOSAT page showing Debed flood impacts before and after.']],caption:'UNOSAT identifies affected structures and a road segment. The baseline is 8 June 2020; the post-event image is 29 May 2024. The four-year gap means not every difference can be attributed to the flood.',credit:'UNOSAT preliminary assessment, 4 June 2024, page 5. Baseline: WorldView-2 / ESRI. Post-event: Pléiades / CNES / Airbus. Original analysis and annotations by UNOSAT.'},
  buildings: {title:'New roof footprints',place:'ARAGATS · ARMENIA',images:[['assets/aragats/roof-annotated.png','Unmodified annotated building comparison from the supplied archive.']],caption:'GroundTruth team concept using free Sentinel-2 satellite data. Original comparison: 17 October 2019 and 17 September 2026. Bright roof-like features appear beside existing buildings. The source calls the feature a hangar; its use is unverified. Native resolution is 10 m, enlarged for viewing.',credit:'GroundTruth team concept / Aragats archive. Free Sentinel-2 L2A imagery / ESA Copernicus. Dates, locations and annotations follow the supplied archive.'},
  forest: {title:'Forest clearing for excavation',place:'HOBET · WEST VIRGINIA, USA',images:[['assets/observations/hobet-1984-09-17.jpg','NASA Landsat image of the Hobet mine in September 1984.'],['assets/observations/hobet-2015-08-22.jpg','NASA Landsat image of the Hobet mine in August 2015.']],caption:'Left: 17 September 1984. Right: 22 August 2015. Surface mining expands across forested ridges, while vegetation returns to some previously mined areas. This reference case is in the USA.',credit:'NASA Earth Observatory, World of Change: Mountaintop Mining, West Virginia. Landsat imagery / USGS.'}
 };
 let trigger;
 document.querySelectorAll('[data-source]').forEach(button => button.addEventListener('click', () => {
  const source=sources[button.dataset.source]; if(!source) return; trigger=button;
  for(const key of ['title','place','caption','credit'])document.getElementById('source-'+key).textContent=source[key];
  const images=document.getElementById('source-images'); images.replaceChildren(); images.classList.toggle('two-images',source.images.length===2);
  source.images.forEach(([src,alt])=>{const img=document.createElement('img');img.src=src;img.alt=alt;images.append(img);});
  dialog.showModal(); document.body.classList.add('source-open');
 }));
 document.getElementById('source-close').addEventListener('click',()=>dialog.close());
 dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
 dialog.addEventListener('close',()=>{document.body.classList.remove('source-open');if(trigger)trigger.focus({preventScroll:true});});
})();
