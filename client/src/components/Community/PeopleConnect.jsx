import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Community } from "./Community";
import CommunityIcon from "./svg/Community.svg";
import MedicalEducatorsIcon from "./svg/MedicalEducators.svg";
import MedicalProfessionalIcon from "./svg/MedicalProfessional.svg";
import PersonalTrainerIcon from "./svg/PersonalTrainer.svg";
import { Link } from 'react-router-dom'
import style from "./Community.module.css";

import homeIconInactive from "../Footer/homeimginactive.svg";
import groupIconActive from "../Footer/groupimg.svg";
import caddyIconInactive from "../Footer/Vector.svg";

class PeopleConnect extends Component
{
    render ()
    {

        if (document.getElementById("homeicon")) {
            document.getElementById("homeicon").src = homeIconInactive;
          }
          
          if (document.getElementById("communityicon")) {
            document.getElementById("communityicon").src = groupIconActive;
          }
          
          if (document.getElementById("caddyicon")) {
            document.getElementById("caddyicon").src = caddyIconInactive;
          }
          

        return (
            <div className="container d-flex align-items-center flex-wrap mt-3 flex-column">
                <Link to="/CommunityGroups" className={style.linkStyle}>
                <div className="row mb-3">
                    <Community
                        img={MedicalEducatorsIcon}
                        heading='Enfermera'
                        body='Conecta con enfermeras'
                    />
                </div>
                </Link>

            </div>
        );
    }
}

// export default PeopleConnect;
export { PeopleConnect };