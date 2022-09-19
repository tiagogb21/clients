import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute,
  Router
} from '@angular/router';

import { ClientService } from 'src/app/services/client.service';
import { EnterpriseService } from 'src/app/services/enterprise.service';
import { IClients } from 'src/interface/client.interface';
import { IEnterpriseClient } from 'src/interface/enterprise.interface';
import { IParams } from 'src/interface/params.interface';
import { ITotalClients, ITotalEnterprises } from 'src/interface/total.interface';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.scss']
})

export class ClientInfoComponent implements OnInit {
  public client: IClients;
  public clientId: string;
  public totalInfo: ITotalEnterprises | ITotalClients;
  public enterprises: IEnterpriseClient[] | any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private clientService: ClientService,
    private enterpriseService: EnterpriseService,
  ) {
}

  ngOnInit(): void {
    this.getClient();
    this.getTotals();
    this.getEnterprises();
  }

  verifyParams(params: IParams): boolean {
    return params && params.id
  }

  getClient(): void {
    const getParams = () => this.activatedRoute.params;
    getParams().subscribe((params) => {
        if (this.verifyParams(params)) {
          this.clientId = params.id;

          this.getClientInfo();
        }
      });
  }

  getClientInfo(): void {
    this.clientService.getById(this.clientId).subscribe(client => {
        this.client = client;
      }, () => this.router.navigate(['client']));
  }

  getTotals(): void {
    this.clientService.getTotalsByClientEnterprises(this.clientId)
      .subscribe((total) => {
        this.totalInfo = total;
      });
  }

  getEnterprises(): void {
    this.clientService.getEnterprisesByClientId(this.clientId)
      .subscribe((enterprises) => {
        this.enterprises = enterprises;
      });
  }

  searchEnterprises(name: string): void {
    this.enterpriseService.getByNameAndClient(this.clientId, name)
      .subscribe(enterprises => {
        this.enterprises = enterprises.map(({ name, image_src, _id }) => ({
          name,
          image: image_src,
          id: _id,
        }));
      });
  }

  chooseBySearchChange(search: string): void {
    search ? this.searchEnterprises(search) : this.getEnterprises();
  }
}
