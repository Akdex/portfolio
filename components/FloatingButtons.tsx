"use client";

import { FaWhatsapp, FaTelegramPlane, FaPhone } from "react-icons/fa";

export default function FloatingButtons() {
    return (
        <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
            {[
                { icon: FaWhatsapp, label: "WhatsApp", href: "https://wa.me/918076838896" },
                { icon: FaTelegramPlane, label: "Telegram", href: "#" },
                { icon: FaPhone, label: "Call", href: "tel:+918076838896" },
            ].map((item, i) => (
                <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform hover:bg-gray-800"
                    title={item.label}
                >
                    <item.icon size={20} />
                </a>
            ))}
        </div>
    );
}
