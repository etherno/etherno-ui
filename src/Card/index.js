import PropTypes from 'prop-types'
import styled from 'styled-components'
import { height, width, space, display } from 'styled-system'

const elevations = [
  '0px 1px 1px rgba(10, 31, 68, 0.08), 0px 0px 1px rgba(10, 31, 68, 0.08)',
  '0px 3px 4px rgba(10, 31, 68, 0.1), 0px 0px 1px rgba(10, 31, 68, 0.08)',
  '0px 8px 10px rgba(10, 31, 68, 0.1), 0px 0px 1px rgba(10, 31, 68, 0.08)',
  '0px 18px 18px rgba(10, 31, 68, 0.12), 0px 0px 1px rgba(10, 31, 68, 0.1)',
  '0px 26px 26px rgba(10, 31, 68, 0.12), 0px 0px 1px rgba(10, 31, 68, 0.1)',
]

const onHover = `
  &:hover {
    transform: translateY(-4px);
    cursor: pointer;
  }
`

const Card = styled.div`
  ${display}
  ${height}
  ${width}
  ${space}
  box-shadow: ${({ elevation }) => elevations[elevation]};
  transition: all 0.15s ease;
  ${({ onClick }) => onClick && onHover};
`

Card.propTypes = {
  ...display.propTypes,
  ...height.propTypes,
  ...width.propTypes,
  ...space.propTypes,
  elevation: PropTypes.number,
  onClick: PropTypes.func,
}

Card.defaultProps = {
  elevation: 0,
}

export default Card
