import React from 'react'
import { Box, Card, Button } from '../dist'

export default () => (
  <div>
    <Box display="flex" p="4rem" flexDirection="column" textAlign="center">
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
    </Box>
    <Box display="flex" alignItems="end" px="4rem" flexWrap="wrap">
      <Button height="40px" p="0 20px" mr="1rem">
        Action
      </Button>
      <Button height="36px" p="0 18px" mr="1rem">
        Action
      </Button>
      <Button mr="1rem">Action</Button>
      <Button height="24px" p="0 12px">
        Action
      </Button>
    </Box>
  </div>
)
