import { useRouter } from 'next/router';
import React from 'react'

function Unlock() {
  const router = useRouter();
  const contact = () => {
    router.push("/contact-us")
  }
  return (
    <div className='col-md-12  pt-5'>
      <div className='col-md-12 text-center'>
        <p className='mb-0 text_size_sol'>Our BPO Services & Solutions</p>
      </div>
      <div className='col-md-12 px-0 pt-4'>
        <p className='mb-0 sub_text_size_sol'>
          IT Support & Infrastructure Management
        </p>
        <p className='mb-0 sub_sub_text_size_sol'>
          Supporting network monitoring, server management, cybersecurity, software and IT infrastructure optimization.        </p>
      </div>
      <div className='col-md-12 px-0 pt-4'>
        <p className='mb-0 sub_text_size_sol'>Finance and Accounting Outsourcing</p>
        <p className='mb-0 sub_sub_text_size_sol'>
          Entrust your finance functions to us, including accounts payable and receivable, financial reporting & bookkeeping.
        </p>
      </div>
      <div className='col-md-12 px-0 pt-4'>
        <p className='mb-0 sub_text_size_sol'>Customer Support Outsourcing</p>
        <p className='mb-0 sub_sub_text_size_sol'>
          Providing inbound and outbound call handling, live chat support, email management, and complaint resolution.
        </p>
      </div>

      <div className='col-md-12'>
        <div className='row'>
          <div className='col-md-5 col-6 px-0 pt-4'>
            <p className='mb-0 sub_text_size_sol'>Data Entry and Processing</p>
            <p className='mb-0 sub_sub_text_size_sol'>
              Our data entry & processing services ensure accurate data management, cleansing, verification & form processing.
            </p>
          </div>
          <div className='col-md-7 col-6 px-0 pt-4'>
            <img className='img-fluid' src='https://1864597015.rsc.cdn77.org//selteq/images/Frame1.png' />
          </div>
        </div>
      </div>
      <div className='col-md-12 px-0 pt-3 pb-4'>
        <button onClick={() => contact()} className='btn btn-danger w-100 background_button_red'>BOOK CONSULTATION</button>
      </div>
    </div>
  )
}

export default Unlock