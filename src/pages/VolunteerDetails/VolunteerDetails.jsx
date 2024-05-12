import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { LoadingSpin } from "../../components/LoadingSpin/LoadingSpin";
import { VolunteerDetailsCard } from "../../components/VolunteerDetailsCard/VolunteerDetailsCard";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";

export function VolunteerDetails() {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const id = useLoaderData();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/need-volunteer/${id}`, {
        withCredentials: true,
      })
      .then(({ data }) => {
        setDetails(data.message);
        setLoading(false);
      });
  }, []);
  return (
    <div>
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
