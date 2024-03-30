import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { init, send } from 'emailjs-com';
import Loading from './Loading';

export default function FormDialog({ open, handleClose }) {
    const cancelButtonRef = useRef(null)
    const [formData, setFormData] = useState()
    const [loading, setLoading] = useState(false)
    const handleChange = (e) => {
        const { value, name } = e.target
        setFormData({ ...formData, [name]: value })
    }
    const formDataString = JSON.stringify(formData);
    init('wiE-U_FXCRKQW3GPh');
    const sendEmail = async () => {
        setLoading(true)
        try {
            const serviceID = 'service_l4bpbq3';
            const templateID = 'template_h41d2w7';
            const response = await send(serviceID, templateID, {
                to_email: 'recipient@example.com',
                subject: 'Subject of the email',
                message: formDataString,
            });
            alert('Record sended successfully!')
            setLoading(false)
            handleClose()
        } catch (error) {
            setLoading(false)
            alert('Something went wrong!')

        }
    };
 
    return (
        <Transition.Root show={open} as={Fragment}>

            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={handleClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative w-full transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                {loading && <Loading />}
                                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <div className="">
                                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                            <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900 text-center mb-7">
                                                Ask for property
                                            </Dialog.Title>
                                            <hr className='mb-2' />
                                            <div className="mt-2">
                                                <form className="grid   gap-4 sm:grid-cols-1 lg:grid-cols-2" method="POST">
                                                    <div className="sm:col-span-1">
                                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                                            Email
                                                        </label>
                                                        <input
                                                            onChange={handleChange}
                                                            id="email"
                                                            name="email"
                                                            type="email"
                                                            autoComplete="email"
                                                            required
                                                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        />
                                                    </div>

                                                    <div className="sm:col-span-1">
                                                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                                            Phone number
                                                        </label>
                                                        <input
                                                            onChange={handleChange}
                                                            id="password"
                                                            name="number"
                                                            type="tel"
                                                            required
                                                            className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        />
                                                    </div>
                                                    <div className="sm:col-span-1 lg:col-span-2">
                                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                                            Comment
                                                        </label>
                                                        <textarea
                                                            name='comment'
                                                            onChange={handleChange}
                                                            type="text"
                                                            required
                                                            className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        />
                                                    </div>

                                                    <div className="sm:col-span-1 lg:col-span-2 pt-2 flex items-center justify-center">

                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        onClick={sendEmail}
                                        type="submit"
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-secondary px-5 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                    >
                                        Submit
                                    </button>
                                    <button
                                        type="button"
                                        className="mt-3 mx-2 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                        onClick={handleClose}
                                        ref={cancelButtonRef}
                                    >
                                        Cancel
                                    </button>
                                </div>

                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
