import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { TranslationService } from './service/translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  dictionary!: Record<string, string>;
  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    this.getDictionary();
  }

  getDictionary(lang = 'cz'): void {
    this.translationService
      .getProductionLineData(lang)
      .subscribe((data) => (this.dictionary = data));
  }
}
