import React from 'react'
import { Button } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

const Contact = () => {
    const navigate = useNavigate();
  return (
    <div>
    <h1>This is Contact page</h1>
    <p>Sanctus amet invidunt sit erat vero sanctus lorem, nonumy gubergren elitr
         sea aliquyam kasd aliquyam sit, justo clita eos sea aliquyam eos, nonumy 
         duo diam amet lorem lorem dolor ipsum. Elitr ea et aliquyam et diam ut at
          aliquyam ipsum. Clita invidunt clita consetetur dolor, stet consetetur
           labore gubergren justo.</p>
           <Button onClick={()=>{
            navigate("/");
           }}>Click</Button>
</div>
  )
}

export default Contact