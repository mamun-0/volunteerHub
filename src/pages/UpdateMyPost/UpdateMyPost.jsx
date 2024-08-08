import { useEffect, useState } from "react";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { UpdateMyPostForm } from "../../components/UpdateMyPostForm/UpdateMyPostForm";
import { useLoaderData } from "react-router-dom";
import { LoadingSpin } from "../../components/LoadingSpin/LoadingSpin";
import { Helmet } from "react-helmet";
import { useAxiosSecure } from "../../../Axios/useAxiosSecure";

export function UpdateMyPost() {
  const secure = useAxiosSecure();
  const [mypost, setMyPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const id = useLoaderData();
  useEffect(() => {
    secure
      .get(`${import.meta.env.VITE_BASE_URL}/myposts/${id}`)
      .then(({ data }) => {
        setMyPost(data.message);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <Helmet>
        <title>Update My Post</title>
      </Helmet>
      <SectionTitle title={"Update My Post"} size={3} />
      {loading ? <LoadingSpin /> : <UpdateMyPostForm {...mypost} />}
    </div>
  );
}
