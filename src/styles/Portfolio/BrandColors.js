import styled from "styled-components";
import { clearFix, margin } from "polished";

export const StyledBrandColors = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 460px;
  padding-bottom: 3rem;
  padding-top: 3rem;
  text-align: center;
  ${clearFix()};
`;

export const StyledBrandColorWrap = styled.figure`
  flex: 1 1 25%;
  margin: 0.75rem;
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
  border-radius: 100px;
  border: 1px solid ${({ theme }) => theme.colors.shadows.black[20]};
  color: ${({ theme }) => theme.colors.grey[800]};
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 0.05rem;
  line-height: 1.75;
  padding: 2px 1.2rem;
  text-transform: uppercase;
`;

export const StyledBrandLogo = styled.figure`
  ${margin(null, "auto")};
  max-width: 460px;
  padding-bottom: 6rem;
`;
