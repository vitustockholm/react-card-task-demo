import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

// const images = 'https://mdbootstrap.com/img/new/standard/nature/111.jpg';

const Card = () => {
  return (
    <div class='card' style={{ display: 'flex', flexDirection: 'row' }}>
      <img
        src='https://raw.githubusercontent.com/JoyShaheb/Project-image-repo/e2aa9d5d409b28efe7040e4b92da891c64ee23ce/Form-Validation/images/illustration.svg'
        alt=''
        style={{ width: '400px' }}
      />
      <div class='bg-image ' data-mdb-ripple-color='light'>
        {/* <img
          src='https://mdbootstrap.com/img/new/standard/nature/111.jpg'
          class='img-fluid'
        /> */}
        <a href='#!'>
          <div
            class='mask'
            style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}
          >
            {' '}
          </div>
        </a>
      </div>
      <div class='card-body'>
        <h5 class='card-title'>Card title</h5>
        <p class='card-text'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href='#!' class='btn btn-primary'>
          Button
        </a>
      </div>
    </div>
  );
};

export default Card;
