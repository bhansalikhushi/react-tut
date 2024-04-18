import React from "react";
import { useState } from "react";

function UserData(props) {
  const [show, setshow] = useState(false);
  const [numbers, setNumbers] = useState(0);

  const ShowData = () => {
    setshow(!show);
  };
  function ChangeData() {
    var t = numbers + 1;
    setNumbers(t);
  }

  return (
    <>
      <div>
        <h1>
          {props.user} is {props.age} years old
          <br />
          The number: {numbers}
          <br />
          <button onClick={ChangeData}>ADD 1</button>
          <button onClick={ShowData}>show profile</button>
        </h1>
      </div>
      {show ? (
        <div>
          <h1>
            user <input name="user" placeholder="enter your name"></input>
          </h1>
          <h1>
            reg <input name="regno" placeholder="enter your Reg number"></input>
          </h1>

          <h1>
            number
            <input
              name="phonenumber"
              placeholder="enter your phone number"
            ></input>
          </h1>
          <button onSubmit="placeholder">Submit</button>
        </div>
      ) : (
        <h2>not show</h2>
      )}
    </>
  );
}

export default UserData;
