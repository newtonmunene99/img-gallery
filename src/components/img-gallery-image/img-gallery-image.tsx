import { Component, Element, Prop, State } from '@stencil/core';

@Component({
  tag: 'img-gallery-image',
  styleUrl: 'img-gallery-image.css',
  shadow: true
})
export class ImgGalleryImage {
  @Element() el: HTMLElement;

  @Prop() src: string;
  @Prop() alt: string;

  @State() oldSrc: string;

  io: IntersectionObserver;

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
    const image: HTMLImageElement = this.el.shadowRoot.querySelector('img');
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
      this.io = new IntersectionObserver((data: any) => {
        if (data[0].isIntersecting) {
          this.handleImage();
          this.removeIntersectionObserver();
        }
      });

      this.io.observe(this.el.shadowRoot.querySelector('img'));
    } else {
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
    return <img data-src={this.src} alt={this.alt} />;
  }
}
