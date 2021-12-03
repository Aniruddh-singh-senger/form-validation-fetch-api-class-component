import React, { useState, useEffect } from "react";

export default function DisplayTable() {
  const [getList, setList] = useState([]);
  useEffect(() => {
    var aValue = localStorage.getItem("Data");
    var storedata = JSON.parse(aValue);
    setList(storedata);
    console.log(storedata);
  }, []);
  return (
    <div className="bgcolor">
      <div className="container ">
        <div className="row">
          <div className="col">
            <h2 className="feedback_para">All Feedback</h2>
          </div>
        </div>
      </div>
      <div className="container table_container text-center">
        <table className="table ">
          <thead className="table-light">
            <tr>
              <th scope="col">Form Name</th>
              <th scope="col">Feedback</th>
              <th scope="col">Phone No</th>
              <th scope="col">Email</th>
              <th scope="col">Radio Option</th>
              <th scope="col">Name</th>
            </tr>
          </thead>
          <tbody>
            {getList ? (
              <>
                {" "}
                {getList.map((item) => {
                  return (
                    <>
                      <tr>
                        <td>Aromatic Bar</td>

                        <td>{item.feedback}</td>
                        <td>{item.number}</td>
                        <td>{item.email}</td>
                        <td>{item.optionvalue}</td>
                        <td>{item.name}</td>
                      </tr>
                    </>
                  );
                })}
              </>
            ) : (
              <>Please give any feedback and Refresh </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
