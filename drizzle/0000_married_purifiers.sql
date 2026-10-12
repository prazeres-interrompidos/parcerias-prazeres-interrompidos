CREATE TABLE `directory` (
	`id` integer PRIMARY KEY NOT NULL,
	`payload` text NOT NULL,
	`revision` integer NOT NULL,
	`owner_id` text,
	`updated_at` text NOT NULL
);
