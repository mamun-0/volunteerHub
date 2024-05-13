import { Link } from "react-router-dom";
import { DeleteModal } from "../components/DeleteModal/DeleteModal";

export function MyVolunteerPostList({ myPosts, setMyPosts }) {
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
              <th>Location</th>
              <th>Update Post</th>
              <th>Delete Post</th>
            </tr>
          </thead>
          <tbody>
            {/* Rows start from here */}
            {myPosts.map(({ post_title, category, location, _id }, idx) => {
              return (
                <tr key={idx}>
                  <th>
                    <div className="badge badge-primary badge-md">
                      {idx + 1}
                    </div>
                  </th>
                  <td>{post_title}</td>
                  <td>{category}</td>
                  <td>{location}</td>
                  <td>
                    <button className="btn btn-sm btn-warning">Update</button>
                  </td>
                  <td>
                    <DeleteModal setMyPosts={setMyPosts} id={_id} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
