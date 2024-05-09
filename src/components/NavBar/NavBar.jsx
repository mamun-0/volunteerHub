import React, { useEffect } from "react";
import { useProvideAuth } from "../../../hooks/useProvideAuth";

export function NavBar() {
  const { loading, firebaseAuth } = useProvideAuth();
  const defaultPhotoURL =
    "https://www.pngkey.com/png/full/73-730477_first-name-profile-image-placeholder-png.png";
  useEffect(() => {
    console.log(firebaseAuth);
  });
  return <div></div>;
}
