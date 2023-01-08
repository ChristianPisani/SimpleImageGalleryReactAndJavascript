import React, { Component } from 'react';
import {ImageGallery} from "./ImageGallery";

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
          <ImageGallery />
      </div>
    );
  }
}
