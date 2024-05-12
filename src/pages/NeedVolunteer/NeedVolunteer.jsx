import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { VolunteerList } from "../../components/VolunteerList/VolunteerList";

export function NeedVolunteer() {
  return (
    <div>
      <SectionTitle title={"Need Volunteer"} size={3} />
      <VolunteerList />
    </div>
  );
}
