import { useForm, Controller } from "react-hook-form";
import { FormGroup } from "../FormGroup/FormGroup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./AddVolunteerForm.css";
import { useProvideAuth } from "../../../hooks/useProvideAuth";
import { toast } from "react-toastify";
import { useAxiosSecure } from "../../../Axios/useAxiosSecure";

export function AddVolunteerForm() {
  const secure = useAxiosSecure();
  const {
    firebaseAuth: { user },
  } = useProvideAuth();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      org_name: user?.user?.displayName || user?.displayName,
      org_email: user?.user?.email || user?.email,
    },
  });

  function onSubmit(data) {
    secure
      .post(`${import.meta.env.VITE_BASE_URL}/add-volunteer`, {
        ...data,
      })
      .then((res) => {
        toast.success(res?.data?.message);
        reset();
      })
      .catch(() => {
        toast.error("Failed to post!");
      });
  }
  return (
    <div className="mx-6 dark:mx-0 dark:px-6 my-4 dark:my-0 dark:py-4 dark:bg-black dark:text-white">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormGroup errorMessage={errors?.post_title?.message}>
            <label id="post_title">Post Title :</label>
            <input
              htmlFor="post_title"
              type="text"
              placeholder="Post Title"
              {...register("post_title", {
                required: { value: true, message: "Required" },
              })}
              className="input input-bordered w-full dark:text-black"
            />
          </FormGroup>
          <FormGroup errorMessage={errors?.thumbnail_url?.message}>
            <label id="thumbnail_url">Thumbnail URL:</label>
            <input
              htmlFor="thumbnail_url"
              type="text"
              placeholder="Thumbnail URL"
              {...register("thumbnail_url", {
                required: { value: true, message: "Required" },
                pattern: {
                  value: /https?:\/\/\S+?\.(?:jpg|jpeg|gif|png|bmp)\b/,
                  message:
                    "Absolute link starts with http or https and ends with .png, .jpg, jpeg, .gif, .bmp",
                },
              })}
              className="input input-bordered w-full dark:text-black"
            />
          </FormGroup>
          <FormGroup errorMessage={errors?.description?.message}>
            <label id="description">Description:</label>
            <textarea
              {...register("description", {
                required: { value: true, message: "Required" },
              })}
              id="description"
              cols="40"
              rows="6"
              className="input input-bordered w-full rounded-md dark:text-black"
            />
          </FormGroup>
          <FormGroup errorMessage={errors?.category?.message}>
            <label id="category">Category :</label>
            <select
              {...register("category", {
                required: true,
                message: "Selection required",
              })}
              className="select select-bordered w-full dark:text-black"
            >
              {[
                "healthcare",
                "education",
                "social service",
                "animal welfare",
              ].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </FormGroup>
          <FormGroup errorMessage={errors?.location?.message}>
            <label id="location">Location :</label>
            <input
              htmlFor="location"
              type="text"
              placeholder="Location"
              {...register("location", {
                required: { value: true, message: "Required" },
              })}
              className="input input-bordered w-full dark:text-black"
            />
          </FormGroup>
          <FormGroup errorMessage={errors?.num_volunteer?.message}>
            <label id="num_volunteer">No. of volunteers :</label>
            <input
              type="number"
              htmlFor="num_volunteer"
              placeholder="no. of volunteers"
              className="input input-bordered w-full dark:text-black"
              {...register("num_volunteer", {
                required: { value: true, message: "Required" },
                validate: {
                  positive: (v) => {
                    if (parseInt(v) <= 0) {
                      return "Must grater than 0";
                    }
                  },
                },
              })}
            />
          </FormGroup>
          <FormGroup errorMessage={errors?.date?.message}>
            <label htmlFor="date">Date:</label>
            <Controller
              name="date"
              control={control}
              render={({ field: { onChange, value } }) => (
                <DatePicker
                  selected={value}
                  onChange={onChange}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="dd/MM/yyyy"
                />
              )}
              rules={{ required: "Required" }}
            />
          </FormGroup>
          <FormGroup errorMessage={errors?.org_name?.message}>
            <label id="org_name">Organizer Name :</label>
            <input
              htmlFor="org_name"
              type="text"
              placeholder="Organizer Name"
              disabled
              {...register("org_name")}
              className="input input-bordered w-full"
            />
          </FormGroup>
          <FormGroup errorMessage={errors?.org_email?.message}>
            <label id="org_email">Organizer Email :</label>
            <input
              htmlFor="org_email"
              type="text"
              placeholder="Organizer Email"
              disabled
              {...register("org_email")}
              className="input input-bordered w-full"
            />
          </FormGroup>
        </div>
        <button className="btn btn-primary mt-4">Add Post</button>
      </form>
    </div>
  );
}
