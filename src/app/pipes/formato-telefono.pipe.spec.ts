import { FormatoTelefonoPipe } from './formato-telefono.pipe';

describe('FormatoTelefonoPipe', () => {
  let pipe: FormatoTelefonoPipe;

  beforeEach(() => {
    pipe = new FormatoTelefonoPipe();
  });

  it('should format a phone number correctly', () => {
    const formattedPhone = pipe.transform('912345678');
    expect(formattedPhone).toBe('+569 1234 5678');
  });

  it('should return the original value if the phone number is not 10 digits', () => {
    const originalValue = '12345';
    const result = pipe.transform(originalValue);
    expect(result).toBe(originalValue);
  });

  it('should return an empty string if no value is provided', () => {
    const result = pipe.transform('');
    expect(result).toBe('');
  });
  
});
