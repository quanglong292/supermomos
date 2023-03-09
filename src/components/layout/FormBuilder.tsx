"use client";

import React, { FC, memo, useEffect, useMemo, useRef, useState } from "react";
import autoAnimate from "@formkit/auto-animate";

// Components
import Input from "../core/Input";

// Composable
import { deepClone } from "@src/utils/functions/helperFunction";

interface FormBuilderProps {
  data: any;
  items: any[];
  onChange: (value: any, type: string) => {};
}

const TextError = ({ children, className }) => {
  return (
    <p className={"text-red-500 font-semibold italic text-xs " + className}>
      {children}
    </p>
  );
};

const FormBuilder: FC<FormBuilderProps> = memo((props: FormBuilderProps) => {
  const { data, items, onChange } = props;
  const parent = useRef(null);
  const errors: object = useMemo(() => {
    return data.v;
  }, [data]);

  const handleOnChange = (value: any, field: string) => {
    const cloneData = deepClone(data);
    const existData = cloneData[field] ?? {};
    const newData = {
      ...cloneData,
      [field]: value,
    };
    onChange(newData);
  };

  useEffect(() => {}, [data.v]);

  return (
    <div ref={parent}>
      {items.map((i, idx) => {
        const { group, inputs, title } = i;

        if (group) {
          return (
            <div key={idx} className={group}>
              {inputs.map((j, jdx) => {
                const message = errors?.[j.field]?.[0] ?? "";
                return (
                  <div>
                    <Input
                      {...j}
                      data={data}
                      key={jdx + "j"}
                      onChange={(value: any) => handleOnChange(value, j.field)}
                    />
                    {message && <TextError>{message}</TextError>}
                  </div>
                );
              })}
            </div>
          );
        }

        const message = errors?.[i.field]?.[0] ?? "";

        if (title) {
          const { className, ...other } = i
          return (
            <div className={"my-4 w-fit " + className} >
              <div className="mb-2">
                <p className="text-[#344054] font-medium">{title.head}</p>
                {title.sub && (
                  <p className="text-[#475467] font-normal">{title.sub}</p>
                )}
              </div>
              <Input
                {...other}
                onChange={(tags: any) => handleOnChange(tags, i.field)}
                data={data}
              />
              {message && <TextError className="">{message}</TextError>}
            </div>
          );
        }

        return (
          <div className="">
            <Input
              {...i}
              key={idx}
              onChange={(value: any) => handleOnChange(value, i.field)}
              data={data}
            />
            {message && <TextError className="">{message}</TextError>}
          </div>
        );
      })}
    </div>
  );
});

export default FormBuilder;
