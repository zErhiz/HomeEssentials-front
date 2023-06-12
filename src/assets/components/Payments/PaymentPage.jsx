import { CardElement, Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
 const stripePromise=     loadStripe('pk_test_51NIH80B99OOsZioz6GLfzZX0xWe7rtXN76AjNAHmgdzER0H2Y9drf2aTqtQWl2f4LyaiYUUwSpo2kW2IHxBaj9NF00QBTDVQ93')
 import React from 'react'




 const PaymentForm= ()=>{
    return <form >
        <CardElement/>
<button className='bg-orange-600 text-white p-4 border rounded-2xl font-semibold'>Place order</button>
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