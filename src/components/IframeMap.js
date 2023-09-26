// pages/MapPage.js
import React from "react";

const IframeMap = () => {
  return (
    <>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6268.603911776365!2d-85.786446!3d38.22610000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886912b8bac3aad3%3A0x2e809c15b1082c29!2s1720%20W%20Lee%20St%2C%20Louisville%2C%20KY%2040210!5e0!3m2!1sen!2sus!4v1695629891698!5m2!1sen!2sus"
          width="100%"
          height="440"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default IframeMap;
