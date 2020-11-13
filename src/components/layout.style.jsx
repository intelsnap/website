import styled from 'styled-components'

export const LayoutCointainer = styled.div`
  .body {
    font-family: 'OpenSans', sans-serif;

    .h1 {
      text-transform: capitalize;
      font: 28px;
    }

    @media screen and (min-width: 992px) {
      .images {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 1rem;
      }
    }
  }
`
export const Header = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 9%;
  background-color: white;
`
export const Content = styled.div`
  background-color: white;
  padding-bottom: 30px;
`
