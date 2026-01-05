import React from 'react'

type Props = {
    title1?: string;
    title2?: string;
    dark?: boolean;
}

const Heading = (props: Props) => {
    return (
        <React.Fragment>

            {props.dark ? (
                <h2 className="text-6xl max-xl:text-5xl max-lg:text-4xl max-md:text-3xl font-semibold text-white mb-4 leading-tight">
                    {props.title1}{" "}
                    <span className="bg-linear-to-r from-[#0D72B6] via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                        {props.title2}
                    </span>
                </h2>
            ) : (
                <h2 className="text-6xl max-xl:text-5xl max-lg:text-4xl max-md:text-3xl font-semibold text-[#0A0A0A] mb-4 leading-tight">
                    {props.title1}{" "}
                    <span className="bg-linear-to-r from-[#0D72B6] via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                        {props.title2}
                    </span>
                </h2>
            )
            }
        </React.Fragment>
    )
}

export default Heading