import React, { useState } from "react";
import { Image } from "react-bootstrap";
// import phone from "../assets/images/svg/phone.svg";
// import mail from "../assets/images/svg/mail.svg";
const ContactUs = () => {
  const [FormSubmit, setFormsubmit] = useState({
    text: "",
    Phone: "",
    Email: "",
  });
  const submit = (e) => {
    const Name = e.target.name;
    const value = e.target.value;
    // console.log(Name, value);
    setFormsubmit({ ...FormSubmit, [Name]: value });
  };
  const submitfull = (e) => {
    e.preventDefault();
    // console.log(FormSubmit);
    setFormsubmit({
      text: "",
      Phone: "",
      Email: "",
    });
  };
  return (
    <>
      <section>
        <div className="container py-5 my-5">
          <div className="row align-items-center justify-content-between">
            <div className="col-12 text-center text-lg-start col-lg-6">
              <div className="">
                <p className=" ff_bebas_neue fw-normal fs_xl text-white">
                  LET’S CREATE.
                </p>
                <Image src="/assets/images/svg/phone.svg" alt="phone" />
                <p className=" ff_bebas_neue fs_md fw-normal text-white mb-0 pt-3">
                  PHONE NUMBER
                </p>
                <p className=" ff_Montserrat fs_sm fw-normal text-white pt-2">
                  (208) 555-0112
                </p>
                <Image
                  className=" pt-5"
                  src="/assets/images/svg/mail.svg"
                  alt="mail"
                />
                <p className=" ff_bebas_neue fs_md fw-normal text-white mb-0 pt-3">
                  MAIL ADDRESS
                </p>
                <p className=" ff_Montserrat fs_sm fw-normal text-white pt-2 pb-4 pb-lg-0">
                  willie.jennings@example.com
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className=" contactUs">
                <p className=" ff_bebas_neue fw-normal fs_xl text-white text-center">
                  CONTACT US
                </p>
                <p className=" ff_Montserrat fw-normal fs_sm text-white text-center pb-5 ps-4 pe-4">
                  Pellentesque libero eget ac ut accumsan. Quam sodales proin.
                </p>
                <form onSubmit={submitfull}>
                  <input
                    type="text"
                    className=" contact_input w-100 pt-3 pb-3 ps-4 ff_Montserrat fw-normal fs_sm outline_none"
                    placeholder="Name"
                    name="text"
                    onChange={submit}
                    value={FormSubmit.text}
                    id="text"
                  />
                  <input
                    type="number"
                    className=" contact_input w-100 pt-3 pb-3 ps-4 ff_Montserrat fw-normal fs_sm mt-4 outline_none"
                    placeholder="Phone"
                    name="Phone"
                    onChange={submit}
                    value={FormSubmit.Phone}
                    id="Phone"
                  />
                  <input
                    type="Email"
                    className=" contact_input w-100 pt-3 pb-3 ps-4 ff_Montserrat fw-normal fs_sm mt-4 mb-5 outline_none"
                    placeholder="Email"
                    name="Email"
                    onChange={submit}
                    value={FormSubmit.Email}
                    id="Email"
                  />
                  <button
                    className=" contactUS_butt ff_Montserrat fw-bold fs_sm mt-4 mb-5 bt_hover"
                    type="submit"
                  >
                    LET’S GET TO WORK
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
