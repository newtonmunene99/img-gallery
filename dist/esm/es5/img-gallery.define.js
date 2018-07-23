// ImgGallery: Custom Elements Define Library, ES Module/ES5 Target
import { defineCustomElement } from './img-gallery.core.js';
import {
  ImgGallery,
  ImgGalleryImage
} from './img-gallery.components.js';

export function defineCustomElements(window, opts) {
  defineCustomElement(window, [
    ImgGallery,
    ImgGalleryImage
  ], opts);
}