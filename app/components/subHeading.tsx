import React from "react";

type Props = {
  title?: string;
  dark?: boolean;
};

const SubHeading = (props: Props) => {
  return (
    <React.Fragment>
      {props.dark ? (
        <h6 className="inline-block px-4 py-2 rounded-full bg-linear-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-semibold mb-6">
          {props.title}
        </h6>
      ) : (
        <h6 className="inline-block px-4 py-2 rounded-full bg-linear-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-cyan-600 text-sm font-semibold mb-6">
          {props.title}
        </h6>
      )}
    </React.Fragment>
  );
};

export default SubHeading;
