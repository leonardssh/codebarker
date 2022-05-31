import { Validator } from '@codebarker/shared';

import { KataProps } from './Kata';
import { Solution } from './Solution';

export class KataValidator extends Validator<KataProps> {
  protected defineRules(): void {
    this.ruleFor('id', Validator.is.string, 'The id has to be of type String');
    this.ruleFor(
      'content',
      Validator.is.string,
      'Content has to be of type String'
    );
    this.ruleFor(
      'solution',
      (value) => Validator.is.instance(value, Solution),
      'The solution id should be of type String'
    );
  }
}
