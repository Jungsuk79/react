import styled, {css} from "styled-components";
import { flexCenter } from "../../../styles/common";

const variantCSS = {
    default: css`
        background-color: ${({ theme }) => theme.PALETTE.white};
        border: 1px solid ${({ theme }) => theme.PALETTE.gray["600"]};
        color: ${({ theme }) => theme.PALETTE.gray["600"]};
        &:hover, &:active, &.active {
            background-color: ${({ theme }) => theme.PALETTE.gray["101"]};
        }
    `,
    primary: css`
        background-color: ${({ theme }) => theme.PALETTE.primary["main"]};
        border: 1px solid ${({ theme }) => theme.PALETTE.primary["main"]};
        color: ${({ theme }) => theme.PALETTE.white};
        &:hover, &:active, &.active {
            background-color: ${({ theme }) => theme.PALETTE.primary["dark"]};
            border-color: ${({ theme }) => theme.PALETTE.primary["dark"]};
        }
    `,
    primaryLine: css`
        background-color: transparent;
        color: ${({ theme }) => theme.PALETTE.primary["main"]};
        border: 1px solid ${({ theme }) => theme.PALETTE.primary["main"]};
        &:hover, &:active, &.active {
            background-color: ${({ theme }) => theme.PALETTE.primary["light"]};
            color: ${({ theme }) => theme.PALETTE.primary["main"]};
            border: 1px solid ${({ theme }) => theme.PALETTE.primary["main"]};
        }
    `,
    secondary: css`
        background-color: ${({ theme }) => theme.PALETTE.secondary["main"]};
        border: 1px solid ${({ theme }) => theme.PALETTE.secondary["main"]};
        color: ${({ theme }) => theme.PALETTE.white};
        &:hover, &:active, &.active {
            background-color: ${({ theme }) => theme.PALETTE.secondary["dark"]};
            border-color: ${({ theme }) => theme.PALETTE.secondary["dark"]};
        }
    `,
    secondaryLine: css`
        background-color: transparent;
        color: ${({ theme }) => theme.PALETTE.secondary["main"]};
        border: 1px solid ${({ theme }) => theme.PALETTE.secondary["main"]};
        &:hover, &:active, &.active {
            background-color: ${({ theme }) => theme.PALETTE.secondary["light"]};
            color: ${({ theme }) => theme.PALETTE.secondary["main"]};
            border: 1px solid ${({ theme }) => theme.PALETTE.secondary["main"]};
        }
    `,
    gray: css`
        background-color: ${({ theme }) => theme.PALETTE.gray[900]};
        color: ${({ theme }) => theme.PALETTE.white};
        border: 1px solid ${({ theme }) => theme.PALETTE.gray[900]};
        &:hover, &:active, &.active {
            background-color: ${({ theme }) => theme.PALETTE.gray[600]};
            color: ${({ theme }) => theme.PALETTE.white};
            border: 1px solid ${({ theme }) => theme.PALETTE.gray[600]};
        }
    `,
    black: css`
        background-color: ${({ theme }) => theme.PALETTE.gray[300]};
        color: ${({ theme }) => theme.PALETTE.white};
        border: 1px solid ${({ theme }) => theme.PALETTE.gray[300]};
        &:hover, &:active, &.active {
            background-color: ${({ theme }) => theme.PALETTE.black};
            color: ${({ theme }) => theme.PALETTE.white};
            border: 1px solid ${({ theme }) => theme.PALETTE.black};
        }
    `,
    warning: css`
        background-color: ${({ theme }) => theme.PALETTE.error};
        color: ${({ theme }) => theme.PALETTE.white};
        border: 1px solid ${({ theme }) => theme.PALETTE.error};
        &:hover, &:active, &.active {
            background-color: ${({ theme }) => theme.PALETTE.error};
            color: ${({ theme }) => theme.PALETTE.white};
            border: 1px solid ${({ theme }) => theme.PALETTE.error};
        }
    `,
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
    padding: 8px 25px;
  `,
  small : css`
    padding: 3px 10px;
  `,
  medium : css`
    padding: 8px 25px;
  `,
  large : css`
    padding: 15px 50px;
  `,
  full : css`
    width: 100%;
    aspect-ratio: 8 / 1;
    padding: 16px;
  `,
}

const fontCSS = {
  default: css`
    font-size: ${({theme}) => theme.FONT_SIZE["h8"]};
    line-height: ${({theme}) => theme.FONT_LINE["h8"]};
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
    transition: background-color 0.2s, color 0.2s, border-color 0.2s, transform 0.1s;
    cursor: pointer;

    ${({variant}) => variantCSS[variant] || variantCSS.default};
    ${({shape}) => shapeCSS[shape] || shapeCSS.default};
    ${({size}) => sizeCSS[size] || sizeCSS.default};
    ${({font}) => fontCSS[font] || fontCSS.default};
    ${flexCenter};

    &:disabled {
        cursor: not-allowed;
        filter: grayscale(1);
        opacity: 0.5;
        background-color: ${({theme}) => theme.PALETTE.gray[101]};
        color: ${({theme}) => theme.PALETTE.gray[301]};
        border: 1px solid ${({theme}) => theme.PALETTE.gray[301]};

        &:hover, &:active {
            filter: none;
            transform: none;
        }
    }
`;

export default Button;
