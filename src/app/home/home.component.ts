import { Component} from '@angular/core';
import { discussions } from 'src/assets/data/discussion';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  discussions = discussions
}
