import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards/public`;

const getBillboard = async (id: string): Promise<Billboard> => {

  console.log(`${URL}/${id}`);
  
  const res = await fetch(`${URL}/${id}`).then(res=>res.json());
  

  
  return res;
};

export default getBillboard;
