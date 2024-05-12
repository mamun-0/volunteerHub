import { Link } from "react-router-dom";

export function UpcomingDateLine({
  thumbnail_url,
  post_title,
  category,
  date,
  _id,
}) {
  const originalDate = new Date(date);
  const formattedDate = originalDate.toLocaleDateString("en-GB");
  return (
    <div className="place-self-center">
      <div className="w-full">
        <img
          className="h-40 w-full object-cover"
          src={thumbnail_url}
          alt="card-heading-img"
        />
      </div>
      <div className="bg-slate-100 p-2">
        <h2 className="p-2 text-lg border-b-2">Post Title : {post_title}</h2>
        <h2 className="p-2 text-lg border-b-2">Category : {category}</h2>
        <h2 className="p-2 text-lg border-b-2">
          {" "}
          <span className="text-red-400">Deadline </span>: {formattedDate}
        </h2>
        <div className="text-right my-2">
          <Link
            to={`/need-volunteer/${_id}`}
            className="btn btn-success btn-sm"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
