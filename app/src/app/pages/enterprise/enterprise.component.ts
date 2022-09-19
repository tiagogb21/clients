import {
  Component,
  OnInit
} from "@angular/core";

import { EnterpriseService } from '../../services/enterprise.service';

import {
  IEnterprise,
  // IEnterpriseClient
} from '../../../interface/enterprise.interface';

@Component({
  selector: "app-enterprise",
  templateUrl: "./enterprise.component.html",
  styleUrls: ["./enterprise.component.scss"],
})

export class EnterpriseComponent implements OnInit {
  public enterprises: IEnterprise[];

  constructor(private enterpriseService: EnterpriseService) {}

  ngOnInit(): void {
    this.getEnterprises();
  }

  getEnterprises(): void {
    this.enterpriseService.getAll()
    .subscribe((enterprises) => {
        const getAllEnterprises = enterprises.reduce((acc, curr:any) => {
          // console.log(curr)
          curr = curr.enterprises.map((item) => ({
            clientName: curr.name,
            id: item._id,
            image: item.image_src,
            name: item.name,
            realties: item.realties,
          }))
          acc.push(...curr);
          return acc;
        }, []);
        this.enterprises = getAllEnterprises;
      });
  }

  searchEnterprises(name: string): void {
    this.enterpriseService.getByName(name)
      .subscribe(enterprises => {
        this.enterprises = enterprises;
      });
  }

  chooseBySearchChange(search: string): void {
    console.log(1);
    search ? this.searchEnterprises(search) : this.getEnterprises();
  }
}
