import { useState } from "react";

function UseState() {
  const [userInfo, setUserInfo] = useState({ name: "", email: "", phone: "" });

  const updateUserInfo = (e) => {
    // TODO setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    setUserInfo((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(userInfo);
  };

  return (
    <>
      <div>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="name"
            name="name"
            value={userInfo.name}
            onChange={updateUserInfo}
          />
          <input
            type="text"
            placeholder="email"
            name="email"
            value={userInfo.email}
            onChange={updateUserInfo}
          />
          <input
            type="text"
            placeholder="phone"
            name="phone"
            value={userInfo.phone}
            onChange={updateUserInfo}
          />
          <button role="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default UseState;
