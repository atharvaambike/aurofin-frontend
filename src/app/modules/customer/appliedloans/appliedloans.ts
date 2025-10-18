import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppliedLoanApplications } from '../../../entity/AppliedLoanApplications';
import { HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-appliedloans',
  standalone: false,
  templateUrl: './appliedloans.html',
  styleUrl: './appliedloans.css'
})
export class Appliedloans implements OnInit {
  appliedLoans: AppliedLoanApplications[] = [];
  customerId = localStorage.getItem('customerId') || ''; 

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchAppliedLoans();
  }

  

fetchAppliedLoans(page: number = 0, size: number = 1): void {
  const params = new HttpParams()
    .set('page', page.toString())
    .set('size', size.toString());

  this.http.get<AppliedLoanApplications[]>(`http://localhost:8080/loan-app/customer/${this.customerId}/loans/application`, { params })
    .subscribe({
      next: (res) => this.appliedLoans = res,
      error: (err) => console.error('Error fetching applied loans:', err)
    });
}

}