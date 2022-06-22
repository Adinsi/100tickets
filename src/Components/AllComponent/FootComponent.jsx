import React, { useState } from 'react';

const FootComponent = (props) => {

    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show)
    }

    const { titre,redacteur,texte, img,date} = props.data
    return (
      <div className="footElement" key={props.key}>
        <h3>
          {titre}{" "}
          <button onClick={handleClick}>
            {show ? (
              <i className="fa-solid fa-xmark">
                {" "}
              </i>
            ) : (
              <i
            
                className="fas fa-plus-circle"
              ></i>
            )}
          </button>{" "}
        </h3>

        {show && (
          <div className="footSection">
            <img src={img} alt="" />
            <p>Date de redaction : {date}</p>

            <p>{texte}</p>
          </div>
        )}
        <div>
          <small>Redacteur : {redacteur}</small>
        </div>
      </div>
    );
};

export default FootComponent;