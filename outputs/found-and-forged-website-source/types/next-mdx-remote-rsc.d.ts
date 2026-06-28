declare module "next-mdx-remote/rsc" {
  import type { ComponentType } from "react";

  export const MDXRemote: ComponentType<{
    source: string;
    components?: Record<string, ComponentType<Record<string, unknown>>>;
    options?: Record<string, unknown>;
  }>;
}
