import dbConnect from "../mongodb/dbConnection";
import ItemModel from "../mongodb/model/item";
function ProductPage() {
  const handleServer = async () => {
    "use server";

    await dbConnect();
    console.log("server action activated");

    const itemInfo = await ItemModel.find({});
    console.log(itemInfo);
  };
  return (
    <div className="max-w-xl mx-auto mt-20">
      <div>
        <form>
          <button formAction={handleServer}>Get Server</button>
        </form>
      </div>
    </div>
  );
}

export default ProductPage;
