import React from "react";

function Forms() {
  let styles = {
    width: "50vw",
    display: "flex",
    flexDirection: "column",
    borderRadius: "20px",
  };
  const [Name, setName] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
    isFriendly: false,
    employment: "",
  });

  let handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setName((prvValue) => {
      return {
        ...prvValue,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  console.log(Name.employment);

  return (
    <div style={styles}>
      <input
        type="text"
        placeholder="first-name"
        onChange={handleChange}
        value={Name.firstName}
        name="firstName"
      />
      <input
        type="text"
        placeholder="last-name"
        onChange={handleChange}
        value={Name.lastName}
        name="lastName"
      />
      <input
        type="Email"
        placeholder="E-mail"
        onChange={handleChange}
        value={Name.email}
        name="email"
      />

      <textarea
        placeholder="About your project....."
        onChange={handleChange}
        value={Name.contents}
        name="comment"
      />
      <div>
        <input
          type="checkbox"
          id="isFriendly"
          checked={Name.isFriendly}
          onChange={handleChange}
          name="isFriendly"
        />
        <label htmlFor="isFriendly">Are you a friend?</label>
      </div>

      <fieldset>
        <legend>current employment status</legend>
        <label htmlFor="unemployed">unemployed</label>
        <input
          type="radio"
          id="unemployed"
          name="employment"
          value="unemployed"
          onChange={handleChange}
          checked={Name.employment === "unemployed"}
        />
        <label htmlFor="employed">employed</label>
        <input
          type="radio"
          id="employed"
          name="employment"
          value="employed"
          onChange={handleChange}
          checked={Name.employment === "employed"}
        />
        <label htmlFor="student">student</label>
        <input
          type="radio"
          id="student"
          name="employment"
          value="student"
          onChange={handleChange}
          checked={Name.employment === "student"}
        />
      </fieldset>
    </div>
  );
}

export default Forms;
