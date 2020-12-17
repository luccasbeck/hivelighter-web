import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  title: {
    backgroundColor: '#FFE115',
    fontFamily: 'Helvetica',
    fontSize: '17px',
    padding: '0 8px',
    color: 'black',
  },
  list: {
    fontFamily: 'Geomanist',
    fontSize: '25px',
    color: '#172136',
    marginTop: '60px',
    marginBottom: '40px',
  },
  text: {
    fontFamily: 'Helvetica',
    fontSize: '17px',
    color: '#172136',
    marginBottom: '22px',
  },
}))

const PrivacyAndTerms = ({ type }) => {
  const classes = useStyles()

  return (
    <div className="m-sm-30">
      {type === 'terms' && (
        <>
          <div className="flex-column flex-middle">
            <img
              src="/assets/images/logo-large-shadow.svg"
              alt="hivelighter logo large"
            />
            <div className={classes.title}>Terms of Service</div>
          </div>
          <div className={classes.list}>1. Your Relationship with HIVELIGHTER</div>
          <div className={classes.text}>
            HIVELIGHTER provides this Privacy Policy to inform you of our policies and
            procedures regarding the collection, use, disclosure and protection of
            information that apply to our Service, as well as your choices regarding the
            collection and use of information.
          </div>
          <div className={classes.list}>2. Accepting the Terms</div>
          <div className={classes.text}>
            To use the HIVELIGHTER service, an email address, username and password are
            required. We use personally identifiable information to deliver the Service,
            to comply with reasonable requests of law enforcement and recommend additional
            content to you.
          </div>
          <div className={classes.text}>
            Where applicable, we indicate whether and why you must provide us with your
            Personal Information, as well as the consequences of failing to do so. If you
            do not provide Personal Information when requested, you may not be able to
            benefit from our Service if that information is necessary to provide you with
            the service or if we are legally required to collect it.
          </div>
          <div className={classes.text}>
            Personally identifiable information provided by you.
          </div>
          <div className={classes.text}>
            Registration: If you desire to have access to certain restricted sections of
            the Site or request to receive marketing materials, you may be required to
            become a registered user, and to submit the following types of Personal
            Information to HIVELIGHTER: your name, email address, user name, and password.
          </div>
          <div className={classes.text}>
            Customer Support: We may collect information through your communications with
            our customer support team or other communications that you may send us and
            their contents.
          </div>
          <div className={classes.text}>
            Other: We may also collect your contact details when you provide them in the
            context of our customer, vendor, and partner relationships.
          </div>
        </>
      )}
      {type === 'privacy' && (
        <>
          <div className="flex-column flex-middle">
            <img
              src="/assets/images/logo-large-shadow.svg"
              alt="hivelighter logo large"
            />
            <div className={classes.title}>Privacy Policy</div>
          </div>
          <div className={classes.list}>1. Overview</div>
          <div className={classes.text}>
            HIVELIGHTER provides this Privacy Policy to inform you of our policies and
            procedures regarding the collection, use, disclosure and protection of
            information that apply to our Service, as well as your choices regarding the
            collection and use of information.
          </div>
          <div className={classes.list}>2. Personally Identifiable Information</div>
          <div className={classes.text}>
            To use the HIVELIGHTER service, an email address, username and password are
            required. We use personally identifiable information to deliver the Service,
            to comply with reasonable requests of law enforcement and recommend additional
            content to you.
          </div>
          <div className={classes.text}>
            Where applicable, we indicate whether and why you must provide us with your
            Personal Information, as well as the consequences of failing to do so. If you
            do not provide Personal Information when requested, you may not be able to
            benefit from our Service if that information is necessary to provide you with
            the service or if we are legally required to collect it.
          </div>
          <div className={classes.text}>
            Personally identifiable information provided by you.
          </div>
          <div className={classes.text}>
            Registration: If you desire to have access to certain restricted sections of
            the Site or request to receive marketing materials, you may be required to
            become a registered user, and to submit the following types of Personal
            Information to HIVELIGHTER: your name, email address, user name, and password.
          </div>
          <div className={classes.text}>
            Customer Support: We may collect information through your communications with
            our customer support team or other communications that you may send us and
            their contents.
          </div>
          <div className={classes.text}>
            Other: We may also collect your contact details when you provide them in the
            context of our customer, vendor, and partner relationships.
          </div>
        </>
      )}
    </div>
  )
}

export default PrivacyAndTerms
