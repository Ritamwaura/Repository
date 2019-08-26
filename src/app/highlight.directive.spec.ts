import { HighlightDirective } from './highlight.directive';

describe('HighlightDirective', () => {
  it('should create an instance', () => {
    const directive = newFunction();
    expect(directive).toBeTruthy();
  });
});
function newFunction() {
  return new HighlightDirective();
}

