import { isLoading, metaData } from "@/store";
import { useStore } from "@nanostores/react";
const Result = () => {
  const $isLoading = useStore(isLoading);
  const $metaData = useStore(metaData);
  return $isLoading && Object.keys($metaData).length > 0 ? (
    <>Loading....</>
  ) : (
    <pre className="w-full text-[12px] text-pretty">
      {JSON.stringify($metaData, null, 2)}
    </pre>
  );
};

export default Result;
