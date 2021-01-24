import styled from 'styled-components'

export const Contentor = styled.div`
  width: 100%;
  background-color: #fff;
  .navbar-collapse {
    /* display: flex; */
    /* justify-content: space-between; */
  }
  .navbar-nav {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 0;
    top: 0;
  }

  img {
    max-height: 32px;
  }
  .nav-link,
  .dropdown-item {
    font-family: inherit;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    color: #802b67 !important;
  }
  .dropdown-toggle::after {
    display: none;
  }
  .dropdown-menu {
    border: none;
    text-align: center;
    margin-left: -60px;
  }

  .navbar {
    padding: 0.5rem 2rem;
  }

  @media (max-width: 900px) {
    .navbar {
      padding: 0.5rem;
    }
  }
`
