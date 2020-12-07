import React from 'react'

function EmptyList(props) {
  const { description } = props
  return (
    <div className="empty-list-wrapper">
      <div className="flex flex-column flex-middle">
        <img src="/assets/images/honeybee.png" alt="honeybee" />
        <span className="empty-description">{description}</span>
      </div>
    </div>
  )
}

export default EmptyList
