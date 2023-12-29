import SmallLogo from "./SmallLogo"
import { useState } from "react"
import axios from "axios";
import "./signup.css";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  }

  const [error, setError] = useState([]);
  const [eState, setEstate] = useState(false);

  function submit() {
    try {
      console.log(user);
      axios
        .post("http://localhost:3000/api/v1/auth/signup", user)
        .then((res) => {
          if (res.data.status === 400) {
            setError([res.data.message]);
            setEstate(true);
          }
          if (res.data.status === 422) {
            setError(res.data.error);
            setEstate(true);
          } else {
            setError([res.data.message]);
            setEstate(true);
            setTimeout(() => {
              // changeState("signin")
            }, 1000);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
    setUser({
      name: "",
      email: "",
      password: "",
    })
  }



  return (
    <div className="signDiv">
      <div style={{ marginTop: "-180px", width: "10px" }}>
        <SmallLogo />
      </div>
      <div className="title">
        <p className="titlep1">Healthy human</p>
        <p className="titlep2">Bienvenido</p>
      </div>

      <div className="signUpLogin">
        <p className="login"><Link className="link" to="/signin">Iniciar sesion</Link></p>
        <p className="signUp"><Link className="link" to="/signup">Registrarse</Link></p>
      </div>
      <div className="details">
        <label><p style={{ color: "lightgrey", marginTop: "5px" }}>Nombre</p></label>
        <input className="email" value={user.name} type="text" name="name" onChange={handleChange} />
        <br />
        <label><p style={{ color: "lightgrey" }}>Correo electronico</p></label>
        <input className="email" value={user.email} type="text" name="email" onChange={handleChange} />
        <br />
        <label><p style={{ color: "lightgrey" }}>Contraseña</p></label>
        <input className="password" value={user.password} type="password" name="password" onChange={handleChange} />
      </div>
      {eState ? <div className="errorDivSU"><div className="allErrSU">{error.map((e) => <p key={e}>{e}</p>)}</div> <button onClick={() => setEstate(false)}>x</button></div> : ""}
      <button className="signinbtn" onClick={submit}> Registarse</button>
    </div>

  )
}