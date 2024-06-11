import React from "react";

function MyForm() {
  const [formData, setFormData] = React.useState({
    email: "",
    passWord: "",
    confirmPassword: "",
    joinCult: false,
  });
  function handleChange(event) {
    const { type, value, name, checked } = event.target;
    setFormData((prvValue) => {
      return { ...prvValue, [name]: type === "checkbox" ? checked : value };
    });
  }

  function handelSubmit(event) {
    event.preventDefault();
    formData.passWord !== formData.confirmPassword
      ? alert("passwords do not match")
      : console.log("Welcome to Ice-Land, Viking ");
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handelSubmit}>
        <input
          type="Email"
          placeholder="input E-mail"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="passWord"
          required
          value={formData.passWord}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Confirm password"
          name="confirmPassword"
          required
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <div>
          <input
            type="checkbox"
            name="joinCult"
            required
            checked={formData.joinCult}
            onChange={handleChange}
          />
          <label>i want to join your cult</label>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default MyForm;
