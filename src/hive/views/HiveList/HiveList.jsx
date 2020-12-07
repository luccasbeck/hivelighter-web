//
// MainList.jsx
// Hivelighter
//
// Created by Luccas Beck on 2020-09-20
// Copyright © 2020 Hivelighter Inc. All Rights Reserved.

import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import HiveCard from '../../components/hivecard/HiveCard'
import EmptyList from '../../components/EmptyList'
import { getMainList } from 'app/redux/actions/HiveListActions'

function HiveList(props) {
  const { user, hiveList, getMainList } = props

  const data = hiveList.data.map((item) => {
    return { ...item }
  })

  useEffect(() => {
    let path = props.location.pathname
    getMainList(user.uuid, path)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getMainList])

  return (
    <>
      <div className="card-container">
        {data.length === 0 ? (
          <EmptyList description={`You haven't made \n any hivelights yet.`} />
        ) : (
          data.map((item, index) => <HiveCard key={index} data={item} />)
        )}
      </div>
    </>
  )
}

const mapStateToProps = (state) => ({
  hiveList: state.hiveList,
  user: state.user,
})

export default withRouter(connect(mapStateToProps, { getMainList })(HiveList))
