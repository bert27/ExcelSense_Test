import React from "react";
import GridLoader from "react-spinners/GridLoader";
import './Spinner.sass';
export default function Spinner(props) {

  return (
        <div className="spinner-loading">
          <GridLoader

            size={35}
            color={"rgb(5,81,107)"}
            loading={true}
          />
        </div>
      );
}
