// import React, { useState } from 'react';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import "./Réservation.css";
// import terrain from "../../assets/1137.jpg"

// const Reservation = ({ email, team1, team2, localisation, event, nom, desc, menu }) => {
//   const Url = import.meta.env.VITE_API_URL;

//   const [formData, setFormData] = useState({
//     name: '',
//     email: email || '', // Utiliser l'e-mail passé en tant que prop, ou une chaîne vide
//     localisation: localisation,
//     team1: team1,
//     team2: team2,
//     event: event,
//     additionalEmail: '', // Ajouter un champ pour l'e-mail supplémentaire
//     message: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Vérifier si "Nom et prénom" n'est pas rempli
//     if (!formData.name) {
//       toast.error("Veuillez entrer votre nom et prénom.");
//       return;
//     }

//     // Vérifier si "Votre email" n'est pas rempli
//     if (!formData.additionalEmail) {
//       toast.error("Veuillez entrer votre email.");
//       return;
//     }

//     try {
//       // Ajouter l'e-mail supplémentaire à la requête
//       await axios.post(`http://localhost:3000/send-email?additionalEmail=${formData.additionalEmail}`, formData);
//       toast.success("Votre réservation à bien été transmise et un mail à été envoyer sur votre adresse mail !");
//     } catch (error) {
//       console.error(error);
//       toast.error("Une erreur s'est produite lors de l'envoi de l'e-mail : " + error.message);
//     }
//   };

//   return (
//     <>
//       <ToastContainer />
//       <figure id='terrain-vert'>
//         <img src={terrain} alt="" />
//       </figure>
//       <div className='formReservation'>
//         <form onSubmit={handleSubmit} >
//           <h2>Formulaire de réservation</h2>
//           <h2>{nom}</h2>
//           <p>{desc} </p>
//           <p>Adresse: {localisation} </p>
//           <p>{team1} - {team2} </p>
//           <h2>Menu du restaurant </h2>
//           <figure>
//             <img src={menu} alt="" />
//           </figure>

//           <div>
//             <label>Nom et prénom :</label>
//             <input type="text" name="name" onChange={handleChange} placeholder='Nom et Prénom' />
//           </div>
//           <div>
//             <label>Votre email :</label>
//             <input type="email" name="additionalEmail" onChange={handleChange} placeholder='Votre email'/>
//           </div>
          
//           <button type="submit">Envoyer</button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Reservation;

import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Réservation.css";

const Reservation = () => {
  const [formData, setFormData] = useState({
    email: "alphavladitore@gmail.com",
    name: "", // Nom et prénom
    additionalEmail: "" // Email supplémentaire
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Vérifier si "Nom et prénom" n'est pas rempli
    if (!formData.name) {
      toast.error("Veuillez entrer votre nom et prénom.");
      return;
    }

    // Vérifier si "Votre email" n'est pas rempli
    if (!formData.additionalEmail) {
      toast.error("Veuillez entrer votre email.");
      return;
    }

    try {
      // Ajouter l'e-mail supplémentaire à la requête
      await axios.post(`http://localhost:3000/send-email?additionalEmail=${formData.additionalEmail}`, formData);
      toast.success("Votre réservation a bien été transmise et un mail a été envoyé à votre adresse email !");
    } catch (error) {
      console.error(error);
      toast.error("Une erreur s'est produite lors de l'envoi de l'e-mail : " + error.message);
    }
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit} className="reservation-form">
        <h2>Formulaire de réservation</h2>
        <h2>Menu du restaurant</h2>

        <div>
          <label>Nom et prénom :</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Entrez votre nom et prénom"
          />
        </div>
        
        <div>
          <label>Votre email :</label>
          <input
            type="email"
            name="additionalEmail"
            value={formData.additionalEmail}
            onChange={handleChange}
            placeholder="Entrez votre email"
          />
        </div>

        <button type="submit">Envoyer</button>
      </form>
    </>
  );
};

export default Reservation;
