import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  translations!: Record<string, string>;
  translations$ = new BehaviorSubject<Record<string, string> | undefined>(
    undefined
  );
  constructor(private http: HttpClient) {}

  getProductionLineData(lang: string): Observable<Record<string, string>> {
    return this.http.get<Record<string, string>>(`assets/${lang}.json`).pipe(
      tap((data) => {
        this.translations = data;
        this.translations$.next(data);
      })
    );
  }
}
