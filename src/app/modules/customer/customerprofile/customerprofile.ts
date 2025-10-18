import { Component } from '@angular/core';
import { UserDetailsResponseDto } from '../../../entity/UserDetailsResponseDto';
import { user } from '../../../services/user';


@Component({
  selector: 'app-customerprofile',
  standalone: false,
  templateUrl: './customerprofile.html',
  styleUrl: './customerprofile.css'
})
export class Customerprofile {


  user?: UserDetailsResponseDto;

  constructor(private userService: user) { }

  ngOnInit(): void {
    const userId = '39537e23-4563-49fa-a9a1-d3525ca1178f';
    this.userService.getUserProfile(userId).subscribe({
      next: (data) => this.user = data,
      error: (err) => console.error('Error fetching user', err)
    });
  }

}
