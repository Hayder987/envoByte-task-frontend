import React from 'react'
import SectionTitle from '../../common-components/SectionTitle'
import ClientSlider from './ClientSlider'

const ClientSection = () => {
  return (
    <div>
        <SectionTitle
         subHeading={'CLIENT REVIEWS'}
         Heading={'Our Proud Clients'}
        />
        {/* card */}
        <div className="max-w-[1000px] mx-auto">
            <ClientSlider/>
        </div>
    </div>
  )
}

export default ClientSection