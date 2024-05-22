import { useState } from "react";

const Restaurant = ({ nom, prix, categories, image, description }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <article className="resto">
      <figure>
        <img src={image} alt="" />
      </figure>
      <hgroup>
        <h3>Titre : {nom}</h3>
        <h3>Prix vendu : {prix} €</h3>
        <h3>Catégories : {categories}</h3>
      </hgroup>
      

      <button onClick={openModal} className="PopUpMenu">Voir en plus grand</button>    

      {isModalOpen && (
        <div className="pop-up">
          <div>
            <span onClick={closeModal} className="croix">
              &times;
            </span>
            {/* <div>
              <h3>Titre : {nom}</h3>
              <h3>Prix vendu : {prix} €</h3>
              <h3>Catégories : {categories}</h3>
              <h3>Description : <br /> {description}</h3>
            </div> */}
            <figure>
              <img src={image} alt="" />
            </figure>
          </div>
        </div>
      )}
    </article>
  );
};

export default Restaurant;
