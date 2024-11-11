import { useDispatch } from "react-redux";
import FormInput from "../../../components/ui/form-input";
import { useForm } from "react-hook-form";
import {
  AddArtistDTO,
  addArtistSchema,
} from "../../../validation/artistSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { addArtist } from "../../../stores/artist/async";
import { useAppDispatch } from "../../../hooks/use-store";

export default function AddArtistForm() {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AddArtistDTO>({
    resolver: zodResolver(addArtistSchema),
  });

  async function onSubmit(data: AddArtistDTO) {
    await dispatch(addArtist(data));
    reset();
  }

  return (
    <div>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <FormInput {...register("name")} type="text" placeholder="Name" />
        {errors.name && (
          <p className="text-rose-600">* {errors.name.message}</p>
        )}
        <FormInput {...register("old")} type="number" placeholder="Old" />
        {errors.old && <p className="text-rose-600">* {errors.old.message}</p>}
        <div>
          <select
            {...register("type")}
            className="border-border-primary bg-background-teritery h-12 w-full rounded-lg border-[1px] px-4"
          >
            <option value="Solo">Solo</option>
            <option value="Duo">Duo</option>
            <option value="Group">Group</option>
          </select>
        </div>
        {errors.type && (
          <p className="text-rose-600">* {errors.type.message}</p>
        )}
        <FormInput
          {...register("careerStart")}
          type="text"
          placeholder="Start Career"
        />
        {errors.careerStart && (
          <p className="text-rose-600">* {errors.careerStart.message}</p>
        )}
        <div className="flex w-full justify-end">
          <button type="submit" className="bg-orange w-56 rounded-md px-4 py-2">
            Add Artist
          </button>
        </div>
      </form>
    </div>
  );
}
