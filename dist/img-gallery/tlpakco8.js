/*! Built with http://stenciljs.com */
const{h:e}=window.ImgGallery;class t{constructor(){this.color="inherit"}handleImageOpen(e,t){this.CurrentImageUrl=e.target.src,this.preview=!0,this.currentIndex=t,document.querySelector("body").setAttribute("style","overflow: hidden;")}handlePreviewImage(e,t){this.CurrentImageUrl=e.target.src,this.currentIndex=t}next(){this.currentIndex<this.images.length-1&&this.currentIndex++,this.src?this.CurrentImageUrl=this.images[this.currentIndex]:this.CurrentImageUrl=this.images[this.currentIndex].src}previous(){this.currentIndex>0&&this.currentIndex--,this.src?this.CurrentImageUrl=this.images[this.currentIndex]:this.CurrentImageUrl=this.images[this.currentIndex].src}handleImageClose(){this.CurrentImageUrl=null,this.preview=!1,document.querySelector("body").setAttribute("style","overflow: auto;")}componentWillLoad(){if(this.src)this.images=this.src;else{let e=document.querySelector("img-gallery");this.images=[].slice.call(e.getElementsByTagName("img"))}}render(){return[e("div",null,this.src||this.images?e("div",{id:"photos",style:{"background-color":this.color,overflow:"auto"}},this.src?this.images.map((t,r)=>e("img",{src:t,alt:"Image",onClick:e=>{this.handleImageOpen(e,r)}})):this.images.map((t,r)=>e("img",{src:t.src,alt:"Image",onClick:e=>{this.handleImageOpen(e,r)}}))):e("div",null)),e("div",null,this.preview?e("div",{id:"galleryPreview"},e("div",{class:"body"},e("div",{class:"close",onClick:()=>{this.handleImageClose()}},"X"),e("div",{class:"previous",onClick:()=>{this.previous()}}),e("div",{class:"next",onClick:()=>{this.next()}}),e("img",{src:this.CurrentImageUrl,alt:"Image"})),e("div",{class:"footer"},this.src?this.images.map((t,r)=>e("img",{src:t,alt:"Image",onClick:e=>{this.handlePreviewImage(e,r)}})):this.images.map((t,r)=>e("img",{src:t.src,alt:"Image",onClick:e=>{this.handlePreviewImage(e,r)}})))):null)]}static get is(){return"img-gallery"}static get encapsulation(){return"shadow"}static get properties(){return{color:{type:String,attr:"color"},CurrentImageUrl:{state:!0},images:{state:!0},preview:{state:!0},src:{type:"Any",attr:"src"}}}static get style(){return"*{transition:all .3s ease-in-out;-webkit-transition:all .3s ease-in-out;-moz-transition:all .3s ease-in-out;-o-transition:all .3s ease-in-out;-ms-transition:all .3s ease-in-out}#photos{line-height:0;-webkit-column-count:5;-webkit-column-gap:0;-moz-column-count:5;-moz-column-gap:0;column-count:5;column-gap:0;border-radius:5px}#photos>img{width:96%!important;height:auto!important;padding:2%;border-radius:10px}#galleryPreview{position:fixed;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;z-index:1000;height:100%;width:100%;top:0;left:0;background-color:rgba(0,0,0,.95)}#galleryPreview>.body{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:90%}#galleryPreview>.body>.close{height:50px;width:50px;font-weight:700;font-family:sans-serif;cursor:pointer;font-size:20px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:100%;color:#000;background-color:rgba(255,255,255,1);-webkit-box-shadow:1px 1px 10px 0 rgba(0,0,0,.3);box-shadow:1px 1px 10px 0 rgba(0,0,0,.3);position:absolute;top:10px;right:10px}#galleryPreview>.body>.previous{height:50%;width:100px;background-color:transparent;position:absolute;left:0}#galleryPreview>.body>.next:hover,#galleryPreview>.body>.previous:hover{-webkit-box-shadow:1px 1px 10px 0 rgba(255,255,255,.3);box-shadow:1px 1px 10px 0 rgba(255,255,255,.3);cursor:pointer}#galleryPreview>.body>.next{height:50%;width:100px;background-color:transparent;position:absolute;right:0}#galleryPreview>.body>img{width:auto;max-width:100%;height:auto;max-height:100%}#galleryPreview>.footer{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;height:10%;overflow-x:auto}::-webkit-scrollbar{width:10px;height:10px}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb:hover{background:#555}#galleryPreview>.footer>img{height:100%;width:auto}\@media (max-width:1200px){#photos{-moz-column-count:4;-webkit-column-count:4;column-count:4}}\@media (max-width:1000px){#photos{-moz-column-count:3;-webkit-column-count:3;column-count:3}}\@media (max-width:800px){#photos{-moz-column-count:2;-webkit-column-count:2;column-count:2}#galleryPreview>.body>.next,#galleryPreview>.body>.previous{width:50px}}\@media (max-width:400px){#photos{-moz-column-count:1;-webkit-column-count:1;column-count:1}}"}}export{t as ImgGallery};