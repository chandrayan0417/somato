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
    setValue,
    watch,
    formState: { errors },
  } = useForm();
  const isVeg = watch("choice");
  function submitHandler(data) {
    data.id = nanoid();
    setItems([...items, data]);
    console.log(items)
    reset();
  }
  return (
    <div className="flex">
      <div className="w-1/2 pl-15">
        <form
          className="flex flex-col text-2xl gap-5"
          onSubmit={handleSubmit(submitHandler)}
        >
          <div className="flex flex-col">
            <label className="font-delius" htmlFor="title">
              Title
            </label>
            <input
              className="w-2/3 focus:border-[#F72E41] border-2 border-red-100 p-2 rounded-md focus:outline-hidden text-xl focus:bg-zinc-50 mt-2"
              {...register("title", {
                required: "title can not be empty",
                validate: (value) =>
                  value.trim() !== "" || "title cannot be just whitespace",
              })}
              id="title"
              type="text"
              placeholder="title"
              name="title"
            />

            {errors?.title?.message && (
              <small className="text-red-500 mt-2 text-sm">
                <i className="ri-error-warning-line"></i> {errors.title.message}
              </small>
            )}
          </div>
          <div className="flex flex-col">
            <label className="font-delius" htmlFor="discription">
              Discription
            </label>
            <textarea
              {...register("discription", {
                required: "discription can not be empty",
                validate: (value) =>
                  value.trim() !== "" ||
                  "description cannot be just whitespace",
              })}
              className="w-2/3 focus:bg-zinc-50 focus:border-[#F72E41] border-2 border-red-100 p-2 rounded-md focus:outline-hidden text-xl h-50 mt-2 resize-none"
              id="discription"
              type="text"
              placeholder="discription"
              name="discription"
            />
            {errors?.discription?.message && (
              <small className="text-red-500 mt-2 text-sm">
                <i className="ri-error-warning-line"></i>
                {errors.discription.message}
              </small>
            )}
          </div>
          <div
            className="
            flex flex-col"
          >
            <label className="font-delius" htmlFor="image">
              Image Link
            </label>
            <input
              {...register("imageLink")}
              className="w-2/3 focus:border-[#F72E41] border-2 border-red-100 p-2 rounded-md focus:outline-hidden text-xl focus:bg-zinc-50 mt-2"
              id="image"
              type="text"
              placeholder="image link"
              name="imageLink"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-delius" htmlFor="price">
              Price
            </label>
            <input
              {...register("price", {
                required: "price can not be empty",
                validate: (value) => value > 0 || "invalid input",
              })}
              className="w-2/3 focus:border-[#F72E41] border-2 border-red-100 p-2 rounded-md focus:outline-hidden text-xl focus:bg-zinc-50 mt-2"
              id="price"
              type="number"
              placeholder="price"
              name="price"
            />
            {errors?.price?.message && (
              <small className="text-red-500 mt-2 text-sm">
                <i className="ri-error-warning-line"></i> {errors.price.message}
              </small>
            )}
          </div>
          <div className="flex flex-col">
            <div className="w-2/3 flex justify-between">
              <button
                className={`font-delius bg-green-400 text-white hover:bg-green-500 w-3/7 py-2 rounded-md cursor-pointer ${
                  isVeg === "veg"
                    ? "outline-2 outline-offset-2 outline-zinc-400"
                    : ""
                }`}
                type="button"
                onClick={() => setValue("choice", "veg")}
              >
                Veg
              </button>

              <button
                className={`font-delius bg-red-500 text-white hover:bg-red-600 w-3/7 py-2 rounded-md cursor-pointer ${
                  isVeg === "nonVeg"
                    ? "outline-2 outline-offset-2 outline-zinc-400"
                    : ""
                }`}
                type="button"
                onClick={() => setValue("choice", "nonVeg")}
              >
                Non Veg
              </button>
            </div>

            <input
              type="hidden"
              {...register("choice", { required: "select one option" })}
            />
            {errors?.choice?.message && (
              <small className="text-red-500 mt-2 text-sm">
                <i className="ri-error-warning-line"></i>
                {errors.choice.message}
              </small>
            )}
          </div>
          <button
            className="font-delius w-2/3 text-white py-2 px-15 bg-[#F72E41] hover:bg-red-400 rounded-full transition-colors duration-200 cursor-pointer mt-5"
            type="submit"
          >
            Add Item <i className="ri-menu-add-line"></i>
          </button>
        </form>
      </div>
      <div className="w-1/2  bg-rose-100">read</div>
    </div>
  );
};

export default Listitem;
