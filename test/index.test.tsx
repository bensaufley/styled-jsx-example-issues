import { expect } from './support/test-helper';

import { mount } from 'enzyme';
import * as React from 'react';

import { default as Index } from '../pages/index';

describe('index', () => {
  it('works', () => {
    const wrapper = mount(<Index />);

    expect(wrapper).to.exist;
  });
});
