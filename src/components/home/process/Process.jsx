import React from "react"
import Heading from "../../common/Heading"
import { process } from "../../data/Data"
import "./style.css"

const Process = () => {
  return (
    <>
      <section className='Service padding'>
        <div className='container'>
          <Heading title='Laundry Process' subtitle='We have plenty of  laundry outlets to ensure no matter where you live in Colombo the best services with the best prices are always nearby. You can rest assured the prices listed below and within our laundry mart web page include no mark ups or hidden fees. And along with transparent prices.lets you schedule regular  all from the convenience of our user friendly Web page.' />

          <div className='content grid3 mtop'>
            {process.map((item, index) => (
              <div className='box' key={index}>
                <img src={item.cover} alt='' />
                <div className='overlay'>
                  <h5>{item.name}</h5>
                  <p>
                    <label>{item.description}</label>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Process
