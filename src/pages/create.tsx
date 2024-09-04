import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { Form, redirect } from 'react-router-dom';
import type { ActionFunction } from 'react-router-dom';

import { createSchema } from '../definitions/types';

function Create() {
  return (
    <Box maxW='480px'>
      <Form
        method='post'
        action='/create'
      >
        <VStack spacing='40px'>
          <FormControl isRequired>
            <FormLabel>Task name:</FormLabel>
            <Input
              type='text'
              name='title'
            />
            <FormHelperText>Enter a descriptive task name.</FormHelperText>
          </FormControl>

          <FormControl>
            <FormLabel>Task description:</FormLabel>
            <Textarea
              placeholder='Enter a detailed task description for the task...'
              name='description'
            />
          </FormControl>

          <FormControl
            display='flex'
            gap='10px'
            alignItems={'center'}
          >
            <Checkbox
              name='isPriority'
              size='lg'
              colorScheme='purple'
            />

            <FormLabel m={0}>Make this a priority task.</FormLabel>
          </FormControl>

          <Button type='submit'>Submit</Button>
        </VStack>
      </Form>
    </Box>
  );
}

export default Create;

export const createAction: ActionFunction = async ({ request }) => {
  const data = await request.formData();

  if (!createSchema.safeParse(Object.fromEntries(data)).success) {
    throw Error('Request format incorrect');
  }

  const task = {
    title: data.get('title'),
    description: data.get('description'),
    isPriority: data.get('isPriority') === '',
  };

  console.log(task);
  return redirect('/');
};
