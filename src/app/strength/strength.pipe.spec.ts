import { StrengthPipe } from "./strength.pipe";

describe('StrengthPipe', () => {
  it('should display weak if strength is 5', () => {
    let pipe = new StrengthPipe();

    expect(pipe.transform(5)).toEqual('5 (weak)');
  });

  it('should display strong if strength is 11', () => {
    let pipe = new StrengthPipe();

    expect(pipe.transform(11)).toEqual('11 (strong)');
  });

  it('should display unbelievable if strength is 21', () => {
    let pipe = new StrengthPipe();

    expect(pipe.transform(21)).toEqual('21 (unbelievable)');
  });
});
