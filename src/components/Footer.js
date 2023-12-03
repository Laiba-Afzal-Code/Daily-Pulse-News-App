import React, { Component } from 'react'
import logo from './logo_newsr.png'
import { Link } from 'react-router-dom'

export class Footer extends Component {
  render() {
    return (
 
      <div>
        <div className="container text-warning py-5">
            <blockquote className="blockquote text-right ">
         
  <h2 className="mb-0"><img src={logo} alt="newslogo" style={{width:'150px'}} />At Daily Pulse website we are committed to delivering news that matters.</h2>
  <footer className="blockquote-footer py-3">Daily Pulse News-<cite title="Source Title">Alba-Developer</cite></footer>
</blockquote>

        <dl className="row">
  <dt className="col-sm-3">Description</dt>
  <dd className="col-sm-9">A description list is perfect for defining terms.</dd>

  <dt className="col-sm-3">Term</dt>
  <dd className="col-sm-9">
    <p>High Informational news provider site</p>
    <p>At Daily Pulse website we are committed to delivering news that matters. Our team of dedicated journalists works tirelessly to provide you with up-to-date and reliable information on a wide range of topics, from politics and business to technology, entertainment, and beyond.</p>
  </dd>

  <dt className="col-sm-3">About Daily pulse News app</dt>
  <dd className="col-sm-9">
Explore our Daily Pulse and take the power of information with you wherever you go. Experience a seamless and personalized news journey at your fingertips. Stay updated, stay informed – your world, your news, on the go. wist now and never miss a headline..</dd>

  <dt className="col-sm-3 text-truncate">Api news Loading website that provide newest news of different countries and on all categories</dt>
  <dd className="col-sm-9">News, Business, Sports, Entertainment, General, Health, Science, Technology,
  </dd>

  <dt className="col-sm-3">Explore and Enhance your Knowladge with us!</dt>
  <dd className="col-sm-9">
    <dl className="row">
      <dt className="col-sm-4">Thanks for Exploring our site</dt>
      <dt className="col-sm-8 fw-bold">Thank you for choosing Daily Pulse News as your trusted news source. Explore, discover, and stay informed with us.</dt>
    </dl>
  </dd>
</dl>

<div className="container my-5">
<div class="dropdown">
 <select name="English" id="eng" className='btn btn-warning mx-3' >
  <option value="English">English</option>
  <option value="USA">USA</option>
 </select>
 <select name="News" id="news" className='btn btn-warning mx-3' >
  <option value="headline"><Link to="/general">Headline</Link></option>
  <option value="general"> <Link to="/general">All News</Link></option>
 </select>
</div>
</div>
<p className='d-flex justify-content-center'>copyright  © 2023  Daily Pulse; user contributions licensed under CC BY-SA. rev 2023.11.30.1842 <nav>News website</nav></p>
</div>
      </div>
    )
  }
}

export default Footer
