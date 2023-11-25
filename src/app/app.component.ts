import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
onLogout() {
throw new Error('Method not implemented.');
}
  title = 'MesVols';
  constructor (public authService: AuthService) {}
}
