import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import Winner from '../src/components/Winner.js';

describe('Winner', () => {
  it('Show winner if health is 0', () => {
    const testcase = shallow(<Winner />);
    expect(testcase.contains(["You Win!"])).to.equal(true);
  });
});
