import type {PassageModel} from "../../models/PassageModel";

class Api {
    async getToeflReading(): Promise<PassageModel | void> {
        return await fetch(`http://127.0.0.1:8000/api/tests/toefl/reading`)
              .then(response => response.json())
              .then(data => {
                  console.log(data)
                  return data as PassageModel
              })
              .catch(error => {
                console.error('Error:', error);
              });
    }
}

const api = new Api()
export { api as Api }