import { type ObjectDefinition, ObjectDefinitions } from "../utils/objectDefinitions";

export interface EmoteDefinition extends ObjectDefinition {}

export const Emotes = new ObjectDefinitions<EmoteDefinition>(
    [
        {
            idString: "happy_face",
            name: "Happy Face"
        }
    ]
);
