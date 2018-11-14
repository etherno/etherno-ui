import styled from 'styled-components'
import {
  height,
  width,
  space,
  display,
  bgColor,
  border,
  borderRadius,
  fontSize,
  fontWeight,
} from 'styled-system'

const Button = styled.button`
  ${display}
  ${height}
  ${width}
  ${space}
  ${bgColor}
  ${border}
  ${borderRadius}
  ${fontSize}
  ${fontWeight}
  transition: all 0.15s ease;
  align-items: center;
  background-image: linear-gradient(to top, rgba(67, 90, 111, 0.04), rgba(255, 255, 255, 0.04));
  &:hover {
    transform: translateY(-2px);
    cursor: pointer;
    background-image: linear-gradient(to top, rgba(67, 90, 111, 0.06), rgba(67, 90, 111, 0.024));
  }
`

Button.propTypes = {
  ...display.propTypes,
  ...height.propTypes,
  ...width.propTypes,
  ...space.propTypes,
  ...bgColor.propTypes,
  ...border.PropTypes,
  ...borderRadius.PropTypes,
  ...fontSize.PropTypes,
}

Button.defaultProps = {
  display: 'inline-flex',
  bg: '#fff',
  height: '32px',
  p: '0 16px',
  border: '2px solid rgb(225, 228, 232)',
  borderRadius: '4px',
  fontSize: '12px',
  fontWeight: '500',
}

export default Button
