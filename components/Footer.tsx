"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-20 px-6 md:px-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold">Anand Kumar</h3>
                    <p className="text-gray-400 max-w-xs">
                        Full Stack Developer based in New Delhi, India.
                        Building digital products, brands, and experiences.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-8 md:gap-16 text-sm text-gray-400">
                    <div className="flex flex-col gap-2">
                        <span className="text-white font-bold uppercase tracking-wide mb-2">Socials</span>
                        <Link href="https://linkedin.com/in/ak0001/" className="hover:text-white transition-colors">LinkedIn</Link>
                        <Link href="https://github.com/Akdex" className="hover:text-white transition-colors">GitHub</Link>
                        <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
                    </div>

                    <div className="flex flex-col gap-2">
                        <span className="text-white font-bold uppercase tracking-wide mb-2">Legal</span>
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                <p>© 2025 Anand Kumar. All rights reserved.</p>
                <p>Designed inspired by QClay</p>
            </div>
        </footer>
    );
}
