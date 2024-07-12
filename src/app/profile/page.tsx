import { updateProfile } from "@/components/Profile/actions";
import { OfferList } from "@/components/Profile/OffersList";
import { ProfileInformationForm } from "@/components/Profile/ProfileInformationForm";
import { createClient } from "@/utils/supabase/server";

export default async function Profile() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  return (
    <div className="container mx-auto p-12 flex flex-col items-center justify-between">
      <h2 className="text-2xl font-semibold text-center mb-4">Profile</h2>
      <article className="max-w-4xl p-4 w-full">
        <div className="bg-regal-blue-light/10 rounded-md border shadow-sm overflow-hidden mb-8">
          <div className="bg-regal-blue-light/10 border-b border-regal-blue/5 flex items-center px-6 py-4">
            <h5 className="mb-0">Account Information</h5>
          </div>
          <div className="px-6 py-4">
            <div className="grid gap-4">
              <div className="grid grid-cols-12 gap-6">
                <label className="text-sm px-3 py-2 col-span-4">Email</label>
                <input
                  readOnly
                  disabled
                  placeholder="Email"
                  className="flex w-full rounded-md border border-regal-blue/5 bg-regal-blue/[.1] disabled:cursor-not-allowed disabled:opacity-70 text-sm px-3 py-2 col-span-8"
                  defaultValue={data.user?.email}
                />
              </div>
            </div>
          </div>
        </div>
      </article>
      <article className="max-w-4xl p-4 w-full">
        <div className="bg-regal-blue-light/10 rounded-md border shadow-sm overflow-hidden mb-8">
          <div className="bg-regal-blue-light/10 border-b border-regal-blue/5 flex items-center px-6 py-4">
            <h5 className="mb-0">Profile Information</h5>
          </div>
          <ProfileInformationForm submit={updateProfile} {...data.user?.user_metadata} />
        </div>
      </article>
      <article className="max-w-4xl p-4 w-full">
        <div className="bg-regal-blue-light/10 rounded-md border shadow-sm overflow-hidden mb-8">
          <div className="bg-regal-blue-light/10 border-b border-regal-blue/5 flex items-center px-6 py-4">
            <h5 className="mb-0">My Offers</h5>
          </div>
          <OfferList />
        </div>
      </article>
    </div>
  );
}
