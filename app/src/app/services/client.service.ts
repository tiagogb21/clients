import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import { environment } from "../../environments/environment";

import { IClients } from '../../interface/client.interface';
import { ITotalClients, ITotalEnterprises } from 'src/interface/total.interface';
import { IEnterprise } from 'src/interface/enterprise.interface';

@Injectable()
export class ClientService {
  private CLIENT_URL = `${ environment.api }`;

  constructor(private http: HttpClient) {}

  getAllClients(): Observable<IClients[]> {
    const URL_CLIENTS = `${ this.CLIENT_URL }/clients`;
    return this.http.get<IClients[]>(URL_CLIENTS);
  }

  getClientsByName(name: string): Observable<IClients[]> {
    const URL_CLIENTS_BY_NAME = `${ this.CLIENT_URL }/clients/name/${name}`;
    return this.http.get<IClients[]>(URL_CLIENTS_BY_NAME);
  }

  getGeneralTotals() {
    const URL_TOTAL = `${ this.CLIENT_URL }/totals`;
    return this.http.get<ITotalClients>(URL_TOTAL);
  }

  getById(id: string): Observable<IClients> {
    const URL_CLIENT_ID = `${this.CLIENT_URL}/clients/${id}`;
    return this.http.get<IClients>(URL_CLIENT_ID);
  }

  getTotalsByClientEnterprises(clientId: string): Observable<ITotalEnterprises> {
    const URL_CLIENT_ID_TOTAL =`${this.CLIENT_URL}/clients/${ clientId }/totals`;
    return this.http.get<IClients>(URL_CLIENT_ID_TOTAL);
  }

  getEnterprisesByClientId(clientId: string): Observable<IEnterprise> {
    const URL_CLIENT_ID = `${this.CLIENT_URL}/clients/${clientId}/enterprise`;
    return this.http.get<IEnterprise>(URL_CLIENT_ID);
  }
}
