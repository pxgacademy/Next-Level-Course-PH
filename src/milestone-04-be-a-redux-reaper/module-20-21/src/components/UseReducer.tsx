import { useReducer } from "react";

const UseReducer = () => {
  /*
  const [userInfo, setUserInfo] = useState({ name: "", email: "", phone: "" });
  const handleOnChange = (e) => {
    // setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    // setUserInfo((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  */

  //

  const initialState = {
    name: "",
    email: "",
    phone: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "FIELD_UPDATE":
        return {
          ...state,
          [action.payload.field]: action.payload.value,
        };
      default:
        state;
    }
  };

  const [userInfo, dispatch] = useReducer(reducer, initialState);

  const handleOnChange = (e) => {
    dispatch({
      type: "FIELD_UPDATE",
      payload: {
        field: e.target.name,
        value: e.target.value,
      },
    });
  };

  //

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
            onChange={handleOnChange}
          />
          <input
            type="text"
            placeholder="email"
            name="email"
            value={userInfo.email}
            onChange={handleOnChange}
          />
          <input
            type="text"
            placeholder="phone"
            name="phone"
            value={userInfo.phone}
            onChange={handleOnChange}
          />
          <button role="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default UseReducer;
