import React from 'react';
import { useLoaderData } from 'react-router-dom';
const Statictis = () => {
    const loader=useLoaderData();
    console.log(loader);
    return (
        <div>
        <div class="card mb-3 w-100" >
  <div class="row g-0">
    <div class="col-md-8">
      <div class="card-body">
          
      </div>
    </div>
    <div class="col-md-4">
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Statictis;