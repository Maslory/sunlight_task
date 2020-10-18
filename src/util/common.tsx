import {local_storage_profile_data} from './constants'

export function getProfileDataInLocalStorage(){
 const profile_data = {
  fio: localStorage.getItem('fio') || setItem('fio'),
  email: localStorage.getItem('email') || setItem('email'),
  phone: localStorage.getItem('phone') || setItem('phone')
 }
  return profile_data
}

export function setItem(name:string){
 localStorage.setItem(name,'')
 return ''
}