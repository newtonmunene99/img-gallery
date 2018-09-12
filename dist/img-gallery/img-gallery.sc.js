/*! Built with http://stenciljs.com */
const { h } = window.ImgGallery;

class ImgGalleryImage {
    componentDidLoad() {
        this.addIntersectionObserver();
    }
    componentWillUpdate() {
        if (this.src !== this.oldSrc) {
            this.addIntersectionObserver();
        }
        this.oldSrc = this.src;
    }
    handleImage() {
        const image = this.el.shadowRoot.querySelector('img');
        image.setAttribute('src', image.getAttribute('data-src'));
        image.onload = () => {
            image.removeAttribute('data-src');
        };
    }
    addIntersectionObserver() {
        if (!this.src) {
            return;
        }
        if ('IntersectionObserver' in window) {
            this.io = new IntersectionObserver((data) => {
                if (data[0].isIntersecting) {
                    this.handleImage();
                    this.removeIntersectionObserver();
                }
            });
            this.io.observe(this.el.shadowRoot.querySelector('img'));
        }
        else {
            setTimeout(() => {
                this.handleImage();
            }, 300);
        }
    }
    removeIntersectionObserver() {
        if (this.io) {
            this.io.disconnect();
            this.io = null;
        }
    }
    render() {
        return h("img", { class: "img_gallery_image", "data-src": this.src, alt: this.alt });
    }
    static get is() { return "img-gallery-image"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "alt": {
            "type": String,
            "attr": "alt"
        },
        "el": {
            "elementRef": true
        },
        "oldSrc": {
            "state": true
        },
        "src": {
            "type": String,
            "attr": "src"
        }
    }; }
    static get style() { return "\n.sc-img-gallery-image-h {\n  display: inline-block;\n}\nimg.sc-img-gallery-image {\n  max-width: var(--img-gallery-image-max-width, 100%);\n  max-height: var(--img-gallery-image-max-height, 100%);\n  width: var(--img-gallery-image-width);\n  height: var(--img-gallery-image-height);\n  border-radius: var(--img-gallery-image-border-radius, 0px);\n}\n"; }
}

class ImgGallery {
    constructor() {
        this.color = 'inherit';
    }
    handleImageOpen(event, index) {
        this.CurrentImageUrl = event.target.src;
        this.preview = true;
        this.currentIndex = index;
        document.querySelector('body').setAttribute('style', 'overflow: hidden;');
    }
    handlePreviewImage(event, index) {
        this.CurrentImageUrl = event.target.src;
        this.currentIndex = index;
    }
    next() {
        if (this.currentIndex < this.images.length - 1) {
            this.currentIndex++;
        }
        if (this.src) {
            this.CurrentImageUrl = this.images[this.currentIndex];
        }
        else {
            this.CurrentImageUrl = this.images[this.currentIndex].src;
        }
    }
    previous() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
        }
        if (this.src) {
            this.CurrentImageUrl = this.images[this.currentIndex];
        }
        else {
            this.CurrentImageUrl = this.images[this.currentIndex].src;
        }
    }
    handleImageClose() {
        this.CurrentImageUrl = null;
        this.preview = false;
        document.querySelector('body').setAttribute('style', 'overflow: auto;');
    }
    componentWillLoad() {
        if (this.src) {
            this.images = this.src;
        }
        else {
            let myImageGallery = document.querySelector('img-gallery');
            this.images = [].slice.call(myImageGallery.getElementsByTagName('img'));
        }
    }
    render() {
        return [
            h("div", null, !this.src && !this.images ? (h("div", null)) : (h("div", { id: "photos", style: { 'background-color': this.color, overflow: 'auto' } }, this.src
                ? this.images.map((image, index) => (h("img-gallery-image", { src: image, alt: "Image", onClick: event => {
                        this.handleImageOpen(event, index);
                    } })))
                : this.images.map((image, index) => (h("img-gallery-image", { src: image.src, alt: "Image", onClick: event => {
                        this.handleImageOpen(event, index);
                    } })))))),
            h("div", null, this.preview ? (h("div", { id: "galleryPreview" },
                h("div", { class: "body" },
                    h("div", { class: "close", onClick: () => {
                            this.handleImageClose();
                        } }, "X"),
                    h("div", { class: "previous", onClick: () => {
                            this.previous();
                        } }),
                    h("div", { class: "next", onClick: () => {
                            this.next();
                        } }),
                    h("img-gallery-image", { src: this.CurrentImageUrl, alt: "Image" })),
                h("div", { class: "footer" }, this.src
                    ? this.images.map((image, index) => (h("img-gallery-image", { src: image, alt: "Image", onClick: event => {
                            this.handleImageOpen(event, index);
                        } })))
                    : this.images.map((image, index) => (h("img-gallery-image", { src: image.src, alt: "Image", onClick: event => {
                            this.handleImageOpen(event, index);
                        } })))))) : null)
        ];
    }
    static get is() { return "img-gallery"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "color": {
            "type": String,
            "attr": "color"
        },
        "CurrentImageUrl": {
            "state": true
        },
        "images": {
            "state": true
        },
        "preview": {
            "state": true
        },
        "src": {
            "type": "Any",
            "attr": "src"
        }
    }; }
    static get style() { return "\n*.sc-img-gallery {\n  transition: all 0.3s ease-in-out;\n  -webkit-transition: all 0.3s ease-in-out;\n  -moz-transition: all 0.3s ease-in-out;\n  -o-transition: all 0.3s ease-in-out;\n  -ms-transition: all 0.3s ease-in-out;\n}\n#photos.sc-img-gallery {\n  line-height: 0;\n  -webkit-column-count: 5;\n  -webkit-column-gap: 0px;\n  -moz-column-count: 5;\n  -moz-column-gap: 0px;\n  column-count: 5;\n  column-gap: 0px;\n  border-radius: 5px;\n}\n\n#photos.sc-img-gallery    > img-gallery-image.sc-img-gallery {\n  width: 96% !important;\n  height: auto !important;\n  padding: 2%;\n  border-radius: 10px;\n  --img-gallery-image-border-radius: 5px;\n}\n\n\n\n#galleryPreview.sc-img-gallery {\n  position: fixed;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-flow: column nowrap;\n  flex-flow: column nowrap;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  z-index: 1000;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.95);\n}\n\n#galleryPreview.sc-img-gallery    > .body.sc-img-gallery {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -ms-flex-flow: row nowrap;\n  flex-flow: row nowrap;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  height: 90%;\n}\n\n#galleryPreview.sc-img-gallery    > .body.sc-img-gallery    > .close.sc-img-gallery {\n  height: 50px;\n  width: 50px;\n  font-weight: bold;\n  font-family: sans-serif;\n  cursor: pointer;\n  font-size: 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  border-radius: 100%;\n  color: black;\n  background-color: rgba(255, 255, 255, 1);\n  -webkit-box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.3);\n  box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.3);\n  position: absolute;\n  top: 10px;\n  right: 10px;\n}\n\n#galleryPreview.sc-img-gallery    > .body.sc-img-gallery    > .previous.sc-img-gallery {\n  height: 50%;\n  width: 100px;\n  background-color: transparent;\n  position: absolute;\n  left: 0;\n}\n\n#galleryPreview.sc-img-gallery    > .body.sc-img-gallery    > .previous.sc-img-gallery:hover, #galleryPreview.sc-img-gallery    > .body.sc-img-gallery    > .next.sc-img-gallery:hover {\n  -webkit-box-shadow: 1px 1px 10px 0px rgba(255, 255, 255, 0.3);\n  box-shadow: 1px 1px 10px 0px rgba(255, 255, 255, 0.3);\n  cursor: pointer;\n}\n\n#galleryPreview.sc-img-gallery    > .body.sc-img-gallery    > .next.sc-img-gallery {\n  height: 50%;\n  width: 100px;\n  background-color: transparent;\n  position: absolute;\n\n  right: 0;\n}\n\n#galleryPreview.sc-img-gallery    > .body.sc-img-gallery    > img-gallery-image.sc-img-gallery {\n  width: auto;\n  max-width: 100%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  max-height: 100%;\n}\n\n#galleryPreview.sc-img-gallery    > .footer.sc-img-gallery {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -ms-flex-flow: row nowrap;\n  flex-flow: row nowrap;\n  height: 10%;\n  overflow-x: auto;\n}\n\n.sc-img-gallery::-webkit-scrollbar {\n  width: 10px;\n  height: 10px;\n}\n\n.sc-img-gallery::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n.sc-img-gallery::-webkit-scrollbar-thumb {\n  background: #888;\n}\n\n.sc-img-gallery::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n\n#galleryPreview.sc-img-gallery    > .footer.sc-img-gallery    > img-gallery-image.sc-img-gallery {\n  height: 100%;\n  width: auto;\n}\n\n\@media (max-width: 1200px) {\n  #photos.sc-img-gallery {\n    -moz-column-count: 4;\n    -webkit-column-count: 4;\n    column-count: 4;\n  }\n}\n\@media (max-width: 1000px) {\n  #photos.sc-img-gallery {\n    -moz-column-count: 3;\n    -webkit-column-count: 3;\n    column-count: 3;\n  }\n}\n\@media (max-width: 800px) {\n  #photos.sc-img-gallery {\n    -moz-column-count: 2;\n    -webkit-column-count: 2;\n    column-count: 2;\n  }\n  #galleryPreview.sc-img-gallery    > .body.sc-img-gallery    > .previous.sc-img-gallery, #galleryPreview.sc-img-gallery    > .body.sc-img-gallery    > .next.sc-img-gallery {\n    width: 50px;\n  }\n}\n\@media (max-width: 400px) {\n  #photos.sc-img-gallery {\n    -moz-column-count: 1;\n    -webkit-column-count: 1;\n    column-count: 1;\n  }\n}\n"; }
}

export { ImgGallery, ImgGalleryImage };
