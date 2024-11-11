import { useForm } from "react-hook-form";
import FormInput from "../../../components/ui/form-input";
import { useAppDispatch } from "../../../hooks/use-store";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddMusicDTO, addMusicSchema } from "../../../validation/musicSchema";

export default function AddMusicForm() {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AddMusicDTO>({
    resolver: zodResolver(addMusicSchema),
  });

  async function onSubmit(data: AddMusicDTO) {
    reset();
  }
  return (
    <div>
      <form className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-2">
          <div>
            <p className="pb-1">Thumbnail image</p>
            <input
              type="file"
              className="border-border-primary bg-background-teritery h-12 w-full rounded-lg border-[1px] p-2"
            />
          </div>
          <div>
            <p className="pb-1">Music Audio</p>
            <input
              type="file"
              className="border-border-primary bg-background-teritery h-12 w-full rounded-lg border-[1px] p-2"
            />
          </div>
        </div>
        <FormInput placeholder="Title" />
        <FormInput placeholder="Year" />
        <div>
          <p className="pb-1">Select Singer</p>
          <div>
            <select className="border-border-primary bg-background-teritery h-12 w-full rounded-lg border-[1px] px-4">
              <option value="Solo">Dua Lipa</option>
              <option value="Duo">Duo</option>
              <option value="Group">Group</option>
            </select>
          </div>
        </div>
        <div className="flex w-full justify-end">
          <button className="bg-orange w-56 rounded-md px-4 py-2">
            Add Music
          </button>
        </div>
      </form>
    </div>
  );
}
