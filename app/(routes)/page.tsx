import getBillboard from "@/action/get-billboard";
import getProducts from "@/action/get-products";
import ProductList from "@/Components/product-list";
import Billboard from "@/Components/ui/billboard";
import Container from "@/Components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: false });
  const billboard = await getBillboard("73d06142-2c49-4969-b9b3-fe0a04e8af58");


  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard 
          data={billboard}
        />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  )
};

export default HomePage;
