import { toast } from "react-toastify";
import { useAxiosSecure } from "../../../Axios/useAxiosSecure";

export function CancelModal({ id, setBeAVolunteer }) {
  const secure = useAxiosSecure();
  function deletePost(id) {
    secure
      .delete(`${import.meta.env.VITE_BASE_URL}/request-voluenteer/${id}`)
      .then(({ data }) => {
        toast.success(data.message);
        secure
          .get(`${import.meta.env.VITE_BASE_URL}/request-voluenteer`)
          .then(({ data }) => {
            setBeAVolunteer(data.message);
          });
      })
      .catch(() => {
        toast.error("Cancelation failed!");
      });
  }
  return (
    <div>
      <button
        className="btn btn-error btn-sm"
        onClick={() => document.getElementById(`my_modal_${id}`).showModal()}
      >
        Cancel
      </button>
      <dialog id={`my_modal_${id}`} className="modal dark:bg-black">
        <div className="modal-box dark:bg-black dark:border-2">
          <h3 className="font-bold text-lg">
            Are You sure to cancel the volunteer request?🤔🤔!
          </h3>
          <p className="py-4">
            Press ESC key or click the{" "}
            <span className="font-black text-green-600">No</span> button to
            close Cancelation Process
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button
                onClick={() => {
                  deletePost(id);
                }}
                className="btn btn-error"
              >
                Yes
              </button>
            </form>
            <form method="dialog">
              <button className="btn btn-accent">No</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
