import { CardElement, Elements, useStripe, useElements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
 const stripePromise=     loadStripe('pk_test_51NIH80B99OOsZioz6GLfzZX0xWe7rtXN76AjNAHmgdzER0H2Y9drf2aTqtQWl2f4LyaiYUUwSpo2kW2IHxBaj9NF00QBTDVQ93')
 import React from 'react'




 const PaymentForm= ()=>{
  const stripe = useStripe()
  const elements= useElements()
  const handleSubmit= async (e)=>{
    e.preventDefault()
 const{error, paymentMethod}=  await stripe.createPaymentMethod({
      type:'card',
      card:elements.getElement(CardElement)
    })
    if(!error){
      console.log(paymentMethod)
    }
  }
    return <form onSubmit={handleSubmit} className='p-9 gap-3 w-[100%] flex flex-col justify-center   border border-black ' >
      <h1 className='font-bold text-2xl text-black text-center'>Complete your payment</h1>
      <label htmlFor="Name">Name</label>
      <input type="text" className='border xl:w-[25%] rounded-xl' />
      <label htmlFor="Name">Last Name</label>
      <input type="text" className='border xl:w-[25%] rounded-xl' />
      <label htmlFor="Adress">Address</label>
      <input type="text" className='border   xl:w-[25%] rounded-xl' />
      <label htmlFor="Adress">City</label>
      <input type="text" className='border  xl:w-[25%] rounded-xl' />
      <div className='p-4 border xl:w-[25%] gap-2 rounded-xl'>

        <CardElement className='text-black font-bold'/>
      </div>
<button className='bg-orange-600 text-white p-4 border rounded-2xl flex justify-center items-center w-[20%] font-semibold'>Place order</button>
    </form>
 }
 
 const PaymentPage = () => {




  
   return (
     <Elements stripe={stripePromise}>
<PaymentForm/>
     </Elements>
   )
 }
 
 export default PaymentPage