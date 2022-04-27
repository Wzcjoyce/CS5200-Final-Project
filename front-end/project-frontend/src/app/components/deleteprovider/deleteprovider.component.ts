import { Component, OnInit } from '@angular/core';
import { Provider } from 'src/app/common/provider';
import { ProviderService } from 'src/app/services/provider/provider.service';

@Component({
  selector: 'app-deleteprovider',
  templateUrl: './deleteprovider.component.html',
  styleUrls: ['./deleteprovider.component.css']
})
export class DeleteproviderComponent implements OnInit {

  providers: Provider[];

  submit_status: string = "";

  constructor(private ProviderService: ProviderService) { }

  ngOnInit(): void {
  }

  DeleteProvider()
  {
    const provider_id : string = (<HTMLInputElement>document.getElementById("DeleteProvider_id")).value;

    if(provider_id)
    {
      try{
      this.ProviderService.DeleteProviderFromInput(provider_id).subscribe(
        data => {
          this.providers = data;
        });

        window.location.reload();

        this.submit_status = "";
      }
      catch(err : unknown)
      {
        this.submit_status = "Failed due to bad connection to the backend";
      }
    }
    else
    {
      this.submit_status = "Failed to Delete.  Please make sure that all entries are not empty.";
    }


  }

}
