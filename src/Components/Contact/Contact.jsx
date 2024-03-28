import ButtonSecondary from "../../ButtonSecondary"
import Paragraph from "../../Paragraph"
import SubTitle from "../../SubTitle"
import { ContainerBannerContact, ContainerContact, ContainerFormContact, ContentBannerContact } from "./ContactStyle"
import Input from "./Input"

const Contact = () => {
  return(
    <ContainerContact id="container-contact">
      <ContainerBannerContact>
        <ContentBannerContact>
          <SubTitle textSubtitle='Get in Touch'/>
          <Paragraph textParagraph="We're thrilled to connect with you! Whether you have questions, feedback, or just want to say hello, feel free to reach out to us using the form below. Our team is dedicated to providing prompt and helpful responses to ensure your experience with us is seamless. We look forward to hearing from you! "/>
        </ContentBannerContact>
      </ContainerBannerContact>

      <ContainerFormContact action="https://formsubmit.co/Djbflooring@outlook.com" method="POST">
        <Input 
          nameLabel='Name'
          type='name'
          id='name'
          placeholder='Your Name'
        />
        <Input 
          nameLabel='Phone'
          type='telephone'
          id='phone'
          placeholder='Your Phone'
        />
        <Input 
          nameLabel='Email'
          type='email'
          id='email'
          placeholder='Your Email'
        />
        <div>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols="30" rows="10" placeholder="Your Message" ></textarea>
        </div>
        <ButtonSecondary textBtn='Send Message'/>
      </ContainerFormContact>
    </ContainerContact>
  )
}

export default Contact