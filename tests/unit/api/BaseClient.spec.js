import BaseClient from '@/api/BaseClient';

describe('BaseClient', () => {
  test('BasicAuth를 위한 String값을 반환한다', () => {
    const resultString = 'd2ViLWFwcDphYmNkMTIzNA==';
    const baseClient = new BaseClient();
    expect(baseClient.getBasicAuth()).toBe(resultString);
  });
});
