import { Component, isStandalone } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

}
