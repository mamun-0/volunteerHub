import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export function VolunteerDetailsCard({
  thumbnail_url,
  post_title,
  category,
  num_volunteer,
  date,
  org_name,
  org_email,
  location,
  description,
  _id,
}) {
  const originalDate = new Date(date);
  const formattedDate = originalDate.toLocaleDateString("en-GB");
  return (
    <div className="flex flex-col items-center my-4">
      <div className="w-1/2">
        <img
          className="h-[50vh] w-full object-cover"
          src={thumbnail_url}
          alt="card-heading-img"
        />
      </div>
      <div className="bg-slate-100 p-2 w-1/2">
        <h2 className="p-2 text-lg border-b-2">Post Title : {post_title}</h2>
        <h2 className="p-2 text-lg border-b-2">Category : {category}</h2>
        <h2 className="p-2 text-lg border-b-2">
          Volunteers Need : {num_volunteer}
        </h2>
        <h2 className="p-2 text-lg border-b-2">Location: {location}</h2>
        <h2 className="p-2 text-lg border-b-2">
          <span className="text-red-600">Deadline:</span>{" "}
          {formattedDate || "Not found"}
        </h2>
        <p className="p-2 text-lg border-b-2">Description : {description}</p>
        <h2 className="p-2 text-lg border-b-2">
          Organization Name : {org_name}
        </h2>
        <h2 className="p-2 text-lg">Organization Email : {org_email}</h2>
        {num_volunteer == 0 ? (
          <button
            onClick={() => {
              toast.error("No more volunteer is accepted");
            }}
            className="btn btn-error w-full text-lg cursor-not-allowed"
          >
            Not to be a voluenteer🙏
          </button>
        ) : (
          <Link
            to={`/be-a-volunteer/${_id}`}
            className="btn btn-primary w-full text-lg"
          >
            Be a Volunteer
          </Link>
        )}
      </div>
    </div>
  );
}
