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
    display: flex;
    justify-content: space-between;
    padding: 0 1em;
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
  }
  .nav-link,
  .dropdown-item {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
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
`
