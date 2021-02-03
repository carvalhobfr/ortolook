import styled from 'styled-components'

export const Contentor = styled.div`
  width: 100%;
  background-color: #fff;
  top: 0;
  position: sticky;
  z-index: 100;

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
    text-align: center;
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
    .navbar-collapse {
      background-image: url(/images/fundoNavES.png);
      background-position: right;
      background-repeat: no-repeat;
      background-size: contain;
      padding: 64px 16px;
      margin-top: -40px;
      .nav-item a {
        margin-right: 20%;
        margin-left: 50%;
      }
    }

    .navbar-toggler {
      z-index: 3;
    }
    .dropdown-menu {
      background-color: transparent !important;
      width: 100%;
      margin: auto;
      filter: drop-shadow(2px 4px 6px black);
    }
    .nav-link,
    .dropdown-item {
      color: #fff !important;
      text-align: center;
    }
    .dropdown-item {
      max-width: 50%;
      margin-left: auto;
      margin-right: 20%;
    }
  }
`
