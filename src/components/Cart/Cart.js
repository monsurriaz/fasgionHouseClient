import React, { useContext, useState } from 'react';
import axios from 'axios';
import { UserContext } from '../../App';

const Cart = () => {

  const { cart, checkOutOrder, user, setCart } = useContext(UserContext)
  const [isShipping, setIsShipping] = useState(false)

  const [deliveryInfo, setDeliveryInfo] = useState({
    address: '',
    homeNo: '',
    flatNo: '',
    name: '',
    instruction: ''
  })

  const addToCart = item => {

    let isExist = cart.find(e => e._id === item._id)
    if (!isExist) {
      item.proTotalPrice = item.quantity * item.price
      let updateCart = [...cart, item]
      setCart(updateCart)
    } else {
      isExist.quantity = isExist.quantity + item.quantity
      isExist.proTotalPrice = isExist.price * item.quantity
      let index = cart.indexOf(isExist.id)
      cart[index] = isExist
      let updateCart = [...cart]
      setCart(updateCart)
    }
  }

    return (
        <div>
            
        </div>
    )
}