import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DashboardStats, Plant } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:3000/api';

  getUserDashboard(): Observable<any> {
    return this.http.get(`${this.baseUrl}/dashboard`);
  }

  addUserPlant(plantData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/dashboard/add-plant`, plantData);
  }

  getAdminStats(): Observable<DashboardStats> {
    return this.http.get<DashboardStats>(`${this.baseUrl}/admin-dashboard`);
  }

  getAllOrders(): Observable<any> {
    return this.http.get(`${this.baseUrl}/orders/admin/all`);
  }
}
