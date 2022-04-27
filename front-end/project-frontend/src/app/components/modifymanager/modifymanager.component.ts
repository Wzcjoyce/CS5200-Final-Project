import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Manager } from 'src/app/common/manager';
import { ManagerService } from 'src/app/services/manager/manager.service';

@Component({
  selector: 'app-modifymanager',
  templateUrl: './modifymanager.component.html',
  styleUrls: ['./modifymanager.component.css']
})
export class ModifymanagerComponent implements OnInit {

  managers: Manager[];

  submit_status: string = "";

  constructor(private ManagerService: ManagerService) { }

  ngOnInit(): void {
  }

  ModifyManager()
  {

    const manager_id : string = (<HTMLInputElement>document.getElementById("modifyManagerid")).value;
    const firstName : string = (<HTMLInputElement>document.getElementById("ManagerFirstName")).value;
    const lastName : string = (<HTMLInputElement>document.getElementById("ManagerLastName")).value;
    const Email: string = (<HTMLInputElement>document.getElementById("ManagerEmail")).value;
    const Gender : string = (<HTMLInputElement>document.getElementById("ManagerGender")).value;

    if(manager_id && firstName && lastName && Gender && Email)
    {
      try{
        this.ManagerService.ModifyManagerFromInput(manager_id, firstName, lastName, Email, Gender).subscribe(
        data => {
          this.managers = data;
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
      this.submit_status = "Failed to Modify.  Please make sure that all entries are not empty.";
    }


  }

}
