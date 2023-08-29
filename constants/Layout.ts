import { Dimensions, PixelRatio, Platform } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const SCREEN_DIMENSION = Dimensions.get('screen');

export default {
  window: {
    width,
    height,
    screen: SCREEN_DIMENSION
  },
  isSmallDevice: width < 380
};

const scale = SCREEN_DIMENSION.width / 360;

/**
 * @param {number} size
 */
export function actuatedNormalize(size: number) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize - 1.5));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize - 1.05));
  }
}