import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Catalogue } from 'src/app/core/model/catalogue';
import { CatalogueService } from 'src/app/services/catalogue.service';

@Component({
  selector: 'front-page-design',
  templateUrl: './front-page-design.component.html',
  styleUrls: ['./front-page-design.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FrontPageDesignComponent implements OnInit {

  constructor(private catalogueService: CatalogueService) { }
  cards: Array<string> = ["1", "2", "3", "4", "5"];
  cardSelected: string = "";
  data: Array<Catalogue> = [];
  dataCopy:Array<Catalogue> = [];
  type: number = 0;
  designSelected = {} as Catalogue;

  ngOnInit(): void {
    this.data = this.catalogueService.getCatalogue();
  }

  selectDesign(data: Catalogue){
    this.cardSelected = data.imageUrl;
  }

  filter(type: number){
    this.changeStyleStateButton();
    this.type = type;
    this.dataCopy = this.data.filter(x => x.type == type.toString());
  }

  changeStyleStateButton(){
    // $('button')
  }

}
