import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Select Your Items' subtitle='Select Your Items and add them to cart according to your requirments' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
