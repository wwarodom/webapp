export default function Products() {

    const products = [
        { name: "Computer", description: "Product description computer goes here." },
        { name: "Laptop core i7", description: "Product description laptop goes here." },
        { name: "Head phone", description: "Product description phone goes here." },
        { name: "iPad 4th Gen", description: "Product description ipad goes here." },
        { name: "iPhone 4th Gen", description: "Product description iphone goes here." },
    ];
    return (<div>
        <h1 className="font-bold text-2xl text-center my-4">Product</h1>
        <div className="flex flex-wrap m-auto justify-center w-[80%] border rounded m-4 p-4 bg-slate-100 mb-6">
            {
                products.map((product, index) => {
                    return (
                        <div key={index} className="shadow-lg rounded-md border w-fit bg-green-100 p-2 m-2">
                            <h2>{index + 1}. {product.name}</h2>
                            <p>{product.description}</p>
                            <button className="border bg-pink-200 px-2 py-1 mt-2 rounded hover:font-bold">Buy Now</button>
                        </div>)
                })
            }


        </div>
        <footer className="bg-blue-200 p-2 text-center font-bold text-xl"> ..:: Product footer ::.. </footer>
    </div>
    )
}
