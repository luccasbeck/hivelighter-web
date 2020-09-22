//
// MainList.jsx
// Hivelighter
//
// Created by Luccas Beck on 2020-09-20
// Copyright © 2020 Hivelighter Inc. All Rights Reserved.

import React from 'react'
import HiveCard from '../components/hivecard/HiveCard'
import Navbar from '../components/Navbar'

function MainList() {
  return (
    <>
      <Navbar />
      <HiveCard />
      <HiveCard />
      <HiveCard />
    </>
  )
}

export default MainList
