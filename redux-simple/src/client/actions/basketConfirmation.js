import { SELECT_AVAILABILITY_OPTION } from './types'

export const selectAvailabilityOption = (availabilityOption) => {
  return {
    type: SELECT_AVAILABILITY_OPTION,
    availabilityOption
  }
}
