import { useEffect, useState } from "react";
import { Banner } from "../../components/Banner/Banner";
import { Optimize } from "../../components/Optimize/Optimize";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { TrustedORG } from "../../components/TrustedORG/TrustedORG";
import axios from "axios";
import { LoadingSpin } from "../../components/LoadingSpin/LoadingSpin";
import { UpcomingDateLine } from "../../components/UpcomingDeadLine/UpcomingDateLine";
import { Link } from "react-router-dom";
export function Home() {
  const [deadLine, setDeadLine] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/need-volunteer-6`)
      .then(({ data }) => {
        setDeadLine(data.message);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <Banner />
      <SectionTitle title={"Volunteer Needs Now"} size={3} />
      <SectionTitle
        title={
          "Volunteer Management software trusted by thousands of organizations, including : "
        }
        size={1}
      />
      <TrustedORG />
      <SectionTitle title={"Volunteer Needs Now"} size={3} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
        {loading ? (
          <LoadingSpin />
        ) : (
          deadLine.map((person, idx) => {
            return <UpcomingDateLine key={idx} {...person} />;
          })
        )}
        <div className="col-span-3 flex justify-center">
        <Link className="btn btn-warning" to="/need-volunteer">See All</Link>
        </div>
      </div>
      <SectionTitle title={"Customizable for Each Initiative"} size={3} />
      <Optimize />
    </div>
  );
}
