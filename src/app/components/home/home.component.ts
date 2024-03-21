import { Component } from '@angular/core';
import HospitalComponent from '../hospital/hospital.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [RouterOutlet, RouterLink, RouterLinkActive]
})
export default class HomeComponent {

}
