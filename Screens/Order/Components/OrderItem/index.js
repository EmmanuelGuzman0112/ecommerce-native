import React from 'react'
import { Text } from 'react-native'

const OrderItem = ({item, index}) => {
  console.log("item en Orden", item);
  console.log("index", index);
  return (
    <Text>{item.id}</Text>
  )
}

export default OrderItem