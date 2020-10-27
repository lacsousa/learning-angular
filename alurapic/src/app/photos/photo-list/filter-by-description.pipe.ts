import { Pipe, PipeTransform} from '@angular/core';

import { Photo } from '../photo/photo';

@Pipe({name : 'filterByDescription'})
export class FilterByDescription implements PipeTransform{

  transform(photosPipe: Photo[], descriptionQuery: string) {

    descriptionQuery = descriptionQuery
      .trim()
      .toLowerCase();

    if(descriptionQuery){
      return photosPipe.filter(photo =>
          photo.description.toLowerCase()
          .includes(descriptionQuery));
    }else{
      return photosPipe;
    }
  }

}
