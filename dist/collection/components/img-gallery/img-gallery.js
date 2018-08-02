import '../img-gallery-image/img-gallery-image';
export class ImgGallery {
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
    static get style() { return "/**style-placeholder:img-gallery:**/"; }
}
