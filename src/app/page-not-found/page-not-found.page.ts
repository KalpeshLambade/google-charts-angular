import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.page.html',
  styleUrls: ['./page-not-found.page.scss'],
})
export class PageNotFoundPage  {

  constructor(
    private location : Location
  ) { }

  goBack(): void {
    this.location.back();
  }
}
