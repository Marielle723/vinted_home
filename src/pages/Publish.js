import axios from "react";
import { useState } from "axios";

const Publish = () => {
  const handleSubmit = () => {
    console.log("Submit!");
  };
  return (
    <div className="publish-wrapper">
      <form onSubmit={handleSubmit}>
        <div className="publish-boxes-wrapper">
          <div className="publish-file-part-wrap">
            <label>
              Choisir une photo
              <br />
              <input
                type="file"
                id="file"
                accept=".jpg, .jpeg, .png"
                multiple
              ></input>
            </label>
          </div>

          <div className="publish-description-box">
            <div className="publish-part-wrap">
              {" "}
              <p>Titre</p>
              <input
                placeholder="ex: Chemise Sézanne verte"
                type="text"
                id="publish_titre"
                name="publish_titre"
              />
            </div>
            <hr />

            <div className="publish-part-wrap">
              {" "}
              <p>Décris ton article</p>
              <input
                placeholder="ex:porté quelquefois, taille correctement"
                type="text"
                id="publish-description"
                name="publish-description"
              />
            </div>
            <hr />
          </div>

          <div className="publish-details">
            <div className="publish-part-wrap">
              {" "}
              <p>Marque</p>
              <input
                placeholder="ex:Zara"
                type="text"
                id="publish-brand"
                name="publish-brand"
              />
            </div>
            <hr />

            <div className="publish-part-wrap">
              {" "}
              <p>Taille</p>
              <input
                placeholder="ex: L/40/12"
                type="text"
                id="publish_size"
                name="publish_size"
              />
            </div>
            <hr />

            <div className="publish-part-wrap">
              {" "}
              <p>Couleur</p>
              <input
                placeholder="ex: Fushia"
                type="text"
                id="publish_color"
                name="publish_color"
              />
            </div>
            <hr />

            <div className="publish-part-wrap">
              {" "}
              <p>Etat</p>
              <input
                placeholder="ex: Neuf avec étiquette"
                type="text"
                id="publish-state"
                name="publish-state"
              />
            </div>
            <hr />

            <div className="publish-part-wrap">
              {" "}
              <p>Lieu</p>
              <input
                placeholder="0,00 €"
                type="number"
                id="publish_area"
                name="publish_area"
              />
            </div>
          </div>

          <div className="publish-price">
            <div className="publish-part-wrap">
              <p>Prix</p>
              <div className="checkbox-text">
                <input type="checkbox" />
                Je suis intéressé(e) par les échanges.
              </div>
            </div>
          </div>

          <div className="publish-submit-part-wrap">
            <button type="submit">Ajouter</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Publish;
