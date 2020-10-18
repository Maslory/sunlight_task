import React, { useEffect, FunctionComponent, useState } from 'react';
import { Switch, Route, withRouter, useHistory } from "react-router-dom";
import { Container, Card, CardContent, Box, Avatar, Typography, Link, Hidden, Paper, TextField, Button } from '@material-ui/core'
import svgProfile from '../../../style/img/profile.svg'
import EditIcon from '@material-ui/icons/Edit';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneIcon from '@material-ui/icons/Phone';
import {getProfileDataInLocalStorage} from '../../../util/common'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Modal from '../../elements/modal'
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';


function ProfileInfo(props:any) {
 const {edit, setOpen, open, setEdit} = props;
 const profile = getProfileDataInLocalStorage()
 const [fio, setFio] = useState(profile.fio)
 const [phone, setPhone] = useState(profile.phone)
 const [email, setEmail] = useState(profile.email)
const [emailValidate, setEmailValidate] = useState(false)
const [fioValidate, setFioValidate] = useState(false)
const [phoneValidate, setPhoneValidate] = useState(false)

 function handleClick(){
  setOpen(false)
}

function handleClose(){
  setOpen(false)
}

 function changeProfileData(){
   localStorage.setItem('fio', fio)
   localStorage.setItem('email', email)
   localStorage.setItem('phone', phone)
 }

 function validateEmail(email:string) {
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return !reg.test(email)
}

 function handleValidateEmail(value:any){
  if(validateEmail(value)){
    setEmailValidate(true)
   }
   else{
    setEmailValidate(false)
   }
 }

 function handleValidatePhone(value:any){
   if(value !== 11){
    setPhoneValidate(true)
   }
   else{
    setPhoneValidate(false)
   }
}

function handleValidateFio(value:any){
  if(String(value).split('').length === 0 || String(value).split('').length >  60){
    setFioValidate(true)
   }
   else{
    setFioValidate(false)
   }
}

 return(
  <> <br/> 
  <Hidden  >
  <Paper style={{borderRadius: 10}}>
 {!edit ?
     <> 
   <Box style={{ padding: '1em', paddingLeft: '0.5em' ,borderBottomWidth: 1, borderBottomColor: '#CAE7FE', borderBottomStyle: 'solid'}}  
   flexDirection='row' display='flex' justifyContent='flex-start' >
<AlternateEmailIcon style={{fill: '#00BFA5', marginRight: '0.6em'}} /> <Typography>{profile.email}</Typography>
   </Box> 
   <Box
   flexDirection='row' display='flex' justifyContent='flex-start'
   style={{ padding: '1em', paddingLeft: '0.5em' }}
   >
    <PhoneIcon style={{fill: '#00BFA5', marginRight: '0.6em'}} /> <Typography>{profile.phone}</Typography>
   </Box>
   </>
   :
   <Box style={{ paddingTop: '1.7em',paddingBottom: '1em' , paddingLeft: '1.5em', paddingRight: '1.5em' ,borderBottomWidth: 0, borderBottomColor: '#CAE7FE', borderBottomStyle: 'solid'}} >
      <Box className='block_profile_info'  display='flex' alignItems='center' >
        <AssignmentIndIcon style={{fill: '#00BFA5'}} className='adaptive-icon-edit-profile' />
      <TextField
          id="outlined-helperText"
          label="Фамилия и имя"
          placeholder="Укажите ваш фио"
          variant="outlined"
          value={fio}
          onChange={(event) => {setFio(event.currentTarget.value); handleValidateFio(event.currentTarget.value)}}
          error={fioValidate}
          helperText={fioValidate ? 'Вы неверно указали фио' : ''}
          required
        /> <br/>
  <div className='vertical_line_in_profile' ></div>
                <AlternateEmailIcon style={{fill: '#00BFA5'}} className='adaptive-icon-edit-profile'  />
            <TextField
          id="outlined-helperText"
          label="Email"
          placeholder="ivanova@mail.ru"
          variant="outlined"
          value={email}
          onChange={(event) => {setEmail(event.currentTarget.value); handleValidateEmail(event.currentTarget.value)}}
          error={emailValidate}
          helperText={emailValidate ? 'Вы неверно указали email' : ''}
          required
        />  <br/>
        <div className='vertical_line_in_profile' ></div>
        <PhoneIcon style={{fill: '#00BFA5'}} className='adaptive-icon-edit-profile'  />
            <TextField
          id="outlined-helperText"
          label="Номер телефона"
          placeholder="Укажите номер телефона"
          type="number"
          variant="outlined"
          value={phone}
          onChange={(event) => {setPhone(event.currentTarget.value); handleValidatePhone(event.currentTarget.value)}}
          error={phoneValidate}
          helperText={phoneValidate ? 'Вы неверно указали номер телефона' : ''}
          required
        /> <br/>
      </Box>
        <div className='flex-all-center'  >
        <Button 
        onClick={(event) => { !phoneValidate && !emailValidate && !fioValidate ? setOpen(true) : event.preventDefault()}}
        style={{background: '#01BDA7', color: '#fff', borderRadius: 36, fontSize: '1em', textTransform: 'none', padding: '1em', paddingLeft: '1.7em', paddingRight: '1.7em'}} >Сохранить изменения</Button>
        </div>
   </Box>}
   </Paper>
   </Hidden>

   <Modal 
       handleClose={handleClose}
        open={open}
        second_argument={
          // @ts-ignore
          ({scroll, message, setScroll, setMessage}) => {
         return <>
             <DialogContent >
        <DialogContentText
          id="scroll-dialog-description"
          tabIndex={-1}
          style={{textAlign: 'center'}}
        >
        Данные успешно сохранены
        </DialogContentText>
        </DialogContent>
        <DialogActions
                    style={{
                      height: '10vh',  display: 'flex', justifyContent: 'center', alignItems: 'center'
                    }}
        >
          <Button onClick={handleClick}
          style={{borderStyle: 'solid',borderColor: '#01BDA7', borderWidth: 2, background: '#01BDA7', color: '#fff', borderRadius: 36, fontSize: '1em', textTransform: 'none', padding: '1em', paddingLeft: '1.7em', paddingRight: '1.7em'}}
          >
            Хорошо
          </Button>
        </DialogActions>
          </>}
        }
        first_argument={
            // @ts-ignore
            ({scroll, message, setScroll, setMessage}) => {
           return <>
                         <DialogContent >
          <DialogContentText
            id="scroll-dialog-description"
            tabIndex={-1}
            style={{textAlign: 'center'}}
          >
           Сохранить изменения?
          </DialogContentText>
        </DialogContent>
        <DialogActions
                    style={{
                      height: scroll === 'body'? '100vh' : 'auto',  display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column'
                    }}
        >
          <Button onClick={() => {setMessage(true); changeProfileData(); setEdit(false)}}
          style={{fontSize: '0.8em',width: 150,borderStyle: 'solid',borderColor: '#01BDA7', borderWidth: 2, background: '#01BDA7', color: '#fff', borderRadius: 36,textTransform: 'none', padding: '1em', paddingLeft: '1.7em', paddingRight: '1.7em'}}
          >
            Сохранить
          </Button>  <br/>
          <Button onClick={handleClose}
          style={{marginLeft: 0 ,fontSize: '0.8em',width: 150,whiteSpace: 'nowrap',borderStyle: 'solid',borderColor: '#01BDA7', borderWidth: 2, background: '#fff', color: '#01BDA7', borderRadius: 36, textTransform: 'none', padding: '1em', paddingLeft: '1.7em', paddingRight: '1.7em'}}
          >
            Не сохранять
          </Button>
        </DialogActions>
            </>}
        }
      />
   </>
 )
}

export default withRouter(ProfileInfo);

