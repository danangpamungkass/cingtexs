import ProductCard from "./ProductCard";
import { products } from "./data";

const ProductSection = () => {
    return (
        <section id="priceList" className="pt-20">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <header className="text-center">
                    <h2 className="text-lg font-bold text-gray-900 sm:text-2xl md:text-3xl">
                        Price List
                    </h2>
                    <p className="mx-auto mt-2 max-w-md text-sm text-gray-500 sm:text-base md:text-lg">
                        Harga yang tercantum di sini bisa berubah-ubah sesuai spesifikasi keinginan anda. Info lebih lanjut hubungi melalui WhatsApp.
                    </p>
                </header>

                <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {products.map((product) => (
                        <li key={product.id}>
                            <ProductCard
                                title={product.title}
                                price={product.price}
                                imageUrl={product.imageUrl}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default ProductSection;
