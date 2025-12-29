import { Component, inject, input } from '@angular/core';
import { CardState } from './service/card-state';
import { Card } from "./component/card/card";
import { FeatureCardContent } from "./component/feature-card-content/feature-card-content";

@Component({
  selector: 'app-dashboard',
  imports: [Card, FeatureCardContent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {

}
