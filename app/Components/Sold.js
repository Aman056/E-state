import Image from "next/image"

export default function Sold() {
    const style = {
        textShadow: `2px 1px 2px rgba(0, 0, 0, 0.48)`,
        letterSpacing: '5px',
    }
    return (
        <div className="relative overflow-hidden bg-white my-10 mx-lg-10">
            <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
                <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                    <div className="sm:max-w-lg">
                        <h1 style={style} className="text-4xl text-secondary font-bold  sm:text-6xl">
                            Sold Properties
                        </h1>
                        <p className="mt-4 text-xl text-gray-500">
                            This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care
                            if you live or die.
                        </p>
                    </div>
                    <div>
                        <div className="mt-10">
                            {/* Decorative image grid */}
                            <div
                                aria-hidden="true"
                                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                            >
                                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                    <div className="flex items-center space-x-6 lg:space-x-8">
                                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                                <Image
                                                    height={150}
                                                    width={150}
                                                    src='/images/prop1.jpg' alt=""
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <Image
                                                    height={150}
                                                    width={150}
                                                    src='/images/prop2.jpg' alt=""
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <Image
                                                    height={150}
                                                    width={150}
                                                    src='/images/prop3.jpg' alt=""
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <Image
                                                    height={150}
                                                    width={150}
                                                    src='/images/prop4.jpg' alt=""
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <Image
                                                    height={150}
                                                    width={150}
                                                    src='/images/prop5.jpg' alt=""
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <Image
                                                    height={150}
                                                    width={150}
                                                    src='/images/prop6.jpg' alt=""
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <Image
                                                    height={150}
                                                    width={150}
                                                    src='/images/prop7.jpg' alt=""
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <a
                                href="#"
                                className="inline-block rounded-md border border-transparent bg-secondary px-8 py-3 text-center font-medium text-white hover:bg-secondary"
                            >
                                Shop Collection
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
