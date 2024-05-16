"use client"
import Lottie from 'lottie-react'
import React, { useEffect, useState } from 'react'
import animationData from '@/public/kitchen.json'


const KitchenAnimation = () => {
  const [isAnimationLoaded, setIsAnimationLoaded] = useState(false);

  return (
     <>
         <Lottie animationData={animationData} />
     </>
  );
 };

export default KitchenAnimation