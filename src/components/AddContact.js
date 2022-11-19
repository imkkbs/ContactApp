import React, { useState } from "react"; 

function AddContact(props) {

  const [names, setNames] = useState([]);
  const [numbers, setNumbers] = useState([]);
  const [emails, setEmails] = useState([]);

  // const deleteHandler = (id) =>{
  //   props.removeHandler(id)
  // }


  const contactList = props.contacts.map((contacts) => {
    return (
      <div className="container mx-2">
        <div className="row">
          <div className="container col-lg-4">
            <div
              className="text-center text-bg-dark mb-3"
              style={{ maxWidth: "70rem" }}
            >
              <div className="card-header">
                <h4>{contacts.names}</h4>
              </div>
              <div className="card-body">
                <h6 className="card-title my-1">
                  <div>{contacts.numbers}</div>
                  <div>{contacts.emails}</div>
                </h6>
                <div className="card-footer my-0.5">
                  <button
                onClick={()=>props.contactHandler(contacts.id)}
                    className="btn btn-outline-danger"
                    style={{
                      width: "25px",
                      borderRadius: "10px",
                      paddingRight: "27px",
                      paddingBottom: "8px",
                      marginBottom: "3px",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-trash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                      <path
                        fillRule="evenodd"
                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      {/* <div className="container d-flex justify-content-center my-5 mx-2"> */}
      <div className="d-flex justify-content-center my-3 mx-2">
        <b>Add Name</b>{" "}
        <span style={{ marginLeft: "15px" }}>
          <input
            placeholder="Enter the name"
            style={{backgroundColor:"#dadbc7"}}
            value={names}
            onChange={(e) => setNames(e.target.value)}
          >
            {/* console.log(name) */}
          </input>
        </span>
      </div>

      <div className="d-flex justify-content-center my-3 mx-2">
        <b>Add Number</b>{" "}
        <span style={{ marginLeft: "15px" }}>
          <input
            placeholder="Enter the number"
            style={{backgroundColor:"#dadbc7"}}
            value={numbers}
            onChange={(e) => setNumbers(e.target.value.replace(/\D/g, ""))}
          ></input>
        </span>
      </div>

      <div className="d-flex justify-content-center my-3 mx-2">
        <b>Add Email</b>{" "}
        <span style={{ marginLeft: "15px" }}>
          <input
            placeholder="Enter the email"
            style={{backgroundColor:"#dadbc7"}}
            value={emails}
            onChange={(e) => setEmails(e.target.value)}
          ></input>
        </span>
      </div>

      {/* </div> */}
      <div className="d-flex justify-content-center my-3 ">
        <button
          className="bg-danger"
          style={{
            padding: "6px 25px 6px 25px",
            borderRadius: "10px",
            borderColor: "red",
          }}
          onClick={(e) => {
            e.preventDefault();
            if (names === "" || numbers === "" || emails === "") {
              alert("All fields are mandatory");
              return;
            }
            props.addContactHandler({ names, numbers, emails });
            setEmails("");
            setNames("");
            setNumbers("");
          }}
        >
          Add
        </button>
      </div>
      <div className="container ">{contactList}</div>
    </div>
  );
}

export default AddContact;
