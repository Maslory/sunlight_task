import React, { useEffect, FunctionComponent, useState } from 'react';
import { Switch, Route, withRouter, useHistory } from "react-router-dom";
import { Container, Card, CardContent, Box, Avatar, Typography, Link, Hidden, Button } from '@material-ui/core'
import svgProfile from '../../../style/img/profile.svg'
import EditIcon from '@material-ui/icons/Edit';
import ProfileInfo from './profile_info'
import Modal from '../../elements/modal'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {getProfileDataInLocalStorage} from '../../../util/common';
import CloseIcon from '@material-ui/icons/Close';


function Profile() {
  const [edit, setEdit] = useState(false)
  const [open, setOpen] = useState(false)
  const profile = getProfileDataInLocalStorage()
 


  return (
    <div>
     
      <div
        className="header_info"
        style={{ paddingLeft: '0.7em' }}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          style={{ marginTop: '1em' }}
        >
          <Typography style={{ fontSize: '1em' }} className='text' >ЛИЧНЫЙ ПРОФИЛЬ</Typography>
          <Typography style={{ fontSize: '0.85em', marginTop: '0.5em' }} className='text' >Главная/Личный профиль</Typography>
        </Box>
      </div>
      <Container
        style={{ marginTop: '1.3em' }}
      >
        <Card
          className='profile_card'
          style={{ borderRadius: 10 }}
        >
          <Box
            display="flex"
            justifyContent='space-between'
            flexDirection='row'
            alignItems='center'
            style={{ paddingLeft: '0.8em', paddingTop: '0.8em', paddingBottom: '0.8em' }}
          >
            <Box
              display="flex"
              justifyContent='space-between'
              flexDirection='row'
              alignItems='center' >
              <Avatar src={svgProfile} alt='картинка Профиля' style={{ width: '2.5em', height: '2.5em' }} />
              <Typography
                style={{ marginLeft: '0.3em', color: '#fff', textAlign: 'left' }}
              >
                {profile.fio}
              </Typography> 
            </Box>
            <Link
              onClick={() => { setEdit(!edit) }}
              className='hover_on_button' style={{ marginRight: '0.5em' }} >
              { !edit ?
                <EditIcon style={{ fill: '#fff' }} /> : <CloseIcon style={{ fill: '#fff' }} />}
            </Link>
          </Box>
        </Card>
        <ProfileInfo edit={edit} setEdit={setEdit} setOpen={setOpen} open={open} /> 
      </Container>
    </div>
  );
}

export default withRouter(Profile);