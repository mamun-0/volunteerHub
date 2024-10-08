import { useEffect, useState } from "react";
import { VolunteerCard } from "../VolunteerCard/VolunteerCard";
import { LoadingSpin } from "../LoadingSpin/LoadingSpin";
import { IoGridOutline } from "react-icons/io5";
import { BsViewStacked } from "react-icons/bs";
import { useToggle } from "../../../hooks/useToggle";
import { VolunteerCardTable } from "../VolunteerCardTable/VolunteerCardTable";
import { useAxiosSecure } from "../../../Axios/useAxiosSecure";

export function VolunteerList() {
  const [volunteer, setVolunteer] = useState(null);
  const [filterd, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState("");
  const [toggle, setToggle] = useToggle(true);
  const secure = useAxiosSecure();
  useEffect(() => {
    secure
      .get(`${import.meta.env.VITE_BASE_URL}/need-volunteer`)
      .then(({ data }) => {
        setVolunteer(data.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (volunteer === null) {
      setFiltered([]);
      return;
    }
    const filteredVolunteer = volunteer.filter((item) => {
      return item.post_title.toLowerCase().includes(text.toLowerCase());
    });
    setFiltered(filteredVolunteer);
  }, [text]);
  function handleChange(event) {
    setText(event.target.value);
  }
  const EmptyListMsg = (
    <h2 className="text-2xl text-center text-red-500 font-semibold my-3">
      Empty List
    </h2>
  );
  return (
    <>
      <div className="text-center dark:bg-black">
        <div className="flex justify-center items-center space-x-4">
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Search Based on Post Title"
              value={text}
              onChange={handleChange}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
          <div
            className="text-3xl cursor-pointer dark:text-white"
            onClick={() => {
              setToggle();
            }}
          >
            {toggle ? <IoGridOutline /> : <BsViewStacked />}
          </div>
        </div>
      </div>
      <div
        className={`${
          toggle
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-content-center"
            : ""
        } py-4 dark:bg-black`}
      >
        {loading ? (
          <LoadingSpin />
        ) : filterd.length ? (
          toggle ? (
            filterd.map((myPosts, idx) => {
              return <VolunteerCard key={idx} {...myPosts} />;
            })
          ) : (
            <VolunteerCardTable myPosts={filterd} />
          )
        ) : volunteer ? (
          toggle ? (
            volunteer.map((myPosts, idx) => {
              return <VolunteerCard key={idx} {...myPosts} />;
            })
          ) : (
            <VolunteerCardTable myPosts={volunteer} />
          )
        ) : (
          EmptyListMsg
        )}
      </div>
    </>
  );
}
