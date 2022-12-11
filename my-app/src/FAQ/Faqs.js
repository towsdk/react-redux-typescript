import React, { useState } from 'react';
import { faqsData } from './data';
import Faq from './Faq';

const Faqs = () => {
  const [faqs] = useState(faqsData);
  return (
    <main className='w-50 m-auto bg-danger'>
      <section>
        <h1>FAQS</h1>
      {faqs.map(faq=>
        <Faq key={faq.id} {...faq}/>)}
      </section>
    </main>
  )
}

export default Faqs