jest.unmock('../src/react-precache-img');

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import ReactPreCacheImg from '../src/react-precache-img';

describe('<ReactPreCacheImg />', () => {
  it('', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<ReactPreCacheImg />);
    const dom = renderer.getRenderOutput();
    expect(dom.props.PROPS_NAME).toEqual('TEXT');
  });
});
