import styled from 'styled-components'

export const ButonCon = styled.button`
  border: 3px solid rgb(39, 18, 230);
  color: rgb(241, 241, 247);
  background-color: rgb(67, 56, 131);
  padding: 13px 44px;
  font-size: 15px;
  margin: 8px 0 0;

  :hover {
    border: 3px solid rgb(5, 7, 7);
    background: rgb(46, 174, 190);
    color: #0a0a0a;
    -webkit-transition: 0.5s;
    -o-transition: 0.5s;
    transition: 0.5s;
  }
`

export const ContactConf = styled.div`
  padding: 45px 64px;
  border-color: transparent;

  @media screen and (max-width: 767px) {
    padding: 20px 15px;
  }
`

export const Ico = styled.a`
  .icons {
    padding: 08px;
    color: #000;
    font-size: 0.8rem;
    :hover {
      color: grey;
    }
  }
`
