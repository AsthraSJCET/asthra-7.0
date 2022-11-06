import React from 'react'
import MainCard from '../components/MainCard'
import '../stylesheets/index.css';

function CardPage() {
  return (
    // <div class="grid">
    <div class="bg-black grid grid-cols-1 lg:grid-cols-3 lg:gap-8 h-fit lg:h-screen justify-items-center">
        <MainCard cardTitle='card1' cardSubTitle='sub1'/>
        <MainCard cardTitle='card2' cardSubTitle='sub1'/>
        <MainCard cardTitle='card3' cardSubTitle='sub1'/>
    </div>
    // </div>
  )
}

export default CardPage