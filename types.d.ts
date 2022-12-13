interface Projects {
    updated_at: string;
    projects: Array<{
      name: string;
      description: string;
      url: string;
      homepageUrl: string;
    }>;
  }