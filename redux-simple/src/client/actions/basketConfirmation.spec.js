import expect from 'expect';
import { selectAvailabilityOption } from './basketConfirmation';
import { SELECT_AVAILABILITY_OPTION } from './types';

describe('actions', () => {
  it('should create an action to select availability option', () => {
    const availabilityOption = 'Home delivery';
    const expectedAction = {
      type: SELECT_AVAILABILITY_OPTION,
      availabilityOption
    };
    expect(selectAvailabilityOption(availabilityOption)).toEqual(expectedAction);
  });
});
