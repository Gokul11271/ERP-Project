import React from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import {
    BuildingOfficeIcon,
    UsersIcon,
    CurrencyDollarIcon,
    Cog6ToothIcon,
    DocumentTextIcon
} from "@heroicons/react/24/outline";

const settingsMenu = [
    {
        category: "ORGANISATION SETTINGS",
        items: [
            { name: "Organisation", path: "/payroll/settings/organisation", icon: BuildingOfficeIcon },
            { name: "Users and Roles", path: "/payroll/settings/users", icon: UsersIcon },
            { name: "Taxes", path: "/payroll/settings/taxes", icon: CurrencyDollarIcon },
            { name: "Setup & Configurations", path: "/payroll/settings/configurations", icon: Cog6ToothIcon },
        ]
    },
    {
        category: "MODULE SETTINGS",
        items: [
            { name: "General", path: "/payroll/settings/general", icon: DocumentTextIcon },
        ]
    }
];

const PayrollSettingsLayout = () => {
    const location = useLocation();

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Settings Sidebar */}
            <div className="w-64 flex-shrink-0 bg-white border-r border-gray-200 overflow-y-auto">
                <div className="p-4 border-b border-gray-100">
                    <h2 className="text-lg font-semibold text-gray-800 flex items-center">
                        <Cog6ToothIcon className="w-5 h-5 mr-2 text-gray-500" />
                        Settings
                    </h2>
                </div>
                <div className="p-4">
                    {settingsMenu.map((section, idx) => (
                        <div key={idx} className="mb-6">
                            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-2">
                                {section.category}
                            </h3>
                            <ul className="space-y-1">
                                {section.items.map((item) => {
                                    const isActive = location.pathname.startsWith(item.path);
                                    return (
                                        <li key={item.path}>
                                            <Link
                                                to={item.path}
                                                className={`flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors ${isActive
                                                        ? "bg-blue-50 text-blue-700"
                                                        : "text-gray-700 hover:bg-gray-100"
                                                    }`}
                                            >
                                                {/* <item.icon className={`w-4 h-4 mr-3 ${isActive ? "text-blue-700" : "text-gray-400"}`} /> */}
                                                {item.name}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-8">
                <div className="max-w-4xl mx-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default PayrollSettingsLayout;
