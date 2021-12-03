import React, { useState, useRef } from "react";
import { ContactRsolver } from "./FormResolver";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useForm } from "react-hook-form";
import "./Feedbackform.css";
export default function Feedbackform() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: ContactRsolver });
  const inputEl = useRef(null);
  const [getnum, setnum] = useState(0);
  const [getmsg, setmsg] = useState("");
  const onSubmit = async (data) => {
    if (getnum === 0) {
      setmsg("Number name is required field");
      alert("required");
    } else if (getnum.rawPhone === /^[0-9\b]+$/) {
      alert(" not ok");
      setmsg("Please Enter a valid  Number");
    }
    // else {
    //   setmsg("");
    //   alert("ok");
    // }
    let body = {
      name: data.name,
      feedback: data.userfeedback,
      email: data.email,
      optionvalue: data.optionValue,
      number: getnum.rawPhone,
    };

    var array = JSON.parse(localStorage.getItem("Data") || "[]");
    array.push(body);
    localStorage.setItem("Data", JSON.stringify(array));

    console.log(JSON.stringify(body));
    alert("Thank you for completing the information ");
    setnum(0);
    reset();
  };

  return (
    <div>
      <div className="container-fluid m-0 p-0 bgcolor">
        <div className="row">
          <div className="col">
            <h2 className="form_heading">Aromatic Bar</h2>
            <p className="form_para">
              We are committed to providing you with the best dining experience
              possible, so we welcome your comments. Please fill out this
              questionnaire. Thank you
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="row form_container">
          <div className="form-group   col-md-6" style={{ height: "90px" }}>
            <label>Feedback</label>
            <input
              placeholder="User Feedback"
              name="userfeedback"
              type="text"
              {...register("userfeedback")}
              className={`form-control ${
                errors.userfeedback ? "is-invalid" : ""
              }`}
            />
            <div className="invalid-feedback">
              {errors.userfeedback?.message}
            </div>
          </div>

          <div className="form-group  col-md-6" style={{ height: "70px" }}>
            <label>Email</label>

            <input
              placeholder="Email"
              name="email"
              type="text"
              {...register("email")}
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.email?.message}</div>
          </div>
          <div className="form-group  col-md-6" style={{ height: "60px" }}>
            <label>Phone No</label>

            <PhoneInput
              ref={inputEl}
              inputClass="w-100"
              // style={{ width: "50px" }}
              country="in"
              name="Number"
              autoFormat
              placeholder="enter No"
              // inputStyle={{ width: "400px" }}
              // containerStyle={{ marginTop: "15px" }}
              searchClass="search-class"
              searchStyle={{
                margin: "0",
                width: "97%",
                height: "30px",
              }}
              className="phninput"
              enableSearchField
              countryCodeEditable={false}
              onChange={(value, country, data) => {
                let rawPhone = value
                  .replace(/[^0-9]+/g, "")
                  .slice(country.dialCode.length);
                // console.log(
                //   "aa",
                //   {
                //     rawPhone: value
                //       .replace(/[^0-9]+/g, "")
                //       .slice(country.dialCode.length),
                //   },
                //   country
                // );

                setnum({ rawPhone });
              }}
              // style={{ width: "100rem" }}
              disableSearchIcon
              enableSearch
            />
            <span style={{ color: "red", fontSize: "12px" }}>
              <p>{getmsg}</p>
            </span>
          </div>
          <div className="form-group  col-md-6" style={{ height: "50px" }}>
            <label>Radio button</label>
            <br />

            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="Excellent"
                {...register("optionValue", { required: true })}
              />
              <label class="form-check-label" for="inlineRadio1">
                Excellent{" "}
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                {...register("optionValue", { required: true })}
                id="inlineRadio2"
                value="Good"
              />
              <label class="form-check-label" for="inlineRadio2">
                Good
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                {...register("optionValue", { required: true })}
                id="inlineRadio3"
                value="Fair"
              />
              <label class="form-check-label" for="inlineRadio3">
                Fair
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                {...register("optionValue", { required: true })}
                id="inlineRadio4"
                value="Bad"
              />
              <label class="form-check-label" for="inlineRadio4">
                Bad
              </label>
            </div>
            <div className="invalid-feedback">
              {errors.optionValue?.message}
            </div>
          </div>

          <div className="form-group col-6">
            <label>Name</label>

            <input
              name="name"
              placeholder="Name"
              {...register("name")}
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.name?.message}</div>
          </div>

          <div className="form-group col-12">
            <button type="submit" className="btn submit_btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
