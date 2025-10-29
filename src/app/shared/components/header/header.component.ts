import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faChevronDown, faUser } from '@fortawesome/free-solid-svg-icons';
import { SidebarStore } from '../../stores/sidebar/sidebar.store';

@Component({
  selector: 'app-header',
  imports: [FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  get name() {
    return localStorage.getItem('username') || '';
  }

  
  store = inject(SidebarStore);

  icons: any = {
    menu: faBars,
    user: faUser,
    down: faChevronDown,
  };
}
