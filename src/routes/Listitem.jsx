import Form from "../components/Form";
import ItemList from "../components/ItemList";
const Listitem = () => {
	return (
		<div className="flex px-30">
			<div className="w-[40%]">
				<Form />
			</div>

			<div className="w-[60%] ">
				<ItemList />
			</div>
		</div>
	);
};
export default Listitem;
