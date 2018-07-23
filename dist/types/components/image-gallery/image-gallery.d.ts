import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
export declare class ImageGallery {
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
