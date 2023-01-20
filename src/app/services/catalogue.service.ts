import { Injectable } from '@angular/core';
import { Catalogue } from '../core/model/catalogue';
import data from '../mock/data.json';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  constructor() { }

  getCatalogue(): Catalogue[]{
    return data
  }
}
