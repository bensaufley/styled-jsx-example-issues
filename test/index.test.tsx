import { expect } from 'chai';
import { mount } from 'enzyme';

import { default as Index } from '../pages/index';

describe('index', () => {
  it('works', () => {
    const wrapper = mount(<Index />);

    expect(wrapper).to.exist;
  });
});
