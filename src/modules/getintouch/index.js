import React from 'react';
import LatestNews from '../../components/LatestNews';
import Following from '../../components/Following';
import styles from './styles/styles.module.scss';
const classNames = require('classnames/bind');
const cx = classNames.bind(styles);
const aws = require('aws-sdk');
const ses = new aws.SES({
  accessKeyId: "AKIAJVAGONKBKYXWQUVA",
  secretAccessKey: "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",
  region: 'us-east-1'
});

const ADDRESSEE = 'hello@slashdata.co';

const GetInTouch = ({ data: { latestNews } }) => {
  const handleSubmit = ({ target: { elements: { name, email, company, role, message } } }) => {
    const eParams = {
      Destination: {
        ToAddresses: ["treshaalesha@gmail.com"]
      },
      Message: {
        Body: {
          Text: {
            Data:
              `Name: ${name.value}\n\ Email: ${email.value} \n\
               Company: ${company.value}
               Role: ${role.value}
               Message: ${message.value}`
          }
        },
        Subject: {
          Data: `${email.value} sent a new message`
        }
      },
      Source: ADDRESSEE
    };

    console.log('===SENDING EMAIL===');
    const eeemail = ses.sendEmail(eParams, (err, data) => {
      if(err) console.log(err);
      else {
        console.log("===EMAIL SENT===");
        console.log(data);


        console.log("EMAIL CODE END");
        console.log('EMAIL: ', eeemail);
      }
    });
  };

  return (
    <div>
      <div className={cx(['getInTouchContainer', 'mainContainer', 'welcome'])}>
        <div className={styles.welcomeText}>
          <div className={styles.title}>Contact Us</div>
          <form action="javascript:void(0);" onSubmit={handleSubmit}>

            <div className={styles.formElement}>
              <label htmlFor="name">NAME</label>
              <input name="name" type="text" placeholder="YOUR NAME" required/>
            </div>

            <div className={styles.formElement}>
              <label htmlFor="email">EMAIL ADDRESS</label>
              <input name="email" type="email" placeholder="EMAIL ADDRESS" required/>
            </div>

            <div className={styles.formElement}>
              <label htmlFor="company">COMPANY</label>
              <input name="company" type="text" placeholder="YOUR COMPANY"/>
            </div>

            <div className={styles.formElement}>
              <label htmlFor="role">ROLE</label>
              <input name="role" type="text" placeholder="YOUR ROLE"/>
            </div>

            <div className={styles.formElement}>
              <label htmlFor="message">MESSAGE</label>
              <textarea name="message" type="text" rows="4" placeholder="TYPE YOUR MESSAGE"/>
            </div>
            <div className={styles.actions}>
              <button type="submit" className={styles.winnerButton}>Send message</button>
            </div>
          </form>
        </div>
      </div>
      <div className={styles.info}>
        <LatestNews latestNews={latestNews.edges}/>
        <Following />
      </div>
    </div>
  )
};

export default GetInTouch;

export const pageQuery = graphql`
  query GetInTouch {
    latestNews: allContentfulNews(limit: 1000) {
    edges {
      node {
        date
        headLine
        reporter
    }
  }
  }
}
`