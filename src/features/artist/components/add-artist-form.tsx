import FormInput from "../../../components/ui/form-input";

export default function AddArtistForm() {
  return (
    <div>
      <form className="flex flex-col gap-4">
        <FormInput type="text" placeholder="Name" />
        <FormInput type="number" placeholder="Old" />
        <div>
          <select className="border-border-primary bg-background-teritery h-12 w-full rounded-lg border-[1px] px-4">
            <option value="Solo">Solo</option>
            <option value="Duo">Duo</option>
            <option value="Group">Group</option>
          </select>
        </div>
        <FormInput type="text" placeholder="Start Career" />
        <div className="flex w-full justify-end">
          <button className="bg-orange w-56 rounded-md px-4 py-2">
            Add Artist
          </button>
        </div>
      </form>
    </div>
  );
}
