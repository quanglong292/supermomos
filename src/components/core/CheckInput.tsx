import React, { memo, useMemo } from "react";

const CheckInput = memo((props: any) => {
  const { type, className, onChange } = props;
  const value = useMemo(() => props.data?.[props.field], [props.data]);

  //   console.log("CheckInput", props);

  const onInput = (e) => {
    if (type === "checkbox") onChange(e.target.checked, props.field);
    else onChange(e?.target?.value ?? e, props.field);
  };

  return (
    <div className={"flex items-center justify-between " + className}>
      {type === "checkbox" ? (
        <div className="flex gap-2">
          <input
            className="primary-check-input"
            type="checkbox"
            value={Boolean(value)}
            onInput={onInput}
          />
          <div className="text-[#344054]">{props.name}</div>
        </div>
      ) : (
        <div className="flex gap-x-6">
          {props.options?.map((i) => {
            return (
              <div className="flex items-center gap-2">
                <input
                  className="primary-check-input"
                  type="radio"
                  name="radio"
                  value={i}
                  checked={value === i}
                  onClick={onInput}
                />
                <div
                  className="text-[#344054] capitalize cursor-pointer"
                  onClick={() => onInput(i)}
                >
                  {i}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
});

export default CheckInput;
