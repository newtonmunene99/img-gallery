import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'image-gallery-img',
  styleUrl: 'image-gallery-img.css',
  shadow: true
})
export class ImageGalleryImg {
  @Prop() comment: string;
  @Prop() link: string;
  @Prop() src: string = './example/2.jpg';
  @Prop() color: string = 'rebeccapurple';
  render() {
    return (
      <div id="main">
        {this.comment ? (
          <div
            id="image-comment-div"
            style={{ 'background-color': this.color }}
          >
            <div id="image-comment">
              <img src={this.src} alt="Image" />
            </div>
            <div id="comment">
              <p>{this.comment}</p>
            </div>
          </div>
        ) : (
          <img src={this.src} alt="Image" />
        )}
      </div>
    );
  }
}
