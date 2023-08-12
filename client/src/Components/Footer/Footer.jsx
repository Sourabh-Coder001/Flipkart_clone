import React from 'react';
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles({

  footerStyles: {
    color: '#000',
    background:'#f7f7f7'
  },
  linkContainer: {
    display: 'flex',
  
  },
  links: {
    display: 'flex',
    flexDirection: 'column',
    padding: '2%',
    paddingTop: '1%'
  },
  aStyles: {
    color:'white',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    },
    lineHeight: '180%'
  },
  bottom: {
    textAlign: 'center',
    padding: '1%'
  }
})

export default function Footer() {

  const classes = useStyles();

  return (
    <footer className={classes.footerStyles}>
      <div className={classes.linkContainer}>
        <div className={classes.links}>
          <h3>Company</h3>
          <a href='/#' className={classes.aStyles}style={{color:'#000'}}>About Us</a>
          <a href='/#' className={classes.aStyles}style={{color:'#000'}}>Expansion Plan</a>
          <a href='/#' className={classes.aStyles}style={{color:'#000'}}>Careers</a>
        </div>
        <div className={classes.links}>
          <h4>Support</h4>
          <a href='/#' className={classes.aStyles}style={{color:'#000'}}>FAQs</a>
          <a href='/#' className={classes.aStyles}style={{color:'#000'}}>Email Us</a>
          <a href='/#' className={classes.aStyles} style={{color:'#000'}}>Refund Policy</a>
        </div>
        <div className={classes.links}>
          <h4>Partnerships</h4>
          <a href='/#' className={classes.aStyles} style={{color:'#000'}}>Become a Partner</a>
          <a href='/#' className={classes.aStyles} style={{color:'#000'}}>Check Status</a>
        </div>
      </div>
      <h5 className={classes.bottom}>Copyright 2023, Developed by Sourabh, All rights reserved</h5>
    </footer>
  );
}
