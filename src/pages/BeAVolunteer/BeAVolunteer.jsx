import { useEffect, useState } from "react";
import { BeAVolunteerForm } from "../../components/BeAVolunteerForm/BeAVolunteerForm";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import { LoadingSpin } from "../../components/LoadingSpin/LoadingSpin";
import { useProvideAuth } from "../../../hooks/useProvideAuth";
import { Helmet } from "react-helmet";
import { useAxiosSecure } from "../../../Axios/useAxiosSecure";
export function BeAVolunteer() {
  const secure = useAxiosSecure();
  const {
    firebaseAuth: { user },
  } = useProvideAuth();
  const [loading, setLoading] = useState(true);
  const [beAVolunteer, setBeAVolunteer] = useState(null);
  const id = useLoaderData();

  const volunteer_DisplayName =
    user?.displayName || user?.user?.displayName || "Not found";
  const volunteer_Email = user?.email || user?.user?.email || "Not found";

  useEffect(() => {
    secure
      .get(`${import.meta.env.VITE_BASE_URL}/be-a-volunteer/${id}`)
      .then(({ data }) => {
        setBeAVolunteer(data.message);
      })
      .catch(() => {})
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <Helmet>
        <title>Be a Volunteer</title>
      </Helmet>
      <SectionTitle title={"Be a Volunteer"} size={3} />
      {loading ? (
        <LoadingSpin />
      ) : beAVolunteer ? (
        <BeAVolunteerForm
          {...beAVolunteer}
          volunteer_DisplayName={volunteer_DisplayName}
          volunteer_Email={volunteer_Email}
        />
      ) : (
        "Not Found"
      )}
    </div>
  );
}
