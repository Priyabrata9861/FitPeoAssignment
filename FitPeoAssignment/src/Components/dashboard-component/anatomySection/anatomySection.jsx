  import React from 'react'
  import './anatomy.css'
  import humanBody from '../../../../public/humanbody.png'
  function AnatomySection() {
    return (
      <div className="anatomy-container">
        <img src={humanBody} alt="Human Anatomy" className="body-img" />
        <div className="indicator heart healthy">Healthy Heart</div>
        <div className="indicator lungs issue">Lungs Issue</div>
        <div className="indicator teeth healthy">Teeth OK</div>
        <div className="indicator bone issue">Bone Weak</div>
      </div>
    )
  }

  export default AnatomySection
