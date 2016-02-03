import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Picker from './Picker'

function setup() {
  let props = {
    value: 'Home delivery',
    options: [ 'Home delivery', 'Collect in store' ],
    onChange: expect.createSpy()
  }

  let renderer = TestUtils.createRenderer()
  renderer.render(<Picker {...props} />)
  let output = renderer.getRenderOutput()

  return {
    props,
    output,
    renderer
  }
}

describe('Picker', () => {
  it('should render correctly', () => {
    const { output } = setup()

    expect(output.type).toBe('span')

    let [ h1, select ] = output.props.children

    expect(h1.type).toBe('h1')
    expect(h1.props.children).toBe('Home delivery')

    expect(select.type).toBe('select')
    expect(select.props.value).toBe('Home delivery')
  });

  it('should call onChange once', () => {
    const { output, props } = setup();
    let select = output.props.children[1];
    var e = {
      target: {
        value: 'Collect in store'
      }
    };
    select.props.onChange(e);
    expect(props.onChange.calls.length).toBe(1);
  });

  it('should call onChange with correct value', () => {
    const { output, props } = setup();
    let select = output.props.children[1];
    var e = {
      target: {
        value: 'Collect in store'
      }
    };
    select.props.onChange(e);
    expect(props.onChange).toHaveBeenCalledWith('Collect in store');
  });
})
