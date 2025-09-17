import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LoginModel } from '../models/login.model';
import { ApiResponse } from '../../../shared/utils/api-response.model';
import { Observable } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = inject(ApiService);

  login(model: LoginModel): Observable<ApiResponse<LoginModel>> {
    const url = this.baseUrl.url;
    const request = this.http.post<ApiResponse<LoginModel>>(url, model);

    return request;
  }
}