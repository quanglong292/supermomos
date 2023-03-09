import Image from "next/image";
import React, { memo, FC } from "react";

// Components
import Dropdown from "../core/Dropdown";

// Images
import ILogo from "@src/assets/images/logo.png";

// Composable
import { LANDING_HEADER_ITEMS } from "@src/utils/constants/UI.constant";

interface MapItemsProps {
  items: MapItem[];
}

interface MapItem {
  name: string;
  type: string;
  options?: {
    name: string;
    path: string;
  }[];
  path?: string;
}

const MapItems: FC<MapItemsProps> = (props: MapItemsProps) => {
  const { items } = props;
  return (
    <div className="max-w-[80%] flex gap-6 font-semibold">
      {items.map((i: MapItem) => {
        const { type } = i;
        if (type === "Links")
          return (
            <div className="" key={i.name}>
              <Dropdown options={i.options ?? []} />
            </div>
          );

        return (
          <div className="" key={i.name}>
            {i.name}
          </div>
        );
      })}
    </div>
  );
};

const Header: FC<any> = () => {
  return (
    <div className="w-full flex justify-between px-6">
      <Image src={ILogo} alt="Main logo" />
      <MapItems items={LANDING_HEADER_ITEMS} />
    </div>
  );
};

export default memo(Header);
