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
  const [databaseBtnStatus, setDatabaseBtnStatus] = useState<"on" | "off">("off");

  async function onSubmit() {
    
    const formData = new FormData();
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    const separatorValue = document.getElementById('separatorElem') as HTMLSelectElement;
    if(!fileInput) { return }
    if(!fileInput.files) { return }
    const myFile = fileInput.files[0];
    
    formData.append('file', myFile);

    let sep = ',';
    if(separatorValue.value !== ',') {
      sep = '%3B';
    }
    
    const request = await fetch(`http://localhost:3000/clientes`, {
      method: "POST",
      body: formData,
    })
    const jsonData = await request.json();
    console.log(jsonData);
    
  }

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

                  { databaseBtnStatus=="on" ?
                    <Button bgColor='green.500' textColor='#fff' onClick={(e) => setDatabaseBtnStatus("off")} _hover={{ backgroundColor: 'red.300' }} >Connected</Button>
                    :
                    <Button bgColor='red.500' textColor='#fff' onClick={(e) => setDatabaseBtnStatus("on")} _hover={{ backgroundColor: 'green.300' }} >Try connection</Button>
                  }
                  
                </HStack>
              </TabPanel>

              <TabPanel>
                <form action="">
                  <Stack>
                    <Text fontSize='2xl' >CSV File</Text>
                    <Input id='fileInput' type='file' accept='.csv' ></Input>
                  </Stack>
                  <HStack marginTop='3' gap='2'>
                    <Text fontSize='2xl'>Separator element:</Text>
                    <Select id='separatorElem' maxWidth='20'>
                      <option value=','>,</option>
                      <option value=';'>;</option>
                    </Select>
                  </HStack>
                  
                  <Button onClick={ (e) => onSubmit() } bgColor='green.500' color='#fff' marginTop='4' float='right'>Upload to database</Button>
                </form>
                
              </TabPanel>
            </TabPanels>
          </Tabs>

        </Box>
      </Container>
    </>
  )
}

export default App
