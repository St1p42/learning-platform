import type { ReportTableModel } from "@/models/ReportTableModel"
import router from "@/router"

class Api {
    baseUrl: string = "http://localhost:5000/"
    baseEmployee: string = this.baseUrl + "employee"
    baseQuestion: string = this.baseUrl + "question"

    async getRankingTables(): Promise<ReportTableModel[]> {
        return await fetch(`${this.baseEmployee}/`, {
            headers: {
                Authorization: "Bearer " + localStorage.jwtToken,
            },
        })
            .then(async (response) => {
                if (response.status != 200) {
                    const errorMessage = await response.text()
                    throw new Error(errorMessage)
                }
                return response.json()
            })
            .then((rankingTables) => {
                console.log(rankingTables)
                return rankingTables
            })
            .catch((e) => {
                alert(e)
                router.push({ name: "hr-home" })
            })
    }
}

const api = new Api()
export { api as Api }