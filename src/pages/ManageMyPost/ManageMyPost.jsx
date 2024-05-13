import { useState } from "react";
import { MyVolunteerPostList } from "../../MyVolunteerPostList/MyVolunteerPostList";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import axios from "axios";

export function ManageMyPost() {
  const [myPosts, setMyPosts] = useState([]);
  const [beAVolunteer, setBeAVolunteer] = useState([]);
  useState(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/myposts`, {
        withCredentials: true,
      })
      .then(({ data }) => {
        setMyPosts(data.message);
      })
      .catch(() => {});

    axios
      .get(`${import.meta.env.VITE_BASE_URL}/request-voluenteer`, {
        withCredentials: true,
      })
      .then(({ data }) => {
        setBeAVolunteer(data.message);
      })
      .catch(() => {});
  }, []);
  return (
    <div>
      <SectionTitle title={"My Need Volunteer Post"} size={3} />
      <MyVolunteerPostList myPosts={myPosts} setMyPosts={setMyPosts} />
      <SectionTitle title={"My Volunteer Request Post"} size={3} />
    </div>
  );
}
