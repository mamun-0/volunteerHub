import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { VolunteerList } from "../../components/VolunteerList/VolunteerList";
import { Helmet } from "react-helmet";

export function NeedVolunteer() {
  return (
    <div>
      <Helmet>
        <title>Need Volunteer</title>
      </Helmet>
      <SectionTitle title={"Need Volunteer"} size={3} />
      <VolunteerList />
    </div>
  );
}
