import { Link } from "react-router-dom";

export function VolunteerCardTable({ myPosts }) {
  return (
    <div className="dark:bg-black dark:text-white">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="dark:text-white">
              <th></th>
              <th>Post Title</th>
              <th>Category</th>
              <th>No. of Volenteers</th>
              <th>Post Details</th>
            </tr>
          </thead>
          <tbody>
            {/* Rows start from here */}
            {myPosts.map(
              ({ post_title, category, num_volunteer, _id }, idx) => {
                return (
                  <tr key={idx}>
                    <th>
                      <div className="badge badge-primary badge-md">
                        {idx + 1}
                      </div>
                    </th>
                    <td>{post_title}</td>
                    <td>{category}</td>
                    <td>{num_volunteer}</td>
                    <td>
                      <Link
                        to={`/need-volunteer/${_id}`}
                        className="btn btn-sm btn-outline dark:text-white"
                      >
                        Details
                      </Link>
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
