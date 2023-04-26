import React, { useState, useRef } from "react";
import Modal from "react-bootstrap/Modal";
import {
  name_validation,
  email_validation,
  password_validation,
} from "../../utils/inputValidations";
import {
  PlusCircleFill,
} from "react-bootstrap-icons";
import {
  registerWithEmailAndPassword,
  photoUploadData,
} from "../../services/firebase";
import { Input } from "../../components/Form/formComponent";
import { FormProvider, useForm } from "react-hook-form";
import { Avatar } from "../../styles/components";

export default function Homepage() {
  const methods = useForm();

  const [passwordType, setPasswordType] = useState("password");
  const [response, setResponse] = useState("");
  const [show, setShow] = useState(true);
  const [logoUrl, setLogoUrl] = useState(
    "https://banner2.cleanpng.com/20180402/iwe/kisspng-computer-icons-user-login-gender-5ac29ccdae3ee3.1507632615227035657137.jpg"
  );

  const hiddenFileInput = useRef(null);
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const photoUpload = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = async () => {
      //setFile(file)
      setLogoUrl(reader.result);
      const url = await photoUploadData(file)
      if (url) {
        setLogoUrl(url)
      }
    };
    reader.readAsDataURL(file);
  };

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const registerUser = async (data) => {
    const resp = await registerWithEmailAndPassword(
      data,
      logoUrl
    ).then(() => setResponse("Your account was succesfully created"));
  }

  const onSubmit = methods.handleSubmit((data) => {
    registerUser(data);
    methods.reset();
  });

 
  



  return (
    <div>
      <Modal show={show} centered>
        <Modal.Header
          className="success-modal-header"
          closeButton
        ></Modal.Header>
        <Modal.Body>
          <div style={{padding: '3% 5%'}}>
            <h3 className="text-center">Signup</h3>

            <div>
              <FormProvider {...methods}>
                <form
                  autoComplete="off"
                  onSubmit={(e) => e.preventDefault()}
                  noValidate
                >
                  <label
                    htmlFor="photo-upload"
                    className="center pr custom-file-upload fas"
                  >
                    <Avatar>
                      <img
                        src={logoUrl}
                        alt="avatar-image"
                      />
                    </Avatar>
                    <input
                      type="file"
                      style={{ display: "none" }}
                      onChange={photoUpload}
                      ref={hiddenFileInput}
                    />

                  
                      <button className="photo-upload-btn" onClick={handleClick}>
                        <PlusCircleFill />
                      </button>
                 
                  </label>
                  <Input {...name_validation} />
                  <Input {...email_validation} />
                  <Input {...password_validation} />
                

                  <button className="w-100" onClick={onSubmit}>Submit</button>
                  <p>{response}</p>
                </form>
              </FormProvider>
            </div>
          
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
