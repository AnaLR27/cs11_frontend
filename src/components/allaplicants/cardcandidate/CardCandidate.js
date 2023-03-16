import Styles from './CardCandidate.module.css';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { AiOutlineEye, AiOutlineCheck, AiOutlineCloseCircle } from 'react-icons/ai';
import { IoLocationOutline } from 'react-icons/io5';
import FetchMail from '../../../services/allAplicantsService/FetchMail'


function CardCandidate(props) {

    const sendMail = (dataAction) => {
        const mailType = dataAction === 'aceptada' ? props.accepted : props.refused;
        FetchMail(props.email, props.username, mailType, props.job);
      };
      
      const sendMailHandlerAccepted = () => {
        sendMail('aceptada');
      };
      
      const sendMailHandlerRefused = () => {
        sendMail('rechazada');
      };

    return (
        <>
            <div className={Styles.card}>
                <div className={Styles['user-img']}>
                    <img src={props.photo} alt="user-profile-img" />
                </div>
                <div className={Styles['user-data']}>
                <div className={Styles['user-name']}>{props.username}</div>
                <div className={Styles['user-datas']}>
                    {/* <div className={Styles['user-potition']}>{props.especiality}</div> */}
                    <div className={Styles['user-location']}><IoLocationOutline />{props.location}</div>
                    <div className={Styles['user-fee']}><FaRegMoneyBillAlt className={Styles['money']}/>{props.hourate}€ / hour</div>
                </div>
                </div>
                {/* <div className={Styles['user-skills']}>
                    {props.skills.map((skill) => {
                        return (
                            <div key={skill} className={Styles['user-skill']}>{skill}</div>
                        )
                    })}
                </div> */}
                <div className={Styles['user-actions']}>
                    <div className={Styles['user-profile']}><AiOutlineEye/></div>
                    <div className={Styles['user-accept']} onClick={sendMailHandlerAccepted}><AiOutlineCheck/></div>
                    <div className={Styles['user-reject']} onClick={sendMailHandlerRefused}><AiOutlineCloseCircle /></div>
                    {/* <div className={Styles['user-delete']}><IoTrashOutline/></div> */}
                </div>
            </div>
        </>
    );
}

export default CardCandidate;