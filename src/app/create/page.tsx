"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import dayjs from "dayjs";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Components
import LandingLayout from "@src/components/layout/LandingLayout";
import EditorHeadText from "@src/components/core/EditorHeadText";
import FormBuilder from "@src/components/layout/FormBuilder";
import UploadInput from "@src/components/core/UploadInput";
import Input from "@src/components/core/Input";
import Button from "@src/components/core/Button";
import CustomText from "@src/components/core/CustomText";
import Modal from "@src/components/core/Modal";
import EventImage from "@src/components/core/EventImage";

// Composable
import {
  CREATE_POST_FORM_SCHEMA,
  CREATE_POST_SETTING_FORM_SCHEMA,
  INPUT_TAGS,
  BANNERS,
} from "@src/utils/constants/UI.constant";
import useValidation from "@src/utils/hooks/useValidation";
import { fetcher } from "@src/utils/hooks/useFetch";
import { updateToast } from "@src/utils/functions/helperFunction";

const CreateSocial = () => {
  const router = useRouter();
  const [data, setData] = useState({
    date: `${dayjs().format("YYYY-MM-DD")}`,
    time: `${dayjs().format("HH:mm")}`,
    social: [INPUT_TAGS[0]],
    v: {},
  });
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleValidate = () => {
    const validator = useValidation(data);
    const validatePost = validator(CREATE_POST_FORM_SCHEMA);
    const validateSetting = validator(CREATE_POST_SETTING_FORM_SCHEMA);

    if (validatePost || validateSetting) {
      setData({ ...data, v: { ...validatePost, ...validateSetting } });
      return false;
    }
    return true;
  };

  const onInput = (newValue: any, field: string) => {
    const isFileType = ["image", "file"].includes(field);

    if (isFileType) return setData({ ...newValue, image: newValue });
    else if (field) return setData({ ...newValue, [field]: newValue });

    setData(newValue);
  };

  const handleSubmit = async () => {
    const passedValidate = Boolean(handleValidate());    

    // Validation
    if (!passedValidate || loading) {
      return toast(
        !passedValidate
          ? "Please check input information"
          : "Only handle one request as a time",
        {
          type: "warning",
          autoClose: 1500,
        }
      );
    }

    // Loading
    const idToast = toast.loading("Requesting...");
    setLoading(true);

    // Request
    try {
      const { POST } = await fetcher(
        "https://jsonplaceholder.typicode.com",
        data
      );
      const res = await POST();

      // console.log("handleSubmit", getRes);
    } catch (error: any) {
      toast(error.message, {
        type: "error",
      });
    } finally {
      updateToast(idToast);
      setLoading(false);
      toast("Moving to landing page...", {
        type: "info",
        autoClose: 2000,
      });

      setTimeout(() => {
        router.push("/");
      }, 2200);
    }
  };

  const handleClickUpload = () => {
    setVisible(!visible);
  };

  return (
    <LandingLayout>
      <div className="w-full flex gap-4 mb-6">
        <div className="w-[45%] z-20">
          <EditorHeadText
            className="mb-2"
            onChange={(value) => onInput(value, "headText")}
          />
          <FormBuilder
            items={CREATE_POST_FORM_SCHEMA}
            onChange={onInput}
            data={data}
          />
        </div>
        {/* Image */}
        <div className="w-full max-w-[64%] z-10">
          {data?.image ? (
            <EventImage src={data.image} alt="Event Image" />
          ) : (
            <UploadInput
              onClick={handleClickUpload}
              onUpload={(e) => onInput(e, "file")}
            />
          )}
        </div>
      </div>
      {/* SECOND LAYOUT */}
      <div className="w-full max-w-[60%] flex flex-col gap-6">
        <div>
          <div className="text-[14px] font-medium mb-2">Description</div>
          <Input type="textarea" placeholder="Description of your event.." />
        </div>
        {/* SETTING LAYOUT */}
        <div className="bg-white rounded-xl p-8">
          <CustomText style="secondary" className="pr-2 w-fit text-[32px] mb-4">
            Settings
          </CustomText>
          <FormBuilder
            onChange={onInput}
            data={data}
            items={CREATE_POST_SETTING_FORM_SCHEMA}
          />
        </div>
        <Button onClick={handleSubmit} className="font-semibold">
          CREATE SOCIAL
        </Button>
      </div>

      {/* BANNER MODAL */}
      <Modal
        visible={Boolean(data.image ? false : visible)}
        label="Choose a banner"
        toggle={handleClickUpload}
      >
        <div className="p-4 overflow-auto max-h-[65vh]">
          <div className="grid grid-cols-4 lg:grid-cols-6 gap-4">
            {BANNERS.map((i, idx) => (
              <div
                className="max-w-full object-cover cursor-pointer"
                key={idx}
                onClick={() => onInput(i, "image")}
              >
                <img src={i} alt={i} className="w-full h-full" />
              </div>
            ))}
          </div>
        </div>
      </Modal>

      <ToastContainer position="bottom-left" autoClose={5000} />
    </LandingLayout>
  );
};

export default CreateSocial;
