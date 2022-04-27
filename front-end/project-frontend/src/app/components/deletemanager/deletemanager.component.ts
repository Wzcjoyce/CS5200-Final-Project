import { Component, OnInit } from '@angular/core';
import { Manager } from 'src/app/common/manager';
import { ManagerService } from 'src/app/services/manager/manager.service';

@Component({
  selector: 'app-deletemanager',
  templateUrl: './deletemanager.component.html',
  styleUrls: ['./deletemanager.component.css']
})
export class DeletemanagerComponent implements OnInit {

  managers: Manager[];

  submit_status: string = "";

  constructor(private ManagerService: ManagerService) { }

  ngOnInit(): void {
  }

  DeleteCustomer()
  {
    const manager_id : string = (<HTMLInputElement>document.getElementById("DeleteManager_id")).value;

    if(manager_id)
    {
      try{
        this.ManagerService.DeleteManagerFromInput(manager_id).subscribe(
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
      this.submit_status = "Failed to Delete.  Please make sure that all entries are not empty.";
    }


  }

}
