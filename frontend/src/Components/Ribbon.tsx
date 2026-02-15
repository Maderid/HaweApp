import React, { useState } from "react";

type RibbonButton = {
    id: string;
    label: string;
    icon?: React.ReactNode;
    tooltip?: string;
    primary?: boolean;
    onClick?: () => void;
    menu?: { id: string; label: string; onClick?: () => void }[];
};

type RibbonGroup = {
    id: string;
    label: string;
    controls: RibbonButton[];
};

type RibbonTab = {
    id: string;
    label: string;
    groups: RibbonGroup[];
};

const SampleIcon = ({ path }: { path: string }) => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d={path} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const Ribbon: React.FC<{ onAction?: (actionId: string) => void }> = ({ onAction }) => {
    const tabs: RibbonTab[] = [
        {
            id: "home",
            label: "Home",
            groups: [
                {
                    id: "clipboard",
                    label: "Clipboard",
                    controls: [
                        {
                            id: "paste",
                            label: "Paste",
                            icon: <SampleIcon path="M3 9v13h18V9" />,
                            onClick: () => onAction?.("paste"),
                        },
                        {
                            id: "cut",
                            label: "Cut",
                            icon: <SampleIcon path="M3 6h6l6 12h6" />,
                            onClick: () => onAction?.("cut"),
                        },
                        {
                            id: "copy",
                            label: "Copy",
                            icon: <SampleIcon path="M8 7h8v10H8z" />,
                            onClick: () => onAction?.("copy"),
                        },
                    ],
                },
                {
                    id: "Personal Health",
                    label: "Personal Health",
                    controls: [
                        {
                            id: "bold",
                            label: "Bold",
                            icon: <SampleIcon path="M6 4h6a4 4 0 0 1 0 8H6z" />,
                            onClick: () => onAction?.("bold"),
                            primary: true,
                        },
                        {
                            id: "italic",
                            label: "Italic",
                            icon: <SampleIcon path="M10 4h6" />,
                            onClick: () => onAction?.("italic"),
                        },
                        {
                            id: "underline",
                            label: "Underline",
                            icon: <SampleIcon path="M4 18h16" />,
                            onClick: () => onAction?.("underline"),
                        },
                    ],
                },
            ],
        },
        {
            id: "Chat",
            label: "Chat",
            groups: [
                {
                    id: "media",
                    label: "Media",
                    controls: [
                        {
                            id: "picture",
                            label: "Picture",
                            icon: <SampleIcon path="M21 15V6a2 2 0 0 0-2-2H5" />,
                            onClick: () => onAction?.("insert-picture"),
                        },
                        {
                            id: "chart",
                            label: "Chart",
                            icon: <SampleIcon path="M3 3v18h18" />,
                            onClick: () => onAction?.("insert-chart"),
                        },
                    ],
                },
            ],
        },
        {
            id: "Bank",
            label: "Bank",
            groups: [
                {
                    id: "layout",
                    label: "Layout",
                    controls: [
                        {
                            id: "zoom-in",
                            label: "Zoom In",
                            icon: <SampleIcon path="M21 21l-6-6" />,
                            onClick: () => onAction?.("zoom-in"),
                        },
                        {
                            id: "zoom-out",
                            label: "Zoom Out",
                            icon: <SampleIcon path="M21 21l-6-6" />,
                            onClick: () => onAction?.("zoom-out"),
                        },
                        {
                            id: "full-screen",
                            label: "Full Screen",
                            icon: <SampleIcon path="M8 3H5a2 2 0 0 0-2 2v3" />,
                            onClick: () => onAction?.("fullscreen"),
                            menu: [
                                { id: "enter", label: "Enter full screen", onClick: () => onAction?.("enter-fullscreen") },
                                { id: "exit", label: "Exit full screen", onClick: () => onAction?.("exit-fullscreen") },
                            ],
                        },
                    ],
                },
            ],
        },
    ];

    const [activeTab, setActiveTab] = useState<string>(tabs[0].id);
    const [openMenu, setOpenMenu] = useState<string | null>(null);

    return (
        <div className="w-full border-b bg-white">
            {/* Tabs row */}
            <div className="flex items-stretch">
                <div className="flex items-center gap-2 px-3 border-r">
                    <div className="text-xl font-semibold">App</div>
                </div>

                <div role="tablist" aria-label="Ribbon Tabs" className="flex gap-1 px-2">
                    {tabs.map((t) => (
                        <button
                            key={t.id}
                            role="tab"
                            aria-selected={activeTab === t.id}
                            onClick={() => setActiveTab(t.id)}
                            className={`px-4 py-2 rounded-t-md -mb-px ${activeTab === t.id ? "bg-white border-t border-l border-r border-gray-200" : "bg-gray-100 hover:bg-gray-200"
                                }`}
                        >
                            {t.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Ribbon content */}
            <div className="bg-gray-50 px-4 py-3 border-t border-gray-200">
                <div className="flex gap-6">
                    {tabs.find((tt) => tt.id === activeTab)?.groups.map((group) => (
                        <div key={group.id} className="flex flex-col">
                            <div className="flex gap-2 bg-white rounded-md p-2 shadow-sm">
                                {group.controls.map((c) => (
                                    <div key={c.id} className="relative flex flex-col items-center justify-center">
                                        <button
                                            onClick={() => {
                                                if (c.menu) {
                                                    setOpenMenu((prev) => (prev === c.id ? null : c.id));
                                                } else {
                                                    c.onClick?.();
                                                    onAction?.(c.id);
                                                }
                                            }}
                                            title={c.tooltip}
                                            className={`flex flex-col items-center gap-1 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300 ${c.primary ? "bg-indigo-600 text-white hover:bg-indigo-700" : "bg-transparent hover:bg-gray-100"
                                                }`}
                                            aria-haspopup={c.menu ? true : undefined}
                                            aria-expanded={c.menu ? openMenu === c.id : undefined}
                                        >
                                            <div className="text-gray-700">{c.icon}</div>
                                            <div className="text-xs">{c.label}</div>
                                        </button>

                                        {/* Dropdown menu */}
                                        {c.menu && openMenu === c.id && (
                                            <div
                                                role="menu"
                                                aria-label={`${c.label} menu`}
                                                className="absolute top-full mt-2 right-0 bg-white border rounded-md shadow-lg z-20"
                                            >
                                                {c.menu.map((m) => (
                                                    <button
                                                        key={m.id}
                                                        role="menuitem"
                                                        onClick={() => {
                                                            m.onClick?.();
                                                            onAction?.(`${c.id}:${m.id}`);
                                                            setOpenMenu(null);
                                                        }}
                                                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                                    >
                                                        {m.label}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <div className="mt-2 text-center text-xs text-gray-500">{group.label}</div>
                        </div>
                    ))}

                    {/* Flexible spacer */}
                    <div className="flex-1" />

                    {/* Quick access / actions */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => onAction?.("help")}
                            className="px-3 py-2 rounded-md hover:bg-gray-100"
                            title="Help"
                        >
                            <SampleIcon path="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ribbon;

