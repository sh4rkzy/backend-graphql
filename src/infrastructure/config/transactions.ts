import { v4 as uuidv4 } from "uuid";

export function genTransaction(): string {
	return uuidv4();
}
