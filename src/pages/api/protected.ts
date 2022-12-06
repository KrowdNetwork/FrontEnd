import type { Session } from "next-auth";
import { getSession } from "next-auth/react";

const handler = async (
  req: undefined,
  res: { send: (arg0: string | Session) => undefined }
) => {
  const session = await getSession({ req });

  if (session) return res.send(session);

  return res.send("Not authenticated");
};

export default handler;
