import { Link } from "react-router-dom";
import { DeleteModal } from "../DeleteModal/DeleteModal";
import { CancelModal } from "../CancelModal/CancelModal";

export function BeAVolunteerPostList({ beAVolunteer, setBeAVolunteer }) {
  return (
    <div className="dark:bg-black dark:text-white">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="dark:text-white">
              <th></th>
              <th>Volunteer Email</th>
              <th>Organization Email</th>
              <th>Location</th>
              <th>Cancel Request</th>
            </tr>
          </thead>
          <tbody>
            {/* Rows start from here */}
            {beAVolunteer.map(
              ({ volunteer_email, org_email, location, _id }, idx) => {
                return (
                  <tr key={idx}>
                    <th>
                      <div className="badge badge-secondary badge-md">
                        {idx + 1}
                      </div>
                    </th>
                    <td>{volunteer_email}</td>
                    <td>{org_email}</td>
                    <td>{location}</td>
                    <td>
                      <CancelModal setBeAVolunteer={setBeAVolunteer} id={_id} />
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
