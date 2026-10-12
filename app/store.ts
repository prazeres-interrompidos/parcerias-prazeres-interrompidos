import { env } from 'cloudflare:workers';import seed from './seed.json';
export async function readDirectory(){const row=await env.DB!.prepare('SELECT payload, revision, owner_id FROM directory WHERE id = 1').first<{payload:string;revision:number;owner_id:string|null}>();return row?{data:JSON.parse(row.payload),revision:row.revision,ownerId:row.owner_id}:{data:seed,revision:0,ownerId:null}}
export const OWNER_EMAIL=(env.ADMIN_EMAIL || '').trim().toLowerCase();
