import program_1 from '../../assets/program1.jpg';
import program_2 from '../../assets/program2.jpg';
import program_3 from '../../assets/program3.jpg';
import program_icon_1 from '../../assets/program_icon_1.png';
import program_icon_2 from '../../assets/program_icon_2.png';
import program_icon_3 from '../../assets/program_icon_3.png';

import './Program.css';

const Program = () => {
  return (
    <div className="programs container">
      <div className="program">
        <img src={program_1} alt="" />
        <div className="caption">
            <img src={program_icon_1} alt="" />
            <p>Graduation</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="" />
        <div className="caption">
            <img src={program_icon_2} alt="" />
            <p>Running</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="" />
        <div className="caption">
            <img src={program_icon_3} alt="" />
            <p>Job</p>
        </div>
      </div>
    </div>
  )
}

export default Program
