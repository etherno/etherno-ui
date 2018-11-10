import React from 'react'
import styled from 'styled-components'

import { Card } from '@etherno/ui'

const Container = styled.div`
  display: flex;
  padding: 4rem;
  flex-direction: column;
  text-align: center;
`

export default () => (
  <Container>
    <Card p={3} mb={3}>
      Default elevation
    </Card>
    <Card p={3} mb={3} elevation={1}>
      Elevation 1
    </Card>
    <Card p={3} mb={3} elevation={2}>
      Elevation 2
    </Card>
    <Card p={3} mb={3} elevation={3}>
      Elevation 3
    </Card>
    <Card p={3} mb={3} elevation={4}>
      Elevation 4
    </Card>
  </Container>
)
