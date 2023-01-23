import React from "react";
import "../style/add.css";
const Add = () => {
  return (
    <div className="my_addpage">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <form className="myform">
              <h5>ADD PAGE</h5>
              <input type="text" placeholder="Name..." />
              <input type="text" placeholder="Username..." />
              <input type="text" placeholder="Comment..." />
              <div><button className="button">ADD</button><button>DELETE</button></div>
            </form>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
