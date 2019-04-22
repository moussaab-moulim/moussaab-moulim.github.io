import React from "react";
import loaderSrc from "../../assets/preloader/preloader.gif";
const PreLoader = (props) => (
  <div>
    <img style={{ width: 50 }} alt="loading gif" src={loaderSrc} />
  </div>
)

export default PreLoader