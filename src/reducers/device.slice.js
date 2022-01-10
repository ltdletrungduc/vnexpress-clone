import { createSlice } from '@reduxjs/toolkit'
import detectCurrentDevice from 'utils/detectCurrentDevice'

const device = createSlice({
  name: 'device',
  initialState: {
    device: detectCurrentDevice()
  },
  reducers: {
    detect(state) {
      state.device = detectCurrentDevice()
    }
  }
})

const deviceReducer = device.reducer
export const detectDevice = device.actions.detect
export default deviceReducer
