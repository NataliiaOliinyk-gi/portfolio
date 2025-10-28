const requireEnv = (value: string | undefined, key: string) => {
  if (!value) {
    const msg = `[env] Missing required ${key}`;
    if (import.meta.env.DEV) throw new Error(msg);
    console.warn(msg);
    return "";
  }
  return value;
};

export const PHONE_E164 = requireEnv(import.meta.env.VITE_PHONE, "VITE_PHONE");
export const MAIL_TO  = requireEnv(import.meta.env.VITE_MAIL,  "VITE_MAIL");