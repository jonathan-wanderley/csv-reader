import { Box, Container, Heading, Tabs, TabList, TabPanels, Tab, TabPanel, Input, Stack, useRadioGroup, HStack, Text, Button, Select } from '@chakra-ui/react'
import { useState } from 'react'

interface inputProps {
  host: string;
  port: string;
  db_name: string;
  username: string;
  password: string;
  [key: string]: string;
}

function App() {

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
                <HStack marginTop='4'>
                  <Text fontSize='2xl' >Status: </Text>
                  <Button bgColor='red.500' textColor='#fff' _hover={{ backgroundColor: 'red.300' }} >Try connection</Button>
                </HStack>
              </TabPanel>

              <TabPanel>
                <Stack>
                  <Text fontSize='2xl' >CSV File</Text>
                  <Input type='file' accept='.csv' ></Input>
                </Stack>
                <HStack marginTop='3' gap='2'>
                  <Text fontSize='2xl'>Separator element:</Text>
                  <Select maxWidth='20'>
                    <option value='option1'>,</option>
                    <option value='option2'>;</option>
                  </Select>
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
