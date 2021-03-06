import '../../stencil.core';
import '../img-gallery-image/img-gallery-image';
export declare class ImgGallery {
    color: string;
    src: Array<any>;
    preview: Boolean;
    images: Array<any>;
    CurrentImageUrl: string;
    currentIndex: number;
    handleImageOpen(event: any, index: any): void;
    handlePreviewImage(event: any, index: any): void;
    next(): void;
    previous(): void;
    handleImageClose(): void;
    componentWillLoad(): void;
    render(): JSX.Element[];
}
