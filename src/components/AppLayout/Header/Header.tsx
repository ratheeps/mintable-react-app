import classNames from 'classnames';
import {IconContext} from "react-icons";
import {HiMenuAlt1, HiChevronDown} from "react-icons/hi";
import {AiOutlineClose} from "react-icons/ai";
import {BsSearch} from "react-icons/bs";
import {Disclosure, Menu} from '@headlessui/react';
import {headerMenu} from 'config/menu';
import {name} from 'config/env';
import Logo from 'assets/images/logo.svg';
import {MenuItem} from "./types"

function Header() {
    return (
        <Disclosure as="nav" className="bg-white shadow-sm z-10">
            {({open}) => (
                <div>
                    <div className="mx-auto px-2 sm:px-4 lg:px-8">
                        <div className="h-20 flex justify-between">
                            <div className="flex px-2 lg:px-0">
                                <div className="flex-shrink-0 flex items-center">
                                    <div className="bg-brand p-1 rounded">
                                        <img
                                            className="block lg:hidden h-8 w-auto"
                                            src={Logo}
                                            alt={`${name} Logo`}
                                        />
                                        <img
                                            className="hidden lg:block h-8 w-auto"
                                            src={Logo}
                                            alt={`${name} Logo`}
                                        />
                                    </div>
                                </div>
                                <div className="ml-6 flex items-center justify-center">
                                    <div className="max-w-lg w-full lg:max-w-xs">
                                        <label htmlFor="search" className="sr-only">
                                            Search
                                        </label>
                                        <div className="relative flex">
                                            <input
                                                id="search"
                                                name="search"
                                                className="bg-white placeholder-gray-500 block w-full px-2 py-1.5 border border-gray-300 rounded-l  focus:outline-none sm:text-sm overflow-hidden"
                                                placeholder="Search for anything"
                                                type="search"
                                            />

                                            <div
                                                className="z-10 bg-indigo-100 inset-y-0 right-0 pr-3 flex rounded-r items-center pointer-events-none ">
                                                <Menu>
                                                    <Menu.Button className="p-2 flex items-center justify-center">
                                                        <span className="hidden text-sm lg:flex">Type</span>
                                                        <IconContext.Provider
                                                            value={{className: "h-4 w-4 text-gray-400 ml-1"}}>
                                                            <HiChevronDown/>
                                                        </IconContext.Provider>
                                                    </Menu.Button>
                                                    <Menu.Items>
                                                        <Menu.Item>
                                                            {({active}) => (
                                                                <a
                                                                    className={`${active && 'bg-blue-500'}`}
                                                                    href="/account-settings"
                                                                >
                                                                    Account settings
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                    </Menu.Items>
                                                </Menu>
                                                <IconContext.Provider value={{className: "h-5 w-5 hidden lg:flex"}}>
                                                    <BsSearch/>
                                                </IconContext.Provider>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center lg:hidden">
                                        {/* Mobile screen menu button */}
                                        <Disclosure.Button
                                            className="ml-2 inline-flex rounded-md text-gray-400 items-center justify-center">
                                            <span className="sr-only"/>
                                            {open ? (
                                                <IconContext.Provider value={{className: "h-8 w-8 block"}}>
                                                    <AiOutlineClose/>
                                                </IconContext.Provider>
                                            ) : (
                                                <IconContext.Provider value={{className: "h-8 w-8 block"}}>
                                                    <HiMenuAlt1/>
                                                </IconContext.Provider>
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                </div>
                            </div>
                            {/*Mobile menu container*/}
                            <div className="hidden flex-1 lg:flex px-2 lg:ml-6 lg:justify-end lg:space-x-8">
                                {headerMenu.map((item: MenuItem) => (
                                    <a
                                        key={item.label}
                                        href={item.link}
                                        className={classNames(
                                            "border-transparent  inline-flex items-center mx-1 mt-1 border-b-2",
                                            "text-sm font-medium text-gray-500"
                                        )}
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="lg:hidden">
                        <div className="pt-2 pb-3 space-y-1">
                            {headerMenu.map((item: MenuItem) => (
                                <a
                                    key={item.label}
                                    href={item.link}
                                    className={classNames(
                                        'border-transparent block pl-3 pr-4 py-2 border-l-4 text-base font-medium',
                                        'text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
                                    )}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </div>
            )}
        </Disclosure>
    );
}

export default Header;
