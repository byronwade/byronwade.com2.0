// import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
// import { cookies } from "next/headers";

export default async function Index() {
  // const supabase = createServerComponentClient({ cookies });

  // const {
  // 	data: { user },
  // } = await supabase.auth.getUser();
  // console.log(user);
  return (
    <div className="flex flex-col items-center w-full">
      <>emilmework.com</>
    </div>
  );
}
