import React, { memo, PropsWithChildren } from "react";

// Components
import Header from "@src/components/layout/LandingHeader";

const LandingLayout = memo((props: PropsWithChildren) => {
  const { children } = props;
  return (
    <div className="w-full bg-c-gradient p-6 py-8 min-h-screen">
      <div className="max-w-[1440px] mx-auto">
        <Header />
        <div className="mt-6 px-6">{children}</div>
      </div>
    </div>
  );
});

export default LandingLayout;
