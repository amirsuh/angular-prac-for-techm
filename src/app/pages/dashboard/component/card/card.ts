import { Component, inject, input } from '@angular/core';
import { CardState } from '../../service/card-state';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
  providers:[CardState]
})
export class Card {
private readonly state = inject(CardState);

  title = input.required<string>();

  isCollapsed = this.state.isCollapsed;

  toggleCollapse = () => this.state.toggleCollapsed();
}
