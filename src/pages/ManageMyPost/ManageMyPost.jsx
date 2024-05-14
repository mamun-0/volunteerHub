import { useState } from "react";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import axios from "axios";
import { MyVolunteerPostList } from "../../components/MyVolunteerPostList/MyVolunteerPostList";
import { BeAVolunteerPostList } from "../../components/BeAVolunteerPostList/BeAVolunteerPostList";
import { LoadingSpin } from "../../components/LoadingSpin/LoadingSpin";
import { Helmet } from "react-helmet";

export function ManageMyPost() {
  const [myPosts, setMyPosts] = useState([]);
  const [beAVolunteer, setBeAVolunteer] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
  useState(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/myposts`, {
        withCredentials: true,
      })
      .then(({ data }) => {
        setMyPosts(data.message);
      })
      .catch(() => {})
      .finally(() => {
        setLoading(false);
      });

    axios
      .get(`${import.meta.env.VITE_BASE_URL}/request-voluenteer`, {
        withCredentials: true,
      })
      .then(({ data }) => {
        setBeAVolunteer(data.message);
      })
      .catch(() => {})
      .finally(() => {
        setLoading2(false);
      });
  }, []);
  const EmptyListMsg = (
    <h2 className="text-2xl text-center text-red-500 font-semibold my-3">Empty List</h2>
  );
  return (
    <div>
      <Helmet>
        <title>Manage My Post</title>
      </Helmet>
      <SectionTitle title={"My Need Volunteer Post"} size={3} />
      {loading ? (
        <LoadingSpin />
      ) : !myPosts.length ? (
        EmptyListMsg
      ) : (
        <MyVolunteerPostList myPosts={myPosts} setMyPosts={setMyPosts} />
      )}
      <SectionTitle title={"My Volunteer Request Post"} size={3} />
      {loading2 ? (
        <LoadingSpin />
      ) : !beAVolunteer.length ? (
        EmptyListMsg
      ) : (
        <BeAVolunteerPostList
          beAVolunteer={beAVolunteer}
          setBeAVolunteer={setBeAVolunteer}
        />
      )}
    </div>
  );
}
