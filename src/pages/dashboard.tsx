import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  // Container,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { useLoaderData } from 'react-router-dom';
import type { LoaderFunction } from 'react-router-dom';

import { tasksSchema } from '../definitions/types';
import { EditIcon, ViewIcon } from '@chakra-ui/icons';

function Dashboard() {
  const tasks = useLoaderData();

  // TODO: find out why we have to use data rather than using tasks directly
  const { success, data } = tasksSchema.safeParse(tasks);

  if (!success) {
    return <p>Task api format is incorrect. Please check the network connection</p>;
  }

  return (
    <SimpleGrid
      spacing={10}
      minChildWidth='300px'
    >
      {/* {data &&
        data.map(({ title, id, description, author, img }) => (
          <Card
            key={id}
            borderTop={'8px'}
            borderColor={'purple.400'}
            bg='white'
          >
            <CardHeader>
              <Flex gap={5}>
                <Avatar src={img} />
                <Box>
                  <Heading
                    as='h3'
                    size='sm'
                  >
                    {title}
                  </Heading>
                  <Text>by {author}</Text>
                </Box>
              </Flex>
            </CardHeader>

            <CardBody color='gray.500'>
              <Text>{description}</Text>
            </CardBody>

            <Divider borderColor={'gray.200'} />

            <CardFooter>
              <HStack>
                <Button
                  variant={'ghost'}
                  leftIcon={<ViewIcon />}
                >
                  Watch
                </Button>
                <Button
                  variant={'ghost'}
                  leftIcon={<EditIcon />}
                >
                  Comment
                </Button>
              </HStack>
            </CardFooter>
          </Card>
        ))} */}

      {/* <Button
        whiteSpace='normal'
        w={160}
        // height='auto'
        // blockSize='auto'
        py='10px'
      >
        <Text noOfLines={2}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur a expedita odio recusandae ratione
          doloribus nobis explicabo voluptate eum nemo quos, dolore temporibus laudantium, unde minima sequi ducimus
          ipsum. Animi.
        </Text>
      </Button>

      <Button
        whiteSpace='normal'
        w={160}
        // height='auto'
        // blockSize='auto'
        py='10px'
      >
        <Text noOfLines={1}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur a expedita odio recusandae ratione
          doloribus nobis explicabo voluptate eum nemo quos, dolore temporibus laudantium, unde minima sequi ducimus
          ipsum. Animi.
        </Text>
      </Button> */}

      <Button>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim repellat aut delectus, ut veritatis fugit aliquid
        perspiciatis dignissimos? Odio excepturi ullam, hic eveniet doloribus aliquid ad culpa alias consequatur
        ducimus.
      </Button>
      <Button>Lorem ipsum dolor 1</Button>
      <Button>確認確認確認確認確認確認確認確認確認</Button>

      {/* <Button variant={'primary'}>Primary</Button>
      <Button variant={'secondary'}>Secondary</Button>
      <Button
        variant={'primary'}
        size={'lg'}
      >
        Primary
      </Button>
      <Button
        variant={'secondary'}
        size={'lg'}
      >
        Secondary
      </Button> */}
      {/* <Box
        bg='white'
        h='200px'
        border={'1px solid'}
      >
        <Text color={{ base: 'pink', md: 'blue', lg: 'green' }}>Hello</Text>
      </Box> */}
    </SimpleGrid>
  );
}

// Not being used, just for practice purpose
// function DashboardPractice() {
//   const boxStyles = {
//     p: '10px',
//     bg: 'purple.400',
//     color: 'white',
//     m: '10px',
//     textAlign: 'center',
//     filter: 'blur(2px)',
//     ':hover': {
//       color: 'black',
//       bg: 'blue.200',
//     },
//   };

//   return (
//     <Container
//       as='section'
//       maxW='4xl '
//     >
//       <Heading
//         my='30px'
//         p='10px'
//       >
//         Chakra UI Components
//       </Heading>
//       <Text ml='30px'>
//         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet saepe tenetur, eius, nostrum tempora sit autem
//         laborum eligendi ipsum rerum natus adipisci porro dolorem dignissimos ipsa! Nostrum sit itaque aliquam.
//       </Text>
//       <Text
//         ml='30px'
//         color='blue.300'
//         fontWeight='bold'
//       >
//         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet saepe tenetur, eius, nostrum tempora sit autem
//         laborum eligendi ipsum rerum natus adipisci porro dolorem dignissimos ipsa! Nostrum sit itaque aliquam.
//       </Text>

//       <Box
//         my='30px'
//         p='20px'
//         bg='orange'
//       >
//         <Text color='white'>This is a box</Text>
//       </Box>

//       <Box sx={boxStyles}>Hello ninjas</Box>
//     </Container>
//   );
// }

export default Dashboard;

export const tasksLoader: LoaderFunction = async () => {
  const res = await fetch('http://localhost:3000/tasks');

  return res.json();
};
