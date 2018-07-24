export class ImgGalleryImage {
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
    static get style() { return "/**style-placeholder:img-gallery-image:**/"; }
}
