import { Box, Container, Heading, Tabs, TabList, TabPanels, Tab, TabPanel, Input, Stack } from '@chakra-ui/react'

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
                <Stack>
                  <Input type='text' placeholder='Database Host' />
                  <Input type='number' placeholder='Database Port' />
                  <Input type='text' placeholder='Database Username' />
                  <Input type='text' placeholder='Database Password' />
                  <Input type='text' placeholder='Database name' />
                </Stack>
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
