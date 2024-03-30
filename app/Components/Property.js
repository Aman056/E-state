import React from "react"
import Image from "next/image"
import img1 from '../../public/images/prop2.jpg'
const products = [
    {
        id: 1,
        recommend: true,
        name: 'Prestige Jasdan Classic',
        href: '#',
        imageSrc: `/images/prop1.jpg`,
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },

    {
        id: 1,
        recommend: false,
        name: 'Adani Oyster Greens',
        href: '#',
        imageSrc: `/images/prop2.jpg`,
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 1,
        recommend: false,
        name: 'Basic Tee',
        href: '#',
        imageSrc: `/images/prop3.jpg`,
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },

    {
        id: 1,
        recommend: false,
        name: 'Front of mens',
        href: '#',
        imageSrc: `/images/prop4.jpg`,
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
]

export default function Property() {
    const style = {
        textShadow: `2px 1px 2px rgba(0, 0, 0, 0.48)`,
        letterSpacing: '5px',
    }
    return (
        <div className="bg-slate-200 py-4 mx-lg-10 rounded-lg lg:bg-transparent">
            <h2 style={style} className="tracking-tight text-5xl font-bold text-secondary text-center">Properties</h2>
            <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative ">
                            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 relative">
                                <Image
                                    width={150}
                                    height={150}
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                                {product.recommend &&
                                    <div className="absolute top-0 left-0 bg-yellow-500 text-white px-2 py-1  shadow-lg z-10">
                                        <span className="text-xs font-semibold uppercase">Recommend</span>
                                    </div>
                                }

                            </div>

                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-lg text-secondary">
                                        <a href={product.href}>
                                            <span aria-hidden="true" className="absolute  inset-0" />
                                            {product.name}
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
