import { Component, OnInit } from '@angular/core';
import { UpdatedEmployeeResponseDto } from '../../../entity/UpdatedEmployeeResponseDto';
import { AddressResponseDto } from '../../../entity/AddressResponseDto';
import { UpdateEmployeeDetailsDto } from '../../../entity/UpdateEmployeeDetailsDto';
import { AddressDto } from '../../../entity/AddressDto';
import { ManagerService } from '../../../services/manager-service';

@Component({
  selector: 'app-manager-profile',
  standalone: false,
  templateUrl: './manager-profile.html',
  styleUrl: './manager-profile.css'
})
export class ManagerProfile implements OnInit {
  employeeId: string | null = null;

  // Profile data - These should be single objects, NOT arrays
  profileDetails: UpdatedEmployeeResponseDto = {
    firstName: '',
    middleName: '',
    lastName: '',
    mobile: '',
    gender: ''
  };

  addressDetails: AddressResponseDto = {
    street: '',
    area: '',
    city: '',
    pincode: ''
  };

  // Edit mode flags
  editingDetails = false;
  editingAddress = false;

  // Form data for editing - These should also be single objects, NOT arrays
  detailsForm: UpdateEmployeeDetailsDto = {
    firstName: '',
    middleName: '',
    lastName: '',
    mobile: '',
    gender: ''
  };

  addressForm: AddressDto = {
    street: '',
    area: '',
    city: '',
    pincode: ''
  };

  // Loading and error states
  loadingDetails = false;
  loadingAddress = false;
  errorMessage = '';
  successMessage = '';

  constructor(private managerService: ManagerService) { }

  ngOnInit(): void {
    this.employeeId = this.managerService.getEmployeeId();
    if (!this.employeeId) {
      this.errorMessage = 'Employee ID not found. Please login again.';
    }
  }

  // Toggle edit mode for details
  toggleEditDetails(): void {
    if (!this.editingDetails) {
      this.detailsForm = { ...this.profileDetails };
    }
    this.editingDetails = !this.editingDetails;
    this.clearMessages();
  }

  // Toggle edit mode for address
  toggleEditAddress(): void {
    if (!this.editingAddress) {
      this.addressForm = { ...this.addressDetails };
    }
    this.editingAddress = !this.editingAddress;
    this.clearMessages();
  }

  // Update employee details
  updateDetails(): void {
    if (!this.employeeId) return;

    this.loadingDetails = true;
    this.clearMessages();

    this.managerService.updateEmployeeDetails(this.employeeId, this.detailsForm).subscribe({
      next: (response) => {
        this.profileDetails = response;
        this.editingDetails = false;
        this.loadingDetails = false;
        this.successMessage = 'Profile details updated successfully!';
        setTimeout(() => this.clearMessages(), 3000);
      },
      error: (error) => {
        this.loadingDetails = false;
        this.errorMessage = 'Failed to update profile details. Please try again.';
        console.error('Error updating details:', error);
      }
    });
  }

  // Update address
  updateAddress(): void {
    if (!this.employeeId) return;

    this.loadingAddress = true;
    this.clearMessages();

    this.managerService.updateAddress(this.employeeId, this.addressForm).subscribe({
      next: (response) => {
        this.addressDetails = response;
        this.editingAddress = false;
        this.loadingAddress = false;
        this.successMessage = 'Address updated successfully!';
        setTimeout(() => this.clearMessages(), 3000);
      },
      error: (error) => {
        this.loadingAddress = false;
        this.errorMessage = 'Failed to update address. Please try again.';
        console.error('Error updating address:', error);
      }
    });
  }

  // Cancel editing
  cancelEdit(type: 'details' | 'address'): void {
    if (type === 'details') {
      this.editingDetails = false;
      this.detailsForm = { ...this.profileDetails };
    } else {
      this.editingAddress = false;
      this.addressForm = { ...this.addressDetails };
    }
    this.clearMessages();
  }

  // Clear messages
  clearMessages(): void {
    this.errorMessage = '';
    this.successMessage = '';
  }
}