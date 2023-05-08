import { Box, Container, Heading, Tabs, TabList, TabPanels, Tab, TabPanel, Input, Stack, useRadioGroup, HStack } from '@chakra-ui/react'
import RadioCard from './components/RadioCard'

function App() {
  const databaseOptions = ['PostgreSQL', 'MySQL']

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'database',
    defaultValue: 'PostgreSQL',
    onChange: console.log,
  })

  const dbGroup = getRootProps()

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
                
                <HStack marginTop='5' {...dbGroup}>
                  {databaseOptions.map((value) => {
                    const radio = getRadioProps({ value })
                    return (
                      <RadioCard key={value} {...radio}>
                        {value}
                      </RadioCard>
                    )
                  })}
                </HStack>
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
