import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const primary = defineStyle({
  p: 2,
  h: 'auto',
});

const baseStyle = defineStyle(() => {
  return {
    // Figma base settings
    fontFamily: 'Noto Sans TC',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 550,
    lineHeight: 1.6,
    // text wrap
    whiteSpace: 'normal',
    width: '160px',
    maxH: '68px',
    display: '-webkit-box',
    WebkitLineClamp: '2',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    // // py: '30px',
    // whiteSpace: 'normal',
    // width: '160px',
    // height: 'auto',
    // minHeight: '64px', // Adjust this value as needed
    // padding: '10px', // Adjust this value as needed
    // // Remove flexbox styles
    // display: '-webkit-box',
    // WebkitBoxOrient: 'vertical',
    // WebkitLineClamp: 2,
    // overflow: 'hidden',
    // textOverflow: 'ellipsis',
    // // Ensure text alignment
    // // textAlign: 'left',
    // // Vertically center the text
    // lineHeight: '1.2', // Adjust as needed
    // // Prevent text from wrapping to the next line after ellipsis
    // maxHeight: 'calc(1.2em * 2)', // Should match the line-height
    bg: 'blue.500',
  };
});

export const Button = defineStyleConfig({
  baseStyle,
  variants: { primary },
  defaultProps: {
    variant: 'primary',
  },
});
