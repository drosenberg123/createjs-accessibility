import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import * as createjs from 'createjs-module';
import { configure, mount } from 'enzyme';
import AccessibilityTranslator from './AccessibilityTranslator';

configure({ adapter: new Adapter() });

describe('AccessibilityTranslator', () => {
  let stage;
  let wrapper;
  let instance;

  beforeEach(() => {
    stage = new createjs.Stage('stage');
    wrapper = mount(<AccessibilityTranslator stage={stage} />);
    instance = wrapper.instance();
  });

  it('should throw error when root setter called without accessible property', () => {
    expect(() => {
      instance.root = {};
    }).toThrowError(/root of the accessibility tree/);
  });

  it('should not throw error when root setter called with accessible property', () => {
    expect(() => {
      instance.root = { accessible: {} };
    }).not.toThrowError(/root of the accessibility tree/);
  });
});