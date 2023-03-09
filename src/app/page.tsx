// Components
import CustomText from "@src/components/core/CustomText";
import IconText from "@src/components/core/IconText";
import EventImage from "@src/components/core/EventImage";
import LandingLayout from "@src/components/layout/LandingLayout";
import { MOCK_EVENT_DATA } from "@src/utils/constants/UI.constant";
import useMedia from "@src/utils/hooks/useMedia";
import dayjs from "dayjs";

async function getEvent() {
  const res = await fetch("https://api.supermomos-dev.com/interview/social");

  return res.json();
}

export default async function App({}) {
  let data: typeof MOCK_EVENT_DATA = await getEvent();
  console.log("data", data?.message);
  if (data?.message === "Missing Authentication Token") data = MOCK_EVENT_DATA;

  function createMarkup(string) {
    return { __html: string };
  }

  return (
    <LandingLayout>
      <div className="w-full relative">
        <div className="w-full lg:w-[45%] z-20 relative">
          <CustomText style="primary" className="inline">
            {data.title}
          </CustomText>
          <div className="flex gap-6 my-8 mb-12">
            <IconText prefix={useMedia("calendar", "svg")}>
              {dayjs(data.startAt).format("MMMM DD, ddd")}
            </IconText>
            <IconText prefix={useMedia("clock", "svg")}>
              {dayjs(data.startAt).format("h A")}
            </IconText>
          </div>
          <IconText
            prefix={useMedia("location", "svg")}
            className="text-base"
            width={16}
            height={16}
          >
            {data.venue}
          </IconText>
          <div className="flex gap-11 my-3 mb-16 lg:mb-20">
            <IconText
              prefix={useMedia("comunity", "svg")}
              width={16}
              height={16}
              className="text-base"
            >
              {data.capacity} people
            </IconText>
            <IconText
              prefix={useMedia("dollar", "svg")}
              width={16}
              height={16}
              className="text-base"
            >
              ${data.price}
            </IconText>
          </div>
          <div
            className="text-lg"
            dangerouslySetInnerHTML={createMarkup(
              data.description.replaceAll("\n", "<br/>")
            )}
          ></div>
        </div>
        <div className="max-w-[61%] z-10 hidden lg:block lg:absolute top-0 right-0">
          <EventImage src={data.banner} alt="Banner" />
        </div>
      </div>
    </LandingLayout>
  );
}
