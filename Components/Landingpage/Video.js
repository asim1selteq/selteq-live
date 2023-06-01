import React from 'react';
import styles from "../../styles/Landing.module.css"

function Video() {
  return (
    <div className='col-md-12 p-0'>
      <div className='col-md-12 video-container p-0 display_h'>
        <video loop autoPlay muted className='video_main position-relative'>
          <source src='https://1864597015.rsc.cdn77.org/selteqreact/video/new1.mp4' type="video/mp4" />
        </video>
        <div className="col-md-12 px-0 display_h py-2 banner_footer_main">
          <div className="container d-flex flex-column align-items-center">
            <h3 className={`text-center banner_footer_main_heading`}><b>You Dream. We Create.</b></h3>
            <p className="text-center text-light">With Our Future-Proof Software Solutions</p>
          </div>
        </div>
      </div>

      <div className='col-md-12 video-container1 p-0 display_pc '>
        <video loop autoPlay muted className='video_main2'>
          <source src='https://1864597015.rsc.cdn77.org/selteqreact/video/mob.mp4' type="video/mp4" />
        </video>
        <div className="col-md-12 px-0 display_h py-2 banner_footer_main display_pc">
          <div className="container d-flex flex-column align-items-center">
            <h3 className={`text-center banner_footer_main_heading`}><b>You Dream. We Create.</b></h3>
            <p className="text-center banner_footer_main_desc">With Our Future-Proof Software Solutions</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Video