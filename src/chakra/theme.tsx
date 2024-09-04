import { extendTheme } from '@chakra-ui/react';
// import { Button } from './button';
import { Button } from './config-overwrite-test-button';

const theme = extendTheme({
  components: {
    Button: Button,
  },
});

export default theme;
