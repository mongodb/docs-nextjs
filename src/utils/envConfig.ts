export type Environments = "production" | "dotcomprd" | "dotcomstg" | "dev";

type GlobalEnvConfig = {
  ENV: Environments;
  MONGODB_URI: string;
};

const envConfig: GlobalEnvConfig = {
  ENV: (process.env.ENV ?? "dev") as Environments,
  MONGODB_URI: process.env.MONGODB_URI ?? "",
};

export default envConfig;
