import './About.css';
import about_img from '../../assets/about.webp';
import play_icon from '../../assets/play-icon.png';

const About = ({setPlayState}) => {
  return (
    <div className='about container'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=>
              {setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h3>About My University</h3>
            <h2>Nurturing Tomorrow Leader Today</h2>
            <p>Tribhuvan University (TU) is a public university located in Kirtipur, Kathmandu, Nepal. Established in 1959, TU is the oldest and the largest university in Nepal. It offers 1,000 undergraduate and 500 postgraduate programs across a wide range of disciplines. Additionally, the institution has 62 constituent campuses and over 1,080 affiliated colleges across the country.</p>
            <p>Established on 25 June 1959 (or 11 Ashar 2016 BS), Tribhuvan University is the oldest and largest university in Nepal. The university was named after the late King Tribhuvan. In its early years, all the postgraduate classes were held at Tripureshwor Campus, where the administrative office was also located. It was only in 1967 that the university was relocated to its main campus in Kirtipur an ancient town about 5 km south-west of the city of Kathmandu. The university site, spread over 154.77 hectares, constitutes the Central Administrative Office and the Central Campus.</p>
            <p>Since its inception, the state-owned university has expanded its programmes. There are five technical institutes and four general faculties. The university offers 115 courses for the technical proficiency certificate level. TU offers 1079 courses at Bachelors level and 1000 courses at Masters level. It offers PhD degrees in the technical institutes and faculties.</p>
        </div>
    </div>
  )
}

export default About
