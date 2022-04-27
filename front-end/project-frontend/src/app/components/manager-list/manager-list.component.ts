import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Manager } from 'src/app/common/manager';
import { ManagerService } from 'src/app/services/manager/manager.service';


@Component({
  selector: 'app-manager-list',
  templateUrl: './manager-list-table.component.html',
  styleUrls: ['./manager-list.component.css']
})
export class ManagerListComponent implements OnInit {

  managers: Manager[];
  Mode: string = "show";
  currentManagerId: number;



  constructor(private ManagerService: ManagerService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {


    this.listManager();
  }

  listManager()
  {
    const hasId: boolean = this.route.snapshot.paramMap.has('id');


    if(hasId)
    {
      this.currentManagerId = +this.route.snapshot.paramMap.get('id');
      
      this.ManagerService.getManagerById(this.currentManagerId ).subscribe(
        data => {
          this.managers = data;
        }
        
      )
    }
    else
    {

      this.GetAllManagers();
    
    }

  }



  GetAllManagers()
  {
    this.ManagerService.getManagerList().subscribe(
      data => {
        this.managers = data;
      }
      
    )
  
  }

  Switch_to_showMode()
  {

    this.Mode = "show";
    this.GetAllManagers();
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
