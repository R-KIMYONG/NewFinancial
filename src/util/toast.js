import { toast } from "react-toastify";

export const notifySuccess = (comment) => {
  toast.success(comment, {
    position: "top-center",
  });
};
export const notifyError = (comment) => {
  if (Array.isArray(comment)) {
    comment.forEach((errorMessage) =>
      toast.error(errorMessage, {
        position: "top-center",
      })
    );
  } else {
    toast.error(comment, {
      position: "top-center",
    });
  }
};
