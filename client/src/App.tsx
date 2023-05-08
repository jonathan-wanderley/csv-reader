import { Box, Container, Heading, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

function App() {

  return (
    <>
      <Container maxW='2xl' bg='white' centerContent>
        <Box padding='4' bg='white' color='black' maxW='full'>
          
          <Heading as='h1' size='2xl' >
            Upload CSV to database
          </Heading>

          <Tabs marginTop='5' colorScheme='teal'>
            <TabList>
              <Tab>Database Settings</Tab>
              <Tab>File upload</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>

        </Box>
      </Container>
    </>
  )
}

export default App
