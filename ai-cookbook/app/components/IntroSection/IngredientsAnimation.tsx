"use client"
import Lottie from 'lottie-react'
import React from 'react'
import animationData from '@/public/FoodFloating.json'

const IngredientsAnimation = () => {
  return (
    <div>
        <Lottie animationData={animationData}></Lottie>
    </div>
  )
}

export default IngredientsAnimation