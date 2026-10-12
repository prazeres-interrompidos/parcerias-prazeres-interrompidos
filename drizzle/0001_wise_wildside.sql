CREATE TABLE `github_sync` (
	`id` integer PRIMARY KEY NOT NULL,
	`ciphertext` text NOT NULL,
	`published_revision` integer DEFAULT 0 NOT NULL,
	`last_error` text,
	`lease_until` integer DEFAULT 0 NOT NULL
);
