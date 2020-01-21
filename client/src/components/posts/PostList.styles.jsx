import styled, { css } from "styled-components";

export const CardContainer = styled.div`
  margin: 20% auto 5%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* grid-auto-rows: true; */
`;

// export const CardBody = styled.div``;

// Flipping card
export const Card = styled.article`
  display: flex;
  margin: 5% auto;
  color: rgba(54, 69, 79, 0.808);
  background-color: #e0e5ec;
  box-shadow: 9px 9px 16px rgb(163, 177, 198, 0.7),
    -9px -9px 16px rgba(255, 255, 255, 0.5);
  border-radius: 5%;
  width: 60%;
  text-align: center;
  min-height: 20rem;
  cursor: pointer;
  perspective: 1000px;
  transition: all 0.75s ease-in-out;
  &:focus,
  &:hover {
    box-shadow: 0 0 6rem rgb(163, 177, 198, 0.6);
  }
  &.flipped {
    & > div:first-of-type {
      transform: perspective(1000px) rotateY(-180deg);
    }
    & > div:last-of-type {
      // backside of the card
      transform: perspective(1000px) rotateY(0deg);
    }
  }
`;

// Card sides
export const CardSide = css`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  padding: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transition: all 0.75s ease-in-out;
`;

// Card side - front
export const CardFront = styled.div`
  ${CardSide};
  justify-content: flex-end;
  align-items: flex-end;
  font-weight: bold;
  text-align: center;
`;

// Card side - back
export const CardBack = styled.div`
  ${CardSide};
  display: flex;
  text-align: center;
  /* padding: 5% -15%; */
  overflow: scroll;
  transform: rotateY(-180deg);
  align-items: center;
  margin-top: 7.5%;
  max-height: 70%;
`;

export const CardTitle = styled.h2`
  font-size: 1.6rem;
  padding: 10%;
  margin: 0 auto;
  overflow: scroll;
`;

export const CardDetail = styled.h2`
  font-size: 1.6rem;
  padding: 10% 10%;
`;
export const CardDescription = styled.span`
  font-size: 1.2rem;
  padding: 5% 15%;
`;

export const StyledButton = styled.button`
  width: 150px;
  margin: 15% auto -5%;
  height: 30px;
  border: none;
  border-radius: 5%;
  background-color: rgba(54, 69, 79, 0.808);
  color: #e0e5ec;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
`;
