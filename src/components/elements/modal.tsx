import React, { useEffect, FunctionComponent, useState } from 'react';
import { Switch, Route, withRouter, useHistory } from "react-router-dom";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ReactDOM from 'react-dom';
import { Box, Container, Avatar, Typography, Link, Button } from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


function Modal(props: any) {
  const { handleClose, open } = props;
  const [scroll, setScroll] = useState('body');
  const [message, setMessage] = useState(false)

  useEffect(() => {
    if(open === false) 
    setTimeout(() => {
      setMessage(false)
    }, 100)
  }, [open])


  // useEffect(() => {
  //   if(message === true && scroll === 'body') 
  //   setTimeout(() => {
  //     handleClose()
  //   }, 3000)
  // }, [message])

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      // @ts-ignore
      scroll={scroll}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
      className={message ? 'dialogMsg scroll-off' : 'scroll-off'}
    >
      <DialogTitle id="scroll-dialog-title"></DialogTitle>
      { !message ?
        <>
          {props.first_argument({ scroll, message, setScroll, setMessage })}
        </>
        :
        <>
          {props.second_argument({ scroll, message, setScroll, setMessage })}
        </>
      }
    </Dialog>
  )
}

export default withRouter(Modal);