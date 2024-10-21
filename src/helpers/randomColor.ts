/**
 * From https://github.com/mrmrs/random-oklch-color
 */
export function randomOkLCHColor(
  minL = 40,
  maxL = 70,
  minC = 0,
  maxC = 132,
  minH = 0,
  maxH = 360,
  minAlpha = 0,
  maxAlpha = 1
): [string, number, string, string] {
  const randomValue = (min: number, max: number) => {
    if (max <= 1) {
      return Math.random() * (max - min) + min;
    } else {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  };

  const formatPercentage = (value: number) => {
    if (value === 0) return '0%';
    return value.toFixed(2).replace(/\.?0+%?$/, '%');
  };

  const formatDegrees = (value: number) => {
    if (value === 0) return '0';
    return value.toFixed(0) + 'deg';
  };

  const lightness = formatPercentage(randomValue(minL, maxL));
  const chroma = randomValue(minC, maxC);
  const hue = formatDegrees(randomValue(minH, maxH));
  const alpha = formatPercentage(randomValue(minAlpha, maxAlpha));

  return [lightness, chroma, hue, alpha];
}
