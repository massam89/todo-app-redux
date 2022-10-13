import { uiActions } from "../ui/uiSlice";
import { todoActions } from "./todoSlice";

export const sendData = (data) => {
  return (dispatch) => {
    dispatch(uiActions.changeNotification("Sending data to backend..."));

    fetch("https://react-http-850ff-default-rtdb.firebaseio.com/todo.json", {
      method: "PUT",
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response) {
          throw new Error("error");
        }
        dispatch(uiActions.changeNotification("Data was send to backend!"));
      })
      .catch(() => {
        dispatch(
          uiActions.changeNotification(
            "something wrong to sync data with backend!"
          )
        );
      });
  };
};

export const getData = () => {
  return (dispatch) => {
    dispatch(uiActions.changeNotification("Getting data from backend"));

    fetch("https://react-http-850ff-default-rtdb.firebaseio.com/todo.json")
      .then((response) => {
        if (!response) {
          throw new Error("error");
        }
        return response.json();
      })
      .then((data) => {
        dispatch(todoActions.replaceItems(data));
        dispatch(uiActions.changeNotification("We got the data"));
      })
      .catch((error) => {
        dispatch(
          uiActions.changeNotification(
            "something wrong to get data from backend!"
          )
        );
      });
  };
};
