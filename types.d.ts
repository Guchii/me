interface Projects {
  updated_at: string;
  projects: Array<{
    name: string;
    description: string;
    url: string;
    homepageUrl: string;
  }>;
}
type Unpacked<T> = T extends (infer U)[] ? U : T;
