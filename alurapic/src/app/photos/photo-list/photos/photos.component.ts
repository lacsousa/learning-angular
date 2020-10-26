import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Photo } from '../../photo/photo';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges {

  @Input() photosComponent: Photo[] = [];
  rows: any[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.photosComponent)
        // Esse photosComponent é atualizado com a inBound properties que tem
        // o mesmo nome que sofreu a mudança
      this.rows = this.groupColumns(this.photosComponent);
  }

  groupColumns(listaPhotos: Photo[]) {
    const newRows = [];

    for(let index = 0; index < listaPhotos.length; index+=3) {
      newRows.push(listaPhotos.slice(index, index + 3));
    }
    return newRows;
  }
}
