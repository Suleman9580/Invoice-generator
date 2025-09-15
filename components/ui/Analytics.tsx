import React from 'react'


type AnalyticsProps = {
    logo: React.ReactNode | string;
    numbers: number | string;
    data: string;
};

export default function Analytics({ logo, numbers, data }: AnalyticsProps) {
    return (
        <div className="py-4 px-6 border rounded flex flex-col gap-6 h-full w-full">
            <div className="w-full grid place-items-end">
                {typeof logo === "string" ? (
                    <img src={logo} alt="analytics logo" className="w-6 h-6" />
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
