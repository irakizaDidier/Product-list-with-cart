import { Pipe, PipeTransform } from '@angular/core';
import { ProductImage } from '../../../models/products.model';

@Pipe({
  name: 'imageSize',
})
export class ImageSizePipe implements PipeTransform {
  transform(image: ProductImage): string {
    let imageUrl = image.desktop;

    if (window.innerWidth < 1000) {
      imageUrl = image.tablet;
    }

    if (window.innerWidth < 500) {
      imageUrl = image.mobile;
    }

    return `/assets/${imageUrl}`;
  }
}
