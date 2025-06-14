import { useContext } from "react";
import { useForm } from "react-hook-form";
import { itemContext } from "../components/Context";
import { nanoid } from "nanoid";
const Listitem = () => {
  const [items, setItems] = useContext(itemContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function submitHandler(data) {
    data.id = nanoid();
    settodo([...items, data]);

    reset();
  }
  return <div>add items</div>;
};

export default Listitem;
