/*! Built with http://stenciljs.com */
ImgGallery.loadBundle("lzsrrn2c",["exports"],function(e){var t=window.ImgGallery.h,r=function(){function e(){}return e.prototype.componentDidLoad=function(){this.addIntersectionObserver()},e.prototype.componentWillUpdate=function(){this.src!==this.oldSrc&&this.addIntersectionObserver(),this.oldSrc=this.src},e.prototype.handleImage=function(){var e=this.el.shadowRoot.querySelector("img");e.setAttribute("src",e.getAttribute("data-src")),e.onload=function(){e.removeAttribute("data-src")}},e.prototype.addIntersectionObserver=function(){var e=this;this.src&&("IntersectionObserver"in window?(this.io=new IntersectionObserver(function(t){t[0].isIntersecting&&(e.handleImage(),e.removeIntersectionObserver())}),this.io.observe(this.el.shadowRoot.querySelector("img"))):setTimeout(function(){e.handleImage()},300))},e.prototype.removeIntersectionObserver=function(){this.io&&(this.io.disconnect(),this.io=null)},e.prototype.render=function(){return t("img",{class:"img_gallery_image","data-src":this.src,alt:this.alt})},Object.defineProperty(e,"is",{get:function(){return"img-gallery-image"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{alt:{type:String,attr:"alt"},el:{elementRef:!0},oldSrc:{state:!0},src:{type:String,attr:"src"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-img-gallery-image-h{display:inline-block}img.sc-img-gallery-image{max-width:var(--img-gallery-image-max-width,100%);max-height:var(--img-gallery-image-max-height,100%);width:var(--img-gallery-image-width);height:var(--img-gallery-image-height);border-radius:var(--img-gallery-image-border-radius,0)}"},enumerable:!0,configurable:!0}),e}(),n=function(){function e(){this.color="inherit"}return e.prototype.handleImageOpen=function(e,t){this.CurrentImageUrl=e.target.src,this.preview=!0,this.currentIndex=t,document.querySelector("body").setAttribute("style","overflow: hidden;")},e.prototype.handlePreviewImage=function(e,t){this.CurrentImageUrl=e.target.src,this.currentIndex=t},e.prototype.next=function(){this.currentIndex<this.images.length-1&&this.currentIndex++,this.src?this.CurrentImageUrl=this.images[this.currentIndex]:this.CurrentImageUrl=this.images[this.currentIndex].src},e.prototype.previous=function(){this.currentIndex>0&&this.currentIndex--,this.src?this.CurrentImageUrl=this.images[this.currentIndex]:this.CurrentImageUrl=this.images[this.currentIndex].src},e.prototype.handleImageClose=function(){this.CurrentImageUrl=null,this.preview=!1,document.querySelector("body").setAttribute("style","overflow: auto;")},e.prototype.componentWillLoad=function(){if(this.src)this.images=this.src;else{var e=document.querySelector("img-gallery");this.images=[].slice.call(e.getElementsByTagName("img"))}},e.prototype.render=function(){var e=this;return[t("div",null,this.src||this.images?t("div",{id:"photos",style:{"background-color":this.color,overflow:"auto"}},this.src?this.images.map(function(r,n){return t("img-gallery-image",{src:r,alt:"Image",onClick:function(t){e.handleImageOpen(t,n)}})}):this.images.map(function(r,n){return t("img-gallery-image",{src:r.src,alt:"Image",onClick:function(t){e.handleImageOpen(t,n)}})})):t("div",null)),t("div",null,this.preview?t("div",{id:"galleryPreview"},t("div",{class:"body"},t("div",{class:"close",onClick:function(){e.handleImageClose()}},"X"),t("div",{class:"previous",onClick:function(){e.previous()}}),t("div",{class:"next",onClick:function(){e.next()}}),t("img-gallery-image",{src:this.CurrentImageUrl,alt:"Image"})),t("div",{class:"footer"},this.src?this.images.map(function(r,n){return t("img-gallery-image",{src:r,alt:"Image",onClick:function(t){e.handleImageOpen(t,n)}})}):this.images.map(function(r,n){return t("img-gallery-image",{src:r.src,alt:"Image",onClick:function(t){e.handleImageOpen(t,n)}})}))):null)]},Object.defineProperty(e,"is",{get:function(){return"img-gallery"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{color:{type:String,attr:"color"},CurrentImageUrl:{state:!0},images:{state:!0},preview:{state:!0},src:{type:"Any",attr:"src"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"*.sc-img-gallery{transition:all .3s ease-in-out;-webkit-transition:all .3s ease-in-out;-moz-transition:all .3s ease-in-out;-o-transition:all .3s ease-in-out;-ms-transition:all .3s ease-in-out}#photos.sc-img-gallery{line-height:0;-webkit-column-count:5;-webkit-column-gap:0;-moz-column-count:5;-moz-column-gap:0;column-count:5;column-gap:0;border-radius:5px}#photos.sc-img-gallery > img-gallery-image.sc-img-gallery{width:96%!important;height:auto!important;padding:2%;border-radius:10px;--img-gallery-image-border-radius:5px}#galleryPreview.sc-img-gallery{position:fixed;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;z-index:1000;height:100%;width:100%;top:0;left:0;background-color:rgba(0,0,0,.95)}#galleryPreview.sc-img-gallery > .body.sc-img-gallery{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:90%}#galleryPreview.sc-img-gallery > .body.sc-img-gallery > .close.sc-img-gallery{height:50px;width:50px;font-weight:700;font-family:sans-serif;cursor:pointer;font-size:20px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:100%;color:#000;background-color:rgba(255,255,255,1);-webkit-box-shadow:1px 1px 10px 0 rgba(0,0,0,.3);box-shadow:1px 1px 10px 0 rgba(0,0,0,.3);position:absolute;top:10px;right:10px}#galleryPreview.sc-img-gallery > .body.sc-img-gallery > .previous.sc-img-gallery{height:50%;width:100px;background-color:transparent;position:absolute;left:0}#galleryPreview.sc-img-gallery > .body.sc-img-gallery > .next.sc-img-gallery:hover, #galleryPreview.sc-img-gallery > .body.sc-img-gallery > .previous.sc-img-gallery:hover{-webkit-box-shadow:1px 1px 10px 0 rgba(255,255,255,.3);box-shadow:1px 1px 10px 0 rgba(255,255,255,.3);cursor:pointer}#galleryPreview.sc-img-gallery > .body.sc-img-gallery > .next.sc-img-gallery{height:50%;width:100px;background-color:transparent;position:absolute;right:0}#galleryPreview.sc-img-gallery > .body.sc-img-gallery > img-gallery-image.sc-img-gallery{width:auto;max-width:100%;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;max-height:100%}#galleryPreview.sc-img-gallery > .footer.sc-img-gallery{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;height:10%;overflow-x:auto}.sc-img-gallery::-webkit-scrollbar{width:10px;height:10px}.sc-img-gallery::-webkit-scrollbar-track{background:#f1f1f1}.sc-img-gallery::-webkit-scrollbar-thumb{background:#888}.sc-img-gallery::-webkit-scrollbar-thumb:hover{background:#555}#galleryPreview.sc-img-gallery > .footer.sc-img-gallery > img-gallery-image.sc-img-gallery{height:100%;width:auto}\@media (max-width:1200px){#photos.sc-img-gallery{-moz-column-count:4;-webkit-column-count:4;column-count:4}}\@media (max-width:1000px){#photos.sc-img-gallery{-moz-column-count:3;-webkit-column-count:3;column-count:3}}\@media (max-width:800px){#photos.sc-img-gallery{-moz-column-count:2;-webkit-column-count:2;column-count:2}#galleryPreview.sc-img-gallery > .body.sc-img-gallery > .next.sc-img-gallery, #galleryPreview.sc-img-gallery > .body.sc-img-gallery > .previous.sc-img-gallery{width:50px}}\@media (max-width:400px){#photos.sc-img-gallery{-moz-column-count:1;-webkit-column-count:1;column-count:1}}"},enumerable:!0,configurable:!0}),e}();e.ImgGallery=n,e.ImgGalleryImage=r,Object.defineProperty(e,"__esModule",{value:!0})});