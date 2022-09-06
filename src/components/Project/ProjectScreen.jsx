import React from 'react'
import PdfViewerCard from './PdfViewerCard'
import ProjectHero from './ProjectHero'
import './style/projectScreen.css'

const ProjectScreen = () => {

  return (
    <div className='project'>
      <div className='project__hero'>
        <ProjectHero />
      </div>
      <br />
      <div>
        <PdfViewerCard />
      </div>
    </div>
  )
}

export default ProjectScreen