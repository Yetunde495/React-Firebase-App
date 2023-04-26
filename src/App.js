import { Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import "./App.css";

import Homepage from "./pages/Homepage/homepage";

const loadApp = async () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        state: "done",
      });
    }, 2000);
  });

  await promise;
};

function wrapPromise(promise) {
  let status = "pending";
  let result;
  let suspender = promise.then(
    (r) => {
      status = "success";
      result = r;
    },
    (e) => {
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
}

const suspenderCheck = wrapPromise(loadApp());

const ChildComponent = () => {
  const data = suspenderCheck.read();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
  );
};

function App() {
  

  return (
    <div className="App">
      <Suspense
        fallback={
          <TailSpin
            height="80"
            width="80"
            color="#00112c"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{ position: "absolute", top: "50%", left: "50%" }}
            wrapperClass=""
            visible={true}
          />
        }
      >
        <ChildComponent />
      </Suspense>
    </div>
  );
}

export default App;
