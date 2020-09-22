// Navbar.jsx
// Hivelighter
//
// Created by Luccas Beck on 2020-09-22
// Copyright © 2020 Hivelighter Inc. All Rights Reserved.

import React from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'

export const navigations = [
  {
    name: 'News & Politics',
    path: '/',
  },
  {
    name: 'Food',
    path: '/',
  },
  {
    name: 'Culture',
    path: '/',
  },
  {
    name: 'Sicence & Nature',
    path: '/',
  },
  {
    name: 'Health',
    path: '/',
  },
  {
    name: 'Self Improvment',
    path: '/',
  },
  {
    name: 'Technology',
    path: '/',
  },
  {
    name: '?',
    path: '/',
  },
]

const NavbarContainer = styled.div`
  background: white;
  padding: 8px 20px;
  display: flex;
  align-items: center;
  .navbar-btn {
    padding: 8px 16px;
    font-family: 'Helvetica Neue';
    font-weight: 500;
    font-size: 18px;
    line-height: 110%;
    border: 1px solid #e6e9ef;
    border-radius: 4px;
    min-width: auto;
  }
  .navbar-btn + .navbar-btn {
    margin-left: 8px;
  }
`

function Navbar() {
  return (
    <NavbarContainer>
      {navigations.map((item, key) => {
        return (
          <Button key={key} className="navbar-btn">
            {item.name}
          </Button>
        )
      })}
    </NavbarContainer>
  )
}

export default Navbar
