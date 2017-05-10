import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import Attack from '../src/components/Attack.js';

describe('Attack', () => {
  it('should contain punch buttons', () => {
    const testcase = shallow(<Attack />)
    expect(testcase.contains(["Punch"])).to.equal(true);
  });
});
