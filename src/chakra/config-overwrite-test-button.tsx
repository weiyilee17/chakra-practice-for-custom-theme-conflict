import { defineStyleConfig, defineStyle } from '@chakra-ui/react';

const baseStyle = defineStyle({
  borderRadius: '8px',
  fontWeight: 'bold',
  fontSize: '16px',
  lineHeight: '24px',
  padding: '12px 24px',
  color: 'white',
  height: '150px',
  backgroundColor: 'green.500',
  _hover: {
    height: '200px',
  },
});

const primary = defineStyle({
  backgroundColor: 'blue.500',
  height: '666px',
  _hover: {
    textDecoration: 'underline',
  },
});

const secondary = defineStyle({
  backgroundColor: 'pink.500',
  _hover: {
    width: '200px',
    height: '400px',
  },
});

export const Button = defineStyleConfig({
  baseStyle,
  variants: {
    primary,
    secondary,
  },
  sizes: {
    lg: {
      height: '600px',
    },
  },
});
