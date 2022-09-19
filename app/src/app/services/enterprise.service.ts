import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from 'rxjs';
import { IEnterprise, IEnterpriseClient } from '../../interface/enterprise.interface';

@Injectable()
export class EnterpriseService {
  private apiUrl = environment.api;

  constructor(private http: HttpClient) {}

  getAll(): Observable<IEnterprise[]> {
    const URL_ENTERPRISE = `${this.apiUrl}/enterprise`;
    return this.http.get<IEnterprise[]>(URL_ENTERPRISE);
  }

  getByName(name: string): Observable<IEnterpriseClient[]> {
    const URL_ENTERPRISE_BY_NAME = `${this.apiUrl}/enterprise/name/${name}`
    return this.http.get<IEnterpriseClient[]>(URL_ENTERPRISE_BY_NAME);
  }

  getByNameAndClient(clientId: string, name: string): Observable<IEnterpriseClient[]> {
    const URL_ENTERPRISE_BY_ID_AND_NAME = `${this.apiUrl}/clients/${clientId}/enterprise/name/${name}`;
    return this.http.get<IEnterpriseClient[]>(URL_ENTERPRISE_BY_ID_AND_NAME);
  }
}
