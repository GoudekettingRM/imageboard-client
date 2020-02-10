import React, { Component } from "react";

export default class ImagesList extends Component {
  render() {
    console.log("Render of image list", this.props);

    if (this.props.images.length === 0) {
      return <div>No Images to show!</div>;
    }
    return (
      <div>
        I am the image list!
        {this.props.images.length > 0 &&
          this.props.images.map((image, i) => {
            const { url, title } = image;

            return (
              <div key={i}>
                <h3>{title}</h3>
                <img src={url} alt={title} title={title} />
              </div>
            );
          })}
      </div>
    );
  }
}
