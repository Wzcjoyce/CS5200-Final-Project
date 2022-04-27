import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Manager } from 'src/app/common/manager';
import { ManagerService } from 'src/app/services/manager/manager.service';


@Component({
  selector: 'app-addmamager',
  templateUrl: './addmamager.component.html',
  styleUrls: ['./addmamager.component.css']
})
export class AddmamagerComponent implements OnInit {

  managers: Manager[];

  submit_status: string = "";

  constructor(private ManagerService: ManagerService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  AddManager()
  {

    const firstName : string = (<HTMLInputElement>document.getElementById("ManagerFirstName")).value;
    const lastName : string = (<HTMLInputElement>document.getElementById("ManagerLastName")).value;
    const Email: string = (<HTMLInputElement>document.getElementById("ManagerEmail")).value;
    const Gender : string = (<HTMLInputElement>document.getElementById("ManagerGender")).value;

    if(firstName && lastName && Gender && Email)
    {
      try{
        this.ManagerService.AddManagerFromInput(firstName, lastName, Email, Gender).subscribe(
        data => {
          this.managers = data;
        });

        window.location.reload();
        this.submit_status = "";
      }
      catch(err: unknown)
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
