import Paragraph from "../../Paragraph"
import SubTitle from "../../SubTitle"
import ThirdTitle from "../../ThirdTitle"
import { CardComments, ContainerComments, ContentCardComments, ContentComments } from "./CommentsStyle"
import Thumbtack from "./Thumbtack"
import {Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

const Comments = () => {

  const data = [
    {id: '1', namePerson: 'Steffenee b.', comment: " Do Not i repeat do NOT second guess when it comes to who you should hire!! This gentleman is the best!!! When i say you should RUN to hire him! I'm not kidding!!! Very very good with communicating work is unbelievable!! him my mom hire him too!! I'm telling you now! HIRE THIS GENTLEMAN!!! Very kind and professional!!!    "},
    
    {id: '2', namePerson: 'Rebekah P.', comment: " I can't say enough amazing things about my experience. He was an excellent communicator, showed up on time (a few minutes early actually) and was extremely efficient in completing 2 of my bedrooms. If you are reading this review and are still on the fence, what are you waiting for? I 10000% recommend DJB Flooring and would hire him again in a heartbeat"},
    
    {id: '3', namePerson: 'Ediedra G.', comment: "Don't look any further. I promise you won't find another company that will do a better job is as professional, truly skilled in his craft, and priced so reasonably. I thought our floors were unrepairable. His work is phenomenal! I will definitely call him back for any floor repair or installation inthe future. My puppy destroyed our floor now I can't  even tell where the damage was. I've included before and after pictures. I promise you will not be disappointed. He repaired our floors and they look brand new. He's definitely the BEST!!"},
    
    {id: '4', namePerson: 'Lindsey H.', comment: "DJB Flooring did a great job on my living room and hallway floors. He was able to pick up the stair noses as well as the quarter round molding for me as well. Very nice and explained each step of the process in full detail. The price was great as well, and the job was finished in one day. I definitely plan on using him for future flooring projects."},
    
    {id: '5', namePerson: 'Emmanuel A.', comment: "DJB did an excepional job with my floors. They were extremely reliable and worked with me on pickig the right design. They took their time to explain the process to me and got the job done very well. They also did an exceptional job for an affordable price. I would definitely recommended them for anyone needing any flooring work done."},
    
    {id: '6', namePerson: 'Mike S.', comment: "DJB Flooring did a wonderful job replacing the flooring. They did the whole first floor. We have an older home with uneven floors. The team did a great job repairing and leveling as best they could. I had plenty of questions and some changes during the job. Dimas was very responsive and easy to work witch. We are very happy with our new floors and would hire him agaim for future floor projects."} 
  ]
  
  return(
    <ContainerComments>
      <Thumbtack />
      <ContentComments>
        <SubTitle textSubtitle='Comments'/>
        <ThirdTitle textThirdTitle='Check out some feedback from our customers'/>
        <CardComments> 

        
        <Swiper 
          loop={true}
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
            <ContentCardComments>
              <div>
                <img src="/image-profile.png" alt="icon profile" />
                <ThirdTitle textThirdTitle={item.namePerson}/>
              </div>
              <Paragraph textParagraph={item.comment}/>
            </ContentCardComments>
            </SwiperSlide>
          ))}
          </Swiper>
          </CardComments>
      </ContentComments>
    </ContainerComments>
  )
}

export default Comments