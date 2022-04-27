import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Provider } from 'src/app/common/provider';
import { ProviderService } from 'src/app/services/provider/provider.service';

@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list-table.component.html',
  styleUrls: ['./provider-list.component.css']
})
export class ProviderListComponent implements OnInit {

  providers: Provider[];
  currentProviderId: number;
  Mode: string = "show";

  constructor(private ProviderService: ProviderService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.listProvider();
  }

  listProvider()
  {
    const hasId: boolean = this.route.snapshot.paramMap.has('id');


    if(hasId)
    {
      this.currentProviderId = +this.route.snapshot.paramMap.get('id');
      
      this.ProviderService.getProviderById(this.currentProviderId ).subscribe(
        data => {
          this.providers = data;
        }
        
      )
    }
    else
    {

      this.GetAllProviders();
    
    }

  }

  GetAllProviders()
  {
    this.ProviderService.getProviderList().subscribe(
      data => {
        this.providers = data;
      }
      
    )
  
  }

  Switch_to_showMode()
  {

    this.Mode = "show";
    this.GetAllProviders();
  }

  Switch_to_addMode()
  {

    this.Mode = "add";
  }

  Switch_to_deleteMode()
  {

    this.Mode = "delete";
  }

  Switch_to_modifyMode()
  {

    this.Mode = "modify";
  }



}
