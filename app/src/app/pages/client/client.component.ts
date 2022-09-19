import {
  Component,
  OnInit
} from "@angular/core";

import { ClientService } from 'src/app/services/client.service';

import { IClients } from '../../../interface/client.interface';
import { ITotalClients, ITotalEnterprises } from '../../../interface/total.interface';

@Component({
  selector: "app-client",
  templateUrl: "./client.component.html",
  styleUrls: ["./client.component.scss"],
})

export class ClientComponent implements OnInit {
  public clients: IClients[];
  public totalInfo: ITotalEnterprises | ITotalClients;

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.getAllClients();
    this.getGeneralTotals();
  }

  getAllClients() {
    this.clientService.getAllClients()
      .subscribe((clients) => {
        try {
          this.clients = clients;
        } catch (err) {
          console.log(err);
        }
      });
  }

  searchClientsByName(name: string): void {
    const a = this.clientService.getClientsByName(name);
    this.clientService.getClientsByName(name)
      .subscribe((search) => {
        try {
          this.clients = search;
        } catch (err) {
          console.log(err);
        }
      });
  }

  chooseBySearchChange(search: string): void {
    return search ?
      this.searchClientsByName(search)
      : this.getAllClients();
  }

  getGeneralTotals() {
    this.clientService.getGeneralTotals()
      .subscribe((total) => {
        try {
          this.totalInfo = total;
        } catch (err) {
          console.log(err);
        }
      });
  }

  getById() {}

  getByName() {}

  getTotalsByCompany() {}
}
