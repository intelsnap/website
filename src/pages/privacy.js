import React from 'react'
import { Row } from 'antd'
import Layout from '../components/layout'

const Privacy = () => (
  <Layout>
    <Row>
      <div
        className="cont"
        style={{
          textAlign: 'justify',
          padding: '0px 10px',
          margin: '0px 270px',
        }}
      >
        <h1
          style={{
            color: 'black',
            textTransform: 'capitalize',
            fontWeight: '600',
            margin: '30px',
          }}
        >
          {' '}
          Privacy Policy{' '}
        </h1>

        <h2> Privacy Notice </h2>
        <p>
          This privacy notice discloses the privacy practices for{' '}
          <a href="https://intepsnap.com"> https://intepsnap.com </a>This
          privacy notice applies solely to information collected by this
          website. It will notify you of the following:
        </p>
        <ol>
          <li>
            {' '}
            What personally identifiable information is collected from you
            through the website, how it is used and with whom it may be shared.
          </li>
          <li>
            {' '}
            What choices are available to you regarding the use of your data.
          </li>
          <li>
            {' '}
            The security procedures in place to protect the misuse of your
            information.
          </li>
          <li> How you can correct any inaccuracies in the information.</li>
        </ol>
        <h2> Information Collection, Use, and Sharing </h2>

        <p>
          We are the sole owners of the information collected on this site. We
          only have access to/collect information that you voluntarily give us
          via email, a website form, or other direct contact from you. We will
          not sell or rent this information to anyone.
        </p>
        <p>
          We will use your information to respond to you, regarding the reason
          you contacted us. We will not share your information with any third
          party outside of our organization, other than as necessary to fulfill
          your request, e.g. to process a payment.
        </p>
        <p>
          Unless you ask us not to, we may contact you via email in the future
          to tell you about specials, new products or services, or changes to
          this privacy policy.
        </p>

        <h2> Your Access to and Control Over Information </h2>
        <p>
          You may opt out of any future contacts from us at any time. You can do
          the following at any time by contacting us via the email address or
          phone number given on our website:
        </p>
        <ul>
          <li>See what data we have about you, if any.</li>
          <li>Change/correct any data we have about you.</li>
          <li>Have us delete any data we have about you.</li>
          <li>Express any concern you have about our use of your data.</li>
        </ul>

        <h2> Security </h2>

        <p>
          We take precautions to protect your information. When you submit
          sensitive information via the website, your information is protected
          both online and offline.
        </p>

        <p>
          Wherever we collect sensitive information (such as credit card data),
          that information is encrypted and transmitted to a trusted third party
          in a secure way. You can verify this by looking for a lock icon in the
          address bar and looking for “https” at the beginning of the address of
          the Web page.
        </p>
        <p>
          While we use encryption to protect sensitive information transmitted
          online, we also protect your information offline. Only employees who
          need the information to perform a specific job (for example, license
          processing or customer service) are granted access to personally
          identifiable information. The computers/servers in which we store
          personally identifiable information are kept in a secure environment.
        </p>

        <h2> Registration </h2>
        <p>
          {' '}
          In order to use this website, a user must first complete the
          registration form. During registration a user is required to give
          certain information (such as name and email address). This information
          is used to contact you about the products/services on our site in
          which you have expressed interest. At your option, you may also
          provide demographic information (such as gender or age) about
          yourself, but it is not required.
        </p>

        <h2> Orders </h2>
        <p>
          We request information from you on our order form. To buy from us, you
          must provide contact information (like name and shipping address) and
          financial information (like credit card number, expiration date). This
          information is used for billing purposes and to fill your orders. If
          we have trouble processing an order, we’ll use this information to
          contact you.
        </p>

        <h2> Cookies </h2>
        <p>
          We use “cookies” on this site. A cookie is a piece of data stored on a
          site visitor’s hard drive to help us improve your access to our site
          and identify repeat visitors to our site. For instance, when we use a
          cookie to identify you, you would not have to log in a password more
          than once, thereby saving time while on our site. Cookies can also
          enable us to track and target the interests of our users to enhance
          the experience on our site. Usage of a cookie is in no way linked to
          any personally identifiable information on our site. Some of our
          business partners may use cookies on our site. However, we have no
          access to or control over these cookies.
        </p>

        <h2> Sharing </h2>
        <p>Intelsnap Inc. does not share your data with any third party.</p>

        <h2> Links </h2>
        <p>
          This website contains links to other sites. Please be aware that we
          are not responsible for the content or privacy practices of such other
          sites. We encourage our users to be aware when they leave our site and
          to read the privacy statements of any other site that collects
          personally identifiable information.
        </p>
        <p>
          If you feel that we are not abiding by this privacy policy, you should
          contact us immediately via email (
          <a href="support@intelsnap.com"> support@intelsnap.com</a>).
        </p>
      </div>
    </Row>
  </Layout>
)

export default Privacy
