import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  static SearchType: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  doSearch(value: string)
  {

      // console.log(`value=${value}`);
      // console.log(`${SearchComponent.SearchType}`);
      this.router.navigateByUrl(`api/${SearchComponent.SearchType}/getbyid/${value}`);

  }

}
