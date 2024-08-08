import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { LoadingSpin } from "../../components/LoadingSpin/LoadingSpin";
import { VolunteerDetailsCard } from "../../components/VolunteerDetailsCard/VolunteerDetailsCard";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet";
import { useAxiosSecure } from "../../../Axios/useAxiosSecure";

export function VolunteerDetails() {
  const secure = useAxiosSecure();
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const id = useLoaderData();

  useEffect(() => {
    secure
      .get(`${import.meta.env.VITE_BASE_URL}/need-volunteer/${id}`)
      .then(({ data }) => {
        setDetails(data.message);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <Helmet>
        <title>Volunteer Details</title>
      </Helmet>
      <SectionTitle title={"Volunteer Need Post Details"} size={3} />
      {loading ? (
        <LoadingSpin />
      ) : details ? (
        <VolunteerDetailsCard {...details} />
      ) : (
        "No Data Found"
      )}
    </div>
  );
}
