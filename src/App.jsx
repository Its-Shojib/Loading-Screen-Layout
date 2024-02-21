import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  let [user, setUser] = useState([]);
  console.log(user);

  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get(
        "https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole"
      );
      setUser(response.data);
    };
    getUser();
  }, []);
  return (
    <div className="max-w-screen-2xl mx-auto px-16 bg-green-300 min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-10">
      {user.map((user) => (
        <div key={user.id}>
          <div className="card w-96 h-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={`https://joesch.moe/api/v1/${user.first}`}
                alt="Shoes"
                className="rounded-full h-40 w-40"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{`${user.first} ${user.last}`}</h2>
              <p>{user.email}</p>
              <p>{user.address}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
