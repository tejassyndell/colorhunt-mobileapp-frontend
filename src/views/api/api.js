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
    return await axios.get(`${url}/getProductName`)
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


export const getNewImage = async (id)=>{
  const data = {
    id:id
  }
  try{
    return await axios.post(`${url}/getNewImage`,data,{ timeout: 10000 })
  }
 catch(error){
    console.log('false')
    return 0;
 }
}


export const getDataOfProduct = async ()=>{

  // console.log(params);
  try {
    return await axios.post(`${url}/getDataOfProduct`);
    // console.log(searchQuery);
  } catch (error) {
    console.error(error);
  }
}

export const serachProduct = async (searchQuery)=>{

  // console.log(params);
 const params= {
    query: searchQuery
  }
  try {
    return await axios.post(`${url}/serachProduct`,params);
    // console.log(searchQuery);
  } catch (error) {
    console.error(error);
  }
}

//---------------------new change 28-----------------------


export const getProductData = async (p1) => {
  let data={
    page:p1
  }
  try {
    return await axios.post(`${url}/getProduct`,data)
  } catch (err) {
    console.log(err, 'err in react api')
  }
}

export const UserDetails = async (id) => {
  try {
    return await axios.post(`${url}/UserDetails/${id}`)
  } catch (err) {
    console.log(err, 'err in react api')
  }
}

export const SendMail = async (data) => {
  try {
    return await axios.post(`${url}/SendMail`, data)
  } catch (err) {
   
    console.log(err, 'err in react api')
  }
}

export const OrderDetails = async (id) => {
  try {
    return await axios.post(`${url}/OrderDetails/${id}`)
  } catch (err) {
    console.log(err, 'err in react api')
  }
}

export const OrderHistory = async (id) => {
  try {
    return await axios.post(`${url}/OrderHistory/${id}`)
  } catch (err) {
    console.log(err, 'err in react api')
  }
}

export const ProductTagApi = async (id) => {
  try {
    return await axios.post(`${url}/ProductTagApi/${id}`)
  } catch (err) {
    console.log(err, 'err in react api')
  }
}
export const ProductColor = async (id) => {
  try {
    return await axios.post(`${url}/ProductColor/${id}`)
  } catch (err) {
    console.log(err, 'err in react api')
  }
}
export const sendOtp = async (phone) => {
  try {
    return await axios.post(`${url}/sendOtp/${phone}`)
  } catch (err) {
    console.log(err, 'err in react api')
  }
}

// ---------AddInWishlist start -------------------

export const Addinwishlist = async (data) => {
  // console.log(data);
  try {
    return await axios.post(`${url}/addinwishlist`, data)
  }
  catch (err) {
    console.log(err, 'err in react api')
  }
}

// ---------AddInWishlist end -------------------

// ---------get Wishlist item start-------------
export const getWishlistItems = async (userid) => {
  try {
    let userIduserId = {
      userid: userid
    }
    return await axios.post(`${url}/getWishlistItems`, userIduserId)
  }
  catch (err) {
    console.log(err, 'err in react api')
  }
}

export const productwishlist = async (id) => {
  try {
    let prdId = {
    id: id
    }
    return await axios.post(`${url}/productwishlist`, prdId,{ timeout: 5000 })
  }
  catch (err) {
    console.log(err, 'err in react api')
  }
}



// ---------get Wishlist item end-------------

// ---------delete product from wishlist start---------

export const unlinkproductwishlist = async (pid) => {
  try {
    const prdId = {
      id: pid
    }
    return await axios.post(`${url}/unlinkproductwishlist`, prdId)
  }
  catch (err) {
    console.log(err, 'err in react api')
  }
}
export const unlinkproductdashboard = async (data) => {
  try {
    return await axios.post(`${url}/unlinkproductdashboard`, data)
  }
  catch (err) {
    console.log(err, 'err in react api')
  }
}
// ---------delete product from wishlist end---------

// --------- Get the category details start------------
export const getCategory = async () => {
  try {
    return await axios.get(`${url}/getCategory`)
  }
  catch (err) {
    console.log(err, 'err in react api')
  }
}
// --------- Get the category details end------------

// --------- Add to cart start-----------
export const createCartData = async (data) =>{
  try {
    return await axios.post(`${url}/createCartData`,data)
  } catch (err) {
    console.log(err, 'err in react api')
  }
}
// --------- Add to cart end-----------
// --------- update to cart Qty ---------

export const updateQty = async (data) =>{
  try {
    return await axios.put(`${url}/updateQty`,data)
  } catch (err) {
    console.log(err, 'err in react api')
  }
}

// --------- update to cart Qty ---------

// ------------ get product from cart start--------
export const getCartData = async (data) =>{
  try {
    return await axios.post(`${url}/getCartData`,data)
  } catch (err) {
    console.log(err, 'err in react api')
  }
}
// ------------get product from cart end--------

//------------remove item from cart start-------------
export const cartRemoveItem = async (data)=>{
  try{
    return await axios.post(`${url}/cartRemoveItem`,data)
  }
  catch (err){
    console.log(err, 'err in react api')
  }
}
//------------remove item from cart end----------------
//to get customer details
export const customerDetails = async () => {
  try {
    return await axios.post(`${url}/verifyOtp`,Otpdata)
  } catch (err) {
    console.log(err, 'err in react api')
  }
}

export const ResendOTP = async (Otpdata) => {
 
  try {
    return await axios.post(`${url}/resendOtp`,Otpdata)
  } catch (err) {
    console.log(err, 'err in react api')
  }
}

//to update user details
export const UpdateUserdetais = async (state) => {
  try {
    return await axios.put(`${url}/UpdateUser`, state)
    // return await axios.get(`${url}/delete/${userId}`)
  } catch (err) {
    console.log(err, 'err in react api')
  }
}

//for delete user
export const userDelete = async (ID) => {
  try {
    console.log(ID)
    return await axios.delete(`${url}/userDelete/${ID}`)
  } catch (err) {
    console.log(err, 'err in react api')
  }
}

//to ger user Profile
export const UserProfile = async (userId) => {
  // console.log('****userIduserId****',userId)
  try {
    return await axios.get(`${url}/profile?id=${userId}`)
    // return await axios.get(`${url}/profile/${userId}`)
  } catch (err) {
    console.log(err, 'err in react api')
  }
}

//
export const UpdateProfile = async (state) => {
  try {
    console.log(state)
    return await axios.put(`${url}/updateprofile`, state)
  }
  catch (err) {
    console.log(err, 'err in react api')
  }
}

// to check either user exist or not
export const userExist = async (user) => {
  try {
    return await axios.post(`${url}/ForgotPass`, user)
  } catch (err) {
    console.log(err, 'err in react api')
  }
}


//to send mail to user
export const sendMail = async (user) => {
  try {
    return await axios.get(`${url}/sendmail?user=${user.email}`)
  } catch (err) {
    console.log(err, 'err in react api')
  }
}

//check whether user is authentic or not to update password
export const authUser = async (credData) => {
  try {
    return await axios.post(`${url}/confirmuser`, credData)
  } catch (error) {
  }
}


//to update password
export const setNewPassword = async (user) => {
  try {
    return await axios.get(`${url}/updatePassword?ps=${user.newPassword}&email=${user.email}`, user)
  } catch (error) {
    console.log(err, 'err in react api')
  }
}


//milestone 2 
//to fetch customer id
export const fetchCustomerIds = async () => {
  try {
    return await axios.post(`${url}/fetchCusID`)
  } catch (err) {
    console.log(err, 'err in react api')
  }
}
//Get Customers Details
export const CustomersDetails = async () => {
  try {
    return await axios.get(`${url}/customersdetails`)
  } catch (err) {
    console.log(err, 'err in react api')
  }
}
//Get Access Token
export const getAccesstoken = async () => {
  try {
    return await axios.get(`${url}/getAccesstoken`)
  } catch (err) {
    console.log(err, 'err in react api')
  }
}

//to fetch  products data when user selec type for order

export const fetchProductdata = async (product) => {
  try {
    return await axios.post(`${url}/getproductdetails`, product)
  } catch (err) {
    console.log(err, 'err in react api')
  }
}

//to fetch  products options when user selec type for order

export const fetchProductOptions = async (code) => {
  try {
    return await axios.post(`${url}/getproductoptions`, code)
  } catch (err) {
    console.log(err, 'err in react api')
  }
}


export const verifyOtp = async (Otpdata) => {
 
  try {
    return await axios.post(`${url}/verifyOtp`,Otpdata)
  } catch (err) {
    console.log(err, 'err in react api')
  }
}

export const getHomePgeData = async () => {
 
  try {
    return await axios.post(`${url}/getHomePgeData`)
  } catch (err) {
    console.log(err, 'err in react api')
  }
}