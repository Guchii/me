import Head from 'next/head'
import Image from 'next/image'
import Naruto from "../public/naruto1.jpg"

const Contact = () => {
  return (
    <>
      <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center">
        <Image src={Naruto} className="me-lg-5 mb-3 mb-lg-0" alt="naruto" width={1280 * 0.3} height={720 * 0.3} />
        <form className="card rounded p-3 shadow-lg" style={{ Height: '500px' }} name="contact" netlify>
        {/* <input type="hidden" name="form-name" value="contact" /> */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" id="name" name="name" className="form-control" placeholder="guchiii srivastava" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" id="email" name="email" className="form-control" placeholder="guchiii@mail.com" />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            style={{ resize: "none" }}
            <textarea id="message" rows="3" name="message" className="form-control" placeholder="#include <iostream>"
            />
          </div>
          <button type="submit" className="btn btn-primary fw-bold">Submit Response</button>
        </form>
      </div>
      <Head>
        <title>
          Shivom Srivastava | Contact
        </title>
      </Head>
    </>
  )
}

export default Contact
