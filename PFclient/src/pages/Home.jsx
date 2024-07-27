import React, { useContext, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

export default function Home() 
{

  return (
<section class="bg-light">
  <div className='home'>
    <div className='home-content'>
      <i class="fa fa-mobile"></i>
      <h4>Accessible and Convenient</h4>
      <p>With an easy-to-use platform, PesaFresh makes it simple for farmers to apply for and manage their loans, reducing the bureaucratic hurdles often associated with traditional banking.</p>
    </div>
    <div className='home-content'>
      <i class="fa fa-money"></i>
      <h4>Tailored Financial Solutions</h4>
      <p>PesaFresh understands the unique financial needs and challenges of farmers, providing customized credit solutions that are aligned with the agricultural cycles.</p>
    </div>
    <div className='home-content'>
      <i class="fa fa-percent"></i>
      <h4>Competitive Rates</h4>
      <p>PesaFresh offers competitive interest rates and flexible repayment terms that are designed to be manageable for farmers, ensuring they can repay loans without compromising their livelihood.</p>
    </div>
    <div className='home-content'>
      <i class="fa fa-users"></i>
      <h4>Community Focus</h4>
      <p>By focusing on the farming community, PesaFresh fosters a sense of trust and reliability, which is essential for long-term partnerships and sustainable agricultural growth.</p>
    </div>
    </div>
    <div class="container py-5 py-lg-0 min-vh-100 d-flex justify-content-center">
      <div class="text-center">
        <h1 class="display-4 fw-extrabold">
          <strong class="d-block text-success fw-extrabold"> PesaFresh </strong>
        </h1>
        <p class="fs-4">
          PesaFresh is a platform that connects businesses and farmers to credit in a seamless, efficient, and transparent way.
        </p>
        
        <div class="mt-4 d-flex flex-wrap justify-content-center gap-4">
          <a
            class="btn btn-success text-white px-4 py-2 shadow-sm hover:bg-danger focus:outline-none focus:ring active:bg-danger"
            href="#"
          >
            Get Started
          </a>
          <a
            class="btn btn-outline-success text-danger px-4 py-2 shadow-sm hover-text-danger focus:outline-none focus:ring active:text-danger"
            href="#"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
</section>

  )
}


