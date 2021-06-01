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
  .dropdown-item,
  .modalContato,
  .nav-item,
  .nav-item a {
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
      background-image: url(/images/fundoNavAP.png);
      background-position: right;
      background-repeat: no-repeat;
      background-size: contain;
      padding: 0;
      margin-top: -50px;
      min-height: 250px;
      /*       .nav-item a {
        margin-right: 20%;
        margin-left: 50%;
      } */
    }
    .collapse.show.navbar-collapse {
      display: flex;
    }

    .navbar-toggler {
      z-index: 3 !important;
      margin: 0%;
      padding-right: 5%;
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
  .navClick span {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 1.0%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  }
  .dropdown-menu a a {
    margin: 0px !important;
    text-align: center;
  }

  @media (max-width: 600px) {
    .nav-item a,
    .nav-item {
      color: #fff !important;
      text-align: center;
    }
    li.nav-item {
      margin-right: 0%;
      margin-left: 40%;
    }
    .navSec {
      margin: 0;
      /* margin-right: -90px; */
    }
    .navItemSec {
      margin: 8px 0;
    }
  }
  a {
    text-decoration: none;
  }
  button {
    /*     margin-top: 28px; */
    margin-bottom: 16px;
    font-size: 22px;
  }
`
