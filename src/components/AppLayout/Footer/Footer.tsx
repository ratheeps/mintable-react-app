import Logo from 'assets/images/logo.svg';
import {name} from 'config/env';
import {footerMenu} from 'config/menu';
import classNames from "classnames";
import {MenuGroup, MenuItem} from "./types"

function Footer() {
    return (
        <footer className="bg-brand text-white" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-32">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className={classNames(
                        "grid gap-8 xl:col-span-2 lg:grid-flow-col sm:grid-flow-row",
                    )}>
                        {footerMenu.map((menuGroupItem: MenuGroup, groupKey: number) => (
                            <div key={`menu-group-${groupKey}`}>
                                {menuGroupItem.showLabel
                                    ? (<h3 className="text-lg font-semibold mb-4">{menuGroupItem.label}</h3>)
                                    : <div className="h-6 mb-4"/>
                                }
                                <ul>
                                    {menuGroupItem.subMenus.map((item: MenuItem, menuKey: number) => (
                                        <li key={`menu-item-${groupKey}`} className="mb-2">
                                            <a href={item.link} className="text-sm">
                                                {item.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 md:mt-0 space-y-8 xl:col-span-1 order-last lg:order-first">
                        <div className="flex items-center">
                            <img className="h-10" src={Logo} alt={`${name} Logo`}/>
                            <h2 className="ml-3 font-semibold text-xl">{name}</h2>
                        </div>
                        <a className="flex text-base font-semibold" href="/">
                            Join our community
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
