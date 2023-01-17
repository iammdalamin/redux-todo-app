import Swal from "sweetalert2";
import { EditTodo } from "../reducers/reducer";
import store from "../reducers/store";

export function EditTodoAlert(i, item) {
  Swal.fire({
    title: "Update Task Name",
    input: "text",
    inputValue: item,
    inputValidator: (value) => {
      if (value) {
        store.dispatch(EditTodo({ index: i, task: value }));
      }
    },
  });
}
