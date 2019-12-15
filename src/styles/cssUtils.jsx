export function alignProperty({ size, grid }) {
  const sizeBelow = size - (size % grid)
  const sizeAbove = sizeBelow + grid

  return size - sizeBelow < sizeAbove - size ? sizeBelow : sizeAbove
}

export function fontGrid({ lineHeight, pixels, htmlFontSize }) {
  return pixels / (lineHeight * htmlFontSize)
}

/**
 * generate a responsive version of a given CSS property
 *
 * @param {Object} params
 * @param {string} params.cssProperty - The CSS property to be made responsive
 * @param {number} params.min - The smallest value of the CSS property
 * @param {number} params.max - The largest value of the CSS property
 * @param {string} [params.unit] - The unit to be used for the CSS property
 * @param {Array.number} [params.breakpoints]  - An array of breakpoints
 * @param {number} [params.alignStep] - Round scaled value to fall under this grid
 * @returns {Object} responsive styles for {params.cssProperty}
 */
export function responsiveProperty({
  cssProperty,
  min,
  max,
  unit = 'rem',
  breakpoints = [600, 960, 1280],
  transform = null,
}) {
  const output = {
    [cssProperty]: `${min}${unit}`,
  }

  const factor = (max - min) / breakpoints[breakpoints.length - 1]
  breakpoints.forEach(breakpoint => {
    let value = min + factor * breakpoint

    if (transform !== null) {
      value = transform(value)
    }

    output[`@media (min-width:${breakpoint}px)`] = {
      [cssProperty]: `${Math.round(value * 10000) / 10000}${unit}`,
    }
  })

  return output
}
