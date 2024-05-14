import axios from "axios";
import { toast } from "react-toastify";

export function CancelModal({ id, setBeAVolunteer }) {
  function deletePost(id) {
    axios
      .delete(`${import.meta.env.VITE_BASE_URL}/request-voluenteer/${id}`, {
        withCredentials: true,
      })
      .then(({ data }) => {
        toast.success(data.message);
        axios
          .get(`${import.meta.env.VITE_BASE_URL}/request-voluenteer`, {
            withCredentials: true,
          })
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
      <dialog id={`my_modal_${id}`} className="modal">
        <div className="modal-box">
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
