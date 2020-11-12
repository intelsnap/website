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
