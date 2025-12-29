import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CardState {
  private readonly _isCollapsed = signal(false);
  isCollapsed = this._isCollapsed.asReadonly();

  toggleCollapsed(): void {

    this._isCollapsed.update((isCollapsed) => !isCollapsed);
  }
}
