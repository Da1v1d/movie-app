import { useEffect, useRef, useState } from "react";

export const usePreview = (preview) => {
  const previewRef = useRef(null);

  const [_, setPreview] = useState(preview);

  useEffect(() => {
    previewRef.current.style.backgroundImage = `url(${require(preview)})`;
  }, []);

  if (previewRef.current) {
    previewRef.current.style.background = `url(${_ || preview})`;
  }

  console.log(previewRef?.current);

  return { previewRef, setPreview };
};
