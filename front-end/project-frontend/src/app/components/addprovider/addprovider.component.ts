import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Provider } from 'src/app/common/provider';
import { ProviderService } from 'src/app/services/provider/provider.service';

@Component({
  selector: 'app-addprovider',
  templateUrl: './addprovider.component.html',
  styleUrls: ['./addprovider.component.css']
})
export class AddproviderComponent implements OnInit {

  providers: Provider[];

  submit_status: string = "";

  constructor(private ProviderService: ProviderService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  AddProvider()
  {

    const CompanyName : string = (<HTMLInputElement>document.getElementById("ProviderCompanyName")).value;
    const type : string = (<HTMLInputElement>document.getElementById("ProviderType")).value;
    const teamSize: string = (<HTMLInputElement>document.getElementById("ProviderTeamSize")).value;
    const quotedPrice : string = (<HTMLInputElement>document.getElementById("ProviderQuotedPrice")).value;
    const OfficialWebsite : string = (<HTMLInputElement>document.getElementById("ProviderOfficialWebsite")).value;
    const FrontEnd : string = (<HTMLInputElement>document.getElementById("ProviderFrontEnd")).value;
    const BackEnd: string = (<HTMLInputElement>document.getElementById("ProviderBackEnd")).value;
    const Data_analysis : string = (<HTMLInputElement>document.getElementById("ProviderDAtaAnalysis")).value;
    const UI : string = (<HTMLInputElement>document.getElementById("ProviderUI")).value;
    const Logo : string = (<HTMLInputElement>document.getElementById("ProviderLogo")).value;
    const Illustration: string = (<HTMLInputElement>document.getElementById("ProviderIllustration")).value;

    if(CompanyName && type && teamSize && quotedPrice && OfficialWebsite && FrontEnd && BackEnd && Data_analysis
        && UI && Logo && Illustration)
    {

      try{
        this.ProviderService.AddProviderFromInput(CompanyName, type, teamSize, quotedPrice, OfficialWebsite,
                                                FrontEnd, BackEnd, Data_analysis, UI, Logo, Illustration).subscribe(
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
      this.submit_status = "Failed to Add.  Please make sure that all entries are not empty.";

    }

  }

}
