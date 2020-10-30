import React from 'react'

function EmptyList() {
  return (
    <div className="empty-list-wrapper">
      <div className="flex flex-column flex-middle">
        <img src="/assets/images/honeybee.png" alt="honeybee" />
        <span className="empty-description">
          You haven't made
          <br />
          any hivelights yet.
        </span>
      </div>
      <div className="flex flex-middle mt-30">
        <div className="company-wrapper">
          <img src="/assets/images/company/tech_crunch.png" alt="tech_crunch" />
        </div>
        <div className="company-wrapper">
          <img src="/assets/images/company/bazaar.png" alt="tech_crunch" />
        </div>
        <div className="company-wrapper">
          <img src="/assets/images/company/forbes.png" alt="tech_crunch" />
        </div>
        <div className="company-wrapper">
          <img src="/assets/images/company/vogue.png" alt="tech_crunch" />
        </div>
      </div>
    </div>
  )
}

export default EmptyList
