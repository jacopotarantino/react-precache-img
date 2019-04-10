jest.unmock('../src/PreCacheImgDemo');

import React from 'react';
import renderer from 'react-test-renderer';
import PreCacheImgDemo from '../src/PreCacheImgDemo';

describe('<PreCacheImgDemo />', () => {
  it('should render', () => {
    const component = renderer.create(<PreCacheImgDemo />);
    expect(component).toBeDefined();
  });
});
