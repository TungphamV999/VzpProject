import { inject, Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from '../service/translation.service';

@Pipe({
  name: 'translation',
})
export class TranslationPipe implements PipeTransform {
  translationService = inject(TranslationService);
  transform(value: string, dictionary: Record<string, string>): any {
    return dictionary && dictionary[value];
  }
}
