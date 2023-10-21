import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
    { name: 'Indonesia', href: '/indonesia', current: false },
    { name: 'Progamming', href: '/programming', current: false },
    { name: 'Covid-19', href: '/covid-19', current: false },
    { name: 'Saved', href: '/saved', current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Example() {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeLink, setActiveLink] = useState(window.location.pathname);

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
        // Call your API within the search query.
    };

    return (
        <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
                <>
                    <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <Disclosure.Button className="relative inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
                                <div className="flex items-center flex-shrink-0">
                                    <img className="block w-auto h-12 lg:hidden" src={Logo} alt="Workflow" />
                                    <img className="hidden w-auto h-12 lg:block" src={Logo} alt="Workflow" />
                                </div>
                                <div className="hidden sm:ml-10 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.href === activeLink
                                                        ? 'text-white bg-gray-700 active'
                                                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'rounded-md px-3 py-2 text-sm font-medium'
                                                )}
                                                aria-current={item.href === activeLink ? 'page' : undefined}
                                                onClick={() => setActiveLink(item.href)}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="flex ml-4">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    value={searchQuery}
                                    onChange={handleSearch}
                                    className="px-1 py-2 text-sm text-white bg-gray-700 rounded-md"
                                />
                                <button
                                    onClick={() => {
                                        // Call your API and use searchQuery.
                                        console.log('Performing search:', searchQuery);
                                    }}
                                    className="px-2 py-2 ml-2 text-sm text-white bg-gray-700 rounded-md"
                                >
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.href === activeLink
                                            ? 'text-white bg-gray-700 active'
                                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={item.href === activeLink ? 'page' : undefined}
                                    onClick={() => setActiveLink(item.href)}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}