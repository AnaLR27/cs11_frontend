import Styles from './CardCandidate.module.css';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { AiOutlineEye, AiOutlineCheck, AiOutlineCloseCircle } from 'react-icons/ai';
import { IoLocationOutline } from 'react-icons/io5';
import FetchMail from '../../../services/allAplicantsService/FetchMail'
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


function CardCandidate(props) {

    const sendMail = async (dataAction) => {
        const mailType = dataAction === 'aceptada' ? props.accepted : props.refused;
        let sended = await FetchMail(props.email, props.username, mailType, props.job);
        if (sended) {
            Swal.fire({
                title: 'Email enviado!',
                text: 'Se ha comunicado al candidato que su solicitud ha sido ' + dataAction + '',
                icon: 'success',
                iconColor: '#47d7ac',
                confirmButtonText: 'Aceptar',
                confirmButtonColor: '#47d7ac'
            });
            }
        else {
            Swal.fire({
                title: 'Error!',
                text: 'Ops! Ha habido un error al enviar el email',
                icon: 'error',
                iconColor: '#47d7ac',
                confirmButtonText: 'Aceptar',
                confirmButtonColor: '#47d7ac'
            });
        }
      };
      
      const sendMailHandlerAccepted = async () => {
        await sendMail('aceptada');
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
                    <div className={Styles['user-location']}>Bootcamp: {props.edition}</div>
                </div>
                </div>
                <div className={Styles['user-skills']}>
                    {props.skills.map((skill) => {
                        return (
                            <div key={skill} className={Styles['user-skill']}>{skill}</div>
                        )
                    })}
                </div>
                <div className={Styles['user-actions']}>
                    <div className={Styles['user-profile']}>
                        <Link className={Styles['profile-user-link']} to={`/candidate/${props.linkid}`}>
                            <AiOutlineEye/>
                        </Link>
                    </div>
                    <div className={Styles['user-accept']} onClick={sendMailHandlerAccepted}><AiOutlineCheck/></div>
                    <div className={Styles['user-reject']} onClick={sendMailHandlerRefused}><AiOutlineCloseCircle /></div>
                </div>
            </div>
        </>
    );
}

export default CardCandidate;