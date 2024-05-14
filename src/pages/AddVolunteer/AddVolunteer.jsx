import { AddVolunteerForm } from "../../components/AddVolunteerForm/AddVolunteerForm";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet";
export function AddVolunteer() {
  return (
    <div>
      <Helmet>
        <title>AddVolunteer</title>
      </Helmet>
      <SectionTitle title={"Add Volunteer"} size={3} />
      <AddVolunteerForm />
    </div>
  );
}
