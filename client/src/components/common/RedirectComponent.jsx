import { useEffect } from "react";

const ExternalRedirect = ({ url }) => {
  useEffect(() => {
    window.open(url, "_blank");
  }, [url]);

  return null;
};

export default ExternalRedirect;