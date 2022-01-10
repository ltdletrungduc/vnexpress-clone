import { isDesktop, isMobileOnly, isTablet } from 'react-device-detect'

function detectCurrentDevice() {
  if (isMobileOnly) {
    return 'mobile'
  }
  if (isTablet) {
    return 'tablet'
  }
  if (isDesktop) {
    return 'desktop'
  }
  return 'legacy'
}

export default detectCurrentDevice
