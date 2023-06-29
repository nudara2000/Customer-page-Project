import React from "react"
import Heading from "../../common/Heading"
import "./Featured.css"
import FeaturedCard from "./FeaturedCard"

const Featured = () => {
  return (
    <>
      <section className='featured background'>
        <div className='container'>
          <Heading title='Laundry services at your doorstep' subtitle='Now you can book, track and pay for your laundry services all the way from the home by using  Laundry mart. 
          Doing your laundry has never been easier. 3 simple steps then it is time to let us do the work.
           From regular dry cleaning, washing and ironing . we take care of the mundane and leave you to live an inspired life.
           Find All Type of Property.'/>
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Featured
