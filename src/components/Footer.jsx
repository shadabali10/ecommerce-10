import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                EcoMarket
              </h6>
              <p>
                  An EcoMarket website is an online store for buying and selling products and services.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
  <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
  <p>
    <a href='#!' className='text-reset' style={{textDecoration: 'none'}}>
      Men's Clothing
    </a>
  </p>
  <p>
    <a href='#!' className='text-reset' style={{ textDecoration: 'none' }}>
      Women's clothing
    </a>
  </p>
  <p>
    <a href='#!' className='text-reset' style={{ textDecoration: 'none' }}>
      Jewelry
    </a>
  </p>
  <p>
    <a href='#!' className='text-reset' style={{ textDecoration: 'none' }}>
      Electronics
    </a>
  </p>
</MDBCol>


            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset' style={{ textDecoration: 'none' }}>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' style={{ textDecoration: 'none' }}>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' style={{ textDecoration: 'none' }}>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' style={{ textDecoration: 'none' }}>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                New Delhi, 110001, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +91 6397831706
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> +91 9027342293
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold'>
          Shadab Ali
        </a>
      </div>
    </MDBFooter>
  );
}
