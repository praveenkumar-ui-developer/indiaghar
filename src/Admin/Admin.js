import React, { useState } from 'react';
import axios from 'axios';


function Admin() {
  const [formData, setFormData] = useState({
    producturl: '',
    imgurl: '',
    productname: '',
    snumber:''
  });
console.log(formData)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://affiliate-s3eu.onrender.com/products', formData)
      .then(response => {
        console.log('Data submitted successfully:', response.data);
      })
      .catch(error => {
        console.error('Error submitting data:', error);
      });
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3 row">
          <label htmlFor="producturl" className="col-4 col-form-label">Product Url</label>
          <div className="col-8">
            <input
              type="text"
              className="form-control"
              name="producturl"
              id="producturl"
              placeholder="Product URL"
              value={formData.producturl}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="imgurl" className="col-4 col-form-label">Image Url</label>
          <div className="col-8">
            <input
              type="text"
              className="form-control"
              name="imgurl"
              id="imgurl"
              placeholder="Image URL"
              value={formData.imgurl}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="productname" className="col-4 col-form-label">Product Name</label>
          <div className="col-8">
            <input
              type="text"
              className="form-control"
              name="productname"
              id="productname"
              placeholder="Product Name"
              value={formData.productname}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="snumber" className="col-4 col-form-label">S.No</label>
          <div className="col-8">
            <input
              type="text"
              className="form-control"
              name="snumber"
              id="snumber"
              placeholder="Serial Number"
              value={formData.snumber}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <div className="offset-sm-4 col-sm-8">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>
     
    </div>
  );
}

export default Admin;
