/* eslint-disable */
import axios from 'axios'
const url = 'http://localhost:4000'
// const url = 'https://garment-backend.sincprojects.com'

export const loginAuth = async (user) => {
  try {
    return await axios.post(`${url}/loginAuth`, user)
  } catch (err) {
    // console.log(err, 'err in react api')
  }
}

//---------------------new change 28-----------------------
export const getProductName = async ()=>{
  try{
    return await axios.get(`${url}/getAllArticles`)
  }
 catch(error){
    console.log(error, 'err in react api')
 }
}


//////////////////////getCategories
export const getCategories = async ()=>{
  try{
    return await axios.get(`${url}/getCategories`)
  }
 catch(error){
    console.log(error, 'err in react api')
 }
}

// getAddWishlist/////

export const getAddWishlist = async (data)=>{
console.log(data);
  try{
    return await axios.post(`${url}/addwishlist`,data)
  }
 catch(error){
  console.log(error, 'err in react api')
 }
}

export const getWishlistData = async (data)=>{
  try{
    return await axios.post(`${url}/getWishlist`,data)
  }
 catch(error){
    console.log(error, 'err in react api')
 }
}

export const DeleteWishlist = async (data)=>{
  console.log(data);
  try{
    return await axios.post(`${url}/deletewishlist`,data)
  }
 catch(error){
    console.log(error, 'err in react api')
 }
}











