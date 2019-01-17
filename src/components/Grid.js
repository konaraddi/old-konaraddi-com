import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  row-gap: 0.5rem;
  column-gap: 2rem;
`;

const GridElement = styled.div`
  position: relative;
`;

export { Grid, GridElement };
