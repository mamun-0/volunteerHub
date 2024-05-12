import { AddVolunteerForm } from "../../components/AddVolunteerForm/AddVolunteerForm";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";

export function AddVolunteer() {
  return (
    <div>
      <SectionTitle title={"Add Volunteer"} size={3} />
      <AddVolunteerForm />
    </div>
  );
}
