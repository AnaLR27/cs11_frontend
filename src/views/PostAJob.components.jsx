import styles from "../styles/style.module.css";
import { Form } from "../components/Form/base/Form.components";
import { TextInput } from "../components/Form/inputs/TextInput";
import { TextAreaInput } from "../components/Form/inputs/TextAreaInput";
import { SelectInput } from "../components/Form/inputs/SelectInput";
import { Title } from "../components/Title.component";
import { JobService, getById } from "../services/JobService";
import { useEffect, useState } from "react";
import { Job } from "../models/postAJob.model";
import jobData from "../models/postAJob.model";

function PostAJobComponents() {
  const [job, setJob] = useState(new Job());
  const [formData, setFormData] = useState({});
  const [saved, setSaved] = useState("not_saved");

  // Selects items

const getJobData = async () => {
  try {
    const data = await JobService.getById;
  } catch (error) {
    
  }
};

 
  

  //useeffect: carga del componente

  useEffect(() => {
    userAuth();
  }, []);

  const userAuth = async () => {
    //Sacar los datos de usuario
    // Buscar parametro de la URL (jobid) si tenemos jobid es que estamos editando
    const job = sessionStorage.getItem("job") || localStorage.getItem("job");

    //comprobar si tenemos los datos
    if (!job) {
      return false;
    }

    //Hacemos la llamada que devuelva los datos del job (si es que existe)
    //y si lo encontramos lo metemos en el useffect
    const data = await getById(job);
    console.log(data);

    //Seteamos los datos del usuario
    setJob(data);
  };

  const saveUpdateJob = async (formData) => {
    //recogemos datos del formulario de modificación (estan en formData)

    //mapeamos los datos de la oferta
    const newJob = new Job(); // new Job da error cambio a minuscula

    newJob._id = job._id;
    newJob.title = "empleador";
    newJob.loginId =
      sessionStorage.getItem("loginId") || localStorage.getItem("loginId");
    newJob.companyName = formData.fields.companyName.value;
    newJob.description = formData.fields.description.value;
    newJob.salary = formData.fields.salary.value;
    newJob.jobType = formData.fields.jobType.value;
    newJob.location.city = formData.fields.location.city.value;
    newJob.location.country = formData.fields.location.country.value;
    console.log(newJob);
    //comprobamos si existe la oferta
    if (!newJob._id) {
      try {
        //Creamos el job en la ddbb
        let jobData = await JobService.newjob(newJob);

        //Seteamos estado y datos
        setJob(jobData);
        setSaved("success");
      } catch (error) {
        setSaved("error");
      }
    } else {
      try {
        //Actualizamos el usuario en la ddbb
        let jobData = await JobService.editjob(newJob._id, newJob);

        //Seteamos estado y datos
        setJob(jobData);
        setSaved("success");
      } catch (error) {
        setSaved("error");
      }
    }

    // Comentario del saved desaparece a los 3 segundos

    setTimeout(() => {
      if (saved === "success") {
        //TODO redirección a calendario
      }
      setSaved(null);
    }, 3000);
  };

  return (
    <div className={`${styles["page-wrapper"]}`}>
      <section className={styles.dashboard}>
        <div className={`${styles["dash-title"]}`}>
          <Title
            title="Publicar un nuevo trabajo"
            altText="¿Listo para encontrar talento?"
            size="l"
          />
        </div>
        <div className={styles.button}>
          <button type="button" className={styles.btn}>
            <span className={`${styles["flaticon-menu-1"]}`}></span>
            Menu
          </button>
          <div className={styles.container}>
            <div className={`${styles["container-title"]}`}>
              <Title title="Publicar Trabajo" size="s" />
            </div>
            <div className={`${styles["container-content"]}`}>
              <Form
                onSubmit={(formData) => {
                  saveUpdateJob(formData);
                }}
                onChange={(formData) => {
                  setFormData(formData);
                }}
              >
                <div className={styles.row}>
                  <div
                    className={`${styles["col-md-12"]} ${styles["imput-container"]}`}
                  >
                    <TextInput
                      name="Campo BD"
                      label="Puesto de Trabajo"
                      placeholder="Defina el puesto de trabajo..."
                      messageWhenValueIsMissing="Debe agregar un puesto de trabajo"
                      value=""
                    />
                  </div>
                  <div
                    className={`${styles["col-md-12"]} ${styles["imput-container"]}`}
                  >
                    <TextAreaInput
                      name="Campo BD"
                      label="Descripción del Puesto de Trabajo"
                      placeholder="Descripción y condiciones... "
                      rows="10"
                      messageWhenValueIsMissing="Debe agregar una descripción"
                      value=""
                    />
                  </div>
                  <div
                    className={`${styles["col-md-12"]} ${styles["col-lg-6"]} ${styles["imput-container"]}`}
                  >
                    <SelectInput
                      name="Campo BD"
                      label="Categorías"
                      items={categoryItems}
                      messageWhenValueIsMissing="Debe seleccionar una categoría"
                      value=""
                    />
                  </div>
                  <div
                    className={`${styles["col-md-12"]} ${styles["col-lg-6"]} ${styles["imput-container"]}`}
                  >
                    <TextInput
                      name="Campo BD"
                      label="Oferta Salarial"
                      placeholder="Salario Anual Bruto Ofrecido en €"
                      pattern="[0-9]{4,6}"
                      messageWhenWrongPattern="Ingrese solo valores numéricos"
                      messageWhenValueIsMissing="Debe agregar una oferta salarial"
                      value=""
                    />
                  </div>
                  <div
                    className={`${styles["col-md-12"]} ${styles["col-lg-6"]} ${styles["imput-container"]}`}
                  >
                    <SelectInput
                      name="Campo BD"
                      label="Modalidad"
                      items={modalityItems}
                      messageWhenValueIsMissing="Debe seleccionar una modalidad"
                      value=""
                    />
                  </div>
                  <div
                    className={`${styles["col-md-12"]} ${styles["col-lg-6"]} ${styles["imput-container"]}`}
                  >
                    <SelectInput
                      name="Campo BD"
                      label="Jornada Laboral"
                      items={workdayItems}
                      messageWhenValueIsMissing="Debe seleccionar un tipo de jornada"
                      value=""
                    />
                  </div>
                  <div
                    className={`${styles["col-md-12"]} ${styles["col-lg-6"]} ${styles["imput-container"]}`}
                  >
                    <SelectInput
                      name="Campo BD"
                      label="País"
                      items={countryItems}
                      messageWhenValueIsMissing="Debe seleccionar un país"
                      value=""
                    />
                  </div>
                  <div
                    className={`${styles["col-md-12"]} ${styles["col-lg-6"]} ${styles["imput-container"]}`}
                  >
                    <SelectInput
                      name="Campo BD"
                      label="Ciudad"
                      items={cityItems}
                      messageWhenValueIsMissing="Debe seleccionar una ciudad"
                      
                    />
                  </div>
                  {saved === "updated" ? (
                    <strong
                      className={`${styles["alert"]} ${styles["alert-success"]}`}
                    >
                      Se ha guardado correctamente
                    </strong>
                  ) : (
                    ""
                  )}
                  {saved === "error" ? (
                    <strong
                      className={`${styles["alert"]} ${styles["alert-danger"]}`}
                    >
                      Es necesario rellenar todos los campos para guardar
                    </strong>
                  ) : (
                    ""
                  )}
                  <div
                    className={`${styles["col-md-12"]} ${styles["imput-container"]}`}
                  >
                    <button
                      disabled={formData.invalid}
                      className={
                        formData.invalid
                          ? `${styles.btn} ${styles["btn-disable"]}`
                          : `${styles.btn} ${styles["btn-primary"]}`
                      }
                    >
                      Guardar
                    </button>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PostAJobComponents;
