import React from 'react';

function Products() {
  return (
    <section>
      <div className="relative items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-24 max-w-7xl">
        <div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
          <div className="p-6">
            <img
              className="object-cover object-center w-full mb-8 lg:h-96 md:h-36 rounded-xl"
              src="https://img.yakaboo.ua/media/catalog/product/cache/1/image/546x/c239772940bfb0468bd568cd18249fe5/i/m/img_5185.jpg"
              alt="blog"
            />
            <div className="inline-flex justify-between w-full">
              <h1 className="mb-8 text-xl font-semibold leading-none tracking-tighter text-neutral-600">
                Кафе на краю світу
              </h1>
              <span className="text-indigo-600">150₴</span>
            </div>
            <p className="mx-auto text-base font-medium leading-relaxed text-gray-500">
              description
            </p>
          </div>
          <div className="p-6">
            <img
              className="object-cover object-center w-full mb-8 lg:h-96 md:h-36 rounded-xl"
              src="https://img.yakaboo.ua/media/catalog/product/cache/1/image/546x/c239772940bfb0468bd568cd18249fe5/i/m/img_5185.jpg"
              alt="blog"
            />
            <div className="inline-flex justify-between w-full">
              <h1 className="mb-8 text-xl font-semibold leading-none tracking-tighter text-neutral-600">
                Кафе на краю світу
              </h1>
              <span className="text-indigo-600">150₴</span>
            </div>
            <p className="mx-auto text-base font-medium leading-relaxed text-gray-500">
              description
            </p>
          </div>
          <div className="p-6">
            <img
              className="object-cover object-center w-full mb-8 lg:h-96 md:h-36 rounded-xl"
              src="https://img.yakaboo.ua/media/catalog/product/cache/1/image/546x/c239772940bfb0468bd568cd18249fe5/i/m/img_5185.jpg"
              alt="blog"
            />
            <div className="inline-flex justify-between w-full">
              <h1 className="mb-8 text-xl font-semibold leading-none tracking-tighter text-neutral-600">
                Кафе на краю світу
              </h1>
              <span className="text-indigo-600">150₴</span>
            </div>
            <p className="mx-auto text-base font-medium leading-relaxed text-gray-500">
              description
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Products;
