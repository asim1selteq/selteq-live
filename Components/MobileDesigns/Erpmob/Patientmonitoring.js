import React from 'react'
import Patientmon from '../Services/Patientmon'
import Ascand from '../Softwaredev/Ascand'

function Patientmonitoring() {
  return (
    <div className='display_pc  background_color_solutions'>
      <div className='row pb-3 pt-5' >
        <div className='col-md-2 col-2'></div>
        <div className='col-md-8 col-8'>
        <div className="row">
                <div className="col-md-1 col-3 text-right">
                    <img className="img-fluid" src="https://1864597015.rsc.cdn77.org/selteqreact/mobimg/ico1.png" />
                </div>
                <div className="col-md-11 col-9 pl-0">
                    <p className="mb-0 heading_sol_sec">Streamlined Process</p>
                    <p className="mt-0 sub_heading_sol_sec">Automation, data analysis, reporting & tracking</p>
                </div>
            </div>
            <div className="row pt-2">
                <div className="col-md-1 col-3 text-right">
                    <img className="img-fluid" src="https://1864597015.rsc.cdn77.org/selteqreact/mobimg/ico3.png" />
                </div>
                <div className="col-md-11 col-9 pl-0">
                    <p className="mb-0 heading_sol_sec">Enhanced Productivity</p>
                    <p className="mt-0 sub_heading_sol_sec">Supply chain & inventory management</p>
                </div>
            </div>
            <div className="row pt-2">
                <div className="col-md-1 col-3 text-right">
                    <img className="img-fluid" src="https://1864597015.rsc.cdn77.org/selteqreact/mobimg/ico2.png" />
                </div>
                <div className="col-md-11 col-9 pl-0">
                    <p className="mb-0 heading_sol_sec">Cost Savings</p>
                    <p className="mt-0 sub_heading_sol_sec">Improved Stock Control, Manufacturing & logistics</p>
                </div>
            </div>
        </div>
        <div className='col-md-2 col-2'></div>
      </div>
    </div>
  )
}

export default Patientmonitoring