import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <div>
        <h1>Text Color</h1>
        <p className='text-danger'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p className='text-primary'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p className='text-success'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p className='text-warning'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p className='text-info'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div>
        <h1>Background Color</h1>
        <p className='bg-danger'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p className='bg-primary'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p className='bg-success'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p className='bg-warning'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p className='bg-info'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p className='bg-light text-dark'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div>
        <h1>Border Color</h1>
        <p className='border border-danger'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p className='border border-primary'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p className='border border-success'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p className='border border-warning'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p className='border border-info'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p className='border border-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div>
        <p className='border border-danger border-3 mt-5 p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div>
        <ul className='list-group'>
          <li className='list-group-item'>Home</li>
          <li className='list-group-item active'>About</li>
          <li className='list-group-item'>Contact</li>
          <li className='list-group-item disabled'>Blog</li>
          <li className='list-group-item'>Services</li>
          <li className='list-group-item'>Help</li>
        </ul>
      </div>
      <div>
        <table className="mt-5 table table-bordered table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John</td>
              <td>25</td>
              <td>Male</td>
            </tr>
            <tr>
              <td>Tom</td>
              <td>30</td>
              <td>Male</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='mt-5 d-flex justify-content-center align-items-center '>
        <div>
          left
        </div>
        <div>
          center
        </div>
        <div>
          right
        </div>
      </div>
      <div className='alert alert-danger'>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </>
  )
}

export default App
