import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme';
import Picker from './Picker'

function setup() {
  let props = {
    value: 'Home delivery',
    options: [ 'Home delivery', 'Collect in store' ],
    onChange: expect.createSpy()
  }

  const wrapper = shallow(<Picker {...props} />);

  return {
    props,
    wrapper
  }
}

describe('Picker', () => {
  it('should render correctly', () => {
    const { wrapper, props } = setup()

    expect(wrapper.type()).toBe('span');

    const h1 = wrapper.find('h1');
    const select = wrapper.find('select');

    expect(h1.type()).toBe('h1');
    expect(h1.text()).toBe(props.value);

    expect(select.type()).toBe('select');
    expect(select.props().value).toBe(props.value);
    expect(select.find('option').length).toBe(props.options.length);
  });

  it('should call onChange once', () => {
    const { wrapper, props } = setup();
    let select = wrapper.find('select');
    var e = {
      target: {
        value: 'Collect in store'
      }
    };
    select.props().onChange(e);
    expect(props.onChange.calls.length).toBe(1);
  });

  it('should call onChange with correct value', () => {
    const { wrapper, props } = setup();
    let select = wrapper.find('select');
    var e = {
      target: {
        value: 'Collect in store'
      }
    };
    select.props().onChange(e);
    expect(props.onChange).toHaveBeenCalledWith('Collect in store');
  });
})
