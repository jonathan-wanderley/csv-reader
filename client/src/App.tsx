import { Box, Container, Heading, Tabs, TabList, TabPanels, Tab, TabPanel, Input, Stack, useRadioGroup, HStack, Text, Button } from '@chakra-ui/react'
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
        <Box padding='8' bg='white' color='black' maxW='full' shadow='md' borderRadius='10px'>
          
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
                  <Text fontSize='2xl' >Database credencials:</Text>
                  <Input type='text' placeholder='Database Host' />
                  <Input type='number' placeholder='Database Port' />
                  <Input type='text' placeholder='Database Username' />
                  <Input type='text' placeholder='Database Password' />
                  <Input type='text' placeholder='Database name' />
                </Stack>

                <Stack marginTop='4' >
                  <Text marginBottom='1' fontSize='2xl' >Database type:</Text>
                  
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

                </Stack>
                
                <HStack float='right' marginTop='4'>
                  <Text fontSize='2xl' >Status: </Text>
                  <Button float='right' bgColor='red.500' textColor='#fff' _hover={{ backgroundColor: 'red.300' }} >Test connection</Button>
                </HStack>
              </TabPanel>

              <TabPanel>
                <Stack>
                  <Text fontSize='2xl' >CSV File</Text>
                  <Input type='file' accept='.csv' ></Input>
                </Stack>
                <HStack marginTop='3' gap='2'>
                  <Text fontSize='2xl'>Separator element:</Text>
                  <Input bgColor='gray.100' maxWidth='40px' type='text' defaultValue=',' maxLength={Number('1')}></Input>
                </HStack>
                
                <Button bgColor='green.500' color='#fff' marginTop='4' float='right'>Upload to database</Button>
              </TabPanel>
            </TabPanels>
          </Tabs>

        </Box>
      </Container>
    </>
  )
}

export default App
