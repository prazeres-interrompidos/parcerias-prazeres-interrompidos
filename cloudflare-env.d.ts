declare namespace Cloudflare {
  interface Env {
    GITHUB_SYNC_KEY?: string;
    DB?: D1Database;
    BUCKET?: R2Bucket;
  }
}
