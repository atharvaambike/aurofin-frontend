import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppliedLoanApplications } from '../../../entity/AppliedLoanApplications';

@Component({
  selector: 'app-appliedloans',
  standalone: false,
  templateUrl: './appliedloans.html',
  styleUrl: './appliedloans.css'
})
export class Appliedloans implements OnInit {
  appliedLoans: AppliedLoanApplications[] = [];
  userId = localStorage.getItem('userId') || ''; 

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchAppliedLoans();
  }

  fetchAppliedLoans() {
    this.http.get<AppliedLoanApplications[]>(`http://localhost:8080/loan-app/applications/${this.userId}`)
      .subscribe({
        next: (res) => this.appliedLoans = res,
        error: (err) => console.error('Error fetching applied loans:', err)
      });
  }
}