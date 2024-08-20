import { Pipe, PipeTransform } from '@angular/core';
import { Image } from '../../../models/products.model';

@Pipe({
  name: 'imageSize',
  standalone: true
})
export class ImageSizePipe implements PipeTransform {

  transform(image: Image): string {

    let imageUrl = image.desktop;

    if(window.innerWidth < 1000) {
      imageUrl = image.tablet;
    }

    if(window.innerWidth < 500) {
      imageUrl = image.mobile;
    }

    return imageUrl;
  }

}
