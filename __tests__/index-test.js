jest.unmock('../src/index');

import index from '../src/index';

describe('index', () => {
  it('references all components', () => {
    expect(typeof index).toBe('function');
  });
});
