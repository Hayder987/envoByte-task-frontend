import React from 'react'
import SectionTitle from '../../common-components/SectionTitle'
import TeamSlider from './TeamSlider'

const TeamSection = () => {
  return (
    <div className=''>
        <SectionTitle
         subHeading={'EXPERIENCED TEAM'}
         Heading={'Our Team Members'}
        />
        {/* slider */}
        <div className="max-w-[1440px] mx-auto">
            <TeamSlider></TeamSlider>
        </div>
    </div>
  )
}

export default TeamSection