import styled from "styled-components";
import { clearFix, margin, padding } from "polished";
import { getSpacing } from "../utils";

export const StyledBrandColors = styled.div`
  ${clearFix()};
  ${margin(null, "auto")};
  ${padding(getSpacing(3.75), null)}
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  max-width: 460px;
  text-align: center;
`;

export const StyledBrandColorWrap = styled.figure`
  flex: 1 1 25%;
  margin: ${getSpacing(0.9)};
  max-width: 100px;
`;

export const StyledBrandColorColor = styled.div`
  border-radius: 100%;
  box-shadow: 0 0 0 0.375rem ${({ theme }) => theme.colors.grey[100]};
  display: inline-block;
  padding-bottom: 100%;
  width: 100%;
`;

export const StyledBrandColorText = styled.p`
  ${margin("0.75rem", null)};
  ${padding("2px", getSpacing(1.5))}
  border-radius: 100px;
  border: 1px solid ${({ theme }) => theme.colors.shadows.black[20]};
  color: ${({ theme }) => theme.colors.grey[800]};
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 0.05rem;
  line-height: 1.75;
  text-transform: uppercase;
`;

export const StyledBrandLogo = styled.figure`
  ${margin(null, "auto")};
  max-width: 460px;
  padding-bottom: ${getSpacing(7.5)};
`;
