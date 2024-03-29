import axios from "axios";
import { useState, useEffect } from "react";
import SkeletonCard from "./SkeletonCard";
import "react-loading-skeleton/dist/skeleton.css";

const App = () => {
  let [user, setUser] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get(
        "https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole"
      );
      setUser(response.data);
      setLoading(false);
    };

    // setTimeout(() => {
    getUser();
    // }, 2000);
  }, []);

  return (
    <div className="max-w-screen-2xl mx-auto px-16 bg-black min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-10 py-5">
      {loading ?
        <>
          <SkeletonCard /><SkeletonCard /><SkeletonCard />
          <SkeletonCard /><SkeletonCard /><SkeletonCard />
        </>
        :
        <>
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
                  <p>{user.email} </p>
                  <p>{user.address}</p>
                </div>
              </div>
            </div>
          ))}
        </>
      }
    </div>
  );
};

export default App;