jest.unmock('../src/react-precache-img');

import React from 'react';
import renderer from 'react-test-renderer';
import ReactPreCacheImg from '../src/react-precache-img';

describe('<ReactPreCacheImg />', () => {
  it('', () => {
    const component = renderer.create(
      <ReactPreCacheImg images={['foo.jpg', 'bar.jpg']} />
    );
    expect(component.props.images.length).toBe(2);
  });
});
