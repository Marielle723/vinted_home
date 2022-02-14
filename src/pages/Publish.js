import axios from "react";
import { useState } from "axios";

const Publish = (props) => {
  const [file, setFile] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [state, setState] = useState("");
  const [area, setArea] = useState("");
  const [price, setPrice] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("files", file);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("brand", brand);
    formData.append("size", size);
    formData.append("color", color);
    formData.append("state", state);
    formData.append("area", area);
    formData.append("price", price);

    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            Authorization: `Bearer ${props.token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert(JSON.stringify(response.data));
    } catch (err) {
      if (err.response.status === 500) {
        console.error("An error occurred");
      } else {
        console.error(err.response.data.msg);
      }
    }
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
                // multiple
                onChange={(event) => {
                  setFile(event.target.files[0]);
                }}
              />
            </label>
          </div>

          <div className="publish-description-box">
            <div className="publish-part-wrap">
              {" "}
              <p>Titre</p>
              <input
                placeholder="ex: Chemise Sézanne verte"
                type="text"
                id="publish_title"
                name="publish_title"
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
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
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
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
                onChange={(event) => {
                  setBrand(event.target.value);
                }}
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
                onChange={(event) => {
                  setSize(event.target.value);
                }}
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
                onChange={(event) => {
                  setColor(event.target.value);
                }}
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
                onChange={(event) => {
                  setState(event.target.value);
                }}
              />
            </div>
            <hr />

            <div className="publish-part-wrap">
              {" "}
              <p>Lieu</p>
              <input
                placeholder="ex:Paris"
                type="text"
                id="publish_area"
                name="publish_area"
                onChange={(event) => {
                  setArea(event.target.value);
                }}
              />
            </div>
          </div>

          <div className="publish-price">
            <div className="publish-part-wrap">
              <p>Prix</p>
              <div className="checkbox-text">
                <input
                  placeholder="0,00 €"
                  type="number"
                  id="publish_price"
                  name="publish_price"
                  onChange={(event) => {
                    setPrice(event.target.value);
                  }}
                />
                <input type="checkbox"></input>
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
