import { Link } from "react-router-dom";
import Car_list from "../Component/Car-List";

function ThankYou() {
  return (
    <>
      <Car_list />
      <div
        id="popup-modal"
        tabindex="-1"
        className="overflow-y-auto border border-1.5 overflow-x-hidden fixed inset-0 z-50 flex justify-center items-center w-full h-full"
      >
        <div className="fixed inset-0 bg-black opacity-60 z-40"></div>
        <div className="relative p-4 w-full max-w-md max-h-full z-50">
          <div className="relative bg-white rounded-lg shadow">
            <div className="p-4 md:p-5 text-center">
              <h3 className="mb-5 text-lg font-normal text-gray-500">
                Thank You! Your Process is Completed
              </h3>
              <button
                data-modal-hide="popup-modal"
                type="button"
                className="text-white bg-primary50  focus:ring-4 focus:outline-none focus:ring-red-300  font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
              >
                <Link to="/">Go Back</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ThankYou;
