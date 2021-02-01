import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { toast } from "react-toastify";

const LinksForm = (props) => {
  const initialStateValues = {
    nameProduct: "",
    caracteristicas: "",
    fechaLanzamiento: "",
    email: "",
    pais: "",
    precioMoneda: "",
    unidadesDisponibles: "",
    unidadesVendidas: "",
    imagenProducto: ""
  };

  const [values, setValues] = useState(initialStateValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const validURL = (str) => {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    return !!pattern.test(str);
  };

  const handleSubmit = (e) => {
    e.preventDefault();    

    props.addOrEditLink(values);
    setValues({ ...initialStateValues });
  };

  const getLinkById = async (id) => {
    const doc = await db.collection("links").doc(id).get();
    setValues({ ...doc.data() });
  };

  useEffect(() => {
    if (props.currentId === "") {
      setValues({ ...initialStateValues });
    } else {
      getLinkById(props.currentId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.currentId]);

  return (
    <form onSubmit={handleSubmit} className="card card-body border-primary">
      
      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">create</i>
        </div>        
        <input type="text" className="form-control" placeholder="Nombre del producto" value={values.nameProduct}  name="nameProduct" onChange={handleInputChange}/>
      </div>
      
      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">create</i>
        </div>        
        <input type="text" className="form-control" placeholder="Caracteristicas" value={values.caracteristicas}  name="caracteristicas" onChange={handleInputChange}/>
      </div>

      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">create</i>
        </div>
        <input type="date" className="form-control" value={values.fechaLanzamiento} name="fechaLanzamiento" onChange={handleInputChange}/>
      </div>

      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">email</i>
        </div>
        <input type="email" className="form-control" value={values.email} placeholder="Ingrese el correo electrónico" name="email" onChange={handleInputChange}/>
      </div>

      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">create</i>
        </div>
        <input type="pais" className="form-control" value={values.pais} placeholder="Ingrese el pais" name="pais" onChange={handleInputChange}/>
      </div>

      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">create</i>
        </div>
        <input type="precioMoneda" className="form-control" value={values.precioMoneda} placeholder="Ingrese el precio formato moneda" name="precioMoneda" onChange={handleInputChange}/>
      </div>

      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">create</i>
        </div>
        <input type="text" className="form-control" value={values.unidadesDisponibles} placeholder="Ingrese las unidades disponibles" name="unidadesDisponibles" onChange={handleInputChange}/>
      </div>

      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">create</i>
        </div>
        <input type="text" className="form-control" value={values.unidadesVendidas} placeholder="Ingrese las unidades vendidas" name="unidadesVendidas" onChange={handleInputChange}/>
      </div>

      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">create</i>
        </div>
        <input type="text" className="form-control" value={values.imagenProducto} placeholder="Ingrese la url de la imágen" name="imagenProducto" onChange={handleInputChange}/>
      </div>

      <button className="btn btn-primary btn-block">
        {props.currentId === "" ? "Save" : "Update"}
      </button>
    </form>
  );
};

export default LinksForm;
