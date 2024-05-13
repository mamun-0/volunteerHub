import { useForm, Controller } from "react-hook-form";
import { FormGroup } from "../FormGroup/FormGroup";
import DatePicker from "react-datepicker";
import { parseISO } from "date-fns";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export function BeAVolunteerForm({
  category,
  description,
  location,
  org_name,
  org_email,
  post_title,
  num_volunteer,
  thumbnail_url,
  date,
  volunteer_DisplayName,
  volunteer_Email,
  _id,
}) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      category,
      description,
      location,
      org_name,
      org_email,
      post_title,
      num_volunteer,
      thumbnail_url,
      volunteer_name: volunteer_DisplayName,
      volunteer_email: volunteer_Email,
    },
  });
  function onSubmit(data) {
    axios
      .post(
        `${import.meta.env.VITE_BASE_URL}/be-a-volunteer/${_id}`,
        { ...data },
        {
          withCredentials: true,
        }
      )
      .then(({ data }) => {
        toast.success(data.message);
        navigate(`/need-volunteer/${_id}`, { replace: true });
      })
      .catch(() => {});
  }

  return (
    <div className="mx-6 my-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormGroup errorMessage={errors?.post_title?.message}>
            <label id="post_title">Post Title :</label>
            <input
              htmlFor="post_title"
              type="text"
              disabled
              placeholder="Post Title"
              {...register("post_title", {
                required: { value: true, message: "Required" },
              })}
              className="input input-bordered w-full"
            />
          </FormGroup>
          <FormGroup errorMessage={errors?.thumbnail_url?.message}>
            <label id="thumbnail_url">Thumbnail URL:</label>
            <input
              htmlFor="thumbnail_url"
              disabled
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
              className="input input-bordered w-full"
            />
          </FormGroup>
          <FormGroup errorMessage={errors?.description?.message}>
            <label id="description">Description:</label>
            <textarea
              disabled
              {...register("description", {
                required: { value: true, message: "Required" },
              })}
              id="description"
              cols="40"
              rows="6"
              className="input input-bordered w-full rounded-md"
            />
          </FormGroup>
          <FormGroup errorMessage={errors?.category?.message}>
            <label id="category">Category :</label>
            <select
              disabled
              {...register("category", {
                required: true,
                message: "Selection required",
              })}
              className="select select-bordered w-full"
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
              disabled
              htmlFor="location"
              type="text"
              placeholder="Location"
              {...register("location", {
                required: { value: true, message: "Required" },
              })}
              className="input input-bordered w-full"
            />
          </FormGroup>
          <FormGroup errorMessage={errors?.num_volunteer?.message}>
            <label id="num_volunteer">No. of volunteers :</label>
            <input
              disabled
              type="number"
              htmlFor="num_volunteer"
              placeholder="no. of volunteers"
              className="input input-bordered w-full"
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
              defaultValue={parseISO(date)}
              control={control}
              render={({ field: { onChange, value } }) => (
                <DatePicker
                  selected={value}
                  onChange={onChange}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="dd/MM/yyyy"
                  customInput={<input className="pointer-events-none" />}
                />
              )}
              rules={{ required: "Required" }}
            />
          </FormGroup>
          <FormGroup errorMessage={errors?.org_name?.message}>
            <label id="org_name">Organizer Name :</label>
            <input
              disabled
              htmlFor="org_name"
              type="text"
              placeholder="Organizer Name"
              {...register("org_name")}
              className="input input-bordered w-full"
            />
          </FormGroup>
          <FormGroup errorMessage={errors?.org_email?.message}>
            <label id="org_email">Organizer Email :</label>
            <input
              disabled
              htmlFor="org_email"
              type="text"
              placeholder="Organizer Email"
              {...register("org_email")}
              className="input input-bordered w-full"
            />
          </FormGroup>
          <FormGroup errorMessage={errors?.volunteer_name?.message}>
            <label id="volunteer_name">Volunteer Name :</label>
            <input
              disabled
              htmlFor="volunteer_name"
              type="text"
              placeholder="Volunteer Name"
              {...register("volunteer_name")}
              className="input input-bordered w-full"
            />
          </FormGroup>
          <FormGroup errorMessage={errors?.volunteer_email?.message}>
            <label id="volunteer_email">Volunteer Email :</label>
            <input
              disabled
              htmlFor="volunteer_email"
              type="text"
              placeholder="Volunteer Email"
              {...register("volunteer_email")}
              className="input input-bordered w-full"
            />
          </FormGroup>
          <FormGroup errorMessage={errors?.volunteer_suggestion?.message}>
            <label id="volunteer_suggestion">Suggestion :</label>
            <input
              htmlFor="volunteer_suggestion"
              type="text"
              placeholder="Volunteer Suggestion"
              {...register("volunteer_suggestion", {
                required: { value: true, message: "Required" },
              })}
              className="input input-bordered w-full"
            />
          </FormGroup>
          <FormGroup errorMessage={errors?.status?.message}>
            <label id="status">Status :</label>
            <select
              {...register("status", {
                required: true,
                message: "Selection required",
              })}
              className="select select-bordered w-full"
            >
              {["requested"].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </FormGroup>
        </div>
        <button className="btn btn-primary mt-4">Request</button>
      </form>
    </div>
  );
}
