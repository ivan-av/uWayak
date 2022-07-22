import React from 'react'
import PdfViewerCard from './PdfViewerCard'
import ProjectCard from './ProjectCard'
import './style/projectScreen.css'

const ProjectScreen = () => {

  return (
    <div className='project'>
      <div>
        <ProjectCard />
      </div>

      <br />

      <div>
        <PdfViewerCard />
      </div>

    </div>
  )
}

export default ProjectScreen