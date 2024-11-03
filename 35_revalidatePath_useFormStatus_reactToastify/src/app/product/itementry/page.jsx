import ItemEntryForm from "../../components/ItemEntryForm";
import dbConnect from "../../mongodb/dbConnection";
import ItemModel from "../../mongodb/model/item";
async function ItemEntryPage() {
  await dbConnect();
  const items = await ItemModel.find({});
  return (
    <>
      <ItemEntryForm />

      <div className="max-w-xl mx-auto mt-5 ">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex flex-row justify-between my-2 bg-fuchsia-300 px-5 py-3"
          >
            <div>{item.itemName}</div>
            <div>{item.price}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ItemEntryPage;
