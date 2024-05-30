import { useRef, useState, type FormEvent } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { isLoading, metaData } from "@/store";
const Form = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [disabled, setDisabled] = useState<boolean>(true);
  const getDetails = (e: FormEvent) => {
    e.preventDefault();
    isLoading.set(true);
    if (inputRef.current) {
      fetch(
        `${import.meta.env.PUBLIC_BACKEND_URL}/?url=${inputRef.current.value}`,
      )
        .then((res) => res.json())
        .then((res) => {
          if (res.success) {
            metaData.set(res.data);
          } else {
            alert(res.message);
          }
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => isLoading.set(false));
      inputRef.current.value = "";
    }
    console.log(inputRef.current?.value);
  };
  return (
    <form onSubmit={getDetails}>
      <Input
        ref={inputRef}
        type="text"
        placeholder="Enter your website Url"
        className="inline sm:w-1/2 mr-2 mb-2"
        onChange={() => {
          if (inputRef.current?.value.length !== 0) setDisabled(false);
          else setDisabled(true);
        }}
      />
      <Button type="submit" variant={"destructive"} disabled={disabled}>
        Search
      </Button>
    </form>
  );
};

export default Form;
