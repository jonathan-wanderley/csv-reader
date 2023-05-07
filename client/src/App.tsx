import { Box, Container, Heading } from '@chakra-ui/react'

function App() {

  return (
    <>
      <Container maxW='2xl' bg='white' centerContent>
        <Box padding='4' bg='white' color='black' maxW='full'>
          
          <Heading as='h1' size='2xl' >
            Upload CSV to database
          </Heading>

        </Box>
      </Container>
    </>
  )
}

export default App
