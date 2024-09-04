import { UnlockIcon } from '@chakra-ui/icons';
import { Avatar, AvatarBadge, Box, Button, Flex, Heading, HStack, Spacer, Text, useToast } from '@chakra-ui/react';

function Navbar() {
  const toast = useToast();

  const showToast = () => {
    toast({
      title: 'Logged out',
      description: 'Successfully logged out',
      duration: 5000,
      isClosable: true,
      status: 'success',
      position: 'top',
      icon: <UnlockIcon />,
    });
  };

  return (
    <Flex
      as='nav'
      p='10px'
      alignItems='center'
      mb='40px'
    >
      <Heading as='h1'>Dojo Tasks</Heading>

      <Spacer />

      <HStack spacing='20px'>
        <Avatar
          // when src is not available, providing name changes to default avatar to capitalized name
          name='mario'
          src='/img/mario.jpg'
        >
          <AvatarBadge
            width='1.3em'
            bg='teal.500'
          >
            <Text
              fontSize={'xs'}
              color={'white'}
            >
              3
            </Text>
          </AvatarBadge>
        </Avatar>
        <Text>mario@netninja.dev</Text>
        <Button
          colorScheme='purple'
          onClick={showToast}
        >
          Logout
        </Button>
      </HStack>
    </Flex>

    // <Flex
    //   bg='gray.200'
    //   justifyContent='space-between '
    //   wrap='wrap'
    //   gap={2}
    // >
    //   <Box
    //     w='150px'
    //     h='50px'
    //     bg='red'
    //   >
    //     1
    //   </Box>
    //   <Box
    //     w='150px'
    //     h='50px'
    //     bg='blue'
    //   >
    //     2
    //   </Box>
    //   <Box
    //     w='150px'
    //     h='50px'
    //     bg='green'
    //     flexGrow={1}
    //   >
    //     3
    //   </Box>
    //   <Box
    //     w='150px'
    //     h='50px'
    //     bg='yellow'
    //     flexGrow={2}
    //   >
    //     4
    //   </Box>
    // </Flex>
  );
}

export default Navbar;
