"use client";

import { signIn, useSession, signOut } from "next-auth/react";

export function Appbar() {
  const session = useSession();
  return (
    <div className="flex justify-between">
      <div>Muzer</div>
      <div>
        {session.data?.user && (
          <button className="m-2 p-2 bg-sky-600" onClick={() => signOut()}>
            Logout
          </button>
        )}
        {!session.data?.user && (
          <button className=" m-2 p-2 bg-sky-600" onClick={() => signIn()}>
            SignIn
          </button>
        )}
      </div>
    </div>
  );
}
