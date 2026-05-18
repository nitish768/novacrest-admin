import Products from "../components/Products";
import DetailsSection from "../components/DetailsSection";

const ProductsPage = () => (
  <>
    <div className="page-header">
      <h1>Our Products</h1>
      <p>Fresh mushrooms and upcoming value-added agri products from Gaya, Bihar.</p>
    </div>
    <div className="page-content">
      <Products />
      <DetailsSection />
    </div>
  </>
);

export default ProductsPage;
