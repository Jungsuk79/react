import styled, {css} from "styled-components";
import { flexCenter } from "../../styles/common";

const variantCSS = {
  default: css`
    background-color: ${({theme}) => theme.PALETTE.primary["white"]};
  `,
  primary : css`
    background-color: ${({theme}) => theme.PALETTE.primary["main"]};
  `,
  sub : css`
    background-color: ${({theme}) => theme.PALETTE.primary["sub"]};
  `,
  white : css`
    background-color: ${({theme}) => theme.PALETTE.primary["white"]};
  `
};

const borderCSS = {
  default: css`
    border: solid 1px ${({theme}) => theme.PALETTE.gray["300"] };
  `,
  primary : css`
    border: solid 1px ${({theme}) => theme.PALETTE.primary["main"]};
  `,
  sub : css`
    border: solid 1px ${({theme}) => theme.PALETTE.primary["sub"]};
  `,
  gray100 : css`
    border: solid 1px ${({theme}) => theme.PALETTE.gray["100"] };
  `,
  gray200 : css`
    border: solid 1px ${({theme}) => theme.PALETTE.gray["200"] };
  `,
  gray300 : css`
    border: solid 1px ${({theme}) => theme.PALETTE.gray["300"] };
  `
};

const colorCSS = {
  default: css`
    color: ${({theme}) => theme.PALETTE["black"]};
  `,
  primary : css`
    color: ${({theme}) => theme.PALETTE.primary["main"]};
  `,
  sub : css`
    color: ${({theme}) => theme.PALETTE.primary["sub"]};
  `,
  white : css`
    color: ${({theme}) => theme.PALETTE["white"]};
    `,
  black : css`
    color: ${({theme}) => theme.PALETTE["black"]};
  `,
  gray100 : css`
    color: ${({theme}) => theme.PALETTE.gray["100"] };
  `,
  gray200 : css`
    color: ${({theme}) => theme.PALETTE.gray["200"] };
  `,
  gray300 : css`
    color: ${({theme}) => theme.PALETTE.gray["300"] };
  `
};

const shapeCSS = {
  default: css`
    border-radius: 0px;
  `,
  small : css`
    border-radius: 5px;
  `,
  large : css`
    border-radius: 10px;
  `,
  big : css`
    border-radius: 15px;
  `,
  round : css`
    border-radius: 50%;
  `,
}

const sizeCSS = {
  default: css`
    padding: 5px 10px;
  `,
  small : css`
    padding: 5px 10px;
  `,
  medium : css`
    padding: 10px 20px;
  `,
  large : css`
    padding: 15px 30px;
  `,
  full : css`
    width: 100%;
    aspect-ratio: 8 / 1;
    padding: 16px 0;
  `,
}

const fontCSS = {
  default: css`
    font-size: ${({theme}) => theme.FONT_SIZE["h5"]};
    line-height: ${({theme}) => theme.FONT_LINE["h5"]};
  `,
  h1 : css`
    font-size: ${({theme}) => theme.FONT_SIZE["h1"]};
    line-height: ${({theme}) => theme.FONT_LINE["h1"]};
  `,
  h2 : css`
    font-size: ${({theme}) => theme.FONT_SIZE["h2"]};
    line-height: ${({theme}) => theme.FONT_LINE["h2"]};
  `,
  h3 : css`
    font-size: ${({theme}) => theme.FONT_SIZE["h3"]};
    line-height: ${({theme}) => theme.FONT_LINE["h3"]};
  `,
  h4 : css`
    font-size: ${({theme}) => theme.FONT_SIZE["h4"]};
    line-height: ${({theme}) => theme.FONT_LINE["h4"]};
  `,
  h5 : css`
    font-size: ${({theme}) => theme.FONT_SIZE["h5"]};
    line-height: ${({theme}) => theme.FONT_LINE["h5"]};
  `,
  h6 : css`
    font-size: ${({theme}) => theme.FONT_SIZE["h6"]};
    line-height: ${({theme}) => theme.FONT_LINE["h6"]};
  `,
  h7 : css`
    font-size: ${({theme}) => theme.FONT_SIZE["h7"]};
    line-height: ${({theme}) => theme.FONT_LINE["h7"]};
  `,
  h8 : css`
    font-size: ${({theme}) => theme.FONT_SIZE["h8"]};
    line-height: ${({theme}) => theme.FONT_LINE["h8"]};
  `,
  h9 : css`
    font-size: ${({theme}) => theme.FONT_SIZE["h9"]};
    line-height: ${({theme}) => theme.FONT_LINE["h9"]};
  `,
}

const Button = styled.button`

  ${({variant}) => variantCSS[variant] || variantCSS.default};
  ${({ shape }) => shapeCSS[shape] || shapeCSS.default};
  ${({size}) => sizeCSS[size] || sizeCSS.default};
  ${({border}) => borderCSS[border] || borderCSS.default};
  ${({color}) => colorCSS[color] || colorCSS.default};
  ${({font}) => fontCSS[font] || fontCSS.default};
  ${flexCenter};
`;

Button.defaultProps = {
  variant: '#333',
  shape: 'default',
  size: 'medium',
  border: 'primary',
  color: 'white',
  font: 'h5',
};

export default Button;
