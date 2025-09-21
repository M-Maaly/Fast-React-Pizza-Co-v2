import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem"

function Menu() {
  const menu = useLoaderData(); // this is whatever the loader function returns
  console.log(menu);

  return <ul className="divide-y divide-stone-200 px-2 w-full max-w-3xl mx-auto">
    {menu.map(pizza => <MenuItem key={pizza.id} pizza={pizza}/>)}
  </ul>;
}

export async function loader() {
  const menu = await getMenu();
  return  menu ;
}

export default Menu;
