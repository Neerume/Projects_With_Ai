import React, { useState, useEffect } from "react";
import { RingLoader } from "react-spinners";

const GeneratingPage = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-10">
        Ai is Weaving your Story...
      </h1>
      <div className="flex justify-center items-center mt-10">
        {loading ? (
          <RingLoader color={"#6652d9"} loading={loading} size={30} />
        ) : (
          "Done"
        )}
      </div>
    </div>
  );
};

export default GeneratingPage;
