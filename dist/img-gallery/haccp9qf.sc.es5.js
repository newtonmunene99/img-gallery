/*! Built with http://stenciljs.com */
ImgGallery.loadBundle("haccp9qf",["exports"],function(e){var t=window.ImgGallery.h,r=function(){function e(){}return e.prototype.componentDidLoad=function(){this.addIntersectionObserver()},e.prototype.componentWillUpdate=function(){this.src!==this.oldSrc&&this.addIntersectionObserver(),this.oldSrc=this.src},e.prototype.handleImage=function(){var e=this.el.shadowRoot.querySelector("img");e.setAttribute("src",e.getAttribute("data-src")),e.onload=function(){e.removeAttribute("data-src")}},e.prototype.addIntersectionObserver=function(){var e=this;this.src&&("IntersectionObserver"in window?(this.io=new IntersectionObserver(function(t){t[0].isIntersecting&&(e.handleImage(),e.removeIntersectionObserver())}),this.io.observe(this.el.shadowRoot.querySelector("img"))):setTimeout(function(){e.handleImage()},300))},e.prototype.removeIntersectionObserver=function(){this.io&&(this.io.disconnect(),this.io=null)},e.prototype.render=function(){return t("img",{"data-src":this.src,alt:this.alt})},Object.defineProperty(e,"is",{get:function(){return"img-gallery-image"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{alt:{type:String,attr:"alt"},el:{elementRef:!0},oldSrc:{state:!0},src:{type:String,attr:"src"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"[data-img-gallery-image-host]{display:block}img[data-img-gallery-image]{max-width:100%}"},enumerable:!0,configurable:!0}),e}();e.ImgGalleryImage=r,Object.defineProperty(e,"__esModule",{value:!0})});