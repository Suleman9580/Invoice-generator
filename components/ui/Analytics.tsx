import Image from 'next/image';
import React from 'react'


type AnalyticsProps = {
    logo: React.ReactNode | string;
    numbers: number | string;
    data: string;
};

export default function Analytics({ logo, numbers, data }: AnalyticsProps) {
    return (
        <div className="py-4 px-6 border rounded-md flex flex-col gap-6 h-full w-full">
            <div className="w-full grid place-items-end">
                {typeof logo === "string" ? (
                    <Image src={logo} alt="analytics logo"  width={24} height={24} />
                ) : (
                    logo
                )}
            </div>

            <div>
                <p className="text-lg font-bold">{numbers}</p>
                <p className="text-sm text-gray-400">{data}</p>
            </div>
        </div>
    );
}
