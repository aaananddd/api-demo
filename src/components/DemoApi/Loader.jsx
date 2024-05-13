import React, { useEffect, useState } from "react";

const Loader = () => {
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsloading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return isLoading ? <p>Loading...</p> : null;
};

export default Loader;
