import React, { useEffect, FunctionComponent, useState } from 'react';
import { Switch, Route, withRouter, useHistory } from "react-router-dom";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ReactDOM from 'react-dom';
import {Box, Container, Avatar, Typography, Link } from '@material-ui/core'
import svgProfile from '../../style/img/profile.svg'
import {getProfileDataInLocalStorage} from '../../util/common'

function BackgroundHeader() {

  const element = <div className="top_background" >
    <svg
      preserveAspectRatio="none"
      version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 1481 470" xmlSpace="preserve">
      <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="1481" y1="304.6137" x2="-56.0997" y2="304.6137" gradientTransform="matrix(1 0 0 -1 0 470)">
        <stop stop-color="#2196F3" />
        <stop offset="1" stop-color="#1EC3AF" />
      </linearGradient>
      <path className="st0" d="M-40,0h1521v330.8C1105.1-27.1,137.5,446.5-40,282.9V0z" />
    </svg>
  </div>
  return ReactDOM.createPortal(element, document.body)
}

function Header() {
  const profile = getProfileDataInLocalStorage()
  const fio = profile.fio.split(' ') 
  const name = fio[0] + ' ' + fio[1].split('')[0] + '.'

  return (
    <div
      style={{paddingTop: '0.8em'}}
      className="header"
    >
      <BackgroundHeader />
      <Container
        className="header_menu"
      >
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Link className='hover_on_button' >
          <NotificationsNoneIcon  />
          </Link>
      
        <div
          className='vertical_line'
        ></div>
        <Avatar src={svgProfile} alt='картинка Профиля' style={{width: '1.2em', height: '1.2em'}} />
        <Typography
                style={{ marginLeft: '0.6em', color: '#fff', textAlign: 'left', fontSize: '0.5em' }}
              >
                {name || ''}
              </Typography> 
        </Box>
        
      </Container>
    
    </div>
  );
}

export default withRouter(Header);