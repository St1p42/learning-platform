import type {PassageModel} from "../../models/PassageModel";

class Api {
    async getToeflReading(): Promise<PassageModel | void> {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/tests/toefl/reading`);
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            return data as PassageModel;
          } catch (error) {
            console.error('Error:', error);
            throw error; // Re-throw the error to propagate it
         }
    }
}

const api = new Api()
export { api as Api }