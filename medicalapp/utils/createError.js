export default function (status, message) {
    const error = new Error(message);
    error.status = status;
    return error;
  }
  